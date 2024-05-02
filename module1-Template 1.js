//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500016       Name:shisanucha chengsamo
class BankAccount {
    constructor(accountNumber){
        this.accountNumber = accountNumber;
        this.balance = 0;
        this.transactions = [];
    }
    deposit(amount){
        if(amount <= 0){
            console.error("Ivalid deposit");
            return;
        }
        this.balance += amount;
        this.transactions.push({
            id: this.transactions.length+ 1,
            type: "deposit",
            amount: amount,
            timestamp: new Date()
        });
    }
    withdraw(amount){
        if(amount <= 0 || amount > this.balance){
            console.error("Invalid");
            return;
        }
        this.balance -= amount;
        this.transactions.push({
            id: this.transactions.length + 1,
            type: "withdraw",
            amount: amount,
            timestamp: new Date()
        });
    }
    getBalance(){
        return this.balance;
    }
    getAccountNumber(){
        return this.accountNumber;
    }
    getTransactions(){
        return this.transactions;
    }
    getTransaction(id){
        let transaction = this.transactions.find(tran => tran.id === id);
        return transaction ? transaction : null;
    }
    recordTransaction(type, amount){
        let transaction = {
            id: this.transactions + 1,
            type: type,
            amount: amount,
            timestamp: new Date()
        };
        this.transactions.push(transaction)
    }
    transferFunds(targetAccountNumber, amount){
        let targetAccount = this.accountNumber === targetAccountNumber;
        if(!targetAccount){
            return false;
        }

        this.balance -= amount;
        this.recordTransaction("withdraw", amount)

        this.balance += amount;
        this.recordTransaction("deposit", amount)

        return true;
    }
}
 
// Example Usage
const myAccount = new BankAccount("123456789");
console.log(myAccount.deposit(100)); // Deposit $100
console.log(myAccount.withdraw(50)); // Withdraw $50
console.log(myAccount.getBalance()); // Get the current balance
console.log(myAccount.getTransactions()); // Get all transactions