var treatOrder = []

let counterCheck = {
    cupcake : 0,
    browine : 0,
    cookie : 0
}

let customizeOrder = {
    ocassion : null,
    basket : null
}

let priceBasket = {
    small: 9.99,
    medium: 14.99,
    large: 19.99
}

let cupcakeOptionSmall = ["Strawberry Cupcake", "Chocolate Cupcake", "Vanilla", "Cookies n' Cream"]
let browineOptionSmall = ["Walnut Browine", "Chocolate Browine"]
let cookieOptionSmall = ["Chocolate Chip Cookies", "Sugar Cookies"]
let cupcakeOptionMedium = [...cupcakeOptionSmall, "Mocha Cupcake","Irish Cream Cupcakes"]
let browineOptionMedium =  [...browineOptionSmall, "Cream Cheese Browine"]
let cookieOptionMedium =[...cookieOptionSmall, "Peanut Butter Cookies"]
let cupcakeOptionLarge = [...cupcakeOptionMedium, "Mint Oero", "Chocolate Rasberry"]
let browineOptionLarge =[...browineOptionMedium, "Marshmallow Crunch Browine", "Peanut Butter Browine"]
let cookieOptionLarge =[...cookieOptionMedium, "Oatmeal Raisin Cookies"]

var basketOption = {
    small : {
        cupcake : {
            quantity : 2,
            options : cupcakeOptionSmall
        },
        browine : {
            quantity : 1,
            options : browineOptionSmall
        },
        cookie : {
            quantity : 1,
            options : cookieOptionSmall
        }
    },
    medium : {
        cupcake : {
            quantity : 4,
            options : cupcakeOptionMedium
        },
        browine : {
            quantity : 3,
            options : browineOptionMedium
        },
        cookie : {
            quantity : 2,
            options : cookieOptionMedium
        }
    },
    large : {
        cupcake : {
            quantity : 6,
            options : cupcakeOptionLarge
        },
        browine : {
            quantity : 4,
            options : browineOptionLarge
        },
        cookie : {
            quantity : 3,
            options : cookieOptionLarge
        }
    }
}

let treatOptions = {
    birthday : "Funfetti Cupcakes*",
    anniversary : "Dark Chocolate Cupcakes*",
    graduation : "Ultimate Chocolate Cupcake*",
    getwellsoon : "Caramel Apple*",
    thankyou : "Rainbow Cupcakes*",
    special : "Red Velvet Cupcake*"
}

function showOptions() {
    document.getElementById("coverStory").style.display="none";
    document.getElementById("ocassion-selection").style.display="block";
    document.getElementById("ocassion-selection").scrollIntoView();
}

//occasion selected assigned to a key in customizeBasket
function ocassionSelection(ocassionSelected) {
    document.getElementById("basket-size").style.display="block";
    document.getElementById("basket-size").scrollIntoView();
    if(customizeOrder.ocassion != null) {
        console.log(customizeOrder.ocassion)
        var idToDelete = treatOptions[customizeOrder.ocassion] + "id";
        document.getElementById(idToDelete).remove();
    }
    customizeOrder.ocassion = ocassionSelected;
    check(treatOptions[customizeOrder.ocassion], "cupcake-order")
}

//basket selected assigned to a key in customizeBasket
//cupcake of selected ocassion assigned to order div
function basketSelection(basketSelected) {
    document.getElementById("treat-option").style.display="block";
    document.getElementById("treat-option").scrollIntoView();
    if(customizeOrder.basket != null) {
        document.getElementById('cupcake-list').innerHTML ="";
        document.getElementById('browine-list').innerHTML ="";
        document.getElementById('cookie-list').innerHTML ="";
       
    }
    customizeOrder.basket = basketSelected;
    console.log(customizeOrder)
    treatSelection(basketSelected);
}

//displa
function treatSelection(basketSize) {
    document.getElementById("order-summary").style.display="block";
    var cupCakeQuantityInfo = document.createElement('p')
    cupCakeQuantityInfo.innerHTML =  " Select " +
    basketOption[customizeOrder.basket].cupcake.quantity + " flavours. 2pc each flavour selected. Including 2pc special occassion cupcake."
    document.getElementById("cupcake-list").append(cupCakeQuantityInfo)

    var browineQuantityInfo = document.createElement('p')
    browineQuantityInfo.innerHTML =  " Select " +
    basketOption[customizeOrder.basket].browine.quantity + " flavours. 3pc each flavour selected."
    document.getElementById("browine-list").append(browineQuantityInfo)

    var cookieQuantityInfo = document.createElement('p')
    cookieQuantityInfo.innerHTML =  " Select " +
    basketOption[customizeOrder.basket].cookie.quantity + " flavours. 2pc each flavour selected."
    document.getElementById("cookie-list").append(cookieQuantityInfo)

    basketOption[basketSize].cupcake.options.map(
        (item) => {
            var summary = document.createElement('p');
            summary.innerHTML = treatOptions[[customizeOrder].ocassion];
            var radioButton = document.createElement('input');
            radioButton.type= 'radio';
            radioButton.id = item;
            radioButton.name = name;
            radioButton.onclick = () => orderSummary(item, 'cupcake-order', "cupcake");

            var label = document.createElement('label');
            label.htmlFor = item;

            var description = document.createTextNode(item);
            label.appendChild(description);

            var newLine = document.createElement('br')
            var container = document.getElementById('cupcake-list');
            container.append(radioButton);
            container.append(label);
            container.append(newLine);
        }
    )

    basketOption[basketSize].browine.options.map(
        (item) => {
            var radioButton = document.createElement('input');
            radioButton.type= 'radio';
            radioButton.id = item;
            radioButton.name = item;
            radioButton.onclick = () => orderSummary(item, 'browine-order', "browine");

            var label = document.createElement('label');
            label.htmlFor = item;

            var description = document.createTextNode(item);
            label.appendChild(description);

            var newLine = document.createElement('br')
            var container = document.getElementById('browine-list');
            container.append(radioButton);
            container.append(label);
            container.append(newLine);
        }
    )

    basketOption[basketSize].cookie.options.map(
        (item) => {
            var radioButton = document.createElement('input');
            radioButton.type= 'radio';
            radioButton.id = item;
            radioButton.name = item;
            radioButton.onclick = () => orderSummary(item, 'cookie-order', 'cookie');

            var label = document.createElement('label');
            label.htmlFor = item;

            var description = document.createTextNode(item);
            label.appendChild(description);

            var newLine = document.createElement('br')
            var container = document.getElementById('cookie-list');
            container.append(radioButton);
            container.append(label);
            container.append(newLine);
        }
    )
}

function orderSummary(item, name, counter) {
    document.getElementById("order-summary").scrollIntoView();
    basketOrdered = customizeOrder.basket;
    basketCounter = basketOption[basketOrdered][counter].quantity
    console.log(basketCounter);
    if(treatOrder.indexOf(item) >= 0) {
        document.getElementById(item).checked = false;
        console.log("index" + treatOrder.indexOf(item))
        treatOrder.splice(treatOrder.indexOf(item), 1)
        counterCheck[counter]--
        }
    else if(counterCheck[counter] >= basketCounter) {
        document.getElementById(item).checked = false;
        alert("Exceed")
        return;
    }
    else if(treatOrder.indexOf(item) === -1) {
        treatOrder =[...treatOrder, item];
        counterCheck[counter] ++
    }
        console.log(treatOrder)
        console.log( counterCheck)
 
    check(item, name);
}

function check(item, nameOfDiv) {
    let idForItem = item + "id";
    console.log(item)
    console.log(nameOfDiv)
        if(item === treatOptions[customizeOrder.ocassion] 
            || document.getElementById(item).checked === true) {
            var itemToEnter = document.createElement('p');
            itemToEnter.setAttribute('id', idForItem)
            itemToEnter.innerHTML = item;
            document.getElementById(nameOfDiv).append(itemToEnter);
        }
        else {
            document.getElementById(idForItem).remove();
        }
    
}

function addToCart() {
    alert("Total cost $" + priceBasket[customizeOrder.basket])
}