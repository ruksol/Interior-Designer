const navigation = document.querySelector('.navigation');
const menu = document.querySelector('.menu-icon');
const x_btn = document.querySelector('.x-btn');

let start = false;

menu.addEventListener('click', () => {
  navigation.classList.add('navigate');
});

x_btn.addEventListener('click', () => {
  navigation.classList.remove('navigate');
});

window.addEventListener('scroll', () => {
  const about = document.querySelector('.about');
  const service = document.querySelector('.services');
  const portfolio = document.querySelector('.portfolio');
  const data = document.querySelector('.data');
  const nums = document.querySelectorAll('.num');

  if (window.pageYOffset > 200) {
    about.classList.add('change');
  } else {
    about.classList.remove('change');
  }

  // console.log(pageYOffset);

  if (window.pageYOffset >= about.offsetTop + 200) {
    service.classList.add('change');
  } else {
    service.classList.remove('change');
  }

  if (window.pageYOffset > service.offsetTop + 200) {
    portfolio.classList.add('change');
  } else {
    portfolio.classList.remove('change');
  }

  if (window.scrollY >= data.offsetTop - 300) {
    if (!start) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    start = true;
  }

  console.log(about.offsetTop);
});

//counts for data section
const startCount = (item) => {
  const max = item.dataset.val;
  const count = setInterval(() => {
    item.textContent++;
    if (item.textContent === max) {
      clearInterval(count);
    }
  }, 5);
};
