
var dom = document.getElementById("pie-charts");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    title : {
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['卖淫嫖娼','经侦嫌疑','重点人口','刑侦重点','吸毒人口'],
        textStyle : {
            color:"#fff"
        }
    },
    series : [
        {
            name: '违法犯罪人员分析',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'卖淫嫖娼'},
                {value:310, name:'经侦嫌疑'},
                {value:234, name:'重点人口'},
                {value:135, name:'刑侦重点'},
                {value:1548, name:'吸毒人口'}
            ]
        }
    ],
    color: ['#c1232b','#27727b','#fcce10','#e87c25','#b5c334']
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

window.addEventListener("resize", () => {
    this.myChart.resize();
});
