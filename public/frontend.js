import Sweet from "../src/Sweet.js";
import SweetShop from "../src/SweetShopManagementSystem.js";

const shop = new SweetShop();

window.addSweet = () => {
  const id = document.getElementById("id").value;
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const price = parseFloat(document.getElementById("price").value);
  const quantity = parseInt(document.getElementById("quantity").value);

  try {
    shop.addSweet(new Sweet(id, name, category, price, quantity));
    displaySweets();
  } catch (e) {
    alert(e.message);
  }
};

window.searchSweets = () => {
  const query = document.getElementById("search").value.toLowerCase();
  const result = shop.viewSweets().filter(
    s =>
      s.name.toLowerCase().includes(query) ||
      s.category.toLowerCase().includes(query)
  );
  displaySweets(result);
};

window.purchaseSweet = (id) => {
  try {
    shop.purchaseSweet(id, 1);
    displaySweets();
  } catch (e) {
    alert(e.message);
  }
};

window.restockSweet = (id) => {
  shop.restockSweet(id, 1);
  displaySweets();
};

function displaySweets(list = shop.viewSweets()) {
  const tbody = document.querySelector("#sweetTable tbody");
  tbody.innerHTML = "";
  list.forEach((s) => {
    const row = `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.category}</td>
        <td>₹${s.price}</td>
        <td>${s.quantity}</td>
        <td>
          <button onclick="purchaseSweet('${s.id}')">Buy</button>
          <button onclick="restockSweet('${s.id}')">Restock</button>
        </td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}
