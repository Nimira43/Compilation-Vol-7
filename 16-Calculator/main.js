const opts = ['*', '/', '+', '-', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'];
const spec = ['*', '/', '+', '-'];

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
