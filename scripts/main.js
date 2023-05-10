(function () {
  "use strict";
  function usdAverage(arr) {
    const usdItems = arr.filter((item) => item.currency_code === "USD");
    const sum = usdItems.reduce((acc, item) => acc + item.price, 0);
    return sum / usdItems.length;
  }
  console.log("usdAverage", usdAverage(items));

  function priceRange(arr, min, max) {
    return arr.filter((item) => item.price >= min && item.price <= max);
  }

  console.log("priceRange", priceRange(items, 14, 18));

  function findByCurrency(arr, code) {
    return arr.find((item) => item.currency_code === code); // Using find() to find one specific currency code
  }
  let gbpItem = findByCurrency(items, "GBP");

  console.log("findByCurrency", gbpItem.title, "£" + gbpItem.price);

  function filterByMaterials(arr, material) {
    const foo = arr.filter((item) => item.materials.includes(material)); // Filtering through to gather all items containing wood
    return foo.map((item) => item.title); // Now map through the item to return just the title
  }

  console.log("filterByMaterials", filterByMaterials(items, "wood"));
})();
