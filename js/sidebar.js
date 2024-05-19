function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleButton");

  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    toggleBtn.textContent = ">";
  } else {
    sidebar.classList.add("hidden");
    toggleBtn.textContent = "<";
  }
}
