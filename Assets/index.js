// declaring variables for input fields.
// let inputVal1 = document.getElementById('input1').value;
// let inputVal2 = document.getElementById('input2').value;
// let inputVal3 = document.getElementById('input3').value;
// let inputVal4 = document.getElementById('input4').value;


let reportBtn = document.getElementById('submit-btn');
let reportSection = document.getElementsByClassName('report-section');

// creating a button click.
reportBtn.addEventListener('click', function(){ 
    let inputVal1 = document.getElementById('input1').value;
    let inputVal2 = document.getElementById('input2').value;
    let inputVal3 = document.getElementById('input3').value;
    let inputVal4 = document.getElementById('input4').value;
    document.getElementById('rs').style.display='block';
    document.getElementById('val1').innerHTML=inputVal1;
    document.getElementById('val2').innerHTML=inputVal2;
    document.getElementById('val3').innerHTML=inputVal3;
    document.getElementById('val4').innerHTML=inputVal4;
    
})


