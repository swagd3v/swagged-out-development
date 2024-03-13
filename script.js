const global = {
  currentPage: window.location.pathname,
};

async function getMusicData() {
  const res = await fetch("./music.json");
  const data = await res.json();
  console.log(data);
}

//highlight active link

function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}
// Init app

function init() {
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      getMusicData();
      break;
    case "/dj-sets.html":
      console.log("dj-sets");
      break;
    case "/art.html":
      console.log("art");
      break;
    case "/fashion.html":
      console.log("fashion");
      break;
  }

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
