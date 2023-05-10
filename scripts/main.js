(function () {
  "use strict";
  function usdAverage(arr) {
    const usdItems = arr.filter((item) => item.currency_code === "USD");
    const sum = usdItems.reduce((acc, item) => acc + item.price, 0);
    return sum / usdItems.length;
  }
  console.log(usdAverage(items));
})();
