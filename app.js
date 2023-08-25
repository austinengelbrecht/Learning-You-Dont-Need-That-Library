import Store from "./services/Store.js";
import { loadData } from "./services/Order.js";

window.app = {};
app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
  console.log("Doc Ready!");

  loadData();
});
