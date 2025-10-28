
// About-sidebar hover
const sideBarTab = document.querySelectorAll(".About-sidebar-tab");
class SidebarTab {
  constructor(element, label) {
    this.element = element;
    this.label = label;
    this.hoverIcon = '<i class=\"ri-arrow-right-line\"></i>';
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener("mouseover", () => this.onMouseOver());
    this.element.addEventListener("mouseleave", () => this.onMouseLeave());
  }

  onMouseOver() {
    this.element.innerHTML = `${this.label} ${this.hoverIcon}`;
  }

  onMouseLeave() {
    this.element.innerHTML = this.label;
  }
}


const tabLabels = ["Mission", "Vision", "Values"];

tabLabels.forEach((label, index) => {
  new SidebarTab(sideBarTab[index], label);
});
