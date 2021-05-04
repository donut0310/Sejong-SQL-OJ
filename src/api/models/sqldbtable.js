//   디비에 넣을때 순서
//   mysql -uroot -p
//   비밀번호 입력
//   CREATE DATABASE SQL_DB;
//   use SQL_DB;

export const query_example = `
DROP DATABASE IF EXISTS test_case;
CREATE DATABASE test_case default CHARACTER SET UTF8;
use test_case;
DROP TABLE IF EXISTS submit_answer;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS problem;
DROP TABLE IF EXISTS testcase_problem;
#데이터 넣는 형식에 따른 not null로 할지 , DEFAULT null로 할지 고민
create table course(
	class_id int auto_increment not null,
    class_name varchar(255) DEFAULT NULL,
    admin_id varchar(1000) DEFAULT NULL,
    PRIMARY KEY (class_id)
);
create table user(
  user_id varchar(255) not null,
  user_name varchar(255) DEFAULT NULL,
  user_pw varchar(255) DEFAULT NULL,
  #0은 일반 학생 1은 조교 2는 교수
  salt varchar(255) DEFAULT NULL,
  PRIMARY KEY (user_id)
);
create table u_c_bridge(
  user_id varchar(255) default null,
  class_id int default null,
  author int default 0,
  FOREIGN KEY (user_id) REFERENCES user (user_id)
  on delete cascade
  on update cascade,
  FOREIGN KEY (class_id) REFERENCES course (class_id)
  on delete cascade
  on update cascade
);
create table week(
  week_id int not null auto_increment primary key,
  class_id int default 0,
  week_title varchar(255) default null,
  foreign key(class_id) references course (class_id)
  on delete cascade
  on update cascade
);
create table problem(
	p_id int not null AUTO_INCREMENT PRIMARY KEY,
    week_id int default 0,
    class_id int default 0,
    title varchar(255) DEFAULT NULL,
    content MEDIUMTEXT DEFAULT NULL,
    start_time DATETIME DEFAULT NULL,
    end_time DATETIME DEFAULT NULL,
    tc_cnt int DEFAULT NULL,
    tc_id int DEFAULT NULL,
    table_info MEDIUMTEXT DEFAULT NULL,
    table_create MEDIUMTEXT DEFAULT NULL,
    week_title varchar(255) DEFAULT NULL,
    FOREIGN KEY (week_id) REFERENCES week (week_id)
    on delete cascade
    on update cascade,
    FOREIGN KEY (class_id) REFERENCES course (class_id)
    on delete cascade
    on update cascade
    );

# week_info 가 기본키가 되면 주차별 문제가 1개씩만 생성가능 
create table testcase_problem(
	p_id int not null,
    tc_answer MEDIUMTEXT DEFAULT NULL,
    tc_id int DEFAULT NULL,
    tc_content MEDIUMTEXT DEFAULT NULL,
    week_info varchar(255) DEFAULT NULL,
    FOREIGN KEY (p_id) REFERENCES problem (p_id)
);
# week_info 가 기본키가 되면 주차별 문제가 1개씩만 생성가능 
create table submit_answer(
  submit_id int not null auto_increment primary key,
  week_id int default 0,
  class_id int default 0,
  user_id varchar(255) default null,
  p_id int default 0,
  user_query varchar(255) DEFAULT NULL,
  query_cost DOUBLE DEFAULT NULL,
  score int DEFAULT NULL,
  submit_time datetime DEFAULT CURRENT_TIMESTAMP,
  result varchar(255) DEFAULT NULL,
  week_title varchar(255) DEFAULT NULL,
  FOREIGN KEY (week_id) REFERENCES week (week_id)
  on delete cascade
  on update cascade,
  FOREIGN KEY (class_id) REFERENCES course (class_id)
  on delete cascade
  on update cascade,
  FOREIGN KEY (user_id) REFERENCES user (user_id)
  on delete cascade
  on update cascade,
  FOREIGN KEY (p_id) REFERENCES problem (p_id)
  on delete cascade
  on update cascade
);
create table top_submit_answer(
  submit_id int not null auto_increment primary key,
  week_id int default 0,
  class_id int default 0,
  user_id varchar(255) default null,
  p_id int default 0,
  user_query varchar(255) DEFAULT NULL,
  query_cost DOUBLE DEFAULT NULL,
  score int DEFAULT NULL,
  submit_time datetime DEFAULT CURRENT_TIMESTAMP,
  result varchar(255) DEFAULT NULL,
  week_title varchar(255) DEFAULT NULL,
  submit_cnt int default 0,
  FOREIGN KEY (week_id) REFERENCES week (week_id)
  on delete cascade
  on update cascade,
  FOREIGN KEY (class_id) REFERENCES course (class_id)
  on delete cascade
  on update cascade,
  FOREIGN KEY (user_id) REFERENCES user (user_id)
  on delete cascade
  on update cascade,
  FOREIGN KEY (p_id) REFERENCES problem (p_id)
  on delete cascade
  on update cascade
);

INSERT INTO course VALUES('1234', '(2021-1학기)데이터베이스(홍길동)','16011076;16011088');
INSERT INTO user values('16011076','1234','허준현','1234',1,null);
INSERT INTO user values('16011088','1234','김영률','1234',1,null);
INSERT INTO user values('17011585 ','1234','이기은','1234',0,null);
INSERT INTO user values('jinbo0428 ','1234','김진성','1234',2,null);

INSERT INTO problem(week_info,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create)
values('1','1234','두번째 기본 쿼리값 계산하기','"PATIENT_info" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.
"PATIENT_info" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 
는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.
^&^

목동 나누리 병원에 들어온 환자 중 여성과 남성이 가각 몇 분인지 조회하는 SQL 문을 작성해 주세요.
이때 여성이 남성보다 먼저 조회해 주세요
예시
예를 들어 "PATIENT_info" 테이블이 다음과 같다면 
^&^

여성 2분, 남성 1분이 병원에 오셨습니다. 따라서 SQL문을 실행하려면 다음과 같이 나와야 합니다.
^&^','2021-04-30 00:00:00','2021-05-25 00:00:00',2,1,'{
  [
    {
      "NAME": "patient_id",
      "TYPE": "VARHCAR(N)",
      "NULLABLE": "FALSE"
    },
    {
      "NAME": "patient_sex",
      "TYPE": "VARHCAR(N)",
      "NULLABLE": "FALSE"
    },
    {
      "NAME": "datatime",
      "TYPE": "DATETIME",
      "NULLABLE": "FALSE"
    },
    {
      "NAME": "patient_condition",
      "TYPE": "VARHCAR(N)",
      "NULLABLE": "FALSE"
    },
    {
      "NAME": "name",
      "TYPE": "VARHCAR(N)",
      "NULLABLE": "FALSE"
    }
  ],
  [
    {
      "patient_id": "A373219",
      "patient_sex": "Female",
      "datatime": "2021-04-15 17:17:00",
      "patient_condition": "Healthy",
      "name": "박경자"
    },
    {
      "patient_id": "A373220",
      "patient_sex": "Male",
      "datatime": "2021-04-17 19:13:12",
      "patient_condition": "Sick",
      "name": "박옥자"
    },
    {
      "patient_id": "A373221",
      "patient_sex": "Female",
      "datatime": "2021-04-19 13:15:30",
      "patient_condition": "Sick",
      "name": "이명자"
    } 
  ],
  [
    {
      "patient_sex": "Female",
      "count(patient_sex)": "2",
    },
    {
      "patient_sex": "Male",
      "count(patient_sex)": "1",
    }
  ]
}','create table patient_info(
	patient_id varchar(255) not null,
    patient_sex varchar(255) DEFAULT NULL,
    datatime datetime DEFAULT NULL,
    patient_condition varchar(255) DEFAULT NULL,
    name varchar(255) DEFAULT NULL,
	PRIMARY KEY (patient_id)
);');

INSERT INTO submit_answer(class_id,user_id,p_id,week_info,user_query,query_cost,score,result) values('1234','17011585',1,1,'select ANIMAL_TYPE,count(ANIMAL_TYPE)
from ANIMAL_INS
group by ANIMAL_TYPE
ORDER BY ANIMAL_TYPE ASC',25.5,100,'accept');
INSERT INTO testcase_problem(p_id,tc_answer,tc_id,tc_content,week_info) values(1,'[
	{
		"patient_sex" : "Female",
		"count(patient_sex)" : 7
	},
	{
		"patient_sex" : "male",
		"count(patient_sex)" : 5
	}
]',1,'insert into patient_info values("A373219","Female","2021-04-15 12:17:00","Healthy","박경자");
insert into patient_info values("A373220","male","2021-04-16 03:17:00","Healthy","김경자");
insert into patient_info values("A373221","Female","2021-04-17 17:16:00","Sick","김영자");
insert into patient_info values("A373222","male","2021-04-18 17:17:40","Healthy","천혜원");
insert into patient_info values("A373223","Female","2021-05-15 17:17:30","Sick","이수연");
insert into patient_info values("A373224","male","2021-06-15 17:15:00","Healthy","박명규");
insert into patient_info values("A373225","Female","2021-11-15 17:13:00","Sick","박정한");
insert into patient_info values("A373226","male","2021-05-15 10:16:00","Healthy","복신필");
insert into patient_info values("A373227","male","2021-03-15 09:17:00","Sick","이수경");
insert into patient_info values("A373228","Female","2021-02-15 08:17:00","Healthy","이의원");
insert into patient_info values("A373229","Female","2021-01-15 06:17:00","Sick","박성실");
insert into patient_info values("A373230","Female","2021-02-15 13:17:00","Sick","백상준");','1');
INSERT INTO testcase_problem(p_id,tc_answer,tc_id,tc_content,week_info) values(1,'[
	{
		"patient_sex" : "Female",
		"count(patient_sex)" : 15
	},
	{
		"patient_sex" : "male",
		"count(patient_sex)" : 6
	}
]',2,'
insert into patient_info values("A373219","Female","2021-04-15 12:17:00","Healthy","박경자");
insert into patient_info values("A373220","male","2021-04-16 03:17:00","Healthy","김경자");
insert into patient_info values("A373221","Female","2021-04-17 17:16:00","Sick","김영자");
insert into patient_info values("A373222","male","2021-04-18 17:17:40","Healthy","천혜원");
insert into patient_info values("A373223","Female","2021-05-15 17:17:30","Sick","이수연");
insert into patient_info values("A373224","male","2021-06-15 17:15:00","Healthy","박명규");
insert into patient_info values("A373225","Female","2021-11-15 17:13:00","Sick","박정한");
insert into patient_info values("A373226","male","2021-05-15 10:16:00","Healthy","복신필");
insert into patient_info values("A373227","male","2021-03-15 09:17:00","Sick","이수경");
insert into patient_info values("A373228","Female","2021-02-15 08:17:00","Healthy","이의원");
insert into patient_info values("A373229","Female","2021-01-15 06:17:00","Sick","박성실");
insert into patient_info values("A373230","Female","2021-02-15 13:17:00","Sick","백상준");
insert into patient_info values("A373237","Female","2021-02-15 08:17:00","Healthy","이의원");
insert into patient_info values("A373238","Female","2021-01-15 06:17:00","Sick","박성실");
insert into patient_info values("A373248","Female","2021-02-15 13:17:00","Sick","백상준");
insert into patient_info values("A373240","Female","2021-02-15 08:17:00","Healthy","이박원");
insert into patient_info values("A373232","male","2021-01-15 06:17:00","Sick","박부실");
insert into patient_info values("A373233","Female","2021-02-15 13:17:00","Sick","배상준");
insert into patient_info values("A373234","Female","2021-02-15 08:17:00","Healthy","허의원");
insert into patient_info values("A373235","Female","2021-01-15 06:17:00","Sick","이재은");
insert into patient_info values("A373236","Female","2021-02-15 13:17:00","Sick","이지윤");',1);`;

// 테스트 데이터 예시
// 문제 호출 관련

// week table
`
insert into week (class_id,week_title) values (1,"1주차 SELECT문");
insert into week (class_id,week_title) values (1,"2주차 SELECT문");
insert into week (class_id,week_title) values (2,"1주차 SELECT문");
` // problem table
`
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (1,1,"1번 문제","1+1은?","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","1주차 SELECT문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (1,1,"2번 문제","2+2은?","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","1주차 SELECT문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (1,1,"3번 문제","3+3은?","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","1주차 SELECT문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (2,1,"1번 문제","10+10은?","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","2주차 DELETE문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (2,1,"2번 문제","20+20은?","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","2주차 DELETE문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (2,1,"3번 문제","30+30은?","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","2주차 DELETE문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (1,2,"1번 문제","1*1은?","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","1주차 SELECT문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (2,2,"2번 문제","2*2은?","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","2주차 DELETE문");

` // top_submit_answer table
`
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(1,1,"22222222",1,"select * from user;",0.5,50,"2021-02-15 13:17:00","W/A","1주차 SELECT문",2);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(1,1,"22222222",2,"select * from user;",0.5,100,"2021-02-15 13:17:00","ACCEPT","1주차 SELECT문",4);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(1,2,"33333333",1,"select * from user;",0.5,100,"2021-02-15 13:17:00","ACCEPT","1주차 SELECT문",1);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(1,2,"33333333",2,"select * from user;",0.5,30,"2021-02-15 13:17:00","W/A","1주차 SELECT문",5);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(2,1,"22222222",1,"select * from user;",0.5,10,"2021-02-15 13:17:00","W/A","2주차 DELETE문",4);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(2,1,"22222222",2,"select * from user;",0.5,80,"2021-02-15 13:17:00","W/A","2주차 DELETE문",8);

` // auto incremeat init
`ALTER TABLE course AUTO_INCREMENT=1;
SET @CNT = 0;
UPDATE course SET course.class_id = @CNT:=@CNT+1;`;
