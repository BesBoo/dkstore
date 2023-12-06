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
    var trcontent='<tr><td style="display:flex; align-items: center;"><img src="'+productImg+'" style="width:70px;"><span class="title">'+productName+'</span></td><td><span class="prices">'+productPrice+'</span><sup>$</sup></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;"><span class="cart-delete">Remove</span></td></tr>'
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
        totalB=total.toLocaleString('de-DE')
    }
    var cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML=totalB
    // cartTotal.innerHTML = (total*1000).toLocaleString('de-DE')
    // priceT.innerHTML=(total*1000).toLocaleString('de-DE')
    // deletecartitem()
    // inputChange()
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
            
        })
        
    }
}

//-----------------------------------------------------------------------
// function inputChange(){
//     var cartItem= document.querySelectorAll("tbody tr")
//     for(var i=0;i<cartItem.length;i++){
//         var inputValue = cartItem[i].querySelector("input")
//         inputValue.addEventListener("change",function(){
//             carttotal()
//         })
//     }
// }
// //-----------------------------------------------------------------------
// const cartBtn = document.querySelector(".fa-times")
// const cartshow = document.querySelector(".fa-shopping-cart")
// cartshow.addEventListener("click",function(){
//     document.querySelector(".cart").style.right="0"
// })
// cartBtn.addEventListener("click",function(){
//     document.querySelector(".cart").style.right="-100%"
// })
