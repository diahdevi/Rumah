const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
    } else if (window.scrollY <= 0) {
        navbar.classList.replace('nav-color', 'bg-transparent');
    }
});

const buttonleft = document.getElementById('Buttonleft');
buttonleft.addEventListener('click', function() {
  window.alert('Coming Soon');
});

const buttonright = document.getElementById('Buttonright');
buttonright.addEventListener('click', function() {
  window.alert('Coming Soon');
});

const buttonjual = document.getElementById('btn-cari-jual');
buttonjual.addEventListener('click', function() {
  window.alert('Coming Soon');
});

const buttonsewa = document.getElementById('btn-cari-sewa');
buttonsewa.addEventListener('click', function() {
  window.alert('Coming Soon');
});

const buttonproperty = document.getElementById('btn-cari-property');
buttonproperty.addEventListener('click', function() {
  window.alert('Coming Soon');
});

const buttonkontak = document.getElementById('btn-kontak');
buttonkontak.addEventListener('click', function() {
  window.alert('Coming Soon');
});
