// using d3 v3
var h = 350;
var w= 400;
monthlySales=[
  {"month":10,"sales":100},
  {"month":20,"sales":130},
  {"month":30,"sales":250},
  {"month":40,"sales":300},
  {"month":50,"sales":265},
  {"month":60,"sales":226},
  {"month":70,"sales":180},
  {"month":80,"sales":120},
  {"month":90,"sales":145},
  {"month":100,"sales":130},
];

var lineFun = d3.svg.line()
  .x(function(d) {return d.month*3;})
  .y(function(d) {return h-d.sales;})
  .interpolate("linear"); //d3 js 문서 참조

var svg = d3.select("body").append("svg")
            .attr("width",w)
            .attr("height",h);

var viz=svg.append("path")
  .attr({
    d:lineFun(monthlySales),
    "stroke":"purple",
    "stroke-width": 2,
    "fill": "none"
  });
// add labels
var labels = svg.selectAll("text")
  .data(monthlySales)
  .enter()
  .append("text")
  .text(function(d){return d.sales;})
  .attr({
    x: function(d) {return d.month*3-25;},
    y: function(d) {return h-d.sales;},
    "font-size" :"12px",
    "font-family": "sans-serif",
    "text-anchor":"start",
    "dy1":".35em",
    // text강조 시 함수 활용 가능
    "font-weight": function(d,i){
      // "==", "===" 차이있음
      if(i===0 || i==(monthlySales.length-1)){
        return "bold";}
      else{
        return "normal";}
      }
  });
