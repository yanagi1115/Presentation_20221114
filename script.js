'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let emptychart = [];
function makeCorrectChart(){     
    let nop = document.getElementById("inputnumber").value;
    function makeInitialChart(nop){
      //全て"x"がnop並んだオブジェクト
      function makeInitialObject(nop){
        const object = {};                    
        for ( let i = 0 ; i <= nop - 1 ; i ++ ){  
          object[i] = "x";
        }
        return object;
      }
      //上記オブジェクトをnop並べた配列
      const intchart = [];
      for ( let i = 0 ; i <= nop - 1 ; i ++){
        intchart.push(makeInitialObject(nop));
      }
      return intchart;
    }
      //対角線上のvalurを"-"に書き換え
    const chart = makeInitialChart(nop);
    for ( let i = 0 ; i <= nop - 1 ; i ++){
      chart[i][i] = "-";
    }
    emptychart = chart;
    return emptychart;
}

const target = document.getElementById("emptychartbutton");
target.addEventListener('click', makeCorrectChart);

const target2 = document.getElementById("savebutton");
target2.addEventListener('click', saveInitialChart);

let result = [];
let initialchart = [];
let newchart = [];
function saveInitialChart(){
  initialchart = JSON.parse(JSON.stringify(emptychart));
  result.push(initialchart);
  newchart = JSON.parse(JSON.stringify(initialchart));
}


// ココから下、保留


const target3 = document.getElementById("changebutton");
target3.addEventListener('click', changeChartDaily);

function changeChartDaily(){
  let num1 = document.getElementById("inputchange1").value;
  let num2 = document.getElementById("inputchange2").value;
    newchart[num1][num2] = "o";
    newchart[num2][num1] = "o";
  // result.push(JSON.parse(JSON.stringify(newchart)));
  // return result;
}

const target4 = document.getElementById("clearbutton");
target4.addEventListener('click', clearTextbox);

function clearTextbox(){
  document.getElementById("inputchange1").value = "";
  document.getElementById("inputchange2").value = "";
}


const target5 = document.getElementById("finishbutton");
target5.addEventListener('click', outputChart);

function outputChart(){
  console.log(newchart);
  console.log(result);
  result.push(JSON.parse(JSON.stringify(newchart)));
  // return result;
}

