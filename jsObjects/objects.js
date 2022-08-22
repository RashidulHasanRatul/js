let user = {
    name: "John",
    age: 30,
    isMarried: false,
};

user.name = "Pete";
delete user.age;

console.log(user.name);
// iterate throw object
for (let key in user) {
    console.log(user[key]);
}
