let names: any = 'hello';
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
class Widget {
    snaf = '222';
    foo(baz: any) {
        console.log(this.snaf);
        bar.call(this, baz);
        console.log(this.snaf);
    }
}

function bar(baz: any) {
    return (this.snaf = baz);
}

let widget = new Widget();
widget.foo('111');

// 泛型

/* 定义： 可以支持不特定的数据类型
 * 要求：传入的参数和返回的参数一致
 * 通俗说法：泛型就是解决类、接口、方法的复用性，以及对不特定数据类型的支持和类型校验
 */

// 泛型函数
function getData<T>(value: T): T {
    return value;
}
console.log(getData<string>('sds'));

function getData1<T>(value: T): any {
    return '2323';
}
console.log(getData1<number>(222));

// 泛型函数
/**
 * 获取数组中最小值 (T泛型通用)
 * @param {T[]} arr
 * @returns {T}
 */

function getMin<T>(arr: T[]): T {
    var min = arr[0];
    arr.forEach((value) => {
        if (value < min) {
            min = value;
        }
    });
    return min;
}

console.log(getMin([1, 3, 5, 7, 8]));
console.log(getMin(['tom', 'jerry', 'jack', 'sunny']));
/**
 * 泛型函数接口
 */
interface ConfigFn {
    <T>(value1: T, value2: T): T;
}

let setData: ConfigFn = function <T>(value1: T, value2: T): T {
    return value1;
};

console.log(setData<string>('hello', '你好'));
console.log(setData<number>(1, 2));

// 泛型类

/**
 * @name:
 * @test: test font
 * @msg:
 * @param {type}
 * @return:
 */

class MinNum<T> {
    list: T[] = [];
    constructor(list: T[]) {
        this.list = list;
    }
    add(data: T): void {
        this.list.push(data);
    }
    getMIn<T>() {
        var min = this.list[0];
        this.list.forEach((value) => {
            if (value < min) {
                min = value;
            }
        });
        return min;
    }
}

let minNum = new MinNum<string>(['33', '2']);
minNum.add('22');
console.log(minNum.getMIn());

/*
 * */

interface DBI<T> {
    add(info: T): boolean;
    updata(info: T, id: number): boolean;
    delete(id: number): boolean;
    get(id: number): any[];
}

class Mysql<T> implements DBI <T>{
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    updata(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }

}




