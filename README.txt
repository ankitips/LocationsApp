


# Basic Setup:
   1. npm install
   
   
# To Run Locally
   1. npm start
   
   
   
   
   
### Adding items to localStorage
localStorage.setItem("products", JSON.stringify([
    {"id": 1, "title": "Jeans", "price": 1299, "inventory": 20},
    {"id": 2, "title": "Mobile", "price": 10000, "inventory": 10},
    {"id": 3, "title": "Watch", "price": 800, "inventory": 5},
    {"id": 4, "title": "Kingfisher", "price": 120, "inventory": 8}
]))


##
var itemsToBeAdded = [{"id": 1, "title": "Jeans", "price": 1299, "inventory": 20},
                          {"id": 2, "title": "Mobile", "price": 10000, "inventory": 10},
                          {"id": 3, "title": "Watch", "price": 800, "inventory": 5},
                          {"id": 4, "title": "Kingfisher", "price": 120, "inventory": 8}]
   
   
 addItemsToStorage(itemsToBeAdded);   