let data = JSON.parse(localStorage.getItem("click_video"));

console.log(data.snippet.title)

let bag;


if(data.id.videoId==undefined){
  let video=data.id;
  let Title=data.snippet.title

  bag=document.querySelector("iframe");
  bag.src=src= `https://www.youtube.com/embed/${video}`

   let Pull=document.querySelector("#pull")
  Pull.innerText=Title
  
} else{
      
       video=data.id.videoId;
       Title=data.snippet.title
       bag=document.querySelector("iframe");
       bag.src=src= `https://www.youtube.com/embed/${video}`

       let Pull=document.querySelector("#pull")
       Pull.innerText=Title

}