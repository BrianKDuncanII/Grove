var leaves = 0;
var leavesPerSecond = 0;

var seeds = 0;
var saplings = 0;

var seedCost = 25;

var seedGrowCounter = 0;

var consoleCount = 0;

var darkMode = false;

// Time of Day & Seasons
var year = 0;
var month = 3;
var day = 1;
var season = "Spring";

setInterval(tick, 1000);
setInterval(fastTick, 100);

function tick() {
  if (seeds > 0) {
    seedGrowCounter++;
    if (seedGrowCounter >= 5) {
      seedGrow();
      seedGrowCounter = 0;
    }
  }

  if (saplings > 0) {
    leaves += saplings;
    document.getElementById("leaf_counter").innerHTML = leaves;
  }

  if (day == 30) {
    day = 1;
    month++;
  } else {
    day++;
  }

  if (month == 13) {
    month = 1;
    year++;
  }
}

function fastTick() {
  if (leaves < seedCost) {
    document.getElementById("buy_seed").className = "btn btn-dark";
  } else {
    document.getElementById("buy_seed").className = "btn btn-success";
  }

  if (leaves >= 25 && document.getElementById("seed_item").style.display == "none") {
    document.getElementById("seed_item").style.display = "block";
    document.getElementById("seed_item").style.animationPlayState = "running";
    addToConsole("You know how to produce seeds now.");
  }
}

function seedGrow() {
  seeds--;
  saplings++;
  leavesPerSecond++;

  document.getElementById("leavesPerSecond_counter").innerHTML = "(" + leavesPerSecond + " Leaves/Sec)";
  document.getElementById("seed_counter").innerHTML = "Seeds: " + seeds;
  document.getElementById("sapling_counter").innerHTML = "Saplings: " + saplings;
  addToConsole("A sapling grew!");
}

function growLeaf() {
  leaves += 1;
  document.getElementById("leaf_counter").innerHTML = leaves;
}

function buySeed() {
  if (leaves >= seedCost) {
    seeds += 1;
    leaves -= seedCost;
    seedCost += Math.round(seedCost * 0.15);
  }

  document.getElementById("seed_counter").innerHTML = "Seeds: " + seeds;
  document.getElementById("leaf_counter").innerHTML = leaves;
  document.getElementById("seed_cost").innerHTML = "Costs: " + seedCost;
}

function sellSeed() {
  if (seeds > 0) {
    seeds -= 1;
    leaves += seedCost;
    seedCost -= Math.round(seedCost * 0.15);
  }

  document.getElementById("seed_counter").innerHTML = "Seeds: " + seeds;
  document.getElementById("leaf_counter").innerHTML = leaves;
  document.getElementById("seed_cost").innerHTML = "Costs: " + seedCost;
}

function addToConsole(textPass) {
  document.getElementById("consoleText8").innerHTML = document.getElementById("consoleText7").innerHTML;
  document.getElementById("consoleText7").innerHTML = document.getElementById("consoleText6").innerHTML;
  document.getElementById("consoleText6").innerHTML = document.getElementById("consoleText5").innerHTML;
  document.getElementById("consoleText5").innerHTML = document.getElementById("consoleText4").innerHTML;
  document.getElementById("consoleText4").innerHTML = document.getElementById("consoleText3").innerHTML;
  document.getElementById("consoleText3").innerHTML = document.getElementById("consoleText2").innerHTML;
  document.getElementById("consoleText2").innerHTML = document.getElementById("consoleText1").innerHTML;
  document.getElementById("consoleText1").innerHTML = textPass;
}

function darkModeEnable() {
  var isChecked = document.getElementById("darkModeCheck").checked;

  if(isChecked){
    addToConsole("Dark Mode Enabled");
    darkMode = true;
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document.getElementById("console_body").style.backgroundColor = "#353535";
    document.getElementById("grow_leaf").style.color = "white";
    document.getElementById("seed_item").style.backgroundColor = "#353535";
  } else {
    addToConsole("Dark Mode Disabled");
    darkMode = false;
    document.body.style.backgroundColor = "#f9f9f9";
    document.body.style.color = "black";
    document.getElementById("console_body").style.backgroundColor = "#d1d1d1";
    document.getElementById("seed_item").style.backgroundColor = "rgb(244, 244, 244)";
  }
}

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

  $(function(){
      $("#grow_leaf").mousedown(function(e){
      var div = $('<div class="image-wrapper slide-out-blurred-top">')
        .css({
          "left": e.pageX + Math.random(12, 5) + 'px',
          "top": e.pageY + Math.random(12, 5) + 'px',
          "pointerEvents": "none",
          "textShadow": "3px 3px rgba(0, 0, 0, 0.25)",
          "color": "black",
          "font-weight": "bold"
        })
        .append($('<img src="" alt="+1" />'))
        .appendTo(document.body);
        
        
      });
  });
