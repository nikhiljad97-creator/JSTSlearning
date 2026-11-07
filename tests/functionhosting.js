getStatus();

function getStatus(){

    console.log(status) //undefined
    var status = "passed"
    console.log(status) //passed

    if(true){

        console.log(`blockedscope:`, status) //passed
        var status = "failed"
        console.log(status) //failed
    }
    console.log("oustide the block:", status) //failed
}