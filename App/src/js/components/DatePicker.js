import { Element } from "../Element.js";
import { NEXT_MONTH, NEXT_YEAR, PREVIOUS_MONTH, PREVIOUS_YEAR } from "./SVG.js";

export class DatePicker extends Element {
  constructor() {
    super();
  }
  init() {
    this.domNode = document.createElement("DIV");
    this.domNode.id = "myDatepicker";
    this.domNode.className = "datepicker";
    this.domNode.insertAdjacentHTML(
      "afterbegin",
      `
        <div id="myDatepicker" class="datepicker">
          <div class="date">
            <div class="group">
              <input
                class="item"
                type="text"
                id="id-textbox-1"
                aria-describedby="id-description-1"
                aria-label="일자 입력"
                value="20230222" />
              <span class="desc blind" id="id-description-1">
                (<span class="sr-only">날짜 형식: </span>
                년/월/월이름)
              </span>
            </div>
          </div>
          <div
            style="display:none;"
            id="id-datepicker-1"
            class="datepicker-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="날짜를 선택해주세요">
            <div class="header">
              <button
                type="button"
                class="prev-year"
                aria-label="작년">
                ${PREVIOUS_YEAR}
              </button>

              <button
                type="button"
                class="prev-month"
                aria-label="저번달">
                ${PREVIOUS_MONTH}
              </button>

              <h2
                id="id-grid-label"
                class="month-year"
                aria-live="polite">
                February 2020
              </h2>

              <button
                type="button"
                class="next-month"
                aria-label="다음달">
                ${NEXT_MONTH}
              </button>

              <button
                type="button"
                class="next-year"
                aria-label="내년">
                ${NEXT_YEAR}
              </button>
            </div>

            <div class="table-wrap">
              <table
                class="dates"
                role="grid"
                aria-labelledby="id-grid-label">
                <thead>
                  <tr>
                    <th scope="col" abbr="일요일">일</th>
                    <th scope="col" abbr="월요일">월</th>
                    <th scope="col" abbr="화요일">화</th>
                    <th scope="col" abbr="수요일">수</th>
                    <th scope="col" abbr="목요일">목</th>
                    <th scope="col" abbr="금요일">금</th>
                    <th scope="col" abbr="토요일">토</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                    <td tabindex="-1" data-date="2020-02-01">1</td>
                  </tr>
                  <tr>
                    <td tabindex="-1" data-date="2020-02-02">2</td>
                    <td tabindex="-1" data-date="2020-02-03">3</td>
                    <td tabindex="-1" data-date="2020-02-04">4</td>
                    <td tabindex="-1" data-date="2020-02-05">5</td>
                    <td tabindex="-1" data-date="2020-02-06">6</td>
                    <td tabindex="-1" data-date="2020-02-07">7</td>
                    <td tabindex="-1" data-date="2020-02-08">8</td>
                  </tr>
                  <tr>
                    <td tabindex="-1" data-date="2020-02-09">9</td>
                    <td tabindex="-1" data-date="2020-02-10">10</td>
                    <td tabindex="-1" data-date="2020-02-11">11</td>
                    <td tabindex="-1" data-date="2020-02-12">12</td>
                    <td tabindex="-1" data-date="2020-02-13">13</td>
                    <td
                      tabindex="0"
                      data-date="2020-02-14"
                      role="gridcell"
                      aria-selected="true">
                      14
                    </td>
                    <td tabindex="-1" data-date="2020-02-15">15</td>
                  </tr>
                  <tr>
                    <td tabindex="-1" data-date="2020-02-16">16</td>
                    <td tabindex="-1" data-date="2020-02-17">17</td>
                    <td tabindex="-1" data-date="2020-02-18">18</td>
                    <td tabindex="-1" data-date="2020-02-19">19</td>
                    <td tabindex="-1" data-date="2020-02-20">20</td>
                    <td tabindex="-1" data-date="2020-02-21">21</td>
                    <td tabindex="-1" data-date="2020-02-22">22</td>
                  </tr>
                  <tr>
                    <td tabindex="-1" data-date="2020-02-23">23</td>
                    <td tabindex="-1" data-date="2020-02-24">24</td>
                    <td tabindex="-1" data-date="2020-02-25">25</td>
                    <td tabindex="-1" data-date="2020-02-26">26</td>
                    <td tabindex="-1" data-date="2020-02-27">27</td>
                    <td tabindex="-1" data-date="2020-02-28">28</td>
                    <td tabindex="-1" data-date="2020-02-29">29</td>
                  </tr>
                  <tr>
                    <td tabindex="-1" data-date="2020-02-30">30</td>
                    <td tabindex="-1" data-date="2020-02-31">31</td>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                    <td class="disabled" tabindex="-1"></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="dialog-ok-cancel-group">
              <button class="dialog-button" value="cancel">
                취소
              </button>
              <button class="dialog-button" value="ok">입력</button>
            </div>
            <div class="dialog-message" aria-live="polite"></div>
          </div>
        </div>
      `
    )
  }
}
