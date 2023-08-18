var convertBtn = document.querySelector('button');
var URLinput = document.querySelector('.URL-input');
console.log('convertBtn:', convertBtn);
console.log('URLinput:', URLinput);

convertBtn.addEventListener('click', function () {
	console.log(`URLinput: ${URLinput.value}`);

	sendURL(URLinput.value);
});

function sendURL(URL) {
	window.location.href = `http://localhost:4000/download?URL=${URL}`;
}

// const express = require('express');
// const cors = require('cors');
// const ytdl = require('ytdl-core');
// const app = express();
// app.use('/static', express.static('./static'));
// app.listen(3000, () => {
// 	console.log('It Works!');
// });

// app.get('/', (req, res) => {
// 	res.sendFile('index.html', { root: './' });
// });

// app.get('/download', (req, res) => {
// 	var url = req.query.url;
// 	res.header('Content-Disposition', 'attachment;  filename="Video.mp4');
// 	ytdl(url, { format: 'mp4' }).pipe(res);
// });
