const name = "pending";
{                             //inside blok we can redeclare it 

    const name = "done"
    console.log("inside block:", name) //done
}

function say() {

    const name = "nikhil"
    console.log("inside if function block:", name) //nikhil
}

if (true) {

    const name = "hari"
    console.log("inside if block:", name)//hari
}


console.log("outside block:", name) //pending


