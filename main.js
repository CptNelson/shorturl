
const form = document.getElementById("form");
const longUrl = form["longUrl"]
const button = document.getElementById("button");

let shortUrl = "";

button.onclick = () => {
  shortUrl = longUrl.value;

  axios.get(`https://xyj6p5qyplgfqczk601yiwam.hooks.n8n.cloud/webhook-test/url?url=${longUrl.value}`)
 //   .then((response) => {
  //    console.log(response.data);
   // });

  document.getElementById("shortUrl").textContent = shortUrl;
}

