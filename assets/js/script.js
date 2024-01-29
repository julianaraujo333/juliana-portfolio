const iconMenu = document.querySelector(".nav--icon")
const navMenu = document.querySelector(".nav--menu")


console.log('OK')

iconMenu.addEventListener('click', function(){
	navMenu.classList.toggle('hidden');
});
