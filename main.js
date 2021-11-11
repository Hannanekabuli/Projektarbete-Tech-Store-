var listOfProducts;

/** Get products from the json file and store it in a gobal variable */
function loadProducts() {
    fetch("./products.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}


function initSite() {
    loadProducts();
    // This would also be a good place to initialize other parts of the UI
}

/** Uses the loaded products data to create a visible product list on the website */
function addProductsToWebpage() {
    // Check your console to see that the products are stored in the listOfProducts varible.
    console.log(listOfProducts);

    // Add your code here, remember to brake your code in to smaller function blocks
    // to reduce complexity and increase readability. Each function should have
    // an explainetory comment like the one for this function, see row 22.
    
    // TODO: Remove the console.log and these comments when youve read them.
}

        
var listOfProducts; [
    {
        title: "iPhone X",
        description: "Last years phone from Apple with a beautiful all display front.",
        image: "iPhoneX.png",
        price: 11495
    },{
        title: "One Plus 5",
        description: "Sleek and powerful smartphone from One Plus.",
        image: "OnePlus5.png",
        price: 4995
    },{
        title: "Galaxy S8",
        description: "Really cool edge to edge smartphone from Samsung.",
        image: "SamsungS8.png",
        price: 7990
    },{
        title: "LG V30",
        description: "Super nice and beautiful smartphone from LG.",
        image: "LGV30.png",
        price: 7495
    }
];


function loadProducts  ()  {


 const productDiv = document.getElementById("./products.json")
   .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        addProductsToWebpage();
    });
}

  productDiv.innerHTML = ""

 products.forEach((item, index)=> {
    productDiv.innerHTML += 
    <div class="product">
  <div class="product_image">
  <img src=${item.image}/>  
  </div>
  <h2 class="product_title">${item.name}</h2>
  <p>Last years phone from Apple with a beautiful all display front.</p>
    <h3 class="product_price">${item.price} kr</h3>
     <button class="lägg till i kundvagnen">lägg till i kundvagnen<i class="fas fa-shopping-cart"></i></button>
     <button class="cart_item-remove">ta bort<i class="fas fa-trash"></i></button>
  </div> 
    
 })


let cart = {
    item: [],
    total: 0,
}

const renderProducts = () => {
    const cartDiv = document.querySelector(".cart_item")
    cartDiv.innerHTML= ""

    const totalPriceEl = document.querySelector("cart_total-price")

    let totalPrice = 0

    if (cart.item.length===0) {
        cartDiv.innerHTML = "kundvagnen är tomt"
    }

cart.item.forEach((item) => {
    totalPrice += item.total

    cartDiv.innerHTML +=
    `
    <div class="cart_total-price">${item,price}</div>
                            
    `
})

totalPriceEl.innerHTML = `total: ${totalPriceEl} kr`
}

const addToCart = (productIndex) => {
    const product = products[productIndex]

    let existingProduct = false

    let newCartItems = cart.item.reduce((state, item) => {
      if (item.name === product.name) {
          existingProduct = true

          const newItem = {
          ...item,
          qty: item.qty + 1,
          total: (item.qty + 1) * item.price
      }  

      return [...state, newItem]
      }

      return [...state,item]
    }, [])

    if (!existingProduct) {
        newCartItems.push({
            ...product,
            qty:1,
            total: product.price,
        })
    }

    cart = {
        
    }
}

renderProducts()
renderCartItems()




