let itemToDisplay = {
    browine : "browine-grid",
    pie : "pie-grid",
    cookie : "cookie-grid",
    basket : "basket-grid"
}

function displayOnly(displayItem) {
    console.log(displayItem)
    var itemKeys = Object.keys(itemToDisplay)
    itemKeys.map((toDisplay) => {
        if(toDisplay === displayItem ||  displayItem === "all") {
            document.getElementById(itemToDisplay[toDisplay]).style.display="";
        }
        else {
            document.getElementById(itemToDisplay[toDisplay]).style.display="none";
        }
     })
}

function addToCart() {
    alert("Product added to cart")
}
