import path from "path";

export class IndexController {
  constructor() {}

  async sendIndex(req, res) {
    const __dirname = path.resolve();
    const root = path.join(__dirname, "src/client/build");
    res.sendFile("index.html", { root });
  }
}
