// burger
var burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
    document.querySelector('.side-nav').style.display = 'inline';
})
document.getElementById('close_btn').addEventListener('click', () => {
    document.querySelector('.side-nav').style.display = 'none';
})