const Sweet = require('../src/Sweet');
const SweetShop = require('../src/SweetShopManagementSystem');

test('delete sweet successfully', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1002, "Rasgulla", "Milk-Based", 15, 25);
  shop.addSweet(sweet);
  shop.deleteSweet(1002);
  expect(shop.viewSweets()).not.toContain(sweet);
});

test('delete non-existing sweet throws error', () => {
  const shop = new SweetShop();
  expect(() => shop.deleteSweet(9999)).toThrow("Sweet ID not found.");
});
