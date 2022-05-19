const text =document.querySelector(".inputs input");            //get elements
const btnCheck = document.querySelector(".inputs button");
const resultsText = document.querySelector(".info-text");


let filterInput ;

btnCheck.addEventListener("click",()=>{
    filterInput=filterInput.toLowerCase();                                                  //convert text to lower case for compering
    
    let reverse = filterInput.split("").reverse().join("").toLowerCase();                   //split characters->reverse->join spaces ignored to lower case too
  
    resultsText.style.display="block";                                                      //make the results text visible

    if(filterInput === reverse){
        resultsText.innerHTML = 'Yes,<span>'+filterInput+'</span> is a palindrome!</p>';    //show results if true match
    }else {
        resultsText.innerHTML = 'No,<span>'+filterInput+'</span> is not a palindrome</p>'; //show results if false match
    }

});
text.addEventListener("keyup",()=>{                             //after every character input
     filterInput = text.value.replace(/[^A-Z0-9]/ig,"");        //replace special characters with spaces

    if(filterInput){                                            //if user inputs text allow btn to click
        return btnCheck.classList.add("active");
    }
    btnCheck.classList.remove("active");                        //default don't allow button to click if no text input exists
    resultsText.style.display="none";                           //default don't display reults text/message

});