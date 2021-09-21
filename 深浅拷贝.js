//浅拷贝
function clone(origin, target) {
    var target = target || {};
    for(var prop in origin){
        //console.log(prop);
        //console.log(origin[prop]);
        target[prop] = origin[prop];
        console.log(target[prop]);
    }
    return target;
}


//深拷贝
function deepClone(origin, target) {
    var target = target || {};
    var toStr = Object.prototype.toString;
    var arrStr = "[object Array]";
    for(var prop in origin) {
        if(origin.hasOwnProperty(prop)) {
            if(origin[prop] !== "null" && typeof(origin[prop]) == "object"){
                if(toStr.call(target[prop] == arrStr)){
                    target[prop] = [];
                }
                else{
                    target[prop] = {};
                }
                deepClone(origin[prop], target[prop]);
            }else{
                target[prop] = origin[prop];
            }

        }
    }
    return target;
}
var obj ={
    name : "123",
    age : 234,
    card : ["345","234"],
    wife : {
        name : "999",
        son : {
            name : "aaa"
        }
    }
}
var obj1 = {};
deepClone(obj, obj1);