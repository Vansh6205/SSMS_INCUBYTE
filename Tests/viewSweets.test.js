const Sweet = require('../src/Sweet');
const SweetShop = require('../src/SweetShopManagementSystem');

test('view all sweets', () => {
  const shop = new SweetShop();
  const s1 = new Sweet(1, "Peda", "Milk-Based", 10, 10);
  const s2 = new Sweet(2, "Ladoo", "Nut-Based", 15, 20);
  shop.addSweet(s1);
  shop.addSweet(s2);
  const all = shop.viewSweets();
  expect(all.length).toBe(2);
});
