// Get the canvas element
const canvas = document.getElementById('myChart');

// Create the chart context
const ctx = canvas.getContext('2d');

// Define the chart data
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    label: 'My Dataset',
    data: [10, 20, 30, 25, 40, 35],
    borderColor: 'rgba(0, 123, 255, 1)', // Set the line color
    backgroundColor: 'rgba(0, 123, 255, 1)', // Set the fill color
  }]
};

// Configure the chart options
const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: 'rgb(255, 255, 255)' // Change the font color of the y-axis ticks
      }
    },
    x: {
        ticks: {
            color: 'rgb(255, 255, 255)' // Change the font color of the x-axis ticks
        }
    }
  }
};

// Create the line chart
const lineChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});
