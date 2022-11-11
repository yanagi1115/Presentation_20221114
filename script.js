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

const target11 = document.getElementById("emptychartbutton");
target11.addEventListener('click', makeCorrectChart);

const target12 = document.getElementById("savebutton");
target12.addEventListener('click', saveInitialChart);

let result = [];
let initialchart = [];
let newchart = [];
function saveInitialChart(){
  initialchart = JSON.parse(JSON.stringify(emptychart));
  result.push(initialchart);
  newchart = JSON.parse(JSON.stringify(initialchart));
}

const target21 = document.getElementById("changebutton");
target21.addEventListener('click', changeChartDaily);

function changeChartDaily(){
  let num1 = document.getElementById("inputchange1").value;
  let num2 = document.getElementById("inputchange2").value;
    newchart[num1][num2] = "o";
    newchart[num2][num1] = "o";
}

const target22 = document.getElementById("clearbutton");
target22.addEventListener('click', clearTextbox);

function clearTextbox(){
  document.getElementById("inputchange1").value = "";
  document.getElementById("inputchange2").value = "";
}

const target23 = document.getElementById("finishbutton");
target23.addEventListener('click', outputChart);

function outputChart(){
  console.log(newchart);
  console.log(result);
  result.push(JSON.parse(JSON.stringify(newchart)));
}

const target13 = document.getElementById("displaybutton");
target13.addEventListener('click', displayInitialChart);

function displayInitialChart(){
const intchart = document.getElementById("initialchart");

initialchart.forEach((player) => {  // 配列の中のオブジェクトの数だけ処理を繰り返す
  const tr = document.createElement("tr");  
  intchart.appendChild(tr); // 表の中に８個の「tr」（行）ができる
  // 1行の中を生成
  const objArray = Object.entries(player);  // オブジェクトを配列に
  objArray.forEach((arr) => { // No, name, age, gradeの4回繰り返す
    const td = document.createElement("td");
    td.textContent = arr[1];  // arr[1]はvalueの部分
    tr.appendChild(td);
  });
});
}

const target24 = document.getElementById("displaybutton2");
target24.addEventListener('click', displayChangeChart);

function displayChangeChart(){
const cngechart = document.getElementById("changechart");

newchart.forEach((object) => {  // 配列の中のオブジェクトの数だけ処理を繰り返す
  const tr = document.createElement("tr"); 
  cngechart.appendChild(tr); // 表の中に８個の「tr」（行）ができる
  // 1行の中を生成
  const objArray = Object.entries(object);  // オブジェクトを配列に
  objArray.forEach((arr) => { // No, name, age, gradeの4回繰り返す
    const td = document.createElement("td");
    td.textContent = arr[1];  // arr[1]はvalueの部分
    tr.appendChild(td);
  });
});
}
