# 가계부#2

**<2주차> DOM, Event, Canledar 다루기**

# 가계부#1 ~ #2

## 주간계획 #1

- 루카스에 있는 강의 영상, 참고 사이트, 코드를 공부한다
  - 모르는 부분은 검색해보고 찾아본다.
  - HTML, CSS 를 찾아보고 코드를 짜보며 실습한다
  - 모르는 부분 막히는 부분 검색, 질문을 적극 활용한다
- 실습해본 내용을 토대로 미션을 풀어본다.

## 주간계획 #2

## 구현계획 #1

- html 파일로 기초 레이아웃을 짠다.
  - 모르는 부분 강의, 구글링을 하여 찾아본다.
  - 찾아본 내용을 연습하며 구현한다.
- CSS파일로 레이아웃을 다듬는다.
  - 실수해도 다듬어 가면서 구현한다.
  - 하루에 아주 조금이라도 구현해본다.

## 구현계획 #2

- [ ] 메인페이지 UI

  - header영역 -로고
    - [x] Wise Wallet 로고 만들기
      - [x] 로고 클릭시 메인페이지로 이동
    - 날짜
      - [x] 화살표 사이에 년, 월, 월 영어 넣기
      - [x] 좌, 우 화살표 만들기
        - [ ] 화살 표 클릭시 달 이동
        - [ ] 달 이동과 함께 달에 맞는 month-en 변경
          - 좌측
            - [ ] 1월 에서 전으로 넘어가면 전년도로 변경
          - 우측
            - [ ] 12월에서 넘기면 다음년도로 변경
    - 아이콘
      - [ ] 각 아이콘 클릭시 아이콘에 맞는 페이지로 이동
        - [ ] 내역
        - [ ] 달력
        - [ ] 차트
  - main 영역

    - 인풋바

      - [ ] 인풋바
        - [ ] 인풋바 위치 잡기
          - 일자
            - [ ] 일자 라벨, 인풋창 나누기
            - [ ] 위치, 사이즈 맞추기
            - [ ] 일자 입력받기
          - 금액
            - [ ] 금액 라벨, 버튼(or체크박스), 인풋창 나누기
            - [ ] 위치, 사이즈 맞추기
            - [ ] +,- 클릭시 변환되게 만들기
            - [ ] 금액 입력시 , 찍히게 만들기
          - 내용
            - [ ] 내용 라벨, 인풋창 나누기
            - [ ] 위치, 사이즈 맞추기
            - [ ] 내용 입력받는 인풋창 만들기
          - 결제수단
            - [ ] 결제수단 라벨, 선택창 나누기
            - [ ] 위치, 사이즈 맞추기
            - [ ] 선택창 클릭시 드롭창 띄우기
              - [ ] 드롭창에 각 선택지 만들기
              - [ ] 드롭창 선택지 추가, 제거 할 수 있게 만들기
              - [ ] 추가, 제거 시 팝업창 만들기
          - 분류
            - [ ] 분류 라벨, 선택창, 체크박스로 나누기
            - [ ] 위치, 사이즈 맞추기
            - [ ] 선택창 클릭시 드롭창 띄우기
              - [ ] 드롭창에 각 선택지 만들기
            - [ ] 일자, 금액, 내용, 결제수단, 분류를 모두 입력했을 시 체크박스로(확인)

    - main
      - [ ] 전체내역, 수입, 지출 칸, 날짜별 지출칸을 나눈다
        - [ ] 수입, 지출 각 체크 박스와 함께 나눈다.
        - [ ] 수입, 지출은 각 수입과 지출을 합계로 표기하게 한다.
      - [ ] 날짜, 요일 지출합계 칸을 나눈다.
        - [ ] 지출은 그 날의 지출 합계를 출력한다.
      - [ ] 분류, 내용, 결제수단, 금액 순으로 출력되게 한다.
        - [ ] 분류는 CSS로 색,모양을 넣어준다.
        - [ ] 각 칸과 칸사이에 선으로 구분해준다.
      - [ ] 날짜와 날짜 사이에 선으로 구분해준다.
