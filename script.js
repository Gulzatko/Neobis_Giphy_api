let APIKEY ="mn4AUcpnKuGAvExTtc6MuzJQS8Bgt51I";

document.addEventListener("DOMContentLoaded", getData);

function getData(){
 document.getElementById("searchBtn").addEventListener("click",e=>{
    e.preventDefault();
    let url =`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=2&q=`;
    let str = document.getElementById("search").value.trim();
    url= url.concat(str);
    console.log(url);
    fetch(url)
    .then(response=>response.json())
    .then(content=>{
        // data, pagination, meta
        console.log(content.data);
        console.log('META', content.meta);
       let fig =document.createElement('figure');
       let img =document.createElement('img');
       let fc = document.createElement('figcaption');
       img.src = content.data[0].images.downsized.url;
       img.alt = content.data[0].title;
       fc.textContent =content.data[0].title;
       fig.appendChild(img);
       fig.appendChild(fc);
       let display = document.querySelector('.display');
       display.appendChild(fig);
    })
    .catch(err=>{
      console.error(e)  
    })
 })   
}