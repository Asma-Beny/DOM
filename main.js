var cartButton = document.querySelector(".cart-button");
var cartItems = document.querySelector(".cart-items");
cartButton.addEventListener("click", function () {
  cartItems.classList.toggle("active");
});
var productsContainer = document.querySelector(".products");
fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    let myProducts = res.products;

    myProducts.forEach((elementCourant, i) => {
      productsContainer.innerHTML += `
         <div id=${i} class="product">
        <img
          src=${elementCourant.thumbnail}
          alt=""
        />
        <div class="item-info">
          <h5>${elementCourant.title} </h5>
          <p>${elementCourant.price} $</p>
              <input type="button" class="buy" value="Add to cart">
        </div>
      </div>

      `;
    });
    /*
    var addButtons = document.querySelectorAll(".buy");

    addButtons.forEach((e) => {
      e.addEventListener("click", function (event) {
        let clickedID = event.target.parentNode.parentNode.getAttribute("id");
        console.log(myProducts[clickedID]);
        let exist = false;
        productsContainer.forEach((e) => {
            if (e.title == clickProduct.title){
                exist = true;
            }
        });
        if (exist == true){
            alert("l'element exist déjà")
        }
        else{console.log(myProducts[clickedID])
        cartItems.innerHTML += `
        <div class="cart-item">
        <div class="title">${myProducts[clickedID].title} </div>
        <div class="unit-price">${myProducts[clickedID].price}</div>
        <div class="quantity">
          <i class="fa-solid fa-minus moin"></i>
          <div class="amount">1</div>
          <i class="fa-solid fa-plus plus"></i>
        </div>
        <div class="total-item-price">${myProducts[clickedID].price}</div>
      </div>
      `;

      panier.push(clickProduct);
      let pluses=document.querySelectorAll(".plus");
        pluses.forEach((e)=> {
            e.addEventListener("click", (event) =>{
                console.log(event);
                let quantyToUpdate = 
                 event.target.parentNode.querySelector(".amount");

                quantyToUpdate.innerHTML =  parseInt( quantyToUpdate.innerHTML) + 1;
            });
        });

        let moins=document.querySelectorAll(".moin");
        moins.forEach((e)=> {
            e.addEventListener("click", (event) =>{
                console.log(event);
                let quantyTodown = 
                 event.target.parentNode.querySelector(".amount");
                quantyTodown.innerHTML--;
                //quantyToUpdate.innerHTML = quantyToUpdate.innerHTML + 1;
            });
        });
        };
        
      });
    });*/
  });
