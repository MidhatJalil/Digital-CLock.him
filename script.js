function time(){
    let time = +document.getElementById('input').value;
    
    let msg = document.getElementById('msg');

    if (time >= 0 && time < 1200 ){
        msg.innerHTML = (`Good Morning`);
    }

   else if (time >= 1200 && time < 1700 ){
        msg.innerHTML = (`Good afternoon`);
    }
    else if (time >= 1700 && time < 2100 ){
        msg.innerHTML = (`Good Evening`);
    }

    else if (time >= 2100 && time < 2359 ){
        msg.innerHTML = (`Good Night`);
    }

}

