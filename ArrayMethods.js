// Challenge - Manage Inventory

/*
    1. Your company is launching 3 new products: toilet paper, bottled water, and sanitizer. Store them in a list.
    2. Turns out there was a mistake and toilet paper was actually paper towels. Make the appropriate update.
    3. Sanitizer sells out. Remove it from the list.
    4. Business is so good the company launches a new product: Bleach. Add it to the list.
    
    Note: After creating the initial array do not just create a brand new array. Modify it accordingly.
*/

//1
let companyProducts = ["toilet paper", "bottled water", "sanitizer"];
//2
companyProducts[0] = "paper towels";
//3
companyProducts.pop("sanitizer");
//4
companyProducts.push("bleach");
console.log(companyProducts);

//['paper towels', 'bottled water', 'bleach']
