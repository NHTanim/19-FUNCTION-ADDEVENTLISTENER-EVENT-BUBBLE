

// 








function addNumbers(num1, num2) {
    return num1 + num2 ; // এখানে ২ টার যোগ ফল return করবো মানে যোগ ফল বের করবো ।
}


// এখানে যেহেতু উপরে return করা হয়েছে function তাই var result করতে হয়েছে ।
// return না করলে --- addNumbers(5, 9); --- এভাবে দিলে ও কাজ হত ।
var result = addNumbers(5, 9); // এর মানে হল function কে কল করা ।
console.log(result);




//  argument হলে একটা object মানে array এর মত একটা object
//  argument কে function এর ভিতরে read করা যায় বাইরে read করা যায় না ।



// ---------------------------------------------------
function addNumbers2(num1 ,num2) {
    // return num1 + num2 ;


    var sum = 0;
    for (let i = 0; i < arguments.length; i++){
        const num = arguments[i];
        sum = sum + num;
    }

    return sum;
}



//  উপরে perameter decleare করা হয়েছে  ২ টা num1 num2 আর নিচে addNumbers2(5, 9, 30, 40, 55, 22); দেয়া হয়েছে যোগ করার জন্য বেশি তাই arguments করে দিলেই হবে ।
var result2 = addNumbers2(5, 9, 30, 40, 55, 22);
console.log(result2);











// 