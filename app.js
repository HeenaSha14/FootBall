var score = [0,1];

var team1={
    name: "ARSENAL",
    runs: [],
    score:0
}

var team2={
    name: "LIVERPOOL",
    runs: [],
    score:0
}
var toss;

window.onload = () =>{
    selectToss();
    updateButtonText();
    updateNames();
    updateScore();
}

var selectToss = () =>{
    toss = Math.round(Math.random())+1;
    console.log(toss);
}


var updateButtonText =()=>{
    var button = document.getElementById("strikebutton");
    console.log(button);
    var result = document.getElementById("result");
    var btn1 = document.getElementById("btn1");
    result.style.visibility ="";
    
    
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove();
        btn1.textContent = "Start Agian";
        result.textContent = team1.score === team2.score ? `Its a draw`: `${team1.score > team2.score? team1.name:team2.name} WINS`;
    }
    else{
        toss = toss === 1 ? 2 : 1;
    }


    button.textContent = `${toss%2 === 1 ? team1.name:team2.name} STRIKE`;
};

var updateNames = () =>{
    document.getElementById("team1name").textContent = team1.name;
    document.getElementById("team2name").textContent = team2.name;
}

var updateScore = () =>{
    document.getElementById("team1score").textContent = team1.score;
    document.getElementById("team2score").textContent = team2.score;
    updateRuns();
}

var handleStrike=()=>{
 var runs = score[Math.floor(Math.random()*score.length)];
 console.log(runs);
 runs = runs === 5?"W": runs;
 console.log(runs);
 if (toss ===1)
   {
    team1.runs.push(runs);
   team1.score= calculateScore(team1.runs);  
   } 
   else{
    team2.runs.push(runs);
    team2.score = calculateScore(team2.runs);

   }
   updateButtonText();
   updateScore();
}

var calculateScore = (runs) =>{
console.log("Calculate score method");

return runs.map(num =>{
    
return num =='W'? 0: num;

}).reduce((total,num) => total + num

);

};
        
var updateRuns = () =>{
    var team1RunsElement = document.getElementById("team1roundruns").children;
    var team2RunsElement = document.getElementById("team2roundruns").children;

    team1.runs.forEach((run,index)=>{
        run === 1 ? team1RunsElement[index].style.backgroundColor = "#47abcc" :team1RunsElement[index].style.backgroundColor = "#be4f62";
    });
    team2.runs.forEach((run,index)=>{
        run === 1 ? team2RunsElement[index].style.backgroundColor = "#47abcc" : team2RunsElement[index].style.backgroundColor = "#be4f62";

    });
}