const Sweet = require('../src/Sweet');
const SweetShop = require('../src/SweetShopManagementSystem');

test('restock sweet successfully', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1006, "Sandesh", "Milk-Based", 35, 5);
  shop.addSweet(sweet);
  shop.restockSweet(1006, 10);
  expect(sweet.quantity).toBe(15);
});
