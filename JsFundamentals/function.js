function Message(msg) {
    console.log(msg);
}

Message("Hello ");

// function default value
function Message(msg = "Hello World") {
    console.log(msg);
}
Message();

let sayHello = function (name = "Ratul") {
    console.log(`Hello ${name}`);
};
sayHello("John");
sayHello();

// callback function
function ask(question, yes, no) {
    if (question == "yes") {
        yes();
    } else {
        no();
    }
}
ask(
    "yes",
    function () {
        console.log("yes");
    },
    function () {
        console.log("no");
    }
);

// arrow function
let hello = (name) => {
    console.log(`Hello ${name}`);
};
hello("John");

let ask2 = (question, yes, no) => {
    if (question == "yes") {
        yes();
    } else {
        no();
    }
};
ask2(
    "yes",
    function () {
        console.log("yes");
    },
    function () {
        console.log("no");
    }
);

function sumAll(...args) {
    // args is the name for the array
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1,2,3)); // 1
console.log(sumAll(4,6)); // 1

