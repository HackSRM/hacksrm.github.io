document.getElementById('darkmode-toggle').addEventListener('click',function () {
    console.log('dark mode activated');
    //this.style.backgroundColor = '#fff'

    document.querySelectorAll('.dark').forEach(e=>{
        e.classList.toggle('darken')
    })
})