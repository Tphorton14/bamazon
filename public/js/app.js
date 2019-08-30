
$(document).ready(function() {

    function getProducts(){
$.get("/api/products", function (data){
    console.log(data);
    if(data){
        for (let i=0; i < data.length; i++){
            const products = $("<div class='col'>");
            products.append("<p>" + data[i].product_name + "</p>");
            products.append("<p>" + data[i].department_name + "</p>");
            products.append("<img src='" + data[i].image+ "' alt='swim gearr' class='pics'>")
            products.append("<p>$" + data[i].price + "</p>");
            products.append("<p>Stock: " + data[i].stock_quantity + "</p>");
            products.append("<button type='button' class='btn btn-info btn-sm' id='buttonAdd'>Buy!</button>")
            products.append("<button type='button' class='btn btn-secondary btn-sm' id='buttonDel'>Don't buy...</button>")
            products.append("<p>                                       </p>");
            products.append("<p>                                       </p>");
            $("#products").append(products)
        }
    }
});

}

getProducts();

});
