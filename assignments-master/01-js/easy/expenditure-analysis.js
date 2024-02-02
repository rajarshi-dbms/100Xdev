/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let myarr = [];
  for (let j = 0; j < transactions.length; j++) {
    let found = false;
    for (let k = 0; k < myarr.length; k++) {
      if (transactions[j].category === myarr[k].category) {
        myarr[k].totalSpent = myarr[k].totalSpent + transactions[j].price;
        
        found = true;
        break;
      }
    }
    if (!found) {
      myarr.push({ category: transactions[j].category, totalSpent: transactions[j].price });
    }
  }
  return myarr;
}

module.exports = calculateTotalSpentByCategory;
