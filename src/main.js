// summary bar
var summaryOption = {
  series: [
    {
      name: "Private",
      data: [12, 12, 5, 1, 2],
    },
    {
      name: "Public",
      data: [23, 11, 2, 3, 33],
    },
    {
      name: "Protected",
      data: [13, 31, 12, 23, 43],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last", // 'all', 'last'
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "12px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  xaxis: {
    type: "text",
    categories: ["Dataset", "Code", "Feature Stores", "Model Zoo", "File"],
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  title: {
    text: "Summary",
    align: "left",
  },
  fill: {
    opacity: 1,
  },
  colors: ["#DF8742", "#F6D97A", "#F6D90f"],
};

var summaryChart = new ApexCharts(
  document.querySelector("#summaryChart"),
  summaryOption
);
summaryChart.render();

// dataset activity bar
var datasetActivityOption = {
  series: [
    {
      name: "Document",
      data: [22, 24, 25, 23, 21],
    },
    {
      name: "Uplod",
      data: [11, 14, 25, 43, 51],
    },
  ],
  chart: {
    type: "area",
    stacked: false,
    height: 350,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: "zoom",
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  title: {
    text: "Dataset Activity",
    align: "left",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return (val / 0.1).toFixed(1);
      },
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return (val / 1000000).toFixed(0);
      },
    },
  },
};

var datasetActivitys = new ApexCharts(
  document.querySelector("#datasetActivityChart"),
  datasetActivityOption
);
datasetActivitys.render();

// dataset bar
var dataSetChartOption = {
  series: [44, 55, 41, 17, 15],
  chart: {
    type: "donut",
    title: {
      text: "Data Types",
    },
    height: 400,
  },
  title: {
    text: "Dataset Type",
    align: "left",
  },
  labels: ["Images", "XLS", "JSON", "CSV", "Videos"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 250,
          height: 400,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var dataSetCharts = new ApexCharts(
  document.querySelector("#datasetChart"),
  dataSetChartOption
);
dataSetCharts.render();

// login bar
var loginChartOption = {
  series: [
    {
      name: "Login",
      data: [
        { x: new Date("2024-01-01").getTime(), y: 12 },
        { x: new Date("2024-02-01").getTime(), y: 15 },
        { x: new Date("2024-03-29").getTime(), y: 8 },
      ],
    },
    {
      name: "Public",
      data: [
        { x: new Date("2024-01-01").getTime(), y: 23 },
        { x: new Date("2024-02-01").getTime(), y: 18 },
        { x: new Date("2024-03-29").getTime(), y: 19 },
      ],
    },
    {
      name: "Protected",
      data: [
        { x: new Date("2024-01-01").getTime(), y: 13 },
        { x: new Date("2024-02-01").getTime(), y: 20 },
        { x: new Date("2024-03-29").getTime(), y: 24 },
      ],
    },
  ],

  chart: {
    type: "line",
    stacked: false,
    height: 250,
    toolbar: {
      show: true,
    },
    dropShadow: {
      enabled: true,
      color: "#000",
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2,
    },
    zoom: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: "Login Activity",
    align: "left",
  },
  fill: {
    type: "solid",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(1);
      },
    },
  },
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    shared: false,
    y: {
      formatter: function (val) {
        return val.toFixed(0);
      },
    },
  },
};

var loginChartOptions = new ApexCharts(
  document.querySelector("#loginChart"),
  loginChartOption
);
loginChartOptions.render();

// storage bar
var storageOption = {
  series: [44, 55, 41, 17, 15],
  chart: {
    type: "pie",
    title: {
      text: "Data Types",
    },
    height: 360,
  },
  title: {
    text: "Storage",
    align: "left",
  },
  labels: ["Images", "XLS", "JSON", "CSV", "Videos"],
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var storages = new ApexCharts(
  document.querySelector("#storageChart"),
  storageOption
);
storages.render();

// images Storage Bar
var imagesStorageOption = {
  series: [
    {
      name: "Private",
      data: [12, 12, 5, 1, 2],
    },
    {
      name: "Public",
      data: [23, 11, 2, 3, 33],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last", // 'all', 'last'
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "12px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  title: {
    text: "Images",
    align: "left",
  },
  fill: {
    opacity: 1,
  },
  colors: ["#DF8742", "#F6D97A", "#F6D90f"],
};

var imagesStorage = new ApexCharts(
  document.querySelector("#imagesBar"),
  imagesStorageOption
);
imagesStorage.render();

// xls storage bar
var xlsStorageOption = {
  series: [
    {
      name: "Private",
      data: [11, 22, 15, 13, 12],
    },
    {
      name: "Public",
      data: [13, 21, 22, 31, 33],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last", // 'all', 'last'
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "12px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  title: {
    text: "Xls",
    align: "left",
  },
  fill: {
    opacity: 1,
  },
  colors: ["#DF8742", "#F6D97A", "#F6D90f"],
};

var xlsStorage = new ApexCharts(
  document.querySelector("#xlsBar"),
  xlsStorageOption
);
xlsStorage.render();

// json storage bar
var jsonStorageOption = {
  series: [
    {
      name: "Private",
      data: [31, 12, 25, 23, 14],
    },
    {
      name: "Public",
      data: [14, 21, 24, 35, 33],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last", // 'all', 'last'
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "12px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  title: {
    text: "Json",
    align: "left",
  },
  fill: {
    opacity: 1,
  },
  colors: ["#DF8742", "#F6D97A", "#F6D90f"],
};

var jsonStorage = new ApexCharts(
  document.querySelector("#jsonBar"),
  jsonStorageOption
);
jsonStorage.render();

// csv storage bar
var csvStorageOption = {
  series: [
    {
      name: "Private",
      data: [41, 16, 29, 13, 14],
    },
    {
      name: "Public",
      data: [15, 31, 34, 39, 13],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last", // 'all', 'last'
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "12px",
            fontWeight: 900,
          },
        },
      },
    },
  },

  legend: {
    position: "right",
    offsetY: 40,
  },
  title: {
    text: "CSV",
    align: "left",
  },
  fill: {
    opacity: 1,
  },
  colors: ["#DF8742", "#F6D97A", "#F6D90f"],
};

var csvStorage = new ApexCharts(
  document.querySelector("#csvBar"),
  csvStorageOption
);
csvStorage.render();

// videos storage bar
var videosStorageOption = {
  series: [
    {
      name: "Private",
      data: [42, 36, 19, 23, 15],
    },
    {
      name: "Public",
      data: [12, 34, 14, 31, 13],
    },
  ],
  chart: {
    type: "bar",
    height: 250,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 10,
      borderRadiusApplication: "end", // 'around', 'end'
      borderRadiusWhenStacked: "last", // 'all', 'last'
      dataLabels: {
        total: {
          enabled: true,
          style: {
            fontSize: "12px",
            fontWeight: 900,
          },
        },
      },
    },
  },
  legend: {
    position: "right",
    offsetY: 40,
  },
  title: {
    text: "Videos",
    align: "left",
  },
  fill: {
    opacity: 1,
  },
  colors: ["#DF8742", "#F6D97A", "#F6D90f"],
};

var videosStorage = new ApexCharts(
  document.querySelector("#videosBar"),
  videosStorageOption
);
videosStorage.render();
document.addEventListener("DOMContentLoaded", function () {
  const storageBtnId = [
    "imagesBtn",
    "xlsBtn",
    "jsonBtn",
    "csvBtn",
    "videosBtn",
  ];
  const storageBarId = [
    "imagesBar",
    "xlsBar",
    "jsonBar",
    "csvBar",
    "videosBar",
  ];

  // Create maps of button and bar elements
  const storageBtnMap = storageBtnId.map((value) =>
    document.getElementById(value)
  );
  const storageBarMap = storageBarId.map((value) =>
    document.getElementById(value)
  );

  if (storageBtnMap.includes(null) || storageBarMap.includes(null)) {
    console.error("Some elements were not found in the DOM.");
    return;
  }

  let selectedIndex = -1;

  // Hide all storage bars initially
  function hideAllStorageBars() {
    storageBarMap.forEach((bar) => bar.classList.add("d-none"));
  }

  // Add event listeners to each button
  storageBtnMap.forEach((btn, index) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      hideAllStorageBars(); // Hide all storage bars
      setTimeout(() => {
        storageBarMap[index].classList.remove("d-none"); // Show the corresponding storage bar
      }, 100); // Delay to ensure proper rendering
      selectedIndex = index; // Set the selected index
    });
  });

  // Add event listener to the remove button
  const removeBtn = document.querySelector(".remove-btn");
  removeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    if (selectedIndex > -1) {
      storageBarMap[selectedIndex].innerHTML = ""; // Clear the content of the storage bar
      storageBarMap[selectedIndex].classList.add("d-none"); // Hide the storage bar
      selectedIndex = -1; // Reset the selected index
    }
  });
});
