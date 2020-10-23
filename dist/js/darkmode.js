let darkmodeState = false;
let toolTip = document.getElementById('tltip');

document.getElementById('darkmode-toggle').addEventListener('click',function () {
    //console.log('dark mode activated');
    darkmodeState === false ? this.style.backgroundColor = '#333' : this.style.backgroundColor = '#fff';
    console.log(toolTip);

    if(darkmodeState === false){
        this.style.backgroundColor = '#ffedd7';
        toolTip.style.backgroundColor = '#ffedd7';
        toolTip.style.color = '#333'
        darkmodeState = true;
    }
    else{
        this.style.backgroundColor = '#333';
        toolTip.style.backgroundColor = '#333';
        toolTip.style.color = '#f8f8f8'
        darkmodeState = false;
    }

    document.querySelectorAll('.dark').forEach(e=>{
        e.classList.toggle('darken')
    })
})