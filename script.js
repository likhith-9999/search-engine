 const search = ()=> {
    const search_input = document.getElementById("input-box").value.toUpperCase();
    const storeitems = document.getElementById("items-container")
    const product = document.getElementsByClassName("product");
    const product_name = storeitems.getElementsByTagName("h2");

    for (var i=0; i < product_name.length; i++){
        let text_value = product[i].innerHTML || product[i].textContent;

        if (text_value){
            
            if (text_value.toUpperCase().indexOf(search_input) > -1){
                product[i].style.display = "";
            }
            else {
                product[i].style.display = "none";
            }
        }
    }
}