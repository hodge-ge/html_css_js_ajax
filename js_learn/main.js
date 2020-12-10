// alert("这是葛昊杰的第一个js交互");//字符串
// alert("这是"+"葛昊杰的第一个js交互");//字符串
// alert(Math.PI)//数字

// console.log("hello的长度是"+"hello".length);//在F12下的console区域输出字符串的长度
// console.log("hello的第0\2个字符是"+"hello".charAt(0)+"hello".charAt(2));//获取指定字符
// console.log("hello,world".replace("hello","你好"))//替换
// console.log("hello,world".toUpperCase())
// console.log("hello,world".repeat(10))

//布尔类型
// console.log(1==0)
// console.log(1>=0)
//变量
//var 名字
// var name="hello"
// console.log(name)//访问

// // let 新建变量
// let a=1
// console.log(a)

// name="word"//重新赋值
// console.log(name)//访问

// a=1+2;
// console.log(a)

// //常量
// const PI=3.1
// console.log(PI)

// 运算符
// var x=5;
// console.log(x+10);
// x=x+10;//x+=5
// x++;
// x--;
// x--;
// console.log(x)

//类型转换
// var x;
// x="3"+"4"+7//所有值都会转成字符串
// console.log(x)
// x=3+4+"5"
// console.log(x)

// //== ===的区别
// console.log(123=="123")//"123"=="123"
// console.log(123==="123")//123=="123"不允许数值类型住阿奴按

//控制结构
// var name=3;
// if (name==3){
//     console.log("name是3")
// }
// else{
//     console.log("name不是3")
// }
// if (name===3){
//     console.log("name是3")
// }
// else{
//     console.log("name不是3")
// }

// if (name>10){
//     console.log("name大于10")
// }
// else if (name>3){
//     console.log("name>3")
// }
// else if (name==3){
//     console.log('name等于3')
// }
// else{
//     console.log("name小于3")
// }


//循环
// var name="名字"
// var age=20;

// while(false){
//     console.log(name)
// }
// var a=19
// do{
//     a++;
//     console.log(a)
// }while(age==a);

// var name="hodge"
// var age=20;
// for (let i=0;i<5;i++){
//     age++;
//     console.log(age);
// }

// var allowed=age>=18?"yes":"No"
// console.log(allowed)

// // switch语句也支持
// switch(name){
//     case "hello":
//         console.log('name is hello')
//         break;
//     case "hodge":
//         console.log("name is hodge")
//         break;
//     default:
//         console.log("不认识")
// }


// Object 对象
var obj=new Object();
var obj2={};
obj={
    name:"hodge",
    age:"20",
    contact:{
        tel:"1390000",
        email:"12345678@163.com"
    }
}
/*
// console.log(obj)
// console.log(obj.name)
// console.log(obj.contact)
console.log('访问属性')
console.log(obj.contact.tel)//"访问元素"
console.log(obj["age"])
// console.log(obj["contact"])
console.log(obj["contact"]["email"])
obj.age="99"
console.log('修改属性')
console.log(obj)//"修改属性"
obj["contact"]["wechat"]="abcd"
obj.contact.qq="123456787654"
console.log('新增属性')
console.log(obj)
delete obj.contact.tel
console.log('删除属性')
console.log(obj)//"删除属性"
*/
/*
var a=new Array();
var b=[];
a[0]="dog"
a[1]="cat"
a[2]="human"
a[10]="pen"
console.log(a)
console.log(a[3])//数据是empty的情况下访问时未定义
b=["dog","cat","human"]
console.log(b)

for (let i=0;i<a.length;i++){
    console.log(a[i])
}
console.log("in方法")
for (let i in a){
    console.log(a[i])
}

a.push("sheep");
console.log(a);
a.pop("sheep");
a.pop("human");
console.log(a);
a.unshift("head");
console.log(a);
*/

//函数
/*
let a=1;
function add(){
    a++
}
function addx(x){
    a+=x
}
console.log(a)
add()
console.log(a)
addx(5)
console.log(a)
*/
// function 任意参数
function add(){
    let sum=0;
    for(let i=0,j=arguments.length;i<j;i++){
        sum+=arguments[i]
    }
    return sum;
}
console.log(add(1,2,3,4,5,6))

//闭包返回的是函数，相当远先给一个参数，调用的x返回值充当了makeAdder函数内的function函数定义。之后调
//用仅仅需要用x（参数）即可实现加法。
function makeAdder(a){
    return function(b){
        return a+b;
    };
}
var x=makeAdder(5)
console.log(x(6))

