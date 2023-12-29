const navigation = document.querySelector('.navigation');
const menu = document.querySelector('.menu-icon');
const x_btn = document.querySelector('.x-btn');

menu.addEventListener('click', () => {
  navigation.classList.add('navigate');
});

x_btn.addEventListener('click', () => {
  navigation.classList.remove('navigate');
});
