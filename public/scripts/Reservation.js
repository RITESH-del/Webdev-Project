// Completed 
function openRTab(event, tabName) {
  var i, tablinks;

 const tabcontent = document.getElementsByClassName("tabcontent");
  console.log(tabcontent[1]);
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tab");
  console.log(tablinks);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "flex";
  event.currentTarget.className += " active";
}