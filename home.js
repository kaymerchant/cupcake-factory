let slideNumber = 1;

var images = {
    1 : {
        img : "images/carousel/1.jpg",
        text : "Cakes are special. Every birthday, every celebration ends with something sweet, a cake and people remember It's all about the memories."
    },
    2 : {
        img : "images/carousel/2.jpg",
        text : "Cake is happiness! If you know the way of the cake, you know the way of happiness! If you have a cake in front of you, you should not look any further for joy!" 

    },
    3 :{
        img : "images/carousel/3.jpg",
        text : "The great thing about cake is it doesn't feel like work. You forget about work. Kids, adults, they all get the same look in their eye when they're decorating cakes. That's the magic right there."
    }, 
    4 : {
        img : "images/carousel/4.jpg",
        text : "So if I have two pieces of cake, do I have twice as good an experience as the first piece of cake? One of the things I've found in life is that the first piece of cake is the best."
    }
}

function setSlideNumber(num) {
    slideNumber = num;
}

function manualCarousel() {

        document.getElementById("imageChange").src=images[slideNumber]["img"];
        document.getElementById("text-block").innerHTML=images[slideNumber]["text"];

        if(slideNumber === 4) {
            slideNumber = 1;
        }
        else {
            slideNumber++;
        }

        setTimeout(manualCarousel, 3000);
}


manualCarousel();
