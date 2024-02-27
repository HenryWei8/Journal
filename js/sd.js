var mini = true;

function toggleSidebar() {
  if (mini) {
    document.getElementById("mySidebar").style.width = "16vw";
    document.getElementById("main").style.marginLeft = "16vw";
    this.mini = false;
  } else {
    document.getElementById("mySidebar").style.width = "5vw";
    document.getElementById("main").style.marginLeft = "5vw";
    this.mini = true;
  }
}
