(function () {
  "use strict";
  // Problem 1
  function usdAverage(arr) {
    const usdItems = arr.filter((item) => item.currency_code === "USD");
    const sum = usdItems.reduce((acc, item) => acc + item.price, 0); // Alternate solution: usdItems.map(function (item) { return item.price; }
    return sum / usdItems.length;
  }
  console.log(
    "usdAverage",
    "The average price is " + usdAverage(items).toFixed(2)
  ); // the arguments in my console.log are saying what the arguments in my function are refering to

  // Problem 2

  function priceRange(arr, min, max) {
    return arr.filter((item) => item.price >= min && item.price <= max);
  }

  console.log("priceRange", priceRange(items, 14, 18));

  // Problem 3

  function findByCurrency(arr, code) {
    return arr.filter((item) => item.currency_code === code); // Using find() to find one specific currency code
  }
  let gbpItem = findByCurrency(items, "GBP");

  gbpItem.forEach(function (item) {
    console.log("findByCurrency", ` ${item.title} costs £${item.price}`);
  });

  // Problem 4

  function filterByMaterials(arr, material) {
    const woodFilter = arr.filter((item) => item.materials.includes(material)); // Filtering through to gather all items containing wood
    return woodFilter.map((item) => item.title); // Now map through the item to return just the title
  }

  filterByMaterials(items, "wood").forEach(function (item) {
    console.log(item, "\n");
  });
  // Problem 5
  // couldn't figure out how to get the title AND the list of materials to print

  function filterByQuantity(arr, matMin) {
    return arr
      .filter(function (item) {
        return item.materials.length >= matMin;
      })
      .map(function (item) {
        return {
          title: item.title,
          materials: item.materials,
        };
      });
  }
  console.log("filterByQuantity");
  filterByQuantity(items, 8).forEach(function (item) {
    console.log(item.title);
    item.materials.forEach(function (material) {
      console.log(material);
    });
  });

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
