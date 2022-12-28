let API= "AIzaSyCHOY7ZmedCy081l99eJJGrc4tn8lndIVA"

let getData = async () =>{

  try{

        let q=document.getElementById("query").value;

          let res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${q}&key=${API}&part=snippet&maxResults=50`)
         let {items} = await res.json()

          vid = items
         
          appendVideo(vid)
         
         console.log(vid)
  }
  catch(err){

  }

};

getData();


let appendVideo = (data) =>{
 document.querySelector("#result").innerHTML=null;


 data.forEach((el) =>{
     
    
     
        let div=document.createElement("div")
        div.addEventListener("click", () => {
         video(el);
       });

         let img=document.createElement("img")
           img.src=el.snippet.thumbnails.high.url

     let name=document.createElement("h5")
       name.innerText= el.snippet.title

         div.append(img,name)
         document.querySelector("#result").append(div)

   

 });
};


function video(ele){

     
     localStorage.setItem("click_video",JSON.stringify(ele))

     window.location="show.html"
     console.log("yes")   
 }


 document.querySelector("#scan").addEventListener("click", scan);


function scan(event) {
event.preventDefault();
let fill = document.querySelector("#fil").value;
if (fill.length == 0) {
 getData();
} else {
 let newdata = vid.filter((ele) => {
   return ele.snippet.title.includes(fill);
 });
 console.log("chekkk", newdata);
 appendVideo(newdata);
}
}