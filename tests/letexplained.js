let retrycount = 0;
retrycount = 1; // we can only reassign and not redecalre
console.log("retrycount")

let teststatus = "pending"
if (teststatus === "pending") { //for comparision we user ===
    let executiontime = 3000;
    console.log("inside if block:", executiontime)
}
{
    let executiontime = 4000;
    console.log("inside block:", executiontime)
}
for (let i = 10; i < 11; i++) {
    let executiontime = 1000;
    console.log("inside forloop:", executiontime)
}
console.log("ioutside mainloop:", executiontime) //error execution is undefined
