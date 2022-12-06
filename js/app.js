var btn = document.getElementById('set').addEventListener('click',()=>{
    var setCountDown = setInterval(function(){
        var dateInput = document.getElementById('date').value;
        var targetDate = new Date(dateInput).getTime();
        var curDate = new Date().getTime();
    
        var diff = targetDate - curDate;
        
        // Time calculations for days, hours, minutes and seconds
        var caldays = Math.floor(diff / (1000 * 60 * 60 * 24));
        var calhours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var calminutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var calseconds = Math.floor((diff % (1000 * 60)) / 1000);
    
        var days = document.querySelector('.days').innerHTML = caldays;
        var hours = document.querySelector('.hours').innerHTML = calhours;
        var minutes = document.querySelector('.minutes').innerHTML = calminutes;
        var seconds = document.querySelector('.seconds').innerHTML = calseconds;
    
        var boxes = document.querySelectorAll('.boxes');
        var dates = document.querySelector('.date');
        var btn = document.querySelector('.setbtn');
        var boxgroup = document.querySelector('.box-group');
        var wishbox = document.querySelector('.wish');
        boxes.forEach((box)=>{
            if(dateInput){
                box.style.display = 'block';
                dates.style.display = 'none';
                btn.style.display = 'none';
            }
        });
    
        if(diff < 0){
            document.querySelector('.days').innerHTML = "0";
            document.querySelector('.hours').innerHTML = "0";
            document.querySelector('.minutes').innerHTML = "0";
            document.querySelector('.seconds').innerHTML = "0";
            wishbox.style.display = "block";
            boxgroup.style.display = "none"
        }
        
    },1000);
})



let newyear = document.getElementById('newyear');
let years = new Date().getUTCFullYear();
newyear.innerHTML = years;