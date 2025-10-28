
// About-sidebar hover
const sideBarTab = document.querySelectorAll(".About-tablinks");
class SidebarTab {
  constructor(element, label) {
    this.element = element;
    this.label = label;
    this.hoverIcon = '<i class=\"ri-arrow-right-line\"></i>';
    this.addEventListeners();
  }

  addEventListeners() {
    this.element.addEventListener("onClick", () => this.onClick());
  }

  onClick() {
    this.element.innerHTML = `${this.label} ${this.hoverIcon}`;
  }
}

const tabLabels = ["Mission", "Vision", "Values"];

tabLabels.forEach((label, index) => {
  new SidebarTab(sideBarTab[index], label);
  
});

function openTab(event, TabName) {
  const tabContent = document.getElementsByClassName("About-tabcontent");
  for (let i = 0; i < tabContent.length; i++){
      tabContent[i].style.display = "none";
  }

  const tablinks = document.getElementsByClassName("About-tablinks");

  for (let i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(TabName).style.display = "block";
}