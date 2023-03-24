# fe-max--wise-wallet

## Table of Contents

- [Project Requirements](#project-requirements)
  - [About](#about)
  - [Features](#features)
- [Approach](#approach)

## Project Requirements

### About

- A ledger service that records bookkeeping entries.
- cf. Banksalad

### Features

- [ ] **Main View**
  - [ ] **Top Header**
    - [x] **Logo**
    - [ ] **Month Carousel**
      - [x] Display the current month
      - [ ] Press left/right arrow keys to change the current month
    - [ ] **Views Nav**
      - [x] Navigate to clicked view
      - [ ] Press "Z" to change views
      - [ ] Press "R" to return to original view
  - [ ] **Input Bar**
    - [x] **Date**
      - [x] Date input
    - [x] **Amount**
      - [x] Indicate whether income or expense
      - [x] Amount input
        - [x] Thousands separator (",")
    - [x] **Content**
      - [x] Text input
    - [ ] **Payment Method**
      - [x] Click to reveal dropdown panel
      - [x] Dropdown panel options
        - [x] Display payment method
        - [x] Delete button (open modal for confirmation)
          - [ ] Upon confirmation, remove the payment method from the panel options
          - [ ] Entries of this payment method should be emptied?
        - [x] Add payment method option (open modal for submission)
          - [ ] Upon submission, add the payment method to the panel options
    - [x] **Category**
      - [x] Click to reveal dropdown panel
        - [x] Reveal income or expense options depending on the indicator in Amount
      - [x] Dropdown panel options
        - [x] Display category
    - [ ] **Submit Button**
      - [x] Only activate when all fields are filled
      - [ ] Upon submission, store the entry.
  - [ ] **Entries**
    - [ ] Display the current month's entries
      - [ ] Ordered in latest date
    - [ ] **Header portion**
      - [ ] Total number of entries
      - [ ] Filter options for income and expense
    - [ ] **Entries by Date**
      - [ ] **Header portion**
        - [ ] Date, total income amount, total expense amount
        - [ ] **Entry**
          - [ ] Category, content, payment method, amount
          - [ ] Hover to reveal delete button (open modal for confirmation)
            - [ ] Upon confirmation, delete the entry
  - [x] **Common**
    - [x] **Modal**
      - [x] Title
      - [x] Content
      - [x] Cancel, proceed buttons
- [ ] **Calendar View**
  - [ ] **Calendar**
    - [ ] Day
      - [ ] Income, expense, sum
  - [ ] Footer
    - [ ] Total income, expense, sum
- [ ] **Chart View**
  - [ ] **Pie Chart**
    - [ ] Total expense of current month
    - [ ] List of total expense per category (in descending order)
      - [ ] Category, percentage, total category expense
      - [ ] Click category to reveal expense trend graph and entries
  - [ ] **Expense trend graph and entries**
    - [ ] Display the cateogry's expenses for the recent 6 months

## Approach

- Web Components
