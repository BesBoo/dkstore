const btn=document.querySelectorAll(".row button")
// console.log(btn)
btn.forEach(function(button,index){
    // console.log(button,index)
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h4").innerText
        var productPrice = product.querySelector("p span").innerText
        addcart(productImg,productName,productPrice)
    });
});
function addcart(productImg,productName,productPrice){
    var addtr = document.createElement("tr")

    var cartItem = document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML==productName){
            alert("san pham da co trong gio hang")
            return
        }
    }
    var trcontent='<tr><td style="display:flex; align-items: center;"><img src="'+productImg+'" style="width:70px;"><span class="title">'+productName+'</span></td><td><span class="prices">'+productPrice+'</span><sup>$</sup></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete" style="padding:10px;boder:none;border-radius:15px;background:#eb2632;color:white;">Remove</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deletecartitem()
}
//------------------------------------TotalPrices-----------------------------------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    // console.log(cartItem)
    
    // var priceT = document.querySelector(".cart-priceT")
    var total = 0
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        totalA =inputValue*productPrice
        
        // total = Math.round(totalx);
        total=total+totalA
        
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML=total.toLocaleString('de-DE')
    var cartPrice = document.querySelector(".cart-icon span")
    cartPrice.innerHTML = total.toLocaleString('de-DE')
    // cartTotal.innerHTML = (total*1000).toLocaleString('de-DE')
    // priceT.innerHTML=(total*1000).toLocaleString('de-DE')
    // deletecartitem()
    inputChange()
}
//-------------------- Delete cart -----------------------------------
function deletecartitem(){
    var cartItem = document.querySelectorAll("tbody tr")
    // var btnItem = document.querySelectorAll(".cart-delete")
    for(var i=0;i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
            carttotal()
        })
        
    }
}

//-----------------------------------------------------------------------
function inputChange(){
    var cartItem= document.querySelectorAll("tbody tr")
    for(var i=0;i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            carttotal()
        })
    }
}
// //-----------------------------------------------------------------------
const cartBtn = document.querySelector(".fa-times")
const cartshow = document.querySelector(".fa-shopping-cart")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right="0"
})
cartBtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right="-100%"
})

//----------------- test dong bo ----------------------------
// In index.html:

//----------------------------------------------------

//---------------------------- payment------------------------------
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

function search() {
  const searchTerm = document.getElementById("search-item").value.toLowerCase();
  const productItems = document.querySelectorAll("#product-list .col-4");

  productItems.forEach(function (productItem) {
    const productName = productItem.querySelector("h4").textContent.toLowerCase();

    if (productName.includes(searchTerm)) {
      productItem.style.display = "block";
    } else {
      productItem.style.display = "none";
    }
  });
}

function sortByPrice() {
  const productItems = document.querySelectorAll("#product-list .col-4");

  // Sort products by price
  productItems.sort((productA, productB) => {
    const priceA = Number(productA.querySelector("p").textContent);
    const priceB = Number(productB.querySelector("p").textContent);

    return priceA - priceB;
  });

  // Update the product list
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  for (const productItem of productItems) {
    productList.appendChild(productItem);
  }
}

// Add event listener
document.querySelector(".btn").addEventListener("click", sortByPrice);



// const search= () =>{
//   const searchbox = document.getElementById("search-item").value.toUpperCase();
//   const storeites = document.getElementById("product-list")
//   const products = document.querySelectorAll(".col-4")
//   const pname = document.getElementsByTagName("h4")
//   for(var i=0;i<pname.length;i++){
//     let match = products[i].getElementsByTagName('h4')[0];
    
//     if(match){
//       let textvalue = match.textContent || match.innerHTML
//       if(textvalue.toUpperCase().indexOf(searchbox) > -1){
//         products[i].style.display = "";
        
//       }else{
//         products[i].style.display = "none";
//       }
//     }
//   }
// }
