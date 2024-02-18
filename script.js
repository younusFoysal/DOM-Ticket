// console.log('connected');

const cards = document.querySelectorAll('.card')
//console.log(cards)
let titleCount = 1;
let totalPrice = 0;


for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(element);
    card.addEventListener('click', function(){
        // console.log('clicked');
        
        // get the pdf name 
        const title = card.querySelector("p").innerText;
        //const titlevalue = title.innerText
        console.log(title)

        const price = card.querySelector(".prs").innerText.split(" ")[1];
        //const priceValue = price.innerText
        const priceInt = parseInt(price)
        console.log(priceInt)
        
        //obj view
        //console.log({titlevalue, price});
        
        const titleContainer = document.getElementById("title-container");

        const p = document.createElement("p")
        p.innerText = titleCount + ". " + title;
        titleContainer.appendChild(p)
        titleCount++; 
        

        //total price calculation
        totalPrice += priceInt;
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
        
    })
}


const btn = document.getElementById("apply-btn");
// console.log(btn)
btn.addEventListener("click", function (){

    const cuponElemnt = document.getElementById("input-field").value;
    console.log(cuponElemnt)

    const cuponCode = cuponElemnt.split(" ").join("").toUpperCase()
    
    if (totalPrice >= 200){
        if (cuponCode === "SELL200"){

            // discount
            const discoontElement = document.getElementById("discountPrice");
            const discountAmount = totalPrice * 0.2;
            discoontElement.innerText = discountAmount.toFixed(2);

            // rest ammount
            const restTotal = document.getElementById("total");
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);
            document.getElementById("input-field").value = "";

        }else {
            alert("Invalid code")
        }
    }else {
        alert("Total price should be 200 or more!")
    }
})



