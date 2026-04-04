
document.getElementById("homeBtn").onclick = function() { // function for menu 
  const dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

const h1 = document.querySelector("h1");

window.addEventListener("scroll", function() { // function to make title disappear 
  if (window.scrollY > 50) {
    h1.style.opacity = "0";
  } else {
    h1.style.opacity = "1";
  }
});

function addStars(section, count) { // adds little stars
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 3 + "s";
    section.appendChild(star);
  }
}

addStars(document.querySelector("#imageSection"), 250);
addStars(document.querySelector("#telescopesection"), 250);
addStars(document.querySelector("footer"), 50);

const earth = document.querySelector("#imageSection img");
const earthInfo = document.querySelector("#earthInfo");
let timeout;

earth.addEventListener("mouseenter", function() { // function to make blue marble info appear if user overs the image
  clearTimeout(timeout);
  earthInfo.style.opacity = "1";
});

earth.addEventListener("mouseleave", function() {
  timeout = setTimeout(function() {
    earthInfo.style.opacity = "0";
  }, 1000); // stays visible for 1 seconds after cursor leaves
});

const img = document.querySelector("img");

window.addEventListener("scroll", function() { // function for image
  let scroll = window.scrollY;
  let newSize = Math.max(400, 800 - scroll);    
  img.style.height = newSize + "px";
  img.style.width = newSize + "px";
});

const asteroidBelt = document.querySelector("#asteroidbelt");
const colors = ["#382c1b", "#271c0e", "#251502"];

for (let i = 0; i < 280; i++) { // adds asteriod belt
    const asteroid = document.createElement("div");
    asteroid.classList.add("asteroid");
    asteroid.style.left = Math.random() * 200 + "%";
    asteroid.style.top = Math.random() * 100 + "%";
    
    let size = Math.random() * 13 + 5;
    if (Math.random() < 0.02) {
        size = 30;
    }
    asteroid.style.width = size + "px";
    asteroid.style.height = size + "px";
    
    asteroid.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    asteroid.style.setProperty("--duration", Math.random() * 20 + 10 + "s");
    asteroidBelt.appendChild(asteroid);
}

window.addEventListener("scroll", function() { // function to make footer appear
    const footer = document.querySelector("footer");
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
    
    if (atBottom) {
      footer.classList.add("visible");
    } else {
      footer.classList.remove("visible");
    }
});

document.querySelectorAll("#dropdown a").forEach(function(link) { // function for menu links 
  link.addEventListener("click", function() {
    dropdown.style.display = "none";
  });
});

const observer = new IntersectionObserver(function(entries) { // function for fade in <p>
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"; // fade in when visible
    } else {
      entry.target.style.opacity = "0"; // fade out when not visible
    }
  });
});

document.querySelectorAll("#solarsystemdiv p").forEach(function(p) {
  p.style.opacity = "0";
  observer.observe(p);
});