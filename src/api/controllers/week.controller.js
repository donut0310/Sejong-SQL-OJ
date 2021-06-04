import { Database } from "../models/db.js";

export class WeekController {
  async getWeekInfo(req, res) {
    const database = new Database();

    try {
      const connection = await database.pool.getConnection(
        async (conn) => conn
      );
      try {
        let data = {};
        let sql =
          "select week.week_id, week.class_id, week.week_title, course.class_name \
        from week,course where week.week_id = ?\
        and course.class_id = (select class_id from week where week_id = ?)";
        let params = [req.params.weekId, req.params.weekId];
        const [reValue] = await connection.query(sql, params);
        connection.release();

        data.result = reValue;
        data.message = "success";
        res.status(200).send(data);
      } catch (err) {
        data.result = null;
        data.message = "fail";
        data.error = err;
        res.status(400).send(data);
      }
    } catch (err) {
      data.result = null;
      data.message = "fail";
      data.error = err;
      res.status(400).send(data);
    }
  }
}
