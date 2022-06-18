// bar chart
var w =300;
var h = 120;
var padding = 2;
var dataset =[5,10,13,19,21,25,11,25,22,18,7]; // array 선언

var svg = d3.select("body").append("svg")
            .attr("width",w)
            .attr("height",h);

//20 이상인 값만 표시 
function colorPicker(v){
  if (v<=20) {return "#666666";}
  else if (v>20) {return "#FF0033";}
}

//bar size에 맞게 시작 위치 변경
//색상에 rgb 함수 호출
//데이터 추가
svg.selectAll("rect")
  .data(dataset)
  .enter() 
  .append("rect")
  .attr("x", function(d,i) {return i * (w / dataset.length);})
  .attr("y", function(d) {return h-(d*4);})
  .attr("width", w / dataset.length - padding)
  .attr("height", function(d) {return d*4;})
  .attr("fill", function(d) {return colorPicker(d);})

// add label

svg.selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text(function(d){return d})
  .attr("x", function(d,i) {return i * (w / dataset.length)+(w/dataset.length-padding)/2;})
  .attr("y", function(d) {return h-(d*4)+14;})
  .attr("text-anchor", "middle") //글자위치 수정
  .attr("font-family","sans-serif") //폰트 변경
  .attr("font-size",12)
  .attr("fill","#ffffff"); //글자색 변경
  
