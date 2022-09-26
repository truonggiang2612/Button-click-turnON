const toggle = document.querySelector('.toggle');
const text = document.querySelector('.text');

toggle.onclick = () => {
      console.log('click');
      toggle.classList.toggle('active')
      if (toggle.classList.contains('active')) {
            text.innerHTML = 'ON'
      } else {
            text.innerHTML = 'OFF'
      }
}