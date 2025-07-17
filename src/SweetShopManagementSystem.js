export default class SweetShopManagementSystem {
  constructor() {
    this.sweets = new Map();
  }

  addSweet(sweet) {
    if (this.sweets.has(sweet.id)) throw new Error("Sweet ID already exists.");
    this.sweets.set(sweet.id, sweet);
  }

  deleteSweet(id) {
    if (!this.sweets.has(id)) throw new Error("Sweet not found.");
    this.sweets.delete(id);
  }

  viewSweets() {
    return Array.from(this.sweets.values());
  }

  searchByName(name) {
    return this.viewSweets().filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
  }

  searchByCategory(category) {
    return this.viewSweets().filter(s => s.category.toLowerCase() === category.toLowerCase());
  }

  searchByPriceRange(min, max) {
    return this.viewSweets().filter(s => s.price >= min && s.price <= max);
  }

  purchaseSweet(id, qty) {
    const sweet = this.sweets.get(id);
    if (!sweet) throw new Error("Sweet not found.");
    if (sweet.quantity < qty) throw new Error("Insufficient stock.");
    sweet.quantity -= qty;
  }

  restockSweet(id, qty) {
    const sweet = this.sweets.get(id);
    if (!sweet) throw new Error("Sweet not found.");
    sweet.quantity += qty;
  }
}
