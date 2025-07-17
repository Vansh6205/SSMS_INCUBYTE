const Sweet = require('../src/Sweet');
const SweetShop = require('../src/SweetShopManagementSystem');

test('purchase sweet successfully', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1004, "Imarti", "Sugar-Based", 25, 10);
  shop.addSweet(sweet);
  shop.purchaseSweet(1004, 3);
  expect(sweet.quantity).toBe(7);
});

test('purchase more than stock throws error', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1005, "Halwa", "Ghee-Based", 40, 2);
  shop.addSweet(sweet);
  expect(() => shop.purchaseSweet(1005, 5)).toThrow("Insufficient stock.");
});
