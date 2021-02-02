let num1: number = 5;
console.log(num1);

let flag: boolean = false;
console.log(flag);

let color: string = "Hello";
console.log(color);

let list: string[] = ["Hi", "Hello", "Hey"];

for (let i = 0; i < list.length; i++) {
    console.log("Array is " + list[i]);
}

let notSure: any = 5;
console.log(notSure);

let listAny: any[] = [2, true, "test"];

for (let i = 0; i < listAny.length; i++) {
    console.log("Array is " + listAny[i]);
}