const totalViewChart = document.getElementById('total-views-chart');
const revenueChart = document.getElementById('revenue-chart');
const growthRateChart = document.getElementById('growth-rate-chart');

new Chart(totalViewChart, {
    type: 'line',
    data: {
        labels: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
        datasets: [{
            label: '# of Votes',
            data: [12545, 19512, 24574, 29564, 44547],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
})

new Chart(revenueChart, {
    type: 'line',
    data: {
        labels: ['Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [255, 280, 290, 179, 512, 580],
        borderWidth: 1
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})
