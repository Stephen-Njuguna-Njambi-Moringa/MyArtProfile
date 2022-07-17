// declaring variables for input fields.
    let inputVal1 = document.getElementById('input1').value;
    let inputVal2 = document.getElementById('input2').value;
    let inputVal3 = document.getElementById('input3').value;
    let inputVal4 = document.getElementById('input4').value;


    let reportBtn = document.getElementById('submit-btn');
    let reportSection = document.getElementsByClassName('report-section');

   

// creating a button click.
    reportBtn.addEventListener('click', function(){ 
        let inputVal1 = document.getElementById('input1').value;//this will capture the user input value 
        let inputVal2 = document.getElementById('input2').value;
        let inputVal3 = document.getElementById('input3').value;
        let inputVal4 = document.getElementById('input4').value;
        let inc1 = document.getElementById('inc1');
        let inc2 = document.getElementById('inc2');
        
        document.getElementById('rs').style.display='block';
        document.getElementById('val1').innerHTML=inputVal1;
        document.getElementById('val2').innerHTML=inputVal2;
        document.getElementById('val3').innerHTML=inputVal3;
        document.getElementById('val4').innerHTML=inputVal4;
        document.getElementById('is').style.display='block';
        

// Calculate the total production.
        function totalProduction(){
            var total= parseInt(inputVal1)+ parseInt(inputVal2)+ parseInt(inputVal3)+parseInt(inputVal4);// converted the text input values to numbers using parseint().
            return total;
        }
        document.getElementById('total').innerHTML=totalProduction();

         console.log(totalProduction());

        function incomeOvertime(sellingPrice,time){
            var selling = totalProduction();
            var sellingPrice =selling * 45;
            var time = 7;
            return sellingPrice * time;
        }
        document.getElementById('inc1').innerHTML=incomeOvertime();

        function incomeOvertimeMonthly(sellingPrice,time){
            var sellingPrice = incomeOvertime();
            var time = 30;
            return sellingPrice * time;
        }
        document.getElementById('inc2').innerHTML=incomeOvertimeMonthly();

        
    })
     


