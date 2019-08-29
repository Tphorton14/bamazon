const db = require('../models');
​
const products = [
  {
    product_name: 'Goggles',
    department_name: 'Department One',
    price: 10.99,
    stock_quantity: 100
  },
  {
    product_name: 'Swim Cap',
    department_name: 'Department One',
    price: 6.99,
    stock_quantity: 125
  },
  {
      product_name: 'Practice Suit',
      department_name: 'Department One',
      price: 20.85,
      stock_quantity: 300, 
  },
  {
    product_name: 'Nose Plug',
    department_name: 'department One',
    price: 2.50,
    stock_quantity: 325
  },
  {
      product_name: 'Kick Board',
      department_name: 'Department One',
      price: 15.00,
      stock_quantity: 200,
  },
  {
    product_name: "Race Suit",
    department_name: 'Department One',
    price: 250.00,
    stock_quantity: 50,
  },
  {
  product_name: 'Fins',
  department_name: 'Department One',
  price: 40.68,
  stock_quantity: 100
  },
  {
    product_name: 'Pull Buoy',
    department_name: 'Department One',
    price: 11.00,
    stock_quantity: 225
  },
  {
    product_name: 'Pull Paddle',
    department_name: 'Department One',
    price: 12.00,
    stock_quantity: 285
  },
  {
  product_name: 'Swim Bag',
  deprtment_name: 'Department One',
  price: 85.00,
  stock_quantity: 85
  }
];

db.sequelize.sync({ force: true })
.then(function(){
    db.Products.bulkCreate(products)
    .then(function(rows){
        console.log(`\n${rows.length} Rows Inserted`)
    })
    .catch(function(err){
        console.log('\nError', err);
    });
});