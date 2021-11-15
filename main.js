fetch("./products.json")
.then(response => {
    return response.json();
})
.then(data => RenderData(data));

var content = document.querySelector(`.content`);
var ShoppingCart = [];

function RenderData(data){
    var cartInfo = document.querySelector(`.fa-shopping-cart`);
    var listOfData = JASON.parse(localStorage.getItem("product";
    if(listOfData)
    cartInfo.innerText = " " + JSON.parse(localStorage.getItem("product")).length;

    data.forEach((item,index) =>{
        var listItems = document.createElement("div");
        var product = document.createElement("div");
        var itemTitle = document.createElement(`h2`);
        var image = document.createElement(`img`);
        var description = document.createElement(`p`);
        var price = document.createElement(`div`);
        var quantity = document.createElement(`div`);
        var button = document.createElement(`button`);

        
    })
}