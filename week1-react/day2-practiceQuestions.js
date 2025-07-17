const users = [
  {
    id: 1,
    name: "Saloni",
    age: 23,
    isActive: true,
    purchases: [
      { item: "Book", price: 200 },
      { item: "Pen", price: 30 }
    ]
  },
  {
    id: 2,
    name: "Ravi",
    age: 30,
    isActive: false,
    purchases: [
      { item: "Laptop", price: 70000 },
      { item: "Mouse", price: 500 }
    ]
  },
  {
    id: 3,
    name: "Anu",
    age: 27,
    isActive: true,
    purchases: [
      { item: "Phone", price: 25000 },
      { item: "Case", price: 400 }
    ]
  }
];


//Problem 1: Get Names of All Active Users
const activeUsers = users.filter((user) => user.isActive == true).map((us) => us.name)


//Problem 2: Total Spending Per User (Name + Total)
const usersSpending = users.map((user) => {
    const spending = user.purchases.reduce((acc , item) => acc + item.price, 0);
    return {
           name: user.name,
           total: spending
        }
    
})
usersSpending


//Problem 3: Flatten All Purchases into a Single Array
const allPurchases = users.flatMap((user) => {
  return user.purchases
})


// Problem 4: Find Highest Spender
// const highestSpender = usersSpending.map((user) => {
//     user.total.reduce((acc , us) => us> acc , 0)
// })

const highestSpender = usersSpending.reduce((acc , user) => acc.total> user.total? acc : user)
highestSpender


//Problem 5: Average Purchase Price Across All Users

const userLength = usersSpending.length
const averagePurchase  = usersSpending.reduce((acc , user) => (acc + user.total)/userLength , 0)
