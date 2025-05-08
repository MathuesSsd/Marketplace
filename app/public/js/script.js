// Sample product data
var products = [];
const apiPaths = {
  "getProducts":"/api/products",
  "root":"/api/",
  "userSign":"/api/auth/register",
  "userLogin": "/api/auth/login"
}

fetch(apiPaths.getProducts).then((response) => response.json())
  .then((data) =>{
  products = data
  loadProducts(products)
})

// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(productId) {
  const product = products.find(p => p._id === productId);
  if (product) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} foi adicionado ao carrinho!`);
  }
}

// Load products on homepage
function loadProducts(products) {
  const productsContainer = document.querySelector(".produtos-container");
  
  if (productsContainer) {
    products.forEach(product => {
      productsContainer.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-info">
            <h3>${product.name}</h3>
            <div class="price">R$ ${product.price.toFixed(2)}</div>
            <button onclick="addToCart('${product._id}')">Adicionar ao Carrinho</button>
          </div>
        </div>
      `;
    })
  }
  
  // Tab functionality for profile page
  const tabButtons = document.querySelectorAll(".tab-button");
  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Remove active class from all buttons and content
        document.querySelectorAll(".tab-button").forEach(btn => btn.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
        
        // Add active class to clicked button
        button.classList.add("active");
        
        // Show corresponding content
        const tabId = button.getAttribute("data-tab");
        document.getElementById(tabId).classList.add("active");
      });
    });
  }
}

function fillFormObject(elements){
  var formd = {}
  for(i=0; elements[i].nodeName != "BUTTON"; i++) {   
      let element = elements[i]
      formd[element.name || element.type] = element.value
  }

  return formd
}

// Simple form validation
const forms = document.querySelectorAll("form");
forms.forEach(form => {
  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    var formd = {}
    for(i=0; form.elements[i].nodeName != "BUTTON"; i++) {   
        let element = form.elements[i]
        formd[element.name || element.type] = element.value
    }
    formd = JSON.stringify(formd)
    console.log(formd)
    

    var route = null
    const myheaders = new Headers()
    switch (form.id) {
      case "signForm":
        route = apiPaths.userSign 
        myheaders.append("Content-Type", "application/json")
      break;

      case "loginForm":
        route = apiPaths.userLogin 
        myheaders.append("Content-Type", "application/json")
      break;
    
      case "postForm":
        route = apiPaths.getProducts 
        formd = new FormData(form)
        myheaders.append('Authorization', `Bearer ${localStorage.token}`)
      break;

      default:
        break;
    }

    try{
        const response = await fetch(route, {
          method: 'POST',
          headers: myheaders,
          body: formd
        })
        const data = await response.json()
        if(response.ok){
          localStorage.setItem('token', data.token)
          window.location = "/index.html"
        }
        else{alert(data.error)}
      }catch (err){alert(err)}
    
   
    alert("é necessario mais implementações!");
  });
});
