const navigation = `
<nav>
    <ul class="nav-links">
      <li><a href="/tween/">Home</a></li>
      <li><a href="/tween/from-and-to.html">From and From To</a></li>
      <li><a href="/tween/delay.html">Delay and Repeat</a></li>
      <li><a href="/tween/stagger.html">Stagger</a></li>
      <li><a href="/tween/glitch.html">Glitch</a></li>
      <li><a href="/tween/transform.html">Transform Origin</a></li>
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
