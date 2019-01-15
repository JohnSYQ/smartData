var dom = document.getElementById("zoon");
var myChart = echarts.init(dom);
var app = {};
option = null;

option = {
    color: ['#fadb71'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '4%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['河北', '天津', '北京', '新疆', '内蒙', '宁夏', '海南'],
            axisLabel:{
                textStyle:{
                    fontSize:12,
                    color:'#fadb71'
                }
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
        }
    ],
    yAxis : [
        {
            type : 'value',
            splitLine:{
                show:true,
                lineStyle:{
                    type:'dashed'
                }
            },
            axisLabel:{
                textStyle:{
                    fontSize:12,
                    color:'#fadb71'
                }
            },
            axisLine:{show:false} ,
            axisTick: {
                show: false
            }
        }

    ],
    series : [
        {
            name:'地区分布',
            type:'bar',
            barMaxWidth:'45%',
            data:[10, 52, 200, 334, 390, 330, 220]
        }
    ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}

window.addEventListener("resize", () => {
    this.myChart.resize();
});
