// Greeting
(function () {
  const el = document.getElementById("greeting");
  const hour = new Date().getHours();
  el.textContent =
    hour < 12 ? "Good Morning" :
    hour < 18 ? "Good Afternoon" :
    "Good Evening";
})();

// Theme
(function () {
  const btn = document.getElementById("themeToggle");
  const body = document.body;

  const saved = localStorage.getItem("theme");
  if (saved === "light") body.classList.add("light");

  btn.onclick = () => {
    body.classList.toggle("light");
    localStorage.setItem("theme",
      body.classList.contains("light") ? "light" : "dark"
    );
  };
})();

// Save Name (STATE)
(function () {
  const input = document.getElementById("visitorName");
  const btn = document.getElementById("saveName");
  const display = document.getElementById("welcomeUser");

  const saved = localStorage.getItem("username");
  if (saved) display.textContent = "Welcome " + saved;

  btn.onclick = () => {
    const name = input.value.trim();
    if (name) {
      localStorage.setItem("username", name);
      display.textContent = "Welcome " + name;
    }
  };
})();

// Timer (COMPLEX LOGIC)
(function () {
  const timer = document.getElementById("timer");
  let seconds = 0;

  setInterval(() => {
    seconds++;
    timer.textContent = "Time on site: " + seconds + "s";
  }, 1000);
})();

// Filter + Sort
(function () {
  const filter = document.getElementById("categoryFilter");
  const sort = document.getElementById("sortProjects");
  const grid = document.getElementById("projectsGrid");

  filter.onchange = apply;
  sort.onchange = apply;

  function apply() {
    let projects = [...grid.children];

    // Filter
    projects.forEach(p => {
      p.style.display =
        filter.value === "all" || p.dataset.category === filter.value
          ? "block"
          : "none";
    });

    // Sort
    if (sort.value === "title") {
      projects.sort((a, b) =>
        a.textContent.localeCompare(b.textContent)
      );
      projects.forEach(p => grid.appendChild(p));
    }
  }
})();

// GitHub API
(async function () {
  const container = document.getElementById("repoList");

  try {
    const res = await fetch("https://api.github.com/users/mohammedDev11/repos");
    const data = await res.json();

    container.innerHTML = "";

    data.slice(0, 5).forEach(repo => {
      const div = document.createElement("div");
      div.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
      container.appendChild(div);
    });

  } catch {
    container.textContent = "Failed to load GitHub repos.";
  }
})();

// Form validation
(function () {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.onsubmit = (e) => {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (!name.value) valid = false;
    if (!email.value.includes("@")) valid = false;
    if (message.value.length < 5) valid = false;

    if (!valid) {
      status.textContent = "Fix errors";
      return;
    }

    status.textContent = "Message sent (demo)";
  };
})();
