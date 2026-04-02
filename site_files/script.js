document.getElementById("homeBtn").onclick = function() { /*function for menu*/ 
  const dropdown = document.getElementById("dropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

const h1 = document.querySelector("h1");

window.addEventListener("scroll", function() { /*function to make title disappear*/ 
  if (window.scrollY > 50) {
    h1.style.opacity = "0";
  } else {
    h1.style.opacity = "1";
  }
});

const img = document.querySelector("img");

window.addEventListener("scroll", function() { /*function for image*/ 
  let scroll = window.scrollY;
  let newSize = Math.max(400, 800 - scroll);    
  img.style.height = newSize + "px";
  img.style.width = newSize + "px";
});

window.addEventListener("scroll", function() { /*function to make footer appear*/ 
  const footer = document.querySelector("footer");
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
  
  if (atBottom) {
    footer.classList.add("visible");
  } else {
    footer.classList.remove("visible");
  }
});

document.querySelectorAll("#dropdown a").forEach(function(link) { /*function for menu links*/ 
  link.addEventListener("click", function() {
    dropdown.style.display = "none";
  });
});