var convertBtn = document.querySelector('.download-button');
var URLinput = document.querySelector('.URL');

convertBtn.addEventListener('click', () => {
  console.log(`URL: ${URLinput.value}`);
  sendURL(URLinput.value);
});

function sendURL(URL) {
  window.location.href = `http://localhost:4000/download?URL=${URL}`;
}
