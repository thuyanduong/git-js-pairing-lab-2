function OneHundredToFive(){
    for (let i = 100; i >= 5; i--){
        //console.log(i)
    }
}

//OneHundredToFive()

function absoluteValue(num){
    if (typeof num === "number"){
        return Math.abs(num)
    }else{
        return null
    }
}
console.log(absoluteValue("string"));