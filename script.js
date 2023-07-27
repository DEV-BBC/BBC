let menubtn = document.getElementById('menu') 
let navbar = document.getElementById('navbar') 
let closbtn = document.getElementById('closbtn') 



menubtn.addEventListener('click', _ => {
    navbar.classList.toggle('show')

})
closbtn.addEventListener('click', _ => {
    navbar.classList.toggle('show')

})

const observer = new IntersectionObserver ((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));