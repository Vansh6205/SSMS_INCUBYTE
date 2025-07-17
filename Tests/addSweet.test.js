const Sweet = require('../src/Sweet');
const SweetShop = require('../src/SweetShopManagementSystem');

test('add a sweet successfully', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1001, "Gulab Jamun", "Milk-Based", 20, 30);
  shop.addSweet(sweet);
  expect(shop.viewSweets()).toContain(sweet);
});

test('add duplicate sweet throws error', () => {
  const shop = new SweetShop();
  const sweet = new Sweet(1001, "Gulab Jamun", "Milk-Based", 20, 30);
  shop.addSweet(sweet);
  expect(() => shop.addSweet(sweet)).toThrow("Sweet with this ID already exists.");
});
