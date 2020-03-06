const db = require('../models');

const items = [
  {
    product_name: 'Goggles',
    department_name: 'Department One',
    image: "https://images-na.ssl-images-amazon.com/images/I/61H0gl0fHDL._UX679_.jpg",
    price: 10.99,
    stock_quantity: 100
  },
  {
    product_name: 'Swim Cap',
    department_name: 'Department One',
    image: "https://photos.cdn-outlet.com/photos/options/20745-212-1A.jpg",
    price: 6.99,
    stock_quantity: 125
  },
  {
      product_name: 'Practice Suit',
      department_name: 'Department One',
      image: "https://cdn.shopify.com/s/files/1/0151/3877/products/energy_brief_back_1024x1024.jpg?v=1524598384",
      price: 20.85,
      stock_quantity: 300, 
  },
  {
    product_name: 'Nose Plug',
    department_name: 'department One',
    image: "https://www.yourswimlog.com/wp-content/uploads/2018/01/FINIS-Nose-Clip-for-Swimmers.jpg",
    price: 2.50,
    stock_quantity: 325
  },
  {
      product_name: 'Kick Board',
      department_name: 'Department One',
      image: "https://images-na.ssl-images-amazon.com/images/I/713m5yvODKL._SL1500_.jpg",
      price: 15.00,
      stock_quantity: 200,
  },
  {
    product_name: "Race Suit",
    department_name: 'Department One',
    image: "https://www.picclickimg.com/d/l400/pict/233224365846_/Speedo-Fastskin-Xenon-Tri-Suit-Black-Blue-Size-Medium.jpg",
    price: 250.00,
    stock_quantity: 50,
  },
  {
  product_name: 'Fins',
  department_name: 'Department One',
  image: "https://www.rei.com/media/0652702f-4c3e-4e63-9520-4dd726d53b3f?size=784x588",
  price: 40.68,
  stock_quantity: 100
  },
  {
    product_name: 'Pull Buoy',
    department_name: 'Department One',
    image: "https://i.ebayimg.com/images/g/hQgAAOSwx2VZhoOr/s-l640.jpg",
    price: 11.00,
    stock_quantity: 225
  },
  {
    product_name: 'Pull Paddle',
    department_name: 'Department One',
    image: "https://images-na.ssl-images-amazon.com/images/I/61SdFcDeBhL._SX425_.jpg",
    price: 12.00,
    stock_quantity: 285
  },
  {
  product_name: 'Swim Bag',
  deprtment_name: 'Department One',
  image: "http://www.zwemza.com/wp-content/uploads/2016/05/speedobag.jpg",
  price: 85.00,
  stock_quantity: 85
  }
];

db.sequelize.sync({ force: true })
.then(function(){
    db.Products.bulkCreate(items)
    .then(function(rows){
        console.log(`\n${rows.length} Rows Inserted`)
    })
    .catch(function(err){
        console.log('\n\nError', err);
    });
});