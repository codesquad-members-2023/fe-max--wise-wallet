# 가계부(Wise Wallet) #1

### 체크리스트
- [ ] 1. 헤더 영역 구현
- [ ] 2. 입력 영역 구현
- [ ] 3. 수입지출 내역 목록 영역 구현
- [ ] 4. 캘린더 화면 구현
- [ ] 5. 통계 화면 구현


### 세부 내용
- 헤더 영역
    - 중앙 정렬
    - 로고: 클릭하면 메인 화면으로 이동
    - 연월: 좌우 화살표를 클릭하면 이전달과 다음달로 이동
    - 탭: 내역, 달력, 통계를 클릭하여 이동

- 입력 영역
    - 날짜: 기본적으로 오늘 날짜, 변경 가능
    - 금액
        - 금액 입력부분 앞 -(지출)을 클릭하면 +(수입)으로 변경
        - 지출, 수입 상태에 따라 분류 카테고리가 변경
        - 금액은 자동으로 세 자리마다 쉼표
    - 내용: 해당 내역에 대한 설명(text)
    - 결제수단
        - 셀렉트 박스를 클릭하면 드롭다운 패널이 나타남
        - 항목마다 우측 X버튼 클릭하면 배경이 #000000, 40%로 변경하며 삭제 창이 뜸
        - 삭제 버튼을 누르면 해당 결제수단 삭제, 패널에서 사라짐
        - 삭제한 결제수단으로 작성된 수입 지출내역은 빈칸으로 유지
        - 가장 아래 추가하기 항목을 누르면 결제수단 추가 가능
    - 분류
        - 수입 카테고리: 월급, 용돈, 기타 수입
        - 지출 카테고리: 식비, 생활, 쇼핑/뷰티, 교통, 의료/건강, 문화/여가, 미분류
    - 확인 버튼: 모든 내용을 작성하면 확인 버튼 활성화, 수입지출 내역 저장 및 내역 목록에 추가
- 수입지출 내역 목록 영역
- 캘린더 화면
- 통계(그래프) 화면


### 학습 내용