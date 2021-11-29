var cartItems = localStorage.getItem("product");
        var data = [];
        if(cartItems != "" || cartItems != "undefined")
        {
            data = JSON.parse(cartItems);
            RenderData();
        }

        function RenderData(){
            if(data.length == 0) 
            {
                document.querySelector('.content').innerText = "KUNDVAGNEN ÄR TOMT";
                return;
            }
            
        var content =  document.querySelector('.content');
        var cartInfo = document.querySelector('.fa-shopping-cart');
        cartInfo.innerHTML = " " + data.length;
        data.forEach((item, index) => {
            var listItems = document.createElement("div");
            var product = document.createElement("div");
            var itemTitle =  document.createElement('h2');
            var image =  document.createElement('img');
            var description =  document.createElement('p');
            var price =  document.createElement('div');
            var quantity =  document.createElement('div');
            var button =  document.createElement('button');
            var priceContainer =  document.createElement('div');

            listItems.className = "item-list";
            product.className = "product";
            product.id = item.id;
            itemTitle.className = "item-title";
            image.className = "image-div";
            description.className = "description";
            price.className ="price";
            quantity.className = "quantity";
            priceContainer.className = "price-container";
            button.className ="add-button";
            button.type ="button";
            
            button.innerHTML= `<i class="fa fa-trash" aria-hidden="true"></i> Ta Bort`;

            button.addEventListener("click", ClickHandler);
            
            var buttons = document.getElementsByClassName("button");
            for (var b = 0; b < buttons.length; b++) {
                buttons[b].src = "./assets/trash.png";   
            }

            itemTitle.innerHTML = item.title;
            image.src = "./assets/" + item.image;
            description.innerHTML = item.description;
            price.innerHTML = item.price;
            if(item.quantity > 1)
            {
                quantity.innerHTML = "Quantity: " + item.quantity;
            }
            
            product.append(image);
            product.append(itemTitle);
            product.append(priceContainer);
            priceContainer.append(quantity);
            priceContainer.append(price);
            
            // product.appendChild(trash);
            product.appendChild(button);
            listItems.append(product);

            listItems.append(product);
            content.append(listItems);

        });
        ShowTotal();
    }

    var home = document.querySelector('.page-name');
    home.addEventListener('click', NavigateTo);
    function NavigateTo(){
        document.location.href = "./index.html";
    }

    function ClickHandler(e){
        var div = e.target.parentNode;
        var clickedItemValue =  e.target.parentNode.children;
      
        data = JSON.parse(cartItems);
        for(var i = 0; i <data.length; i++){
            if(data[i].id == div.id && data[i].quantity > 1)
            {
                var eachPrice =  data[i].price / data[i].quantity;
                if(data[i].quantity > 1)
                {
                    data[i].price -= eachPrice;
                    data[i].quantity--;
                }else{
                    data[i].price /= 2;
                }

                break;
            }

            if(data[i].id == div.id && data[i].quantity == 1){
                data = data.filter(el => {return el.id != div.id});
            }
        }
        var id = e.target.parentElement.parentElement;
        var elem = document.getElementsByClassName(id.className);
        for(var el  in elem){
            var div = document.getElementsByClassName('item-list')[0];

            if(div)
            div.remove();
        }

        localStorage.setItem("product", JSON.stringify(data));
        RenderData();
        location.reload();
    }

    function ShowTotal(){
        document.querySelector(".total-container").style = "display:flex";
        var totalDiv = document.querySelector(".total-price");

        var totalList = [];
        var total;
        data.forEach(item => {
            var oneItemPrice = item.price;
            totalList.push(oneItemPrice);
        });
        
        total = totalList.reduce((a,b) => {return (parseInt(a) + parseInt(b))})
        totalDiv.innerText = "Total: " + total;
    }
