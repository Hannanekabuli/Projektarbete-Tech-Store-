fetch("./products.json")
.then(response => {
    return response.json();
})
.then(data => RenderData(data));
