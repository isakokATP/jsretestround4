//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500016      Name: shisanucha chengsamo
class Game {
    constructor(id, title, genre, price){
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.price = price;
    }
}
 
class GameStore {
    constructor(storeName){
        this.storeName = storeName;
        this.inventory = [];
    }
    addGame(game){
        this.inventory.push(game);
        console.log(this.inventory);
    }
    searchByTitle(title){
        let findIn = this.inventory.find(i => i.title.toLowerCase() === title.toLowerCase());
        return findIn;
    }
    searchByGenre(genre){
        let findGenre = this.inventory.find(i => i.genre.toLowerCase() === genre.toLowerCase());
        return findGenre;
    }
    purchaseGame(id){
        let findID = this.inventory.find(i => i.id === id);
        if(findID === -1){
            return false;
        }
        this.inventory.splice(findID, 1);
        return this.inventory;
    }
    listInventory(){
        for(let i = 0; i <= this.inventory.length; i++){
           console.log(this.inventory[i]); 
        }
    }
    updateGamePrice(id, newPrice){
        let findId = this.inventory.find(i => i.id === id)
        let findprice = this.inventory.find(i => i.price === i.price)
        if(findId === -1){
            return false;
        }
        findprice -= newPrice
        console.log(this.inventory);
    }
    totalInventoryValue(){

    }
    listGenres(){
        
    }
    sellGame(id, quantity){
        let findId = this.inventory.find(i => i.id === id);
        this.inventory.splice(findId, 1)
        
    }
}

const store = new GameStore("Epic Game Store");
 
// Adding games to the inventory
store.addGame(new Game(1, "Game One", "Action", 59.99));
store.addGame(new Game(2, "Game Two", "Adventure", 49.99));
store.addGame(new Game(3, "Game GTA", "Openworld", 89.99));
 
// Searching games by title
console.log("---------Serch by title---------");
console.log(store.searchByTitle("One"));
console.log(store.searchByTitle("game gta"));
 
// Searching games by genre
console.log("-------serch by genre-----------");
console.log(store.searchByGenre("Adventure"));
 
// Purchasing a game
console.log("----------Game has been purchased-----------");
console.log(store.purchaseGame(1));
 
// Listing the inventory
console.log("----------present inventory----------");
console.log(store.listInventory());
 
// Updating a game price
console.log("----------update game price----------");
store.updateGamePrice(2, 39.99);
 
// // Calculating total inventory value
console.log(store.totalInventoryValue());
 
// // Listing all genres
console.log(store.listGenres());
 
// // Selling a game (assuming the game with ID 2 had its stock increased appropriately before)
console.log(store.sellGame(2, 1));
