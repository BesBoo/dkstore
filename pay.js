function cardspace(){
  var carddigit=document.getElementById('cardno').value;
  if(carddigit.length== 4 || carddigit.length== 9 || carddigit.length== 14){
    document.getElementById('cardno').value== carddigit+" ";
    document.getElementById('cardno').max=1;
  }
}
function addSlashes(){
  var expiredate =document.getElementById('validtil').value;
  if(expiredate.length== 2){
    document.getElementById('validtill').value== expiredate+"/";
    document.getElementById('validtill').max=1;
  }
}

//---------------------------- insert in4 payment-------------------------
const inputFields = document.querySelectorAll(".payment-content-right-button input");
const submitButton = document.querySelector(".btn2");
const notificationContainer = document.querySelector(".payment-content-right");


submitButton.addEventListener("click", () => {
  const emptyInputs = Array.from(inputFields).filter(input => input.value.trim() === "");
  const visibleEmptyInputs = emptyInputs.filter(input => input.offsetParent !== null);

  
  if (visibleEmptyInputs.length > 0) {
    // Display incomplete info notification (red text)
    const errorNotification = document.createElement("div");
    errorNotification.classList.add("notification", "error");
    errorNotification.style.color = "red"; 
    errorNotification.style.fontSize = "20px";
    errorNotification.textContent = "Please fill in the following required fields: " + visibleEmptyInputs.map(input => input.placeholder).join(", ");
    notificationContainer.appendChild(errorNotification);
    setTimeout(() => errorNotification.remove(), 3000);
  } else {

    
    const successNotification = document.createElement("div");
    successNotification.classList.add("notification", "success");
    successNotification.style.color = "green"; 
    successNotification.style.fontSize="20px";
    successNotification.textContent = "We have received your information. Store staff will contact you soon. Thank you <3";
    notificationContainer.appendChild(successNotification);
    setTimeout(() => successNotification.remove(), 10000);

    
    console.log("Form submitted successfully!");
  }
});
