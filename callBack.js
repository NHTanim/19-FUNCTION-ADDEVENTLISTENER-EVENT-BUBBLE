// 







function explain_callback(name, age, task) {
    console.log('Hello' , name);
    console.log('Your age is' , age);
    task (); //এটা একটা function perameter তাই function হিসাবে call করা যাবে।
}



// perameter কে চাইলে অন্য একটা function কে ও pass করতে পারি । এখানে -- task --  perameter কে function এর মাধ্যম এ pass করবো ।
function WashHand() {
    console.log("Wash Hand with Hand wash"); // task peremeter call;
}
function takeShower() {
    console.log("Take Shower with soap") //task perameter call;
}






explain_callback('Nazmul Hossain Tanim', 24, WashHand); // task perameter এর জন্য function name call --- WashHand -----
explain_callback('Arfat Mahmud Meem', 25, takeShower); // task perameter এর জন্য function name call --- takeShower -----






// 