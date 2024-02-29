const adviceMsgShow = document.querySelector(".advice-msg");
const adviceIDShow = document.querySelector(".advice-id");

const dice = document.querySelector(".dice")
let adviceMsg = "";
let adviceID = "";




dice.onclick = function(){
  
   fetch('https://api.adviceslip.com/advice')
  .then(response => {

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    return response.json();
 
  })

  .then(data => {
    
    if (Array.isArray(data.slips)) {

      data.slips.forEach((advice)=> {
   

        console.log(advice);
        adviceID = advice.id
        adviceMsg  = advice.advice;
      });
    } else {
  
      console.log(data.slip);
      adviceMsg  = data.slip.advice;
      adviceID = data.slip.id;
        }
       
       
      adviceMsgShow.textContent =adviceMsg;
      adviceIDShow.innerHTML =`Advice #${adviceID}`
  })
  .catch(error => {

    console.error('Fetch error:', error);
  });
   
}
