# 디비에 넣을때 순서
# mysql -uroot -p
# 비밀번호 입력
# CREATE DATABASE SQL_DB;
# use SQL_DB; 

DROP DATABASE IF EXISTS test_case;
CREATE DATABASE test_case default CHARACTER SET UTF8;
use test_case;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS submit_answer;
DROP TABLE IF EXISTS problem;
DROP TABLE IF EXISTS testcase_problem;
#데이터 넣는 형식에 따른 not null로 할지 , DEFAULT null로 할지 고민
create table course(
	class_id varchar(255) not null,
    class_name varchar(255) DEFAULT NULL,
    admin_id varchar(255) DEFAULT NULL,
    PRIMARY KEY (class_id)
);
create table user(
  user_id varchar(255) not null,
  class_id varchar(255) DEFAULT NULL,
  user_name varchar(255) DEFAULT NULL,
  user_pw varchar(255) DEFAULT NULL,
  #0은 일반 학생 1은 조교 2는 교수
  author int DEFAULT NULL,
  jwt_token varchar(255) DEFAULT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (class_id) REFERENCES course (class_id)
);
create table problem(
	p_id int not null AUTO_INCREMENT PRIMARY KEY,
    class_id varchar(255) not null,
    week_info varchar(255) DEFAULT NULL,
    title varchar(255) DEFAULT NULL,
    content MEDIUMTEXT DEFAULT NULL,
    start_time DATETIME DEFAULT NULL,
    end_time DATETIME DEFAULT NULL,
    tc_cnt int DEFAULT NULL,
    tc_id int DEFAULT NULL,
    table_info MEDIUMTEXT DEFAULT NULL,
    FOREIGN KEY (class_id) REFERENCES course (class_id)
);
# week_info 가 기본키가 되면 주차별 문제가 1개씩만 생성가능 
create table testcase_problem(
	p_id int not null,
    tc_answer varchar(255) DEFAULT NULL,
    tc_id int DEFAULT NULL,
    tc_content varchar(255) DEFAULT NULL,
    week_info varchar(255) DEFAULT NULL,
    FOREIGN KEY (p_id) REFERENCES problem (p_id)
);
# week_info 가 기본키가 되면 주차별 문제가 1개씩만 생성가능 
create table submit_answer(
  class_id varchar(255) not null,
  user_id varchar(255) not null,
  p_id int not null,
  week_info varchar(255) DEFAULT NULL,
  user_query varchar(255) DEFAULT NULL,
  query_cost DOUBLE DEFAULT NULL,
  score int DEFAULT NULL,
  submit_time datetime DEFAULT CURRENT_TIMESTAMP,
  result varchar(255) DEFAULT NULL,
  FOREIGN KEY (class_id) REFERENCES course (class_id),
  FOREIGN KEY (user_id) REFERENCES user (user_id),
  FOREIGN KEY (p_id) REFERENCES problem (p_id)
);