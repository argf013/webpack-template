 import './style.css'

 const app = document.getElementById('app')
 // tambahkan kelas "scrolled" ke elemen "nav" saat di-scroll

 app.innerHTML = `<h1>Hello This is a Webpack Template</h1>`

 window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('scrolled', window.scrollY > 0);
});