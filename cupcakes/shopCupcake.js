
let pricePerPiece = 1.75;
let orderOfQuantity = 12;
let quantitySelected = 0;
let cupcakeList = {
    chocolateFrosting : {
        name : "Chocolate Forsting",
        quantity : 0,
        id : "chocolate",
        img :"../images/cupcake/chocolate.png"
        },
    oeroFrosting : {
        name: "Oero Frosting",
        quantity: 0,
        id : "oero",
        img :"../images/cupcake/oero.png"
        },
    birthdayFrosting : {
        name: "Birthday Frosting",
        quantity: 0,
        id: "birthday",
        img :"../images/cupcake/birthday.png"
        },
    strawberryFrosting : {
        name: "Strawberry Frosting",
        quantity: 0,
        id: "strawberry",
        img :"../images/cupcake/strawberry.png"
    },
    unicornFrosting : {
        name: "Unicorn Frosting",
        quantity: 0,
        id: "unicorn",
        img : "../images/cupcake/unicorn.png"
    },
}

//calculating price per piece on selection
function amountPerPiece(quantity) {
    pricePerPiece=quantity;
    console.log("Payment " + pricePerPiece);
}

//calculating order
function quantityOrdered(numberOfCakes) {
    orderOfQuantity = numberOfCakes;
    console.log("Size " + orderOfQuantity)
}

//update order
function cupcakesOrder(item) {
    var itemName = item.id;
    var quantityDelete = cupcakeList[itemName].quantity;
    if(item.value === "") {
        quantitySelected -= quantityDelete;
        cupcakeList[itemName].quantity = 0;
        var itemID = cupcakeList[itemName].id;
        var deleteOrder = document.getElementById(itemID);
        deleteOrder.remove();

        removeImg(item, quantityDelete);
    }
    else {
            cupcakeList[itemName].quantity = parseInt(item.value);
            quantitySelected += cupcakeList[itemName].quantity;
            var order = quantityCheck();
            if(!order) {
            var order = document.createElement("p");
            var itemID = cupcakeList[itemName].id;
            order.setAttribute('id', itemID);
            order.innerHTML = item.value + " " + cupcakeList[item.id].name;
            document.getElementById("hidden").appendChild(order);
            addImg(item, cupcakeList[itemName].quantity)
            }
    }
}

function removeImg(item, quantity) {
    var itemName = item.id;
    for(let i = 1; i <= quantity; i++) {
        var imgID = cupcakeList[itemName].img + i;
        var deleteImg = document.getElementById(imgID);
        deleteImg.remove();
    }
}

function addImg(item, quantity) {
    var itemName = item.id;
    for(let i=1; i <= quantity; i++) {
        var imgOrder = document.createElement("img");
        var imgID = cupcakeList[itemName].img + i;
        imgOrder.setAttribute('id', imgID);
        imgOrder.src = cupcakeList[itemName].img;
        document.getElementById("display").appendChild(imgOrder)
        document.getElementById(imgID).style.width="50px";
        document.getElementById(imgID).style.height="50px";
        document.getElementById(imgID).style.border="2px dotted black";
    }
}

function quantityCheck() {
    console.log("Quantity " + quantitySelected)
    if(orderOfQuantity < quantitySelected) {
        alert("You have exceed your quantity limit");
        return(true);
    }
}

function addToCart() {
    let amount = "$" + pricePerPiece*orderOfQuantity;
    document.getElementById("total").innerHTML="Total Order " + amount;
    addToCart(orderOfQuantity, amount)
}
