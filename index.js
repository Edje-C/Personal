let lightSwitch = document.querySelector('.lights-container');
let lights = document.querySelector('.lights');
let body = document.querySelector('body');

lightSwitch.addEventListener('click', () => {
  if(body.dataset.switch) {
    body.classList.remove('pixel-background');
    body.dataset.switch = '';
    lights.innerText = 'lights on';
  }
  else {
    body.classList.add('pixel-background');
    body.dataset.switch = 'on';
    lights.innerText = 'lights out';
  }
})