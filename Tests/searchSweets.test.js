const Sweet = require('../src/Sweet');
const SweetShop = require('../src/SweetShopManagementSystem');

test('search by name', () => {
  const shop = new SweetShop();
  shop.addSweet(new Sweet(1, "Kaju Katli", "Nut-Based", 50, 10));
  const results = shop.searchByName("kaju");
  expect(results.length).toBe(1);
});

test('search by category', () => {
  const shop = new SweetShop();
  shop.addSweet(new Sweet(2, "Jalebi", "Sugar-Based", 30, 20));
  const results = shop.searchByCategory("sugar-based");
  expect(results.length).toBe(1);
});

test('search by price range', () => {
  const shop = new SweetShop();
  shop.addSweet(new Sweet(3, "Barfi", "Milk-Based", 40, 15));
  const results = shop.searchByPriceRange(30, 50);
  expect(results.length).toBe(1);
});
