const mouth1 = document.getElementById('avatar-mouth-1');
const mouth2 = document.getElementById('avatar-mouth-2');

const toggleSmile = () => {
  if (mouth1.style.display === 'block') {
    mouth1.style.display = 'none';
    mouth2.style.display = 'block';
    setTimeout(() => {
      mouth2.style.display = 'none';
      mouth1.style.display = 'block';
    }, 1000);
  }
};

window.addEventListener('scroll', toggleSmile);
