const CoffeeController = function () {
  return {
    get: get
  };

  function get(req, res) {
    const drinks = [
      {
        name: 'Espresso',
        description: 'Very delicious',
        ingredients: ['Espresso - 2 shots']
      },{
        name: 'Latte',
        description: 'Very foamy',
        ingredients: ['Espresso - 2 shots', 'Milk']
      }
    ];

    res.json(drinks);
  }
};

module.exports = CoffeeController;
