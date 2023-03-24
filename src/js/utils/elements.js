import { $, $$ } from './utils.js';

export const headerDateElements = {
  $year: $('.header__date-wrap .year'),
  $month: $('.header__date-wrap .month'),
  $monthText: $('.header__date-wrap .month-text'),
};

export const headerDateBtnElement = {
  $prevBtn: $('.header__date__button--prev'),
  $nextBtn: $('.header__date__button--next'),
};

export const gnbElements = {
  $$tabButtons: $$('.gnb__list-item'),
  $$tabContents: $$('.tab-content'),
};

export const formInput = {
  $historyForm: $('.history__form'),
  $date: $('.history__form-date input'),
  $amount: $('.history__form-amount input'),
  $description: $('.history__form-description input'),
  $paymentMethod: $('.history__form-payment-method input'),
  $category: $('.history__form-category input'),
  $submitBtn: $('.history__form-button'),
  $amountIcon: $('.history__form-amount button img'),
};
