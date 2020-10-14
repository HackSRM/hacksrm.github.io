// Set the date we're counting down to
var countDownDate = new Date("Nov 6, 2020 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('dayTens').innerHTML = places(days).tens;
    document.getElementById('dayOnes').innerHTML = places(days).ones;

    document.getElementById('hourTens').innerHTML = places(hours).tens;
    document.getElementById('hourOnes').innerHTML = places(hours).ones;

    document.getElementById('minTens').innerHTML = places(minutes).tens;
    document.getElementById('minOnes').innerHTML = places(minutes).ones;
    
    // Output the result in an element with id="demo"
    //console.log(days + "d " + hours + "h " + minutes + "m ")
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        console.log('Hackathon Begins');
    }
}, 1000);

let rando = 24;

function places(num){
    let ones = num%10;
    let tens = (num-ones)/10;

    return {
        ones: ones,
        tens: tens
    }
}

function hackathonBegins(){
    document.getElementById('startsIn').innerHTML = 'Hackathon has started 🎉🎊';
}