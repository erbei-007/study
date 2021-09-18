//利用立即执行函数解决闭包的问题
function test (){
    var arr = [];
    for (var i = 0; i < 10; i++){
        (function (j){
            arr[j] = function (){
                console.log(j)
            }
        }(i))
    }
    return arr;
}
// var Myarr = test();
// for (var j = 0; j < 10;j++){
//     Myarr[j]();
// }
//不依赖外部变量能反复执行的函数累加器
function add(){
    var count = 0;
    function a (){
        count++;
        console.log(count);
    }
    return a;
}
// var demo = add();
// demo();
// demo();
// demo();
// demo();
// demo();
// demo();
//拿闭包做缓存
function test(){
    var food = "apple";
    var obj = {
        eating:function (){
            if(food != ""){
                console.log("I am eating" +" " + food);
                food = "";
            }
            else{
                console.log("It is nothing");
            }
        },
        push:function(MyFood){
            food = MyFood;
        },
    }
    return obj;
}
// var person = test();
// person.eating();
// person.eating();
// person.push("banana");
// person.eating();
//写一个方法，求一个字符串的字节长度，一个中文占两个字节，一个英文占一个字节
//charCodeAt（）返回指定位置的字符的Unicode编码，返回值事0—65535之间的整数
//（当返回值<=255为英文，返回值大于>255时为英文）
function retBytesLen(target){
    var count = 0;
    for(var i = 0; i <target.length; i++){
        if (target.charCodeAt(i) <= 255){
            count ++;
        }else if (target.charCodeAt(i) > 255) {
            count += 2;
        }
    }
    
    console.log(count);
} 
// retBytesLen("12345678你好")
