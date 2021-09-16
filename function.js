//加法计数器
function sum (){
    var result = 0;
    for(var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    console.log(result);
}


//小动物叫声
function scream(animal){
    switch (animal) {
        case "dog":
            console.log('wang!');
            break;
        case "cat":
            console.log('miao!');
            break;
        case "fish":
            console.log("0~0~0");
    }
}


//输入数字，逆转并输出汉字形式
function revers(){
    var n = window.prompt('input');
    var str ="";
    for (var i = n.length - 1; i >= 0; i--){
        str += transfer(n[i]);
    }
    console.log(str);
}
function transfer(target){
    switch (target) {
        case "1":
            console.log("一");
            break;
        case "2":
            console.log("二");
            break;
        case "3":
            console.log("三");
            break;
        
    }
}

//实现n的阶乘
function factorial(n){
    var res1 = 1;
    for(var i = 1; i < n; i++){
        res1 += res1 * i;
    }
    console.log(res1)

}
//factorial(5);

function jc(n){
    if (n == 1 || n == 0){
        return 1;
    }
    else{
        return n * jc(n-1);
    }
}
// var a = jc(5);
// console.log(a);



//利用递归实现斐波那契数列
function bofei(n){
    // var first = 1;
    // var second = 1;
    // var third ;
    // third = first + second;
    // first = second;
    // second = third;
    if(n == 1 || n == 2){
        return 1;
    }
    else{
        return bofei(n-2) + bofei(n-1);
    }
}
// var a = bofei(5);
// console.log(a);

var a = undefined && 1;
console.log(a);



