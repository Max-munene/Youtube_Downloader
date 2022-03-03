const express = require('express')
const cors = require("cors")
const ytdl = require('ytdl-core')
const app = express();

app.use(cors())
// Set app to list to port 4000
app.listen(4000, () => {
    console.log('Server is Up!: Port 4000')
})

//Listen for the get request on the /download path
app.get('/Downloads', (req, res) => {
    var URL = req.query.URL
    // req.json({url:URL})
})

res.header('Content-Disposition', 'attachment; filename="Myvideo.mp4"');

ytdl(URL, {
    format: 'mp4'
    }).pipe(res);
// });