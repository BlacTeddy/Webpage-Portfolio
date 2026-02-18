function loadComponent(targetId, url, callback) {
  fetch(url)
    .then(res => res.text())
    .then(html => {
      document.getElementById(targetId).innerHTML = html;
      if (typeof callback === "function") callback();
    });
}

loadComponent("nav", "components/nav.html", initNav);
loadComponent("footer", "components/footer.html");

function initNav() {
  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }

  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname.split("/").pop() || "index.html";

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("underline", "font-semibold");
    }
  });
}
