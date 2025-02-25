let score={
    wins:0,
    loses:0,
    ties:0
  };
  let results=JSON.parse(localStorage.getItem('score')) || score;
  function updateScore(){
    

    document.querySelector('.js-score').innerHTML=`wins: ${results.wins} loses : ${results.loses} Ties :${results.ties}`;
  }
  
  function reset(){
    results={
      wins:0,
      loses:0,
      ties:0
    };
    localStorage.setItem('score',JSON.stringify(results));
    updateScore();
    document.getElementById('winner').innerHTML="";
      document.getElementById('choices').innerHTML="";
    
    localStorage.removeItem('score');
    

  }


  function fun(yourChoice){
    choices=["rock","paper","scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    if(yourChoice==="rock" && computerChoice==="scissor"){
      document.getElementById('winner').innerHTML="you won";
      document.getElementById('choices').innerHTML=`You
   <img class="image" src="images/${yourChoice}-emoji.png"> 
   <img class="image" src="images/${computerChoice}-emoji.png">
   Computer`;
      results.wins+=1;
      updateScore();

    }
    
    
    else if(yourChoice==="paper" && computerChoice==="rock"){
      document.getElementById('winner').innerHTML="you won";
      document.getElementById('choices').innerHTML=`You
   <img class="image" src="images/${yourChoice}-emoji.png"> 
   <img class="image" src="images/${computerChoice}-emoji.png">
   Computer`;
      results.wins+=1;
      updateScore();
    }
    else if(yourChoice==="scissor" && computerChoice==="paper"){
      document.getElementById('winner').innerHTML="you won";
      document.getElementById('choices').innerHTML=`You
   <img class="image" src="images/${yourChoice}-emoji.png"> 
   <img class="image" src="images/${computerChoice}-emoji.png">
   Computer`;
      results.wins+=1;
      updateScore();
    }
    else if(yourChoice=== computerChoice){
      document.getElementById('winner').innerHTML="same choice";
      document.getElementById('choices').innerHTML=`You
   <img class="image" src="images/${yourChoice}-emoji.png"> 
   <img class="image" src="images/${computerChoice}-emoji.png">
   Computer`;
      results.ties+=1;
      updateScore();

    }
    else{
      document.getElementById('winner').innerHTML="you lost";
      document.getElementById('choices').innerHTML=`You
   <img class="image" src="images/${yourChoice}-emoji.png"> 
   <img class="image" src="images/${computerChoice}-emoji.png">
   Computer`;
      updateScore();

    }
    localStorage.setItem('score',JSON.stringify(results));
    
    

  }
  updateScore();
    