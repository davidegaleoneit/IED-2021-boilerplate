import Hello from './components/Hello';
import Draw from './components/Draw';

function app() {
  document.body.innerHTML = `<main>${Hello}<br/>${Draw}<main>`;
}

app();
