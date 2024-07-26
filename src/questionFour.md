# Interface and Enum

## Enum

1. 通常有固定的選項或狀態時，可以用 enum
2. 比如: switch case 或是 有相關的常數

```ts
enum Color {
    Red,
    Green,
    Blue
}

let myColor: Color = Color.Green;

function printColor(color: Color) {
    switch(color) {
        case Color.Red:
            console.log("紅色");
            break;
        case Color.Green:
            console.log("綠色");
            break;
        case Color.Blue:
            console.log("藍色");
            break;
    }
}

enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

let myDirection: Direction = Direction.Left;
```

## Interface

1. 通常用來描述Object的結構
2. 描述Object的type 

```ts
interface Person {
    name: string;
    age: number;
    sayHello: () => void;
}

const person: Person = {
    name: "John",
    age: 30,
    sayHello: () => console.log("Hellow")
};

// 使用 interface 作為函數參數
function greet(person: Person) {
    console.log(`${person.name} ${person.age}`);
    person.sayHello();
}
```