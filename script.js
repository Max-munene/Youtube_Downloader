var downloadBtn = document.querySelector('.download-btn')
var URLinput = document.querySelector('.URL')

downloadBtn.addEventListener('click',() => {
    console.log(`URL: ${URLinput.value}`)
    sendURL(URLinput.value)
})

function sendURL(URL) {
    // fetch(`http://localhost:4000/download?URL=${URL}`, {
    //     method:'GET'
    // }).then(res =>res.json())
    // .then(json => console.log(json))

// Replace the fetch ith a redirect to the URL to download the video
    window.location.href = `http://localhost:4000/Downloads? URL=${URL}`
} 