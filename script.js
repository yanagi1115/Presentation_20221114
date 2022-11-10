let emptychart = [];

function makeCorrectChart(){     
    let nop = document.getElementById("inputtext").value;
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
    // output.innerText = chart; //[object Object],[object Object]…になってしまう
    // console.log(chart);
    // emptychart = chart;
}

function fixnop(){
  let nop = document.getElementById("inputtext").value;
  output.innerText = nop;
}

const output = document.getElementById("output");
const target = document.getElementById("emptychartbutton");
target.addEventListener('click', fixnop);
// console.log(nop);
console.log(output.innerText);

makeCorrectChart(output.innerText);

// ココから下、一旦保留

// const people = document.getElementById("inputtext").value;
// console.log(people);
// const chart = makeCorrectChart(people);
// const initialchart = JSON.parse(JSON.stringify(chart));

// let result = [];
// result.push(initialchart);

// function changeChart2(array){
  
//   newchart[array[0]][array[1]] = "o";
//   newchart[array[1]][array[0]] = "o";
//   return newchart;
// }
// const newchart = JSON.parse(JSON.stringify(initialchart));
// function changeChartDaily2(array){
//   for (let i = 0 ; i < array.length ; i++ ){
//   changeChart2(array[i]);
//   }
//   result.push(JSON.parse(JSON.stringify(newchart)));
// }



// console.log("Initial chart: ", result[0]);

// const day1 = [[0, 1], [2, 3], [4, 5]]
// changeChartDaily2(day1);
// console.log("After Day1 : ", result[1]);

// const day2 = [[0, 2], [1, 4], [3, 5]];
// changeChartDaily2(day2);
// console.log("After Day2 : ", result[2]);

// const day3 = [[0, 3], [1, 5], [2, 4]];
// changeChartDaily2(day3);
// console.log("After Day3 : ", result[3]);

// const day4 = [[0, 4], [1, 3], [2, 5]];
// changeChartDaily2(day4);
// console.log("After Day4 : ", result[4]);

// const day5 = [[0, 5], [1, 2], [3, 4]];
// changeChartDaily2(day5);
// console.log("After Day5 : ", result[5]);
