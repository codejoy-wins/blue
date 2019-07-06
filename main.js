function generator(){
    console.log("generator");
    let answer = Math.floor(Math.random(0,1)*5);
    console.log(`ans is ${answer}`);
    if(answer === 0){
        console.log("ans is 0!");
        document.getElementById("magic").innerHTML=`
        <img src="0.jpg" alt="" class="widify">
        `
    }
    if(answer === 1){
        console.log("ans is 1!");
        document.getElementById("magic").innerHTML=`
        <img src="sunset.jpg" alt="" class="widify">
        `
    }
    if(answer > 2){
        console.log("ans is >2");
        document.getElementById("magic").innerHTML=`
        <img src="underwater.jpg" alt="" class="widify">
        `
    }
    return answer;
}