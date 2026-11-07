var a = 10;
let b = 10;
const c = 30;

var a = 20; // redeclare is possible in var
a = 40; //reassigning is also possible in var

console.log(a);

var testcase = ["logintest", "RegisterTest", "logoutTest"]
for (var i = 0; i < testcase.length; i++) { //i =3
    console.log("running test:", testcase[i]);

}

console.log("Outside for loop:" + i);
