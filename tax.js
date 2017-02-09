var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
// use to test the code
function p(item) {
  console.log(item)
}

function getTaxRate(province) {
  return salesTaxRates[province];
}

//add each value in the array and multiply that by the tax rate
function sumTax(a5, taxRate) {
  var total = 0;
  for (var i = 0; i < a5.length; i++) {
    total += (a5[i] * taxRate)
    //multiply each by the tax rate
  }
  return total
}

 function sumSales(a5) {  //loop over array
  var total = 0;
  for(var i = 0; i < a5.length; i++) {
    total += a5[i]; //add the totals to each other total += total[i]
  }
  return total;
}

function calculateSalesTax(companySalesData, salesTaxRates) {
//var results is the answer but the answer is empty right now
  var results = {};
  //iterate over sales data array;
  for(var i = 0; i < companySalesData.length; i++) {
    var co = companySalesData[i]; // refers to each company "blob" NOT each key in the co
    //p(co)
    var taxRate = getTaxRate(co.province); //get the tax rate for the specific prov of the current co
    var totalSales5 = sumSales(co.sales);  // adds the array of sales for the current co
    var totalTaxes5 = sumTax(co.sales, taxRate);
      if (!results[co.name]) {
        results[co.name] = {totalSales: totalSales5, totalTaxes: totalTaxes5}
      } else {
        var obj = results[co.name];
        obj.totalSales += totalSales5;
        obj.totalTaxes += totalTaxes5;
      }
  }
   return results
}

console.log(calculateSalesTax(companySalesData, salesTaxRates));


