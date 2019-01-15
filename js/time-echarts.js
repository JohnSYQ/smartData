var dom = document.getElementById("timeSpan");
var myChart = echarts.init(dom);
var app = {};
option = {
    // 给echarts图设置背景色
    backgroundColor: '#263344',  // -----------> // 给echarts图设置背景色
    color: ['#7FFF00'],
    tooltip: {
        trigger: 'axis'
    },

    grid:{
        x:40,
        y:30,
        x2:5,
        y2:20,
        backgroundColor:"#263344",
        color:'#263344'

    },
    calculable: true,


    xAxis: [{
        type: 'category',
        data: ['6:00-9:00', '10:00-12:00', '13:00-15:00', '16:00-20:00', '21:00-24:00'],
        axisLabel: {
            color: "#7FFF00" //刻度线标签颜色
        },
        axisLine: {            // 坐标轴线
            show: true,         // 默认显示，属性show控制显示与否
            lineStyle: {        // 属性lineStyle控制线条样式
                color: '#48b',
                width: 1,
                type: 'solid'
            }
        },
        axisTick: {            // 坐标轴小标记
            show: true,       // 属性show控制显示与否，默认不显示
            interval: 'auto',
            // onGap: null,
            inside : false,        // 控制小标记是否在grid里
            length :5,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#48b',
                width: 1
            }
        }
    }],
    yAxis: [{

        type: 'value',
        axisLabel: {
            color: "#7FFF00" //刻度线标签颜色
        },
        axisLine: {            // 坐标轴线
            show: true,         // 默认显示，属性show控制显示与否
            lineStyle: {        // 属性lineStyle控制线条样式
                color: '#48b',
                width: 1,
                type: 'solid'
            }
        },
        axisTick: {            // 坐标轴小标记
            show: true,       // 属性show控制显示与否，默认不显示
            interval: 'auto',
            // onGap: null,
            inside : false,        // 控制小标记是否在grid里
            length :5,         // 属性length控制线长
            lineStyle: {       // 属性lineStyle控制线条样式
                color: '#48b',
                width: 1
            }
        }

    }],
    series: [{
        name: '人次',
        type: 'line',
        smooth:true,
        data: [800, 300, 500, 800, 300, 600],
    }]

};


if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

window.addEventListener("resize", () => {
    this.myChart.resize();
});
