(function(){
const add = document.querySelector(".add");
const input = document.querySelector(".input");
const box = document.querySelector(".box");
console.log(box.style.height);


add.addEventListener('click',function(){
    

    if(input.value==''){
        alert("Please add a task !");
    }else{
        let x;
        let curh;
        curh = box.clientHeight;
        x= curh + 100;
        box.style.height = x + "px";

        
    const list = document.createElement('li');
    
    list.innerHTML= input.value;
    box.appendChild(list);

    const cross = document.createElement('div');

    cross.innerHTML = "X";
    cross.className = "cross";
    box.appendChild(cross);
    cross.style.position = "relative";
    cross.style.left = "360px";
    cross.style.bottom = "20px";


    cross.addEventListener('click',function(){
          
        list.style.display = "none";
        cross.style.display = "none";
        
    })
     

    list.style.position = "relative";
    list.style.left = "50px"
    input.value='';
    
    
    list.addEventListener('click',function(){
        if(list.style.textDecoration != "line-through"&&list.style.color != "gray"){
            list.style.textDecoration = "line-through";
            list.style.color = "gray"
        }
        else{
            list.style.textDecoration = "none";
            list.style.color = "black";
        }
         
        

    })
    }
    

})






})();