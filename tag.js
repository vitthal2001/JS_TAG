
function addTag()
{
    let a=document.getElementById("text").value

     let div=document.createElement("div");
     div.classList.add("tag");

     
     let p=document.createElement("p");
     p.classList.add("value");
     p.setAttribute("id","one");
     div.append(p);
     p.append(a);

     

     let icon=document.createElement("i");
     icon.classList.add('fa-sharp', 'fa-solid', 'fa-circle-xmark');
     div.append(icon);

     icon.addEventListener("click",function(event){
        console.log("hello");
        event.target.parentNode.remove();
    })

     document.getElementById("container").appendChild(div);

}


document.getElementById("btn").addEventListener("click",function(){
    console.log(addTag());
    document.getElementById('text').value=" ";
})


document.getElementById('text').addEventListener('keyup',(event)=>{
    if(event.key=="Enter")
    {
        addTag();
    }
    
})




