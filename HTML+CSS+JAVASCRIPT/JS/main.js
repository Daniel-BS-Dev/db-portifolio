//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.jl-preloader');
    pagePreloder.classList.add('jl-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//button contact
let btnContact = document.querySelector('.jl-btn-contact');

btnContact.addEventListener('click', function(){
    let boxContact = document.querySelector('.jl-container-info');
    boxContact.classList.toggle('jl-is-open');
    this.classList.toggle('jl-change-icon');
 });