const iconMenu = document.querySelector(".nav--icon")
const navMenu = document.querySelector(".nav--menu")


console.log('OK')

iconMenu.addEventListener('click', function(){
	if (navMenu.style.display === 'none' || navMenu.style.display === '') {
		navMenu.style.display = 'block';
		navMenu.style.height = 'auto';
		navMenu.style.opacity = '1';
	} else {
		navMenu.style.display = 'none';
		navMenu.style.height = '0';
		navMenu.style.opacity = '0';
	}
});


function toggleMenu() {
	if (window.innerWidth > 790) {
		if (navMenu.style.display === 'none' || navMenu.style.display === '') {
			navMenu.style.display = 'flex';
			navMenu.style.height = 'auto';
			navMenu.style.opacity = '1';
		} else {
			navMenu.style.display = 'none';
			navMenu.style.height = '0';
			navMenu.style.opacity = '0';
		}
	} else {
		navMenu.style.display = 'none';
		navMenu.style.height = '0';
		navMenu.style.opacity = '0';
	}
}

toggleMenu();

window.addEventListener('resize', toggleMenu);