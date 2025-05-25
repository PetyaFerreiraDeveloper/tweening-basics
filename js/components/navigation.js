const navigation = `
  <nav>
    <ul class="nav-links">
      <li><a href="index.html" data-page="home">Home</a></li>
      <li><a href="from-and-to.html" data-page="from-and-to">From and From To</a></li>
      <li><a href="delay.html" data-page="delay">Delay and Repeat</a></li>
      <li><a href="stagger.html" data-page="stagger">Stagger</a></li>
      <li><a href="glitch.html" data-page="glitch">Glitch</a></li>
    </ul>
  </nav>
`

export function initNavigation() {
  const header = document.querySelector("header")
  if (header) {
    header.innerHTML = navigation

    // Get current page path - get just the filename
    const currentPath =
      window.location.pathname.split("/").pop() || "index.html"

    // Find the matching link and add active class
    const links = document.querySelectorAll(".nav-links a")
    links.forEach((link) => {
      const href = link.getAttribute("href")
      if (href === currentPath) {
        link.classList.add("active")
      }
    })
  }
}
