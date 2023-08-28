import Store from "./services/Store.js";
import { loadData } from "./services/Order.js";
import Router from "./services/Router.js";

// Link Web Components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrdersPage } from "./components/OrdersPage.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  console.log("Doc Ready!");

  loadData();
  app.router.init();
});
