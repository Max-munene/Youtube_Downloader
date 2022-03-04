var downloadBtn = document.querySelector('.download-btn')
var URLinput = document.querySelector('.URL')

downloadBtn.addEventListener('click',() => {
    console.log(`URL: ${URLinput.value}`)
    sendURL(URLinput.value)
})

async function sendURL(URL) {
    await fetch(
			`${URLinput}`,
			{ mode: "no-cors" },
			{
				method: "GET",
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Credentials": true,
				},
			},
		)
			.then((res) => res.json())
			// console.log(res.json)
			.then((json) => console.log(json));

// Replace the fetch ith a redirect to the URL to download the video
    // window.location.replace ( `http://localhost:4000/download? URL=${URL}`)
} 