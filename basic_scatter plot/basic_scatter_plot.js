// using d3 v3
// scatter plot
var h = 350;
var w= 400;
// Data Array 선언
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

// KPI color
// Data의 값에 따라 지정된 색상 코드 반환
// rgb 함수도 반환 가능
function salesKPI(d){
  if (d>=250){ return "#33CC66"; } else
  if (d<250) { return "#666666"; }
}
// Label 표시용 함수
// show all or min/max values only

function showMinMax(ds,col,val,type){
  var max = d3.max(ds, function(d) {return d[col];});
  var min = d3.min(ds, function(d) {return d[col];});
  if (type=='minmax' && (val==max||val==min)){
    return val;
    }
  else{
    if (type=='all'){
      return val;
      // "all" 입력시 전체 Text 표시 
    }
  }
}

// create svg 
// 전체 SVG 크기 지정
var svg = d3.select("body").append("svg")
            .attr("width",w) // 폭 지정
            .attr("height",h); //높이 지정
// add dots
// Circle 객체 선정
var dots = svg.selectAll("circle")
  .data(monthlySales)
  .enter()
  .append("circle")
  .attr({
    cx: function(d){ return d.month*3; },
    cy: function(d){ return h-d.sales; },
    r: 5,
    "fill":function(d){return salesKPI(d.sales);}
  });
        
// add lables
// text 객체 추가 
var labels = svg.selectAll("text")
  .data(monthlySales)
  .enter()
  .append("text")
  .text(function(d){ return showMinMax(monthlySales,
                    "sales",d.sales,'minmax');})
  .attr({
    x: function(d) { return (d.month*3)-28; },
    y: function(d) { return h-d.sales; },
    "font-size": "12px",
    "font-family" : "sans-serif",
    "fill" : "#666666",
    "text-anchor" : "start"
  });

  
