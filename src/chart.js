// chart js
let myChart = document.getElementById("myChart").getContext("2d");

let lineChart = new Chart(myChart, {
  type: "line",
  data: {
    labels: ["Dataset", "Code", "Features Stores", "Model Zoo ", "File"],
    datasets: [
      {
        label: ["Private", "Public"],
        data: [300, 150, 100, 100, 100],
        backgroundColor: [
          "#6D5DC0",
          "#538AEC",
          "#8ADD9D",
          "#EFB15A",
          "#D7605D",
        ],
        borderColor: ["#6D5DC0", "#538AEC", "#8ADD9D", "#EFB15A", "#D7605D"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "top",
      },
      title: {
        display: true,
        text: "Summary",
        align: "right",
      },
    },
  },
});

let doughnutChart = new Chart(document.getElementById("myChart1"), {
  type: "doughnut",
  data: {
    labels: ["Images", "xls", "json", "csv ", "Videos"],
    datasets: [
      {
        label: "Penjualan Barang",
        data: [300, 150, 100, 100, 100],
        backgroundColor: [
          "#6D5DC0",
          "#538AEC",
          "#8ADD9D",
          "#EFB15A",
          "#D7605D",
        ],
        borderColor: ["#6D5DC0", "#538AEC", "#8ADD9D", "#EFB15A", "#D7605D"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "top",
      },
      title: {
        display: true,
        text: "Dataset Activity",
        align: "right",
      },
    },
  },
});

let pieChart = new Chart(document.getElementById("myChart2"), {
  type: "pie",
  data: {
    labels: ["Images", "xls", "json", "csv ", "Videos"],
    datasets: [
      {
        label: "Penjualan Barang",
        data: [300, 150, 100, 100, 100],
        backgroundColor: [
          "#6D5DC0",
          "#538AEC",
          "#8ADD9D",
          "#EFB15A",
          "#D7605D",
        ],
        borderColor: ["#6D5DC0", "#538AEC", "#8ADD9D", "#EFB15A", "#D7605D"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "top",
      },
      title: {
        display: true,
        text: "Dataset Activity",
        align: "right",
      },
    },
  },
});

let barChart = new Chart(document.getElementById("myChart3"), {
  type: "bar",
  data: {
    labels: ["Images", "xls", "json", "csv ", "Videos"],
    datasets: [
      {
        label: "Penjualan Barang",
        data: [300, 150, 100, 100, 100],
        backgroundColor: [
          "#6D5DC0",
          "#538AEC",
          "#8ADD9D",
          "#EFB15A",
          "#D7605D",
        ],
        borderColor: ["#6D5DC0", "#538AEC", "#8ADD9D", "#EFB15A", "#D7605D"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "top",
      },
      title: {
        display: true,
        text: "Login Activity",
        align: "right",
      },
    },
  },
});

let barChart4 = new Chart(document.getElementById("myChart4"), {
  type: "bar",
  data: {
    labels: ["Images", "xls", "json", "csv ", "Videos"],
    datasets: [
      {
        label: "Penjualan Barang",
        data: [300, 150, 100, 100, 100],
        backgroundColor: [
          "#6D5DC0",
          "#538AEC",
          "#8ADD9D",
          "#EFB15A",
          "#D7605D",
        ],
        borderColor: ["#6D5DC0", "#538AEC", "#8ADD9D", "#EFB15A", "#D7605D"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "top",
      },
      title: {
        display: true,
        text: "Storage",
        align: "right",
      },
    },
  },
});
