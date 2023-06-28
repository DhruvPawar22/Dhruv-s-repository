// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxboolean) {
    for (var prop of Object.values(dishData))
    {
        var finalprice;
        if (taxboolean == true)
        {
            finalprice = prop.price * tax;
            }
        else if (taxboolean == false)
        {
            finalprice = prop.price;
            }
        else
        {
            console.log("You need to pass a boolean to the getPrices call!");
            return;
        }
        console.log("Dish: ", prop.name, "Price: $", finalprice);

        }
}
// Implement getDiscount()
function getDiscount(taxboolean, guests) {
    getPrices(taxboolean);
    if(typeof(guests)=='number' && guests>0 && guests<30)
    {
        discount = 0;
        if(guests<5)
        {
            discount = 5;
        }
        else if (guests => 5)
        {
            discount = 10;
        }
        console.log("Discount is : $", +discount);
    }
    else
    {
        console.log("The second argument must be a number between 0 and 30");

    }
}

// Call getDiscount()
getDiscount(true, 2);