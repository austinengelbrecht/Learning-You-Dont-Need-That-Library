export class MenuPage extends HTMLElement {
  constructor() {
    super();

    // Open shadow DOM
    this.root = this.attachShadow({ mode: "open" });

    // Create <style> tag in dom
    const styles = document.createElement("style");
    this.root.appendChild(styles);

    // Load CSS
    async function loadCSS() {
      // Call stylesheet
      const request = await fetch("/components/MenuPage.css");

      // Get text from stylesheet
      const css = await request.text();

      //Add styles to <style> element in shadow dom
      styles.textContent = css;
    }
    loadCSS();
  }

  // When the component is attached to the DOM
  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);

    window.addEventListener("appmenuchange", () => {
      this.render();
    });

    this.render();
  }

  render() {
    if (app.store.menu) {
      this.root.querySelector("#menu").innerHTML = "";

      for (let category of app.store.menu) {
        const liCategory = document.createElement("li");

        liCategory.innerHTML = `
        <h3>${category.name}</h3>
        <ul class='category'></ul>
        `;

        this.root.querySelector("#menu").appendChild(liCategory);

        category.products.forEach((product) => {
          const item = document.createElement("product-item");
          item.dataset.product = JSON.stringify(product);

          liCategory.querySelector("ul").appendChild(item);
        });
      }
    } else {
      this.root.querySelector("#menu").innerHTML = "Loading...";
    }
  }
}

customElements.define("menu-page", MenuPage);
