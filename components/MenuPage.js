export class MenuPage extends HTMLElement {
  constructor() {
    super();

    // Open shadow DOM
    this.root = this.attachShadow({ mode: "open" });

    //Create <style> tag in dom
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
    this.appendChild(content);
  }
}

customElements.define("menu-page", MenuPage);
