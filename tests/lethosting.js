let a = 40;
console.log("global scope:", a);//40

function sayhello() {
    console.log("hello")

    let a = 20; //local scope
    console.log("inside function:", a);//20

    if (true) {

        let a = 30; //local scoop
        console.log("inside if:", a); //30
    }

    for (let a = 60; a < 70; a++) { //70

    }
    
    console.log("outside the for loop:", a); //20 as it outside for loop it should print the function value
}
sayhello()
console.log("outside thefunction:", a); //40