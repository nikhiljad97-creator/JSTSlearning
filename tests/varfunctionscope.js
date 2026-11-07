var a = 40;
console.log("global scope:", a);//40

function sayhello() {
    console.log("hello")

    var a = 20; //local scope
    console.log("inside function:", a);//20

    if (true) {

        var a = 30; //local scoop
        console.log("inside if:", a); //30
    }

    for (var a = 60; a < 70; a++) { //70

    }

    //var is a functionscop , var ignore blockscope (if,for,while)

    console.log("outside the for loop:", a); //70 var will print the latest value as it leaks out of if and for
}
sayhello()
console.log("outside thefunction:", a); //40
