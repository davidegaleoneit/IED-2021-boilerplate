import Hello from './components/Hello';
import Title from './components/Title';
import Draw from './components/Draw';
import Draw2 from './components/Draw2';

function app() {
  document.body.innerHTML = `
  <main>
  ${Title('ciao come va')}
  <br/>
  ${Title('ciao come uno')}
  <br/>
  ${Title('ciao come due')}
  <br/>
  ${Title('ciao come tre')}
  <br/>
  ${Hello}
  <br/>
  ${Draw}
  </br>
  ${Draw2}
  <main>`;
}

app();
