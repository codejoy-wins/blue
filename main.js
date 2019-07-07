function generator(){
    console.log("generator");
    let answer = Math.floor(Math.random(0,1)*7);
    console.log(`ans is ${answer}`);
    if(answer === 0){
        document.getElementById("magic").innerHTML=`
        <img src="0.jpg" alt="" class="widify">
        `
    }
    if(answer === 1){
        document.getElementById("magic").innerHTML=`
        <img src="sunset.jpg" alt="" class="widify">
        `
    }
    if(answer === 2){
        document.getElementById("magic").innerHTML=`
        <img src="underwater.jpg" alt="" class="widify">
        `
    }
    if(answer === 3){
        document.getElementById("magic").innerHTML=`
        <img src="oceanlife.webp" alt="" class="widify">
        `
    }
    if(answer === 4){
        document.getElementById("magic").innerHTML=`
        <img src="octopus.jpg" alt="" class="widify">
        `
    }
    if(answer === 5){
        document.getElementById("magic").innerHTML=`
        <img src="colors.jpg" alt="" class="widify">
        `
    }
    if(answer === 6){
        document.getElementById("magic").innerHTML=`
        <img src="wow.jpg" alt="" class="widify">
        `
    }
    return answer;
}