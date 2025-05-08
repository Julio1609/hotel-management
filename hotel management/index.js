
const popularGrid = document.getElementById("popularGrid");
const clientGrid =document.getElementById("clientGrid");

const clients =[
    {
        clientName: "~ Julio",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, temporibus",
        img: "pics/images2.png"
    },
    {
        clientName: "~ Julio",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, temporibus",
        img: "pics/images3.png"
    },
    {
        clientName: "~ Julio",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, temporibus",
        img: "pics/images4.jpeg"
    },
]

clients.forEach (client =>{
    const clientCard = document.createElement("div");
    clientCard.classList.add("client_card");
    clientCard.innerHTML = `
    <div >
        <img src="${client.img}" alt="">
        <p>${client.msg}</p> <br>
        <p>${client.clientName} </p>
    </div>
    `;
    clientGrid.appendChild(clientCard);
})




const hotels = [
    {
        name: "Grand Palace",
        price: "£599.00",
        location: "London, United Kingdom",
        image:"Pics/Fingal Hotel.webp"
    },
    {
        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Rossendale Holiday Cottages & Spa.webp"
    },
    {
        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Grand Hotel Scarborough.webp"
    },
    {
        name: "Grand Palace",
        price: "£599.00",
        location: "London, United Kingdom",
        image:"Pics/Fingal Hotel.webp"
    },
    {
        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Rossendale Holiday Cottages & Spa.webp"
    },
    {
        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Grand Hotel Scarborough.webp"
    },
    {

        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Grand Hotel Scarborough.webp"
    },
    
];




hotels.forEach(hotel => {
    const hotelCard = document.createElement("div");
    hotelCard.classList.add("popular_card");
    hotelCard.innerHTML = `
        <img class="displayed-img" src="${hotel.image}" alt="${hotel.name}">
        <div class="popular_content">
            <div class="popular_card_header">
                <h4>${hotel.name}</h4>
                <h4>${hotel.price}</h4>
            </div>
            <p>${hotel.location}</p>
        </div>
    `;
    popularGrid.appendChild(hotelCard);
});
   