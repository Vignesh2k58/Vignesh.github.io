const reviews = [
    {
        id: 1,
        name: "john wick",
        job: "actor",
        img: "images/john wick.jpeg",
        text:
            "john wick dolor, sit amet consectetur adipisicing elit. Repellat repellendus reprehenderit molestiae velit officiis ipsum possimus iste, deleniti impedit rem vero sequi laborum soluta expedita consequuntur numquam hic Aut.",
    },
    {
        id: 2,
        name: "johnny depp",
        job: "actor",
        img: "images/Johnny-Depp.jpg",
        text:
        "johnny depp dolor, sit amet consectetur adipisicing elit. Repellat repellendus reprehenderit molestiae velit officiis ipsum possimus iste, deleniti impedit rem vero sequi laborum soluta expedita consequuntur numquam hic Aut.",
    },
    {
        id: 3,
        name: "hiphop thamizha",
        job: "Rapper",
        img: "images/adhi.jpg",
        text:
        "hiphop thamizha dolor, sit amet consectetur adipisicing elit. Repellat repellendus reprehenderit molestiae velit officiis ipsum possimus iste, deleniti impedit rem vero sequi laborum soluta expedita consequuntur numquam hic Aut.",
    },
    {
        id: 4,
        name: "Ab De Villiers",
        job: "cricketer",
        img: "images/abd.webp",
        text:
        "Ab De Villiers dolor, sit amet consectetur adipisicing elit. Repellat repellendus reprehenderit molestiae velit officiis ipsum possimus iste, deleniti impedit rem vero sequi laborum soluta expedita consequuntur numquam hic Aut.",
    },
];

//select items
const img = document.querySelector("#img");

const author = document.querySelector(".author");
console.log(img);
const job = document.querySelector(".job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");
const randomBtn = document.querySelector(".btn");

 //set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

// show person

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
  
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length-1)
    {
        currentItem = 0;
        
    }

    showPerson();
});

// show previous person

prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem=reviews.length-1;
       
    }

    showPerson();
});
 // show random person
randomBtn.addEventListener('click', function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();

});