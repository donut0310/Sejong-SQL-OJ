const a=`
INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(1,1,'목동 나누리 병원 레코드 조회하기 ','"patient_chart" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.

"patient_chart" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 

는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.

^&^

목동 나누리 병원에 들어온 환자 중 모든 사람의 아이디와 성별, 이름을 아이디 순으로 조회하는 SQL문을 작성해 주세요 

예시

예를 들어 "patient_chart" 테이블이 다음과 같습니다. 


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
   "name": "박경자"
  },
  {
   "patient_id": "A373219",
   "patient_sex": "Female",
   "name": "박경자"
  },
  {
   "patient_id": "A373221",
   "patient_sex": "Female",
   "name": "이명자"
  } 
 ]
]',"(홍길동) 1주차 기초 select문",1);

INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(2,1,'상위 n개 레코드 ','"patient_chart" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.

"patient_chart" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 

는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.

^&^

목동 나누리 병원에 들어온 환자 중 모든 사람의 아이디와 성별, 이름을 아이디 순으로 조회하는 SQL문을 작성해 주세요 

예시

예를 들어 "patient_chart" 테이블이 다음과 같습니다.


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
   "name": "박경자"
  },
  {
   "patient_id": "A373219",
   "patient_sex": "Female",
   "name": "박경자"
  },
  {
   "patient_id": "A373221",
   "patient_sex": "Female",
   "name": "이명자"
  } 
 ]
]',"(홍길동) 2주차 기초 group by문",1);

INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(3,1,'아픈 환자 찾기','"patient_chart" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.

"patient_chart" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 

는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.

^&^

목동 나누리 병원에 들어온 환자 중 모든 사람의 아이디와 성별, 이름을 아이디 순으로 조회하는 SQL문을 작성해 주세요 

예시

예를 들어 "patient_chart" 테이블이 다음과 같습니다.

^&^

','2021-04-30 00:00:00','2021-06-25 00:00:00',2,1,'[
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
   "name": "박경자"
  },
  {
   "patient_id": "A373219",
   "patient_sex": "Female",
   "name": "박경자"
  },
  {
   "patient_id": "A373221",
   "patient_sex": "Female",
   "name": "이명자"
  } 
 ]
]',"(홍길동) 3주차 집계함수",1);

INSERT INTO problem(week_id,class_id,title,content,start_time,end_time,tc_cnt,tc_id,table_info,week_title,is_public)
values(4,1,'역순 정렬하기','"patient_chart" 테이블은 목동 나누리 병원에 환자 정보를 담은 테이블입니다.

"patient_chart" 테이블 구조는 다음과 같으며 "patient_id","patient_sex","datatime","patient_condition","name" 

는 각각 환자의 아이디, 성별,입원일, 환자 상태, 이름을 나타냅니다.

^&^

목동 나누리 병원에 들어온 환자 중 모든 사람의 아이디와 성별, 이름을 아이디 순으로 조회하는 SQL문을 작성해 주세요 

예시

예를 들어 "patient_chart" 테이블이 다음과 같습니다.



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
   "name": "박경자"
  },
  {
   "patient_id": "A373219",
   "patient_sex": "Female",
   "name": "박경자"
  },
  {
   "patient_id": "A373221",
   "patient_sex": "Female",
   "name": "이명자"
  } 
 ]
]',"(홍길동) 4주차 having절",1);


`