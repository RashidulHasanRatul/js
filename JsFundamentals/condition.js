let msg = 10 > 90 ? "yes" : 99 > 100 ? "no" : "maybe";
console.log(msg);

let test2 = 10 > 90 ? "yes" : "no";
console.log(test2);

let login = "Director";
let message =
  login == "Emp"
      ? "hello"
      : login == "Director"
          ? "Greetings"
          : login == ""
              ? "no login"
              : "";
console.log(message);
