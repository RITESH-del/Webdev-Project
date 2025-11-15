//Done/Completed
const sideBarTab = document.querySelectorAll(".About-tablinks");

function openTab(event, TabName) {
  const tabContent = document.getElementsByClassName("About-tabcontent");
  const tablinks = document.getElementsByClassName("About-tablinks");
  for (let i = 0; i < tabContent.length; i++){
      tabContent[i].style.display = "none";
      tablinks[i].style.color = "var(--secondary-color)";
      tablinks[i].innerHTML = tablinks[i].textContent;
  }
  console.log(event);

  document.getElementById(TabName).style.display = "block";
  const activeTab = event.currentTarget;
  event.currentTarget.style.color = "var(--primary-color)";
  event.currentTarget.innerHTML = `${event.currentTarget.textContent} <i class='ri-arrow-right-line'></i>`
}