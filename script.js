let APIKEY ="mn4AUcpnKuGAvExTtc6MuzJQS8Bgt51I";

document.addEventListener("DOMContentLoaded", getData);

function getData(){
    document.getElementById("searchBtn").addEventListener("click", e=>{
    e.preventDefault();
    let url =`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=10&q=`;
    let str = document.getElementById("search-input").value.trim();
    url= url.concat(str);
    console.log(url);
   
    fetch(url)
    .then(response=>response.json())
    .then(content=>{
        // data, pagination, meta
        console.log(content.data);
        console.log('META', content.meta);
         console.log(content);
          const display = document.querySelector(".display")
          let ul = document.createElement("ul");
          ul.classList.add("giphy-ul")
          display.appendChild(ul);
          let li =document.createElement("li");
          li.classList.add("giphy-li");
          ul.appendChild(li);
           for(let i=0; i<content.data.length; i++){
            let img = document.createElement("img");
              img.src = content.data[i].images.downsized.url;
              li.appendChild(img);
              
           }
           document.getElementById("search-input").value = '';
           
         })
         .catch(err=>{
          console.error(err)  
        })
       
    })
    
   }
 