//   디비에 넣을때 순서
//   mysql -uroot -p
//   비밀번호 입력
//   CREATE DATABASE SQL_DB;
//   use SQL_DB;
// fix;

export const query_example = `
CREATE DATABASE sql_db default CHARACTER SET UTF8;
use test_case;
DROP TABLE IF EXISTS submit_answer;
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS problem;
DROP TABLE IF EXISTS testcase_problem;
DROP TABLE IF EXISTS top_submit_answer;
DROP TABLE IF EXISTS u_c_bridge;
DROP TABLE IF EXISTS week;

create table course(
	class_id int auto_increment not null,
  class_name varchar(255) DEFAULT NULL,
  PRIMARY KEY (class_id)
)engine=innodb default charset=utf8;

create table user(
  user_id varchar(255) not null,
  user_name varchar(255) DEFAULT NULL,
  user_pw varchar(255) DEFAULT NULL,
  #0은 일반 학생 1은 조교 2는 교수
  salt varchar(255) DEFAULT NULL,
  PRIMARY KEY (user_id)
)engine=innodb default charset=utf8;

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
)engine=innodb default charset=utf8;

create table week(
  week_id int not null auto_increment primary key,
  class_id int default null,
  week_title varchar(255) default null,
  class_name varchar(255) default null,
  foreign key(class_id) references course (class_id)
  on delete cascade
  on update cascade
)engine=innodb default charset=utf8;

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
    week_title varchar(255) DEFAULT NULL,
    is_public tinyint(1) DEFAULT 0,
    FOREIGN KEY (week_id) REFERENCES week (week_id)
    on delete cascade
    on update cascade,
    FOREIGN KEY (class_id) REFERENCES course (class_id)
    on delete cascade
    on update cascade
    )engine=innodb default charset=utf8;

create table testcase_problem(
	  p_id int not null,
    tc_answer MEDIUMTEXT DEFAULT NULL,
    tc_content MEDIUMTEXT DEFAULT NULL,
    week_info varchar(255) DEFAULT NULL,
    FOREIGN KEY (p_id) REFERENCES problem (p_id)
    on delete cascade
    on update cascade,
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
)engine=innodb default charset=utf8;

create table top_submit_answer(
  top_submit_id int not null auto_increment primary key,
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
)engine=innodb default charset=utf8;

#course table insert
INSERT INTO course(class_name) VALUES( "(2021-1학기)데이터베이스(홍길동)");
INSERT INTO course(class_name) VALUES( "(2021-1학기)데이터베이스(박길동)");
INSERT INTO course(class_name) VALUES( "(2021-1학기)데이터베이스(김길동)");


#week table insert
insert into week (class_id,week_title,class_name) values (1,"(홍길동) 1주차 기초 select문","(2021-1학기)데이터베이스(홍길동)");
insert into week (class_id,week_title,class_name) values (1,"(홍길동) 2주차 기초 group by문","(2021-1학기)데이터베이스(홍길동)");
insert into week (class_id,week_title,class_name) values (1,"(홍길동) 3주차 집계함수 ","(2021-1학기)데이터베이스(홍길동)");
insert into week (class_id,week_title,class_name) values (1,"(홍길동) 4주차 having절 ","(2021-1학기)데이터베이스(홍길동)");

insert into week (class_id,week_title,class_name) values (2,"(박길동) 1주차 기초 select문","(2021-1학기)데이터베이스(박길동)");
insert into week (class_id,week_title,class_name) values (2,"(박길동) 2주차 기초 group by문","(2021-1학기)데이터베이스(박길동)");
insert into week (class_id,week_title,class_name) values (2,"(박길동) 3주차 집계함수 ","(2021-1학기)데이터베이스(박길동)");
insert into week (class_id,week_title,class_name) values (2,"(박길동) 4주차 having절 ","(2021-1학기)데이터베이스(박길동)");

insert into week (class_id,week_title,class_name) values (3,"(김길동) 1주차 기초 select문","(2021-1학기)데이터베이스(김길동)");
insert into week (class_id,week_title,class_name) values (3,"(김길동) 2주차 기초 group by문","(2021-1학기)데이터베이스(김길동)");
insert into week (class_id,week_title,class_name) values (3,"(김길동) 3주차 집계함수 ","(2021-1학기)데이터베이스(김길동)");
insert into week (class_id,week_title,class_name) values (3,"(김길동) 4주차 having절 ","(2021-1학기)데이터베이스(김길동)");

#u_c_bridge table insert
insert into u_c_bridge(user_id,class_id,author) values("s1","1",0);
insert into u_c_bridge(user_id,class_id,author) values("s2","1",0);
insert into u_c_bridge(user_id,class_id,author) values("s3","1",0);

insert into u_c_bridge(user_id,class_id,author) values("s4","2",0);
insert into u_c_bridge(user_id,class_id,author) values("s5","2",0);
insert into u_c_bridge(user_id,class_id,author) values("s6","2",0);

insert into u_c_bridge(user_id,class_id,author) values("s7","3",0);
insert into u_c_bridge(user_id,class_id,author) values("s8","3",0);
insert into u_c_bridge(user_id,class_id,author) values("s9","3",0);

#조교
insert into u_c_bridge(user_id,class_id,author) values("t1","1",1);
insert into u_c_bridge(user_id,class_id,author) values("t2","2",1);
insert into u_c_bridge(user_id,class_id,author) values("t3","3",1);

#교수
insert into u_c_bridge(user_id,class_id,author) values("p1@naver.com","1",2);
insert into u_c_bridge(user_id,class_id,author) values("p2@naver.com","2",2);
insert into u_c_bridge(user_id,class_id,author) values("p3@naver.com","3",2);

#problem table insert
INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(1,1,'목동 나누리 병원 성별 인구조사','"patient_info" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.
"patient_info" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 
는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.
^&^

목동 나누리 병원에 들어온 환자 중 여성과 남성이 가각 몇 분인지 조회하는 SQL 문을 작성해 주세요.
이때 여성이 남성보다 먼저 조회해 주세요
예시
예를 들어 "patient_info" 테이블이 다음과 같다면 
^&^

여성 2분, 남성 1분이 병원에 오셨습니다. 따라서 SQL문을 실행하려면 다음과 같이 나와야 합니다.
^&^','2021-04-30 00:00:00','2021-05-25 00:00:00',2,1,'[
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
]',"(홍길동) 1주차 기초 select문",1);

INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(1,2,'목동 나누리 병원 성별 인구조사','"patient_info" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.
"patient_info" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 
는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.
^&^

목동 나누리 병원에 들어온 환자 중 여성과 남성이 가각 몇 분인지 조회하는 SQL 문을 작성해 주세요.
이때 여성이 남성보다 먼저 조회해 주세요
예시
예를 들어 "patient_info" 테이블이 다음과 같다면 
^&^

여성 2분, 남성 1분이 병원에 오셨습니다. 따라서 SQL문을 실행하려면 다음과 같이 나와야 합니다.
^&^','2021-04-30 00:00:00','2021-05-25 00:00:00',2,1,'[
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
]',"(박길동) 1주차 기초 select문",1);

INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(1,3,'목동 나누리 병원 성별 인구조사','"patient_info" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.
"patient_info" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 
는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.
^&^

목동 나누리 병원에 들어온 환자 중 여성과 남성이 가각 몇 분인지 조회하는 SQL 문을 작성해 주세요.
이때 여성이 남성보다 먼저 조회해 주세요
예시
예를 들어 "patient_info" 테이블이 다음과 같다면 
^&^

여성 2분, 남성 1분이 병원에 오셨습니다. 따라서 SQL문을 실행하려면 다음과 같이 나와야 합니다.
^&^','2021-04-30 00:00:00','2021-05-25 00:00:00',2,1,'[
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
]',"(김길동) 1주차 기초 select문",1);

# 1 class 답안 문제 1번 및 top_submit 답안
INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,1,'s1',1,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex desc;",
3.5,50,"2021-05-15 12:17:00",'WA',"(홍길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,1,'s1',1,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(홍길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,1,'s2',1,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(홍길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,1,'s3',1,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(홍길동) 1주차 기초 select문");

insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,1,"s1",1,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(홍길동) 1주차 기초 select문",2);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,1,"s2",1,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(홍길동) 1주차 기초 select문",1);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,1,"s3",1,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(홍길동) 1주차 기초 select문",1);

# 2 class 답안 문제 2번 
INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,2,'s4',2,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex desc;",
3.5,50,"2021-05-15 12:17:00",'WA',"(박길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,2,'s4',2,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(박길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,2,'s5',2,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(박길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,2,'s6',2,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(박길동) 1주차 기초 select문");

insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,2,"s4",2,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(박길동) 1주차 기초 select문",2);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,2,"s5",2,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(박길동) 1주차 기초 select문",1);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,2,"s6",2,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(박길동) 1주차 기초 select문",1);

# 3 class 답안 문제 3번 
INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,3,'s7',3,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex desc;",
3.5,50,"2021-05-15 12:17:00",'WA',"(김길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,3,'s7',3,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(김길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,3,'s8',3,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(김길동) 1주차 기초 select문");

INSERT INTO submit_answer(week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) 
values(1,3,'s9',3,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",
3.5,100,"2021-05-15 12:17:00",'Accept',"(김길동) 1주차 기초 select문");

insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,1,"s7",3,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(김길동) 1주차 기초 select문",2);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,1,"s8",3,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(김길동) 1주차 기초 select문",1);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values
(1,1,"s9",3,"select patient_sex,count(patient_sex) from patient_info group by patient_sex ORDER BY patient_sex ASC;",3.5,100,"2021-05-15 12:17:00","ACCEPT","(김길동) 1주차 기초 select문",1);

# 1클래스 1번 문제 testcase_problem 
INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(1,'[
	{
	"patient_sex" : "Female",
	"count(patient_sex)" : 7
	},
	{
	"patient_sex" : "male",
	"count(patient_sex)" : 5
	}
]',"(홍길동) 1주차 기초 select문",0);
INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(1,'[
	{
	"patient_sex" : "Female",
	"count(patient_sex)" : 15
	},
	{
	"patient_sex" : "male",
	"count(patient_sex)" : 6
	}
]',"(홍길동) 1주차 기초 select문",1);

# 2클래스 2번 문제 testcase_problem 
INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(2,'[
	{
	"patient_sex" : "Female",
	"count(patient_sex)" : 7
	},
	{
	"patient_sex" : "male",
	"count(patient_sex)" : 5
	}
]',"(박길동) 1주차 기초 select문",0);
INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(2,'[
	{
	"patient_sex" : "Female",
	"count(patient_sex)" : 15
	},
	{
	"patient_sex" : "male",
	"count(patient_sex)" : 6
	}
]',"(박길동) 1주차 기초 select문",1);

# 3클래스 3번 문제 testcase_problem 
INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(3,'[
	{
		"patient_sex" : "Female",
		"count(patient_sex)" : 7
	},
	{
		"patient_sex" : "male",
		"count(patient_sex)" : 5
	}
]',"(김길동) 1주차 기초 select문",0);
INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(3,'[
	{
		"patient_sex" : "Female",
		"count(patient_sex)" : 15
	},
	{
		"patient_sex" : "male",
		"count(patient_sex)" : 6
	}
]',"(김길동) 1주차 기초 select문",1);
`;


// 테스트 데이터 예시
// 문제 호출 관련

// week table
`

` // problem table
`
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (1,1,"1번 문제","아래 테이블 구조는 동물 보호소에 들어온 동물의 정보를 담은  테이블입니다.  ^&^ 동물 보호소에 가장 먼저 들어온 동물의 이름 3개를 조회하는 SQL 문을 작성해주세요. ^&^","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","1주차 SELECT문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (1,1,"2번 문제","아래 테이블 구조는 구치소에 들어온 범인의 정보를 담은  테이블입니다.  ^&^ 구치소에 가장 먼저 들어온 범인의 이름 3개를 조회하는 SQL 문을 작성해주세요. ^&^","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","1주차 SELECT문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (1,1,"3번 문제","아래 테이블 구조는 은행에 들어온 고객의 정보를 담은  테이블입니다.  ^&^ 은행에 가장 먼저 들어온 고객의 이름 3개를 조회하는 SQL 문을 작성해주세요. ^&^","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","1주차 SELECT문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (2,1,"1번 문제","아래 테이블 구조는 학교에 들어온 외부인의 정보를 담은  테이블입니다.  ^&^ 학교에 가장 먼저 들어온 외부인의 이름 3개를 조회하는 SQL 문을 작성해주세요. ^&^","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","2주차 DELETE문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (2,1,"2번 문제","아래 테이블 구조는 한국에 들어온 수입품의 정보를 담은  테이블입니다.  ^&^ 한국에 가장 먼저 들어온 수입품의 이름 3개를 조회하는 SQL 문을 작성해주세요. ^&^","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","2주차 DELETE문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (2,1,"3번 문제","아래 테이블 구조는 공항에 들어온 항공사의 정보를 담은  테이블입니다.  ^&^ 공항에 가장 많이 들어온 항공사의 이름 3개를 조회하는 SQL 문을 작성해주세요. ^&^","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","2주차 DELETE문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (1,2,"1번 문제","아래 테이블 구조는 동물원에 들어온 고객의 정보를 담은  테이블입니다.  ^&^ 동물원에 가장 먼저 들어온 고객의 이름 3개를 조회하는 SQL 문을 작성해주세요. ^&^","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","1주차 SELECT문");
insert into problem (week_id, class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,table_create,week_title) values (2,2,"2번 문제","아래 테이블 구조는 유치원에 등록된 교사의 정보를 담은  테이블입니다.  ^&^ 유치원에서 가장 나이가 많은 교사의 이름을 조회하는 SQL 문을 작성해주세요. ^&^","2021-01-15 06:17:00","2021-01-16 06:17:00",3,1,"답은 3개","create table","2주차 DELETE문");

``ALTER TABLE problem AUTO_INCREMENT=1;
SET @CNT = 0;
UPDATE problem SET problem.class_id = @CNT:=@CNT+1;`;

// top_submit_answer table
`
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(1,1,"16011076",1,"select * from user;",0.5,50,"2021-02-15 13:17:00","W/A","1주차 SELECT문",2);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(1,1,"16011088",2,"select * from user;",0.5,100,"2021-02-15 13:17:00","ACCEPT","1주차 SELECT문",4);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(1,2,"16011076",1,"select * from user;",0.5,100,"2021-02-15 13:17:00","ACCEPT","1주차 SELECT문",1);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(1,2,"16011088",2,"select * from user;",0.5,30,"2021-02-15 13:17:00","W/A","1주차 SELECT문",5);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(2,1,"17011585",1,"select * from user;",0.5,10,"2021-02-15 13:17:00","W/A","2주차 DELETE문",4);
insert into top_submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title,submit_cnt) values(2,1,"17011585",2,"select * from user;",0.5,80,"2021-02-15 13:17:00","W/A","2주차 DELETE문",8);

` // submit_answer table
`
insert into submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) values(1,1,"16011076",1,"select * from user;",0.5,50,"2021-02-15 13:17:00","W/A","1주차 SELECT문");
insert into submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) values(1,1,"16011088",1,"select * from user22;",0.5,20,"2021-02-15 13:17:00","W/A","1주차 SELECT문");
insert into submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) values(1,1,"16011076",2,"select * from user;",0.5,100,"2021-02-15 13:17:00","ACCEPT","1주차 SELECT문");
insert into submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) values(1,1,"16011088",2,"select * from user11afsd;",0.5,80,"2021-02-15 13:17:00","ACCEPT","1주차 SELECT문");
insert into submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) values(1,2,"16011088",1,"select * from user;",0.5,100,"2021-02-15 13:17:00","ACCEPT","1주차 SELECT문");
insert into submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) values(1,2,"17011585",2,"select * from user;",0.5,30,"2021-02-15 13:17:00","W/A","1주차 SELECT문");
insert into submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) values(2,1,"17011585",1,"select * from user;",0.5,10,"2021-02-15 13:17:00","W/A","2주차 DELETE문");
insert into submit_answer (week_id,class_id,user_id,p_id,user_query,query_cost,score,submit_time,result,week_title) values(2,1,"17011585",2,"select * from user;",0.5,80,"2021-02-15 13:17:00","W/A","2주차 DELETE문");

` // auto incremeat init
`ALTER TABLE submit_answer AUTO_INCREMENT=1;
SET @CNT = 0;
UPDATE course SET course.class_id = @CNT:=@CNT+1;`;

` // create patient _table
create table patient_info(
  patient_id varchar(255) not null,
    patient_sex varchar(255) DEFAULT NULL,
    datatime datetime DEFAULT NULL,
    patient_condition varchar(255) DEFAULT NULL,
    name varchar(255) DEFAULT NULL,
  PRIMARY KEY (patient_id)
);`;
