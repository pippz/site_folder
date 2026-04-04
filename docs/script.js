
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

for (let i = 0; i < 350; i++) { // adds main asteriod belt
    const asteroid = document.createElement("div");
    asteroid.classList.add("asteroid");
    asteroid.style.left = Math.random() * 200 + "%";
    asteroid.style.top = Math.random() * 100 + "%";
    
    let size = Math.random() * 17 + 8;
    if (Math.random() < 0.01) {
        size = 40;
    }
    asteroid.style.width = size + "px";
    asteroid.style.height = size + "px";
    
    asteroid.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    asteroid.style.setProperty("--duration", Math.random() * 23 + 8 + "s");
    asteroidBelt.appendChild(asteroid);
}

const kuiperBelt = document.querySelector("#kuiperbelt");
const kuipercolors = ["#363635", "#47485c", "#23232b"];

for (let i = 0; i < 370; i++) { // adds kuiper asteriod belt
    const asteroid = document.createElement("div");
    asteroid.classList.add("kuiperasteroid");
    asteroid.style.left = Math.random() * 200 + "%";
    asteroid.style.top = Math.random() * 135 + "%";
    
    let size = Math.random() * 25 + 12;
    if (Math.random() < 0.01) {
        size = 60;
    }
    asteroid.style.width = size + "px";
    asteroid.style.height = size + "px";
    
    asteroid.style.backgroundColor = kuipercolors[Math.floor(Math.random() * kuipercolors.length)];
    asteroid.style.setProperty("--duration", Math.random() * 23 + 8 + "s");
    kuiperBelt.appendChild(asteroid);
}

const planet9container = document.querySelector("#planet9container");

for (let i = 0; i < 35; i++) {  // adds stars to planet 9 img
  const star = document.createElement("div");
  star.classList.add("p9star");
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  planet9container.appendChild(star);
}

const sun = document.createElement("div");
sun.classList.add("p9star");
sun.style.left = "10%";
sun.style.top = "15%";
sun.style.width = "4px";
sun.style.height = "4px";
sun.style.boxShadow = "0 0 6px rgba(255, 220, 100, 0.9)";
sun.style.backgroundColor = "#ffdc64";
planet9container.appendChild(sun);


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