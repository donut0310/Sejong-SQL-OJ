const me=`
INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(1,1,'목동 나누리 병원 여러 기준으로 정렬하기 ','"patient_chart" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.

"patient_chart" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 

는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.

^&^

목동 나누리 병원에 들어온 환자 중 모든 사람의 아이디와 이름, 입원 일을 이름 순으로 조회하는 SQL문을 작성해 주세요 단, 이름이 같은 환자 중에서 나중에 입원한 환자를 먼저 보여줘야 합니다. 

예시

예를 들어 "patient_chart" 테이블이 다음과 같다면

^&^

1.이름을 사전순으로 정렬하면 다음과 같으며 , "박경자","박경자","이명자" 이며 

2.박경자라는 이름을 가진 환자가 2명이므로 나중에 입원한 아이디가 "A373219" 인 박경자 님이 먼저

조회 되어야 합니다.  

^&^','2021-04-30 00:00:00','2021-06-25 00:00:00',2,1,'[
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
   "patient_id": "A373220",
   "patient_sex": "Male",
   "datatime": "2021-04-15 17:17:00",
   "patient_condition": "Sick",
   "name": "박경자"
  },
  {
   "patient_id": "A373219",
   "patient_sex": "Female",
   "datatime": "2021-04-17 19:13:12",
   "patient_condition": "Healthy",
   "name": "박경자"
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

   "patient_id": "A373219",
   "patient_sex": "Female",
   "datatime": "2021-04-17 19:13:12",
   "patient_condition": "Healthy",
   "name": "박경자"
  },

  {
   "patient_id": "A373220",
   "patient_sex": "Male",
   "datatime": "2021-04-15 17:17:00",
   "patient_condition": "Sick",
   "name": "박경자"
  },

  {
   "patient_id": "A373221",
   "patient_sex": "Female",
   "datatime": "2021-04-19 13:15:30",
   "patient_condition": "Sick",
   "name": "이명자"
  } 
 ]
]',"(홍길동) 1주차 기초 select문",1);

INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(1,2,'목동 나누리 병원 여러 기준으로 정렬하기 ','"patient_chart" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.

"patient_chart" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 

는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.

^&^

목동 나누리 병원에 들어온 환자 중 모든 사람의 아이디와 이름, 입원 일을 이름 순으로 조회하는 SQL문을 작성해 주세요 단, 이름이 같은 환자 중에서 나중에 입원한 환자를 먼저 보여줘야 합니다. 

예시

예를 들어 "patient_chart" 테이블이 다음과 같다면

^&^

1.이름을 사전순으로 정렬하면 다음과 같으며 , "박경자","박경자","이명자" 이며 

2.박경자라는 이름을 가진 환자가 2명이므로 나중에 입원한 아이디가 "A373219" 인 박경자 님이 먼저

조회 되어야 합니다.  

^&^','2021-04-30 00:00:00','2021-06-25 00:00:00',2,1,'[
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
   "patient_id": "A373220",
   "patient_sex": "Male",
   "datatime": "2021-04-15 17:17:00",
   "patient_condition": "Sick",
   "name": "박경자"
  },
  {
   "patient_id": "A373219",
   "patient_sex": "Female",
   "datatime": "2021-04-17 19:13:12",
   "patient_condition": "Healthy",
   "name": "박경자"
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

   "patient_id": "A373219",
   "patient_sex": "Female",
   "datatime": "2021-04-17 19:13:12",
   "patient_condition": "Healthy",
   "name": "박경자"
  },

  {
   "patient_id": "A373220",
   "patient_sex": "Male",
   "datatime": "2021-04-15 17:17:00",
   "patient_condition": "Sick",
   "name": "박경자"
  },

  {
   "patient_id": "A373221",
   "patient_sex": "Female",
   "datatime": "2021-04-19 13:15:30",
   "patient_condition": "Sick",
   "name": "이명자"
  } 
 ]
]',"(박길동) 1주차 기초 select문",1);

INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(1,3,'목동 나누리 병원 여러 기준으로 정렬하기 ','"patient_chart" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.

"patient_chart" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 

는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.

^&^

목동 나누리 병원에 들어온 환자 중 모든 사람의 아이디와 이름, 입원 일을 이름 순으로 조회하는 SQL문을 작성해 주세요 단, 이름이 같은 환자 중에서 나중에 입원한 환자를 먼저 보여줘야 합니다. 

예시

예를 들어 "patient_chart" 테이블이 다음과 같다면

^&^

1.이름을 사전순으로 정렬하면 다음과 같으며 , "박경자","박경자","이명자" 이며 

2.박경자라는 이름을 가진 환자가 2명이므로 나중에 입원한 아이디가 "A373219" 인 박경자 님이 먼저

조회 되어야 합니다.  

^&^','2021-04-30 00:00:00','2021-06-25 00:00:00',2,1,'[
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
   "patient_id": "A373220",
   "patient_sex": "Male",
   "datatime": "2021-04-15 17:17:00",
   "patient_condition": "Sick",
   "name": "박경자"
  },
  {
   "patient_id": "A373219",
   "patient_sex": "Female",
   "datatime": "2021-04-17 19:13:12",
   "patient_condition": "Healthy",
   "name": "박경자"
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

   "patient_id": "A373219",
   "patient_sex": "Female",
   "datatime": "2021-04-17 19:13:12",
   "patient_condition": "Healthy",
   "name": "박경자"
  },

  {
   "patient_id": "A373220",
   "patient_sex": "Male",
   "datatime": "2021-04-15 17:17:00",
   "patient_condition": "Sick",
   "name": "박경자"
  },

  {
   "patient_id": "A373221",
   "patient_sex": "Female",
   "datatime": "2021-04-19 13:15:30",
   "patient_condition": "Sick",
   "name": "이명자"
  } 
 ]
]',"(김길동) 1주차 기초 select문",1);

#문제 2번 정답코드
SELECT patient_id,NAME,datatime 
FROM patient_chart 
ORDER BY NAME ASC, datatime DESC;

# 문제 2번 1번 test_case;
insert into patient_chart values("A373219","Female","2021-04-15 12:17:00","Healthy","박경자");
insert into patient_chart values("A373220","male","2021-04-16 03:17:00","Healthy","김경자");
insert into patient_chart values("A373221","Female","2021-04-17 17:16:00","Sick","김영자");
insert into patient_chart values("A373222","male","2021-04-18 17:17:40","Healthy","천혜원");
insert into patient_chart values("A373223","Female","2021-05-15 17:17:30","Sick","이수연");
insert into patient_chart values("A373224","male","2021-06-15 17:15:00","Healthy","박명규");
insert into patient_chart values("A373225","Female","2021-11-15 17:13:00","Sick","박정한");
insert into patient_chart values("A373226","male","2021-05-15 10:16:00","Healthy","복신필");
insert into patient_chart values("A373227","male","2021-03-15 09:17:00","Sick","이수경");
insert into patient_chart values("A373228","Female","2021-02-15 08:17:00","Healthy","이의원");
insert into patient_chart values("A373229","Female","2021-01-15 06:17:00","Sick","박성실");
insert into patient_chart values("A373230","Female","2021-02-15 13:17:00","Sick","백상준");
insert into patient_chart values("A373237","Female","2021-02-15 08:17:00","Healthy","이의원");
insert into patient_chart values("A373238","Female","2021-01-15 06:17:00","Sick","박성실");
insert into patient_chart values("A373248","Female","2021-02-15 13:17:00","Sick","백상준");
insert into patient_chart values("A373240","Female","2021-02-15 08:17:00","Healthy","이박원");
insert into patient_chart values("A373232","male","2021-01-15 06:17:00","Sick","박부실");
insert into patient_chart values("A373233","Female","2021-02-15 13:17:00","Sick","배상준");
insert into patient_chart values("A373234","Female","2021-02-15 08:17:00","Healthy","허의원");
insert into patient_chart values("A373235","Female","2021-01-15 06:17:00","Sick","이재은");
insert into patient_chart values("A373236","Female","2021-02-15 13:17:00","Sick","이지윤");
insert into patient_chart values("A383237","Female","2021-02-15 08:17:00","Healthy","이명박");
insert into patient_chart values("A383238","male","2021-01-15 06:17:00","Sick","박부장");
insert into patient_chart values("A373239","Female","2021-05-15 13:17:00","Sick","배사원");
insert into patient_chart values("A383240","Female","2021-03-15 08:17:00","Healthy","허인턴");
insert into patient_chart values("A373241","Female","2021-04-15 06:17:00","Sick","이구미");
insert into patient_chart values("A373242","Female","2021-05-15 13:17:00","Sick","이인천");

# 문제 2번 2번 test_case;
insert into patient_chart values("A373219","Female","2021-04-15 12:17:00","Healthy","박경자");
insert into patient_chart values("A373220","male","2021-04-16 03:17:00","Healthy","김경자");
insert into patient_chart values("A373221","Female","2021-04-17 17:16:00","Sick","김영자");
insert into patient_chart values("A373222","male","2021-04-18 17:17:40","Healthy","천혜원");
insert into patient_chart values("A373223","Female","2021-05-15 17:17:30","Sick","이수연");
insert into patient_chart values("A373224","male","2021-06-15 17:15:00","Healthy","박명규");
insert into patient_chart values("A373225","Female","2021-11-15 17:13:00","Sick","박정한");
insert into patient_chart values("A373226","male","2021-05-15 10:16:00","Healthy","복신필");
insert into patient_chart values("A373227","male","2021-03-15 09:17:00","Sick","이수경");
insert into patient_chart values("A373228","Female","2021-02-15 08:17:00","Healthy","이의원");
insert into patient_chart values("A373229","Female","2021-01-15 06:17:00","Sick","박성실");
insert into patient_chart values("A373230","Female","2021-02-15 13:17:00","Sick","백상준");
insert into patient_chart values("A373237","Female","2021-02-15 08:17:00","Healthy","이의원");
insert into patient_chart values("A373238","Female","2021-01-15 06:17:00","Sick","박성실");
insert into patient_chart values("A373248","Female","2021-02-15 13:17:00","Sick","백상준");
insert into patient_chart values("A373240","Female","2021-02-15 08:17:00","Healthy","이박원");
insert into patient_chart values("A373232","male","2021-01-15 06:17:00","Sick","박부실");
insert into patient_chart values("A373233","Female","2021-02-15 13:17:00","Sick","배상준");
insert into patient_chart values("A373234","Female","2021-02-15 08:17:00","Healthy","허의원");
insert into patient_chart values("A373235","Female","2021-01-15 06:17:00","Sick","이재은");
insert into patient_chart values("A373236","Female","2021-02-15 13:17:00","Sick","이지윤");
insert into patient_chart values("A383237","Female","2021-02-15 08:17:00","Healthy","이명박");
insert into patient_chart values("A383238","male","2021-01-15 06:17:00","Sick","박부장");
insert into patient_chart values("A373239","Female","2021-05-15 13:17:00","Sick","배사원");
insert into patient_chart values("A383240","Female","2021-03-15 08:17:00","Healthy","허인턴");
insert into patient_chart values("A373241","Female","2021-04-15 06:17:00","Sick","이구미");
insert into patient_chart values("A373242","Female","2021-05-15 13:17:00","Sick","이인천");
insert into patient_chart values("A573219","Female","2021-04-15 12:17:00","Healthy","박럭시");
insert into patient_chart values("A573220","male","2021-04-16 03:17:00","Healthy","이목포");
insert into patient_chart values("A573221","Female","2021-04-17 17:16:00","Sick","김영자");
insert into patient_chart values("A573222","male","2021-04-18 17:17:40","Healthy","감혜원");
insert into patient_chart values("A573223","Female","2021-05-15 17:17:30","Sick","오수연");

#테스트 케이스 문제
INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(4,'[
	{
		"patient_id" : "A373220",
		"NAME" : "김경자",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A373219",
		"NAME" : "박경자",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A373224",
		"NAME" : "박명규",
		"datatime" : "2021-06-15 17:15:00"
	},
	{
		"patient_id" : "A373232",
		"NAME" : "박부실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A383238",
		"NAME" : "박부장",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373229",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373238",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373225",
		"NAME" : "박정한",
		"datatime" : "2021-11-15 17:13:00"
	},
	{
		"patient_id" : "A373239",
		"NAME" : "배사원",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373233",
		"NAME" : "배상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373230",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373248",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373226",
		"NAME" : "복신필",
		"datatime" : "2021-05-15 10:16:00"
	},
	{
		"patient_id" : "A373241",
		"NAME" : "이구미",
		"datatime" : "2021-04-15 06:17:00"
	},
	{
		"patient_id" : "A383237",
		"NAME" : "이명박",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373240",
		"NAME" : "이박원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373227",
		"NAME" : "이수경",
		"datatime" : "2021-03-15 09:17:00"
	},
	{
		"patient_id" : "A373223",
		"NAME" : "이수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373228",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373237",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373242",
		"NAME" : "이인천",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373235",
		"NAME" : "이재은",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373236",
		"NAME" : "이지윤",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373222",
		"NAME" : "천혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373234",
		"NAME" : "허의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A383240",
		"NAME" : "허인턴",
		"datatime" : "2021-03-15 08:17:00"
	}
]',"(홍길동) 1주차 기초 select문",0);

INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(4,'[
	{
		"patient_id" : "A573222",
		"NAME" : "감혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373220",
		"NAME" : "김경자",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A573221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A373219",
		"NAME" : "박경자",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A573219",
		"NAME" : "박럭시",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A373224",
		"NAME" : "박명규",
		"datatime" : "2021-06-15 17:15:00"
	},
	{
		"patient_id" : "A373232",
		"NAME" : "박부실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A383238",
		"NAME" : "박부장",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373229",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373238",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373225",
		"NAME" : "박정한",
		"datatime" : "2021-11-15 17:13:00"
	},
	{
		"patient_id" : "A373239",
		"NAME" : "배사원",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373233",
		"NAME" : "배상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373230",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373248",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373226",
		"NAME" : "복신필",
		"datatime" : "2021-05-15 10:16:00"
	},
	{
		"patient_id" : "A573223",
		"NAME" : "오수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373241",
		"NAME" : "이구미",
		"datatime" : "2021-04-15 06:17:00"
	},
	{
		"patient_id" : "A383237",
		"NAME" : "이명박",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A573220",
		"NAME" : "이목포",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373240",
		"NAME" : "이박원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373227",
		"NAME" : "이수경",
		"datatime" : "2021-03-15 09:17:00"
	},
	{
		"patient_id" : "A373223",
		"NAME" : "이수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373228",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373237",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373242",
		"NAME" : "이인천",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373235",
		"NAME" : "이재은",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373236",
		"NAME" : "이지윤",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373222",
		"NAME" : "천혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373234",
		"NAME" : "허의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A383240",
		"NAME" : "허인턴",
		"datatime" : "2021-03-15 08:17:00"
	}
]
',"(홍길동) 1주차 기초 select문",1);


INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(5,'[
	{
		"patient_id" : "A373220",
		"NAME" : "김경자",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A373219",
		"NAME" : "박경자",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A373224",
		"NAME" : "박명규",
		"datatime" : "2021-06-15 17:15:00"
	},
	{
		"patient_id" : "A373232",
		"NAME" : "박부실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A383238",
		"NAME" : "박부장",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373229",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373238",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373225",
		"NAME" : "박정한",
		"datatime" : "2021-11-15 17:13:00"
	},
	{
		"patient_id" : "A373239",
		"NAME" : "배사원",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373233",
		"NAME" : "배상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373230",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373248",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373226",
		"NAME" : "복신필",
		"datatime" : "2021-05-15 10:16:00"
	},
	{
		"patient_id" : "A373241",
		"NAME" : "이구미",
		"datatime" : "2021-04-15 06:17:00"
	},
	{
		"patient_id" : "A383237",
		"NAME" : "이명박",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373240",
		"NAME" : "이박원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373227",
		"NAME" : "이수경",
		"datatime" : "2021-03-15 09:17:00"
	},
	{
		"patient_id" : "A373223",
		"NAME" : "이수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373228",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373237",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373242",
		"NAME" : "이인천",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373235",
		"NAME" : "이재은",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373236",
		"NAME" : "이지윤",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373222",
		"NAME" : "천혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373234",
		"NAME" : "허의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A383240",
		"NAME" : "허인턴",
		"datatime" : "2021-03-15 08:17:00"
	}
]',"(박길동) 1주차 기초 select문",0);

INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(5,'[
	{
		"patient_id" : "A573222",
		"NAME" : "감혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373220",
		"NAME" : "김경자",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A573221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A373219",
		"NAME" : "박경자",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A573219",
		"NAME" : "박럭시",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A373224",
		"NAME" : "박명규",
		"datatime" : "2021-06-15 17:15:00"
	},
	{
		"patient_id" : "A373232",
		"NAME" : "박부실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A383238",
		"NAME" : "박부장",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373229",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373238",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373225",
		"NAME" : "박정한",
		"datatime" : "2021-11-15 17:13:00"
	},
	{
		"patient_id" : "A373239",
		"NAME" : "배사원",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373233",
		"NAME" : "배상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373230",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373248",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373226",
		"NAME" : "복신필",
		"datatime" : "2021-05-15 10:16:00"
	},
	{
		"patient_id" : "A573223",
		"NAME" : "오수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373241",
		"NAME" : "이구미",
		"datatime" : "2021-04-15 06:17:00"
	},
	{
		"patient_id" : "A383237",
		"NAME" : "이명박",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A573220",
		"NAME" : "이목포",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373240",
		"NAME" : "이박원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373227",
		"NAME" : "이수경",
		"datatime" : "2021-03-15 09:17:00"
	},
	{
		"patient_id" : "A373223",
		"NAME" : "이수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373228",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373237",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373242",
		"NAME" : "이인천",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373235",
		"NAME" : "이재은",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373236",
		"NAME" : "이지윤",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373222",
		"NAME" : "천혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373234",
		"NAME" : "허의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A383240",
		"NAME" : "허인턴",
		"datatime" : "2021-03-15 08:17:00"
	}
]
',"(박길동) 1주차 기초 select문",1);

INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(6,'[
	{
		"patient_id" : "A373220",
		"NAME" : "김경자",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A373219",
		"NAME" : "박경자",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A373224",
		"NAME" : "박명규",
		"datatime" : "2021-06-15 17:15:00"
	},
	{
		"patient_id" : "A373232",
		"NAME" : "박부실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A383238",
		"NAME" : "박부장",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373229",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373238",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373225",
		"NAME" : "박정한",
		"datatime" : "2021-11-15 17:13:00"
	},
	{
		"patient_id" : "A373239",
		"NAME" : "배사원",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373233",
		"NAME" : "배상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373230",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373248",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373226",
		"NAME" : "복신필",
		"datatime" : "2021-05-15 10:16:00"
	},
	{
		"patient_id" : "A373241",
		"NAME" : "이구미",
		"datatime" : "2021-04-15 06:17:00"
	},
	{
		"patient_id" : "A383237",
		"NAME" : "이명박",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373240",
		"NAME" : "이박원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373227",
		"NAME" : "이수경",
		"datatime" : "2021-03-15 09:17:00"
	},
	{
		"patient_id" : "A373223",
		"NAME" : "이수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373228",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373237",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373242",
		"NAME" : "이인천",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373235",
		"NAME" : "이재은",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373236",
		"NAME" : "이지윤",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373222",
		"NAME" : "천혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373234",
		"NAME" : "허의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A383240",
		"NAME" : "허인턴",
		"datatime" : "2021-03-15 08:17:00"
	}
]',"(김길동) 1주차 기초 select문",0);

INSERT INTO testcase_problem(p_id,tc_answer,week_title,tc_id) values(6,'[
	{
		"patient_id" : "A573222",
		"NAME" : "감혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373220",
		"NAME" : "김경자",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A573221",
		"NAME" : "김영자",
		"datatime" : "2021-04-17 17:16:00"
	},
	{
		"patient_id" : "A373219",
		"NAME" : "박경자",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A573219",
		"NAME" : "박럭시",
		"datatime" : "2021-04-15 12:17:00"
	},
	{
		"patient_id" : "A373224",
		"NAME" : "박명규",
		"datatime" : "2021-06-15 17:15:00"
	},
	{
		"patient_id" : "A373232",
		"NAME" : "박부실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A383238",
		"NAME" : "박부장",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373229",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373238",
		"NAME" : "박성실",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373225",
		"NAME" : "박정한",
		"datatime" : "2021-11-15 17:13:00"
	},
	{
		"patient_id" : "A373239",
		"NAME" : "배사원",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373233",
		"NAME" : "배상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373230",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373248",
		"NAME" : "백상준",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373226",
		"NAME" : "복신필",
		"datatime" : "2021-05-15 10:16:00"
	},
	{
		"patient_id" : "A573223",
		"NAME" : "오수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373241",
		"NAME" : "이구미",
		"datatime" : "2021-04-15 06:17:00"
	},
	{
		"patient_id" : "A383237",
		"NAME" : "이명박",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A573220",
		"NAME" : "이목포",
		"datatime" : "2021-04-16 03:17:00"
	},
	{
		"patient_id" : "A373240",
		"NAME" : "이박원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373227",
		"NAME" : "이수경",
		"datatime" : "2021-03-15 09:17:00"
	},
	{
		"patient_id" : "A373223",
		"NAME" : "이수연",
		"datatime" : "2021-05-15 17:17:30"
	},
	{
		"patient_id" : "A373228",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373237",
		"NAME" : "이의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A373242",
		"NAME" : "이인천",
		"datatime" : "2021-05-15 13:17:00"
	},
	{
		"patient_id" : "A373235",
		"NAME" : "이재은",
		"datatime" : "2021-01-15 06:17:00"
	},
	{
		"patient_id" : "A373236",
		"NAME" : "이지윤",
		"datatime" : "2021-02-15 13:17:00"
	},
	{
		"patient_id" : "A373222",
		"NAME" : "천혜원",
		"datatime" : "2021-04-18 17:17:40"
	},
	{
		"patient_id" : "A373234",
		"NAME" : "허의원",
		"datatime" : "2021-02-15 08:17:00"
	},
	{
		"patient_id" : "A383240",
		"NAME" : "허인턴",
		"datatime" : "2021-03-15 08:17:00"
	}
]
',"(김길동) 1주차 기초 select문",1);



`






