const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.dark-bg button')

signUpBtn.addEventListener('click', ()=> {
    container.classList.toggle('change');
});