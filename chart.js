google.charts.load("current", { packages: ["corechart", "line"] });
google.charts.setOnLoadCallback(drawCrosshairs);

function drawCrosshairs() {
  var data = new google.visualization.DataTable();
  data.addColumn("string", "Month");
  data.addColumn("number", "WPPOOL");
  data.addColumn("number", "Google");
  data.addColumn("number", "Microsoft");
  data.addColumn("number", "Twitter");

  data.addRows([
    ["Jan", 0, 0, 0, 0],
    ["Feb", 10, 5, 7, 8],
    ["Mar", 23, 15, 12, 18],
    ["Apr", 17, 9, 10, 11],
    ["May", 18, 10, 7, 11],
    ["Jun", 9, 5, 9, 10],
    ["Jul", 11, 3, 7, 6],
    ["Jan", 27, 19, 20, 13],
    ["Feb", 33, 25, 17, 30],
    ["Mar", 40, 32, 34, 45],
    ["Apr", 32, 24, 27, 40],
    ["May", 35, 27, 9, 12],
    ["Jun", 30, 22, 15, 30],
    ["Jul", 40, 32, 27, 35],
    ["Jan", 42, 34, 50, 8],
    ["Feb", 47, 39, 17, 50],
    ["Mar", 44, 36, 14, 30],
    ["Apr", 48, 40, 8, 17],
    ["May", 52, 44, 34, 7],
    ["Jun", 54, 46, 34, 7],
    ["Jul", 42, 34, 34, 7],
    ["Jan", 55, 47, 34, 7],
    ["Feb", 56, 48, 34, 7],
    ["Mar", 57, 49, 34, 7],
    ["Apr", 60, 52, 14, 35],
    ["May", 50, 42, 14, 35],
    ["Jun", 52, 44, 14, 35],
    ["Jul", 51, 43, 14, 35],
    ["Jan", 49, 41, 14, 35],
    ["Feb", 53, 45, 14, 35],
    ["Mar", 55, 47, 14, 35],
    ["Apr", 60, 52, 14, 35],
    ["May", 61, 53, 14, 35],
    ["Jun", 59, 51, 14, 35],
    ["Jul", 62, 54, 14, 35],
    ["Jan", 65, 57, 14, 35],
    ["Feb", 62, 54, 14, 35],
    ["Mar", 58, 50, 14, 35],
    ["Apr", 55, 47, 14, 35],
    ["May", 61, 53, 14, 35],
    ["Jun", 64, 56, 14, 35],
    ["Jul", 65, 57, 14, 35],
    ["Jan", 63, 55, 14, 35],
    ["Feb", 66, 58, 14, 35],
    ["Mar", 67, 59, 14, 35],
    ["Apr", 69, 61, 14, 35],
    ["May", 69, 61, 14, 35],
    ["Jun", 70, 62, 14, 35],
    ["Jul", 72, 64, 14, 35],
    ["Jan", 68, 60, 14, 35],
    ["Feb", 66, 58, 14, 35],
    ["Mar", 65, 57, 14, 35],
    ["Apr", 67, 59, 14, 35],
    ["May", 70, 62, 14, 35],
    ["Jun", 71, 63, 14, 35],
    ["Jul", 72, 64, 14, 35],
    ["Jan", 73, 65, 14, 35],
    ["Feb", 75, 67, 14, 35],
    ["Mar", 70, 62, 14, 35],
    ["Apr", 68, 60, 14, 35],
    ["May", 64, 56, 14, 35],
    ["Jun", 60, 52, 14, 35],
    ["Jul", 65, 57, 14, 35],
    ["Jan", 67, 59, 14, 35],
    ["Feb", 68, 60, 14, 35],
    ["Mar", 69, 61, 14, 35],
    ["Apr", 70, 62, 14, 35],
    ["May", 72, 64, 14, 35],
    ["Jun", 75, 67, 14, 35],
    ["Jul", 80, 72, 14, 35],
  ]);

  var options = {
    hAxis: {
      title: "Month",
    },
    vAxis: {
      
    },
    colors: ["#FC714D", "#615DE3", "#AFCD80", "#6F34A1"],
    crosshair: {
      color: "#6F34A1",
      trigger: "selection",
    },
  };

  var chart = new google.visualization.LineChart(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
  chart.setSelection([{ row: 6, column: 1 }]);
}

const menubar = document.getElementById('toggle-bar');
const menu = document.getElementById('toggle-menu')
const close = document.getElementById('close')
const toggleMenubar = document.getElementById('toggle-menubar')
const stickyMenu = document.getElementById('toggle-sticky-menu')
const stickyClose = document.getElementById('sticky-close')

menubar.addEventListener('click', () => {
  menu.className = 'absolute right-1 block bg-white h-[500px] w-[338px] top-4 rounded-2xl '
});
close.addEventListener('click', () => {
  menu.className = 'absolute right-1 hidden bg-white h-[500px] w-[338px] top-4 rounded-2xl'
});

toggleMenubar.addEventListener('click', () => {
  stickyMenu.className = "absolute right-1 md:right-72 block bg-white h-[500px] w-[338px] top-4 rounded-2xl"
})
stickyClose.addEventListener('click', () => {
  stickyMenu.className = "absolute right-1 md:right-72 hidden bg-white h-[500px] w-[338px] top-4 rounded-2xl"
})