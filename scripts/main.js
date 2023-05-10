(function () {
  "use strict";
  // Problem 1
  function usdAverage(arr) {
    const usdItems = arr.filter((item) => item.currency_code === "USD");
    const sum = usdItems.reduce((acc, item) => acc + item.price, 0);
    return sum / usdItems.length;
  }
  console.log("usdAverage", usdAverage(items)); // the arguments in my console.log are saying what the arguments in my function are refering to

  // Problem 2

  function priceRange(arr, min, max) {
    return arr.filter((item) => item.price >= min && item.price <= max);
  }

  console.log("priceRange", priceRange(items, 14, 18));

  // Problem 3

  function findByCurrency(arr, code) {
    return arr.find((item) => item.currency_code === code); // Using find() to find one specific currency code
  }
  let gbpItem = findByCurrency(items, "GBP");

  console.log("findByCurrency", gbpItem.title, "£" + gbpItem.price);

  // Problem 4

  function filterByMaterials(arr, material) {
    const woodFilter = arr.filter((item) => item.materials.includes(material)); // Filtering through to gather all items containing wood
    return woodFilter.map((item) => item.title); // Now map through the item to return just the title
  }

  console.log("filterByMaterials", filterByMaterials(items, "wood"));

  // Problem 5
  // couldn't figure out how to get the title AND the list of materials to print

  function filterByQuantity(arr, matMin) {
    const moreThanEight = arr.filter((item) => item.materials.length >= matMin);
    return moreThanEight.map((item) => item.materials);
  }

  console.log(
    "filterByQuantity",
    filterByQuantity(items, 8, items.title, items.materials)
  );

  // Problem 6

  function madeBySeller(arr, selfMade) {
    return arr.filter((item) => item.who_made === selfMade);
  }
  let selfMadeProduct = madeBySeller(items, "i_did");
  // this allows me to call .length in order to just get the number rather than the whole array

  console.log(
    "madeBySeller",
    selfMadeProduct.length + " were made by there sellers"
    //right here ^
  );
})();
