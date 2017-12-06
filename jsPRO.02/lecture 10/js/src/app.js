;(x=>{
    let Card = require('./Card.js');
    let a = new Card('2A');
    let b = new Card('11K');
    console.log(a.cost(),b.cost());
})();