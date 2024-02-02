function findSum(a,b,fntc) {
    let res= a + b;
    fntc(res);
}

function display(data){
    console.log("the sum is : " + data);
}

function callval() {
    findSum(5, 6, display);
}
setInterval(callval, 1 * 1000);

