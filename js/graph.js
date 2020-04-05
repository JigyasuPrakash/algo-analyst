function createAnalyticsGraph(analytics) {
    let canvas = document.getElementById('analystChart');
    canvas.style.display = 'block';
    let ctx = canvas.getContext('2d');
    chart = new Chart(ctx, {
        type: 'line',

        data: {
            labels: [10, 100, 1000, 10000, 100000],
            datasets: [{
                borderColor: "#f17e5d",
                backgroundColor: "rgb(0,0,0,0)",
                pointRadius: 2,
                pointHoverRadius: 4,
                borderWidth: 3,
                label: "Time(in secs)",
                data: analytics
            }]
        },
        options: {
            legend: {
                display: true
            },

            tooltips: {
                enabled: true
            },

            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "#9f9f9f",
                        beginAtZero: true,
                    },
                    gridLines: {
                        drawBorder: true,
                        zeroLineColor: "#ccc",
                        color: 'rgba(0,0,0,0.1)'
                    }

                }],
                xAxes: [{
                    gridLines: {
                        drawBorder: false,
                        color: 'rgba(0,0,0,0.1)'
                    },
                    ticks: {
                        padding: 20,
                        fontColor: "#9f9f9f",
                    }
                }]
            },
        }
    });
}