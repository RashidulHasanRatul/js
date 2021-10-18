let car={

    Name : "Ratul",
    Phone: '01828496307',

    fulladd: function () {
        
        console.log(

            this.Name+this.Phone
        );
    }
}

console.log(
    car.fulladd()
);

console.log("Hey This is Bangladesh");

// 1 to 6 return 

function rand(start,end) {
    
    let sum = Math.floor(Math.random()*(start-end+1))+start;
    return sum;
}

console.log(rand(1,6));


// Map example 

let apple = new Map();
apple.set(
    NameofFruits,"Apple",
    SerialNumber,"1122"

)

console.log(apple);

let names = {

    fname:"Ratul",
    lname:'Hasan'
}

console.log(names);