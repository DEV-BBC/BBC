let menubtn = document.getElementById('menu') 
let navbar = document.getElementById('navbar') 
let closbtn = document.getElementById('closbtn') 



menubtn.addEventListener('click', _ => {
    navbar.classList.toggle('show')

})
closbtn.addEventListener('click', _ => {
    navbar.classList.toggle('show')

})