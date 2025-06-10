const navigation = `
<nav>
    <ul class="nav-links">
      <li><a href="/text-effects/">Home</a></li>
      <li><a href="/text-effects/split-text.html">Split text</a></li>
    </ul>
</nav>
`
export function initNavigation() {
  const header = document.querySelector("header")

  if (!header) return

  header.innerHTML = navigation

  const currentPath = window.location.pathname
  const links = document.querySelectorAll(".nav-links a")
  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active")
    }
  })
}
document.addEventListener("DOMContentLoaded", initNavigation)
