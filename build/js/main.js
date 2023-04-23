let dataObj = {
  purchase: "name",
  price: 0,
  Date: Date.now(),
};

var dataArr = [];

if (localStorage.getItem("purchases")) {
  dataArr = JSON.parse(localStorage.getItem("purchases"));
}
