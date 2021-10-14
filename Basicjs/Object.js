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