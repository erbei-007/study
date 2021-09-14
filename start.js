var n = parseInt(window.prompt("input"));


//计算2的n次幂
var res1 = 1;

if( n < 0 )
{
    while(n++){
        res1 = 1 / (2 * (1/res1));
    }
}
else if (n == 0){
    res1 = 1;
}
else{
    while(n--){
    res1 = 2 * res1;   
    }
    
}
document.write(res1)



//计算n的阶乘
var res2 = 1;
if(n < 1){
    document.write("负数没有阶乘");
}
else if(n == 1){
    res2 = 1;
}
else{
    for(i = 1; i <= n; i++){
        res2 = res2 * i
    }
    
}
document.write(res2);




//输入a b c 三个数打印最大值
var a = parseInt(window.prompt("inputa"));
var b = parseInt(window.prompt("inputb"));
var c = parseInt(window.prompt("inputc"));
var res3;
if (a > b){
    res3 = a;
}
else if(b > c){
    res3 = b;
}
else{
    res3 = c;
}
document.write(res3);



//输入456，输出654
var ge, shi, bai;
ge = n % 10;
shi = (n - ge)/ 10 % 10;
bai = (n - ge - (10 * shi)) / 100;
res4 = bai + 10 * shi + 100 * ge;
document.write(res4); 




//斐波那契额数列
var first = 1,second = 1, third;
document.write(first);
document.write(second);
for(var i = 0;i < n-2;i++){
    third = first + second;
    first = second;
    second = third;
    document.write(third);
}




//打印100以内的质数（只能被1和自身整除）
var count=0;
for(var i = 2; i < 100; i++){
    for(var j = 0; j <= Math.sqrt(i); j++){
        if(i % j == 0){
            count++;
        }
    }
    if(count == 1){
        document.write(i + " ");
    }
    count = 0;
}



   