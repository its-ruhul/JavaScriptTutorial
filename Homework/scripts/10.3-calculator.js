let calculation = '';
      let storedCalcution = localStorage.getItem('calculation');

      console.log(storedCalcution);
      
      if(storedCalcution){
        calculation = storedCalcution;
      }
      else{
        calculation = 0;
      }

      function updateCalculation (operator) {
        calculation += operator;
        console.log(calculation);

        const outputPara = document.querySelector('.display-calculation-para');
        outputPara.innerHTML = calculation;

        localStorage.setItem('calculation', calculation);
      }
