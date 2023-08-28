import Store from "./services/Store.js";
import { loadData } from "./services/Order.js";
import Router from "./services/Router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  console.log("Doc Ready!");

  loadData();
});
