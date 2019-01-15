var dom = document.getElementById("pie-charts2");
var myChart = echarts.init(dom);
var app = {};
option = null;
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data:['18-30','31-40','41-50','51-60','65岁以上','未标明'],
        textStyle : {
            color:"#fff"
        }
    },
    series: [
        {
            name:'违法犯罪人员年龄分布',
            type:'pie',
            radius: ['45%', '75%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'18-30'},
                {value:310, name:'31-40'},
                {value:234, name:'41-50'},
                {value:135, name:'51-60'},
                {value:135, name:'65岁以上'},
                {value:1548, name:'未标明'}
            ]
        }
    ],
    color: ['#c1232b','#27727b','#fcce10','#e87c25','#b5c334','#fe8463']
};

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

window.addEventListener("resize", () => {
    this.myChart.resize();
});
