const navigation = `
<nav>
    <ul class="nav-links">
      <li><a href="/" data-page="home">Home</a></li>
      <li><a href="/from-and-to.html" data-page="from-and-to">From and From To</a></li>
      <li><a href="/delay.html" data-page="delay">Delay and Repeat</a></li>
      <li><a href="/stagger.html" data-page="stagger">Stagger</a></li>
      <li><a href="/glitch.html" data-page="glitch">Glitch</a></li>
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
