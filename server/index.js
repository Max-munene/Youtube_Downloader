const express = require('express')
const cors = require("cors")
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus:200
}
const ytdl = require('ytdl-core')
const app = express();

app.use(cors(corsOptions))
// Set app to list to port 4000
app.listen(4000, () => {
    console.log('Server is Up!: Port 4000')
})

//Listen for the get request on the /download path
app.get('/download', (req, res) => {
    var URL = req.query.URLinput
    req.json({url:URLinput})
// console.log(URL)

res.header('Content-Disposition', 'attachment; filename="Myvideo.mp4"');

ytdl(URLinput, { format: 'mp4' }).pipe(res);
console.log()
});