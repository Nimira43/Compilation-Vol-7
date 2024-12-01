const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
const spec = ['*', '/', '+', '-'];

const cOutput = (v) => {
  const output = document.getElementById('output');
  output.style.border = `${v} 1px solid`;
  output.style.color = v;
};

const evalOutput = () => {
  const output = document.getElementById('output');
  cOutput('black');
  if (output.value === "") {
    cOutput('red');
  } else if (eva) {
    cOutput('red');
  } else {
    output.value = eval(output.value);
  }
  dec = output.value.includes('.');
};

const clrOutput = () => {
  const output = document.getElementById('output');
  cOutput('black');
  output.value = "";
};

const btnMaker = (txt, myFunction) => {
  let btn = document.createElement('button');
  btn.classList.add('calculator-button');
  btn.val = txt;
  btn.textContent = txt;
  btn.addEventListener('click', myFunction);
  const main = document.getElementById('main');
  main.appendChild(btn);
};

const addOutput = (e) => {
  const output = document.getElementById('output');
  cOutput('black');
  let char = e.target.val;
  if (char === '.') {
    if (dec) {
      char = '';
      cOutput('red');
    } else {
      dec = true;
    }
  }
  eva = spec.includes(char);
  if (eva) {
    dec = false;
  }
  output.value += char;
};

const init = () => {
  document.title = "Calculator";
  let dec = false;
  let eva = false;
  const container = document.querySelector('.container');
  const output = document.getElementById('output');
  const main = document.getElementById('main');

  opts.forEach((val) => {
    btnMaker(val, addOutput);
  });
  btnMaker('=', evalOutput);
  btnMaker('C', clrOutput);
};

window.addEventListener('DOMContentLoaded', init);
