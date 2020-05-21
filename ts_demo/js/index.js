"use strict";
var names = 'hello';
//定义类
// class Point {
//     constructor(x:number, y:number) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return '(' + this.x + ', ' + this.y + ')';
//     }
// }
// var point = new Point(2, 3);
// console.log(point.toString());
var Widget = /** @class */ (function () {
    function Widget() {
        this.snaf = '222';
    }
    Widget.prototype.foo = function (baz) {
        console.log(this.snaf);
        bar.call(this, baz);
        console.log(this.snaf);
    };
    return Widget;
}());
function bar(baz) {
    return (this.snaf = baz);
}
var widget = new Widget();
widget.foo('111');
// 泛型
/* 定义： 可以支持不特定的数据类型
* 要求：传入的参数和返回的参数一致
* 通俗说法：泛型就是解决类、接口、方法的复用性，以及对不特定数据类型的支持和类型校验
*/
// 泛型函数
function getData(value) {
    return value;
}
console.log(getData('sds'));
function getData1(value) {
    return '2323';
}
console.log(getData1(222));
// 泛型函数
/**
 * 获取数组中最小值 (T泛型通用)
 * @param {T[]} arr
 * @returns {T}
 */
function getMin(arr) {
    var min = arr[0];
    arr.forEach(function (value) {
        if (value < min) {
            min = value;
        }
    });
    return min;
}
console.log(getMin([1, 3, 5, 7, 8]));
console.log(getMin(['tom', 'jerry', 'jack', 'sunny']));
var setData = function (value1, value2) {
    return value1;
};
console.log(setData('hello', '你好'));
console.log(setData(1, 2));
// 泛型类
var MinNum = /** @class */ (function () {
    function MinNum(list) {
        this.list = [];
        this.list = list;
    }
    MinNum.prototype.add = function (data) {
        this.list.push(data);
    };
    MinNum.prototype.getMIn = function () {
        var min = this.list[0];
        this.list.forEach(function (value) {
            if (value < min) {
                min = value;
            }
        });
        return min;
    };
    return MinNum;
}());
var minNum = new MinNum(['33', '2']);
minNum.add("22");
console.log(minNum.getMIn());
/*
* */
