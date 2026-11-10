// function cricketer(name , number , category){
//     this.name = name;
//     this.number = number;
//     this.category = category;
// }

// cricketer.prototype.mydetails = function(){
//     console.log(`name ${this.name}`);
//    console.log( `category ${this.category}`);
//    console.log( `number ${this.number}`);
// }

// let cricketer1 = new cricketer("babar azam" , 56 , "batsman")
// let cricketer2 = new cricketer("mohammad amir" , 5 , "bowler")
// let cricketer3 = new cricketer("mohammad rizwan" , 16 , "wicket-keeper")

// cricketer.prototype.updatedetails = function(newNumber){
//     this.number = newNumber;
// }

// cricketer2.updatedetails(20);
// console.log(cricketer1.mydetails === cricketer2.mydetails);

// console.log("number" in cricketer1);
// console.log("name" in cricketer2);
// console.log(cricketer1.hasOwnProperty("name"));
// console.log(typeof cricketer1.number);
// console.log(typeof cricketer1.mydetails);

// cricketer.prototype.team = "pakistan";
// console.log(cricketer1.team);
// console.log(Object.getPrototypeOf(cricketer1) === cricketer.prototype);





// cricketer1.mydetails();
// cricketer2.mydetails();
// cricketer3.mydetails();


// let products = [
//     {
//         id: 1,
//         name: "MRF Cricket Bat",
//         price: 12000,
//         category: "bats",
//         emoji: "🏏"
//     },
//     {
//         id: 2,
//         name: "SG Cricket Ball",
//         price: 1500,
//         category: "balls",
//         emoji: "🔴"
//     },
//     {
//         id: 3,
//         name: "Cricket Gloves",
//         price: 3500,
//         category: "gloves",
//         emoji: "🧤"
//     },
//     {
//         id: 4,
//         name: "Cricket Helmet",
//         price: 4500,
//         category: "helmets",
//         emoji: "🪖"
//     },
//     {
//         id: 5,
//         name: "Pakistan Jersey",
//         price: 2500,
//         category: "jerseys",
//         emoji: "👕"
//     },
//     {
//         id: 6,
//         name: "Kashmir Willow Bat",
//         price: 8500,
//         category: "bats",
//         emoji: "🏏"
//     }
// ];


// // Constructor

// function CartItem(product, quantity = 1) {
//     this.id = product.id;
//     this.name = product.name;
//     this.price = product.price;
//     this.quantity = quantity;
// }


// // Prototype Method

// CartItem.prototype.updateQuantity = function(amount) {
//     this.quantity += amount;
// };


// // Shopping Cart Array

// let cart = [];


// // Display Products

// function displayProducts(data) {

//     let container = document.getElementById("products");

//     container.innerHTML = "";

//     for (let i = 0; i < data.length; i++) {

//         let product = data[i];

//         let card = document.createElement("div");

//         card.className = "product";

//         card.innerHTML = `
//             <div class="emoji">${product.emoji}</div>
//             <h3>${product.name}</h3>
//             <p class="price">Rs. ${product.price}</p>
//             <p>Category: ${product.category}</p>
//             <button class="addBtn">Add To Cart 🛒</button>
//         `;

//         card.querySelector(".addBtn").addEventListener("click", function() {
//             addToCart(product.id);
//         });

//         card.addEventListener("mouseover", function() {
//             console.log(`Commentary: ${product.name} is on the field!`);
//         });

//         container.appendChild(card);
//     }

// }


// // Add To Cart

// function addToCart(id) {

//     let product = products.find(function(item) {
//         return item.id === id;
//     });

//     let existingItem = cart.find(function(item) {
//         return item.id === id;
//     });

//     if (existingItem) {
//         existingItem.updateQuantity(1);
//     } else {
//         let newItem = new CartItem(product);
//         cart.push(newItem);
//     }

//     displayCart();
// }


// // Display Cart

// function displayCart() {

//     let cartContainer = document.getElementById("cart");

//     cartContainer.innerHTML = "";

//     let totalPrice = 0;
//     let totalItems = 0;

//     for (let i = 0; i < cart.length; i++) {

//         let item = cart[i];

//         totalPrice += item.price * item.quantity;
//         totalItems += item.quantity;

//         let div = document.createElement("div");

//         div.className = "cart-item";

//         div.innerHTML = `
//             <span>${item.name}</span>
//             <span>Rs. ${item.price}</span>
//             <span>Qty: ${item.quantity}</span>
//             <button class="removeBtn">Remove</button>
//         `;

//         div.querySelector(".removeBtn").addEventListener("click", function() {
//             removeFromCart(item.id);
//         });

//         cartContainer.appendChild(div);
//     }

//     document.getElementById("total").innerHTML = totalPrice;

//     document.getElementById("cartCount").innerHTML = totalItems;

// }


// // Remove Product

// function removeFromCart(id) {

//     cart = cart.filter(function(item) {
//         return item.id !== id;
//     });

//     displayCart();
// }


// // Search Products

// document.getElementById("search").addEventListener("input", function() {

//     let value = this.value.toLowerCase();

//     let result = products.filter(function(product) {
//         return product.name.toLowerCase().includes(value);
//     });

//     displayProducts(result);

// });


// // Category Filter

// document.getElementById("category").addEventListener("change", function() {

//     let selectedCategory = this.value;

//     let result = products.filter(function(product) {

//         return selectedCategory === "all" ||
//                product.category === selectedCategory;

//     });

//     displayProducts(result);

// });


// // Checkout

// document.getElementById("checkout").addEventListener("click", function() {

//     if (cart.length === 0) {

//         alert("Your cricket kit bag is empty!");

//     } else {

//         alert(`Match Ready! Your total bill is Rs. ${document.getElementById("total").innerHTML}`);

//         cart = [];

//         displayCart();

//     }

// });


// // Cart Button

// document.getElementById("cartBtn").addEventListener("click")


// Mobile Menu

let menuBtn = document.getElementById("menuBtn");
let navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", function() {
    navbar.classList.toggle("active");
});


// Close menu after clicking a link

let navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navbar.classList.remove("active");
    });
});


// Apply Buttons

let applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let selectedRole = this.getAttribute("data-role");

        document.getElementById("role").value = selectedRole;

        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Application Form

let form = document.getElementById("applicationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;

    document.getElementById("formMessage").innerHTML =
        `Thank you ${name}! Your ${role} inquiry has been prepared.`;

    form.reset();

});
