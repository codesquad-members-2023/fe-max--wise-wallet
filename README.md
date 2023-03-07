# fe-max--wise-wallet


# 영역 구분
- [x] 헤더
- [x] 새로운 내역 입력
- [x] 수입지출 내역 목록
- [] 달력 화면
- [] 통계 화면
# 요구사항

## 헤더
- [x] 가계부의 모든 화면에서 상단 중앙에 표시
- [x] 로고, 캘린더, 통계탭으로 구성된다
### 로고
- [x] 로고는 헤더의 왼쪽에 위치한다
- [x] 로고를 클릭하면 메인 화면으로 이동한다
### 캘린더
- [x] 캘린더는 헤더 중앙에 위치한다
- [x] 상단부터 year, month, month 이름 순으로 배치한다
- [x] 좌우에는 화살표를 위치시킨다
- [] 화살표를 클릭하면 이전달 or 다음달로 이동한다
- [] 화살표를 통해 이동하면 하단의 내역도 변경된다 
### 통계
- [x] 통계탭은 헤더 오른쪽에 위치한다
- [x] 내역, 달력, 통계 아이콘으로 구성한다
- [] 각 아이콘을 누르면 해당 화면으로 
이동한다

---

## 새로운 내역 입력
- [x] 헤더 아래에 절반을 걸쳐 위치한다 
- [] 수입과 지출 내역 입력을 담당한다 
- [x] 날짜 인풋 박스, 금액 입력 인풋, 내용 입력 인풋, 결제 수단 셀렉트 박스, 분류 셀렉트 박스, 확인 버튼 으로 구성된다
- [] 셀렉트 박스는 커스텀한다

### 날짜 인풋 박스
- [] 오늘 날짜를 기본으로 설정한다
- [] 수정할 수 있다

### 금액 입력 인풋
- [] +,- 전환 버튼 구역, 금액 입력 구역으로 나뉘어져 있다
#### +- 전환버튼
- [] - 를 기본값으로 설정한다
- [] + 상태에서는 분류 셀렉트 박스의 드롭다운이 "수입 카테고리"로 변경된다
- [] - 상태에서는 분류 셀렉트 박스의 드롭다운이 "지출 카테고리"로 변경된다 
- [] 드롭다운 패널 역시 지출이 기본값이다
#### 금액 입력
- [] 금액을 입력할 땐 세자리 마다 쉼표가 찍힌다

### 내용 입력 인풋
- [] 해당 내역에 대한 설명을 적을 수 있다 
- [] 모달창..??

### 결제 수단 셀렉트 박스
- [] 셀렉트 박스 영역을 클릭하면 결제 수단 드롭다운 패널이 나타난다
- [] 기본적으로 현금과 신용카드 결제수단이 있고, 마지막에 추가하기 버튼으로 구성한다
- [] 각 결제수단 항목 옆에는 X버튼이 있다 
    - [] 삭제 버튼을 누르면 해당 결제 수단이 삭제된다
    - [] 삭제한 결제수단으로 작성된 수입 지출내역은 빈칸으로 남는다 ?? 
- [] 추가하기 버튼을 누르면 모달창이 뜬다 
    - [] 추가하기 버튼을 통한 모달창에는 결제 수단을 입력하는 텍스트 인풋, 취소버튼, 등록 버튼이 있다 
    - [] 등록버튼을 누르면 결제 수단 드롭다운에 추가된다
    - [] 아무 것도 입력하지 않은 경우 추가되지 않는다
    - [] 아무 것도 입력하지 않은 경우 인풋박스에 포커스가 된다

### 분류 셀렉트 박스
- [] 금액의 + - 상태에 따라 수입 카테고리와 지출 카테고리로 나타난다
- [] 수입 카테고리 : 월급, 용돈, 기타수입
- [] 지출 카테고리 : 식비, 생활, 쇼핑/뷰티, 교통, 의료/건강, 문화/여가, 미분류

### 확인 버튼
- [] 확인 버튼을 누르면 수입지출 내역이 저장된다 (??어디)
- [] 내역 목록에 입력한 내용이 추가된다

---

## 수입지출 내역 목록
- [] 총 건수와 해당월의 수입액, 지출액이 표시된다
- [] 수입액 지출액 앞에는 체크박스가 있디
- [] 체크박스는 수입액 또는 지출액 필터링 기능을 한다
- [] 기본적으로 수입액, 지출액 둘 다 보여진다

- [] 수입 지출 리스트는 '일자'를  기준으로 최신순으로 정렬한다
- [] 같은 일자라면 생성된 '시간'을 기준으로 정렬한다

- [] 날짜당 날짜, 요일, 수입, 지출이 상단영역이다
- [] 내역에는 분류 카테고리 명, 입력한 내용, 결제 수단, 수입 혹은 지출액으로 구성한다
- [] 지출내역은 빨간색, 수입내역은 초록으로 표시한다

- [] 각 내역에 마우스를 올리면 배경을 #ffffff로 변경한다
- [] 오른쪽에 삭제하기 버튼을 만든다 

- [] 삭제하기 버튼을 누르면 수입지출내역을 삭제할 수 있는 alert창을 띄운다
- [] alert창은 삭제 안내문구, 카테고리, 내용, 결제수단, 금액, 취소버튼, 삭제버튼으로 구성한다
- [] 삭제 버튼을 누르면 해당 내역이 삭제된다
- [] 수입 지출 각 내역에 마우스를 올린 상태로 삭제하기 버튼 외의 영역을 클릭하면 **새로운 내역 입력** 영역에 해당 내역이 입력 바에 채워지고 수정이 가능하도록 한다
    - [] 만약 기존 내용에 수정 사항이 생기면, 확인버튼이 활성화된다
    - [] 확인 버튼을 누르면 입력바는 비워지고 기존 내용에는 수정사항이 반영된다
---

## 캘린더

- [] 요일, 캘린더 영역, 총합 으로 나뉜다
- [] 요일은 새로운 내역 입력 박스 위치와 동일
- [] 오늘 날자에 해당하는 날은 배경색이 다르다
- [] 수입, 지출, 일별 합계는 각각 다른 색으로 표시
- [] 달력 하단에는 해당 월의 총 수입, 총 지출, 총합을 표시한다

---

## 통계화면

- [] 그래프, 총 지출액, 상세 내역, 접혀져 있는 상세 카테고리 영역 구분한다
- [] 총 지출액에 총 지출 금액을 표시한다
- [] 상세 내역은 카테고리 명, 비율, 해당 카테고리의 지출합으로 구성한다
- [] 가장 비율이 큰 카테고리 순으로 정렬한다

- [] 리스트 아이템을 클릭하면 해당 카테고리의 월별 소비추이 그래프와 상세 내역이 펼쳐진다
- [] 소비추이 그래프는 해당 카테고리의 최근 6개월 지출 내역으로 구성한다
- [] 상세내역은 메인 내역과 방식이 동일하다
    - [] 오른쪽 상단에 일별 지출 총액은 보여지지 않는다 
    - [] 카테고리 명, 입력한 내역, 결제 방식, 지출내역



---

## CSS Flexbox

## 시맨틱 태그 SEO

## 폰트 파일

## 클래스 붙여주기

## nav패턴

## 사용자 지정 CSS 속성 사용하기 (변수)


## aria-label
우리 눈에 보이지 않더라도 브라우저에게는 전달이 되면 좋은 정보, 혹은 스크린 리더를 통해 웹을 사용하는 사용자들에게 전달해야 하는 정보를 제공하고 싶을 때 사용하는 게 aria-label