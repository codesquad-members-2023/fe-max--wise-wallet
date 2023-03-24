import { initDateInput } from './historyInput/DateInput.js';
import { checkForm } from './historyInput/CheckForm.js';
import { Header } from './header/index.js';

function App() {
  Header();
  initDateInput();
  checkForm();
}

App();
