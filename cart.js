///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(acc,elem){
    return acc + elem.price
}, 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    return cartTotal + (cartTotal * tax) - couponValue
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    fullName: 'Bob A Henry' (This is necessary )
    address: '108 Food Rd Apt 3' (This is needed for delivery and billing purposes)
    paymentType: 'Visa/Mastercard/PayPal' (This is so that the payment can be accepted by the third party merchant)
    customerSince: 2009 (This lets us know how long they have been a customer with us so that we can determine what benefits or discounts
        we would apply to thier order to thank them for being a loyal customer)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = [{
    fullName: 'Bob A Henry', 
    address: '108 Italian Street Apt 1', 
    paymentType: 'Visa', 
    customerSince: 2009
}]
