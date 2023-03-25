// 사전작업
<section class="main_section_container">
  <list class="transaction_history_container">
    <div class="separator" id="transaction_history_header">
      <div class="history_date">
        <div id="transaction_date">3월 14일</div>
        <div id="transaction_day">화</div>
      </div>
      <div id="total_price">지출 10,900원</div>
    </div>
    <table class="details_list">
      <td class="separator" id="main_details">
        <div id="main_category">문화/여가</div>
        <div id="main_details_text">스트리밍 서비스 정기 결제</div>
        <div id="main_means">현대카드</div>
        <div id="main_price">- 10,900원</div>
      </td>
      <td class="separator" id="main_details">
        <div id="main_category">문화/여가</div>
        <div id="main_details_text">스트리밍 서비스 정기 결제</div>
        <div id="main_means">현대카드</div>
        <div id="main_price">- 10,900원</div>
      </td>
    </table>
  </list>
</section>

// 해당 날짜 데이터가 원래 있었으면 / 없었으면
// 클래스는 .className, 아이디는 .id
// 배열로 담아서 날짜순으로 정렬
// 필터링은 어떻게?
// 거래 내역 리스트 쭉 만들고나서 내역 총 갯수, 총 금액 등 나중에 계산
// 리스트 첫번째는 위아래로 border주고, 그 다음 부터는 아래만 준다

const addSection = document.createElement("section");
  const addHistory = document.createElement("list"); // list로 해야하나? 아닌것 같음
    const addHistoryHeader = document.createElement("div");
      const addDayHistory = document.createElement("div");
        const addTransactionDate = document.createElement("div");
        const addTransactionDay = document.createElement("div"); 
    const addDayTotal = document.createElement("div"); // `수입 ${income}원 지출 ${expense}원
  const addLIst = "value"; // template literal 방식 사용해보자