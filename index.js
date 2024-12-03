const menuItems = [
    {
        id: 1,
        item: "Food Item - 1",
        oneLiner: "One:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis assumenda illum harum quis voluptatum! Cum minima provident nostrum dignissimos perspiciatis",
        img: "images/food1.jpg",
        hotel: "Hotel Name - 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum enim tempore aliquam atque eius debitis totam, eos quo beatae illo, nobis, error placeat? Voluptas quo voluptate placeat consequatur distinctio."
    },
    {
        id: 2,
        item: "Food Item - 2",
        oneLiner: "Two:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis assumenda illum harum quis voluptatum! Cum minima provident nostrum dignissimos perspiciatis",
        img: "images/food2.jpg",
        hotel: "Hotel Name - 2",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum enim tempore aliquam atque eius debitis totam, eos quo beatae illo, nobis, error placeat? Voluptas quo voluptate placeat consequatur distinctio."
    },
    {
        id: 3,
        item: "Food Item - 3",
        oneLiner: "Three:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis assumenda illum harum quis voluptatum! Cum minima provident nostrum dignissimos perspiciatis",
        img: "images/food3.png",
        hotel: "Hotel Name - 3",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum enim tempore aliquam atque eius debitis totam, eos quo beatae illo, nobis, error placeat? Voluptas quo voluptate placeat consequatur distinctio."
    },
    {
        id: 4,
        item: "Food Item - 4",
        oneLiner: "Four:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis assumenda illum harum quis voluptatum! Cum minima provident nostrum dignissimos perspiciatis",
        img: "images/food4.png",
        hotel: "Hotel Name - 4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum enim tempore aliquam atque eius debitis totam, eos quo beatae illo, nobis, error placeat? Voluptas quo voluptate placeat consequatur distinctio."
    },
    {
        id: 5,
        item: "Food Item - 5",
        oneLiner: "Five:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis assumenda illum harum quis voluptatum! Cum minima provident nostrum dignissimos perspiciatis",
        img: "images/food5.png",
        hotel: "Hotel Name - 4",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum enim tempore aliquam atque eius debitis totam, eos quo beatae illo, nobis, error placeat? Voluptas quo voluptate placeat consequatur distinctio."
    },
    {
        id: 6,
        item: "Food Item - 6",
        oneLiner: "Six:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis assumenda illum harum quis voluptatum! Cum minima provident nostrum dignissimos perspiciatis",
        img: "images/food6.jpg",
        hotel: "Hotel Name - 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum enim tempore aliquam atque eius debitis totam, eos quo beatae illo, nobis, error placeat? Voluptas quo voluptate placeat consequatur distinctio."
    }
]

const item = document.getElementById("item");
const oneLiner = document.getElementById("oneLiner");
const img = document.getElementById("img");
const hotel = document.getElementById("hotel");
const desc = document.getElementById("desc");
const prev = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");

let currentMenu = 0;

window.addEventListener("DOMContentLoaded", function(){
    allMenu(currentMenu);
})

const allMenu = () => {
    let menu = menuItems[currentMenu];
    item.textContent = menu.item;
    oneLiner.textContent = menu.oneLiner;
    img.src = menu.img;
    hotel.textContent = menu.hotel;
    desc.textContent = menu.desc;
}

random.addEventListener("click", () => {
    currentMenu = Math.floor(Math.random() * menuItems.length);
    allMenu(currentMenu);
})

prev.addEventListener("click", () => {
    currentMenu--;
    if(currentMenu < 0 ){
      currentMenu = menuItems.length - 1
    }
    allMenu(currentMenu);
})

next.addEventListener("click", () => {
    currentMenu++;
    if(currentMenu > menuItems.length - 1){
        currentMenu = 0;  
    }
    allMenu(currentMenu);
})