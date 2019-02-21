let lightsOut = document.querySelector('.lights');
let body = document.querySelector('body');

lightsOut.addEventListener('click', () => {
  if(body.dataset.switch) {
    body.classList.remove('pixel-background');
    body.dataset.switch = '';
    lightsOut.innerText = 'lights on';
  }
  else {
    body.classList.add('pixel-background');
    body.dataset.switch = 'on';
    lightsOut.innerText = 'lights out';
  }
})