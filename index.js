const urlInput = document.getElementById('urlInput');
const redirectButton = document.getElementById('redirectButton');
const validateButton = document.getElementById('validateButton');

redirectButton.addEventListener('click', () => {
  const url = urlInput.value;
  if (url) {
    window.location.href = url;
  }
});

validateButton.addEventListener('click', () => {
  const url = urlInput.value;

  if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
    urlInput.value = 'http://' + url;
  }
});