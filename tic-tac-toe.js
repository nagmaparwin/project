 (function(){
 const one = document.querySelector(".one");
 const two = document.querySelector(".two");
 const three = document.querySelector(".three");
 const four = document.querySelector(".four");
 const five = document.querySelector(".five");
 const six = document.querySelector(".six");
 const seven = document.querySelector(".seven");
 const eight = document.querySelector(".eight");
 const nine = document.querySelector(".nine");
 const turn = document.querySelector(".turn");
 const reset = document.querySelector(".reset");
 const cong = document.querySelector(".cong");
 const emoji = document.querySelector(".emoji");

 



 one.addEventListener('click',function(){
   
    if(turn.innerHTML=="O's Turn"){
        
        one.innerHTML = "O";
        one.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        one.innerHTML = "X";
        one.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }
    



    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

 })




 two.addEventListener('click',function(){
    if(turn.innerHTML=="O's Turn"){
        
        two.innerHTML = "O";
        two.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        two.innerHTML = "X";
        two.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }



    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }
})


three.addEventListener('click',function(){
    if(turn.innerHTML=="O's Turn"){
        
        three.innerHTML = "O";
        three.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        three.innerHTML = "X";
        three.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }



    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
       

    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }
})


four.addEventListener('click',function(){
    if(turn.innerHTML=="O's Turn"){
        
        four.innerHTML = "O";
        four.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        four.innerHTML = "X";
        four.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }



    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        

    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        

    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
       
    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
       
    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }
})

five.addEventListener('click',function(){
    if(turn.innerHTML=="O's Turn"){
        
        five.innerHTML = "O";
        five.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        five.innerHTML = "X";
        five.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }



    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
       
    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }
})


six.addEventListener('click',function(){
    if(turn.innerHTML=="O's Turn"){
        
        six.innerHTML = "O";
        six.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        six.innerHTML = "X";
        six.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }



    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        ;
    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }
})


seven.addEventListener('click',function(){
    if(turn.innerHTML=="O's Turn"){
        
        seven.innerHTML = "O";
        seven.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        seven.innerHTML = "X";
        seven.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }




    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
       
    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }
})


eight.addEventListener('click',function(){
    if(turn.innerHTML=="O's Turn"){
        
        eight.innerHTML = "O";
        eight.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        eight.innerHTML = "X";
        eight.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }




    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        o.innerHTML = o++;
    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }
})

nine.addEventListener('click',function(){
    if(turn.innerHTML=="O's Turn"){
        
        nine.innerHTML = "O";
        nine.style.cssText = "color: purple;font-size: 50px";
        
    }
    
    if(turn.innerHTML=="X's Turn"){

        nine.innerHTML = "X";
        nine.style.cssText = "color: purple;font-size: 50px";
        
    }
    if(turn.innerHTML=="O's Turn"){
        turn.innerHTML = "X's Turn";
    }
    else{
        turn.innerHTML = "O's Turn";
    }




    if(one.innerHTML=="O"&&two.innerHTML=="O"&&three.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&two.innerHTML=="X"&&three.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(four.innerHTML=="O"&&five.innerHTML=="O"&&six.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(four.innerHTML=="X"&&five.innerHTML=="X"&&six.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(seven.innerHTML=="O"&&eight.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(seven.innerHTML=="X"&&eight.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&four.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&four.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }


    if(two.innerHTML=="O"&&five.innerHTML=="O"&&eight.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(two.innerHTML=="X"&&five.innerHTML=="X"&&eight.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(three.innerHTML=="O"&&six.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&six.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "x wins !";
        
    }

    if(three.innerHTML=="O"&&five.innerHTML=="O"&&seven.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(three.innerHTML=="X"&&five.innerHTML=="X"&&seven.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }

    if(one.innerHTML=="O"&&five.innerHTML=="O"&&nine.innerHTML=="O"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "O wins !";
        
    }
    if(one.innerHTML=="X"&&five.innerHTML=="X"&&nine.innerHTML=="X"){

        emoji.innerHTML = "🥳";
        cong.innerHTML = "X wins !";
        
    }
})



reset.addEventListener('click',function(){
    
    one.innerHTML = " ";
    two.innerHTML = " ";
    three.innerHTML = " ";
    four.innerHTML = " ";
    five.innerHTML = " ";
    six.innerHTML = " ";
    seven.innerHTML = " ";
    eight.innerHTML = " ";
    nine.innerHTML = " ";
    turn.innerHTML = "O's Turn";
    emoji.innerHTML = " ";
    cong.innerHTML = " ";
})



 })();