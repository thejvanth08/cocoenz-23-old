const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navLinks = document.getElementById("nav-links");
const title = document.getElementById("title");
const regBtn = document.querySelector(".btn.register");

// hide title & reg btn.
menuOpen.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
  title.classList.add("hide");
  regBtn.classList.add("hide");
});

//----------
menuClose.addEventListener("click", () => {
  navLinks.classList.toggle("show-menu");
  title.classList.remove("hide");
  regBtn.classList.remove("hide");
});

// ------------------------- For timer
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let dd = document.getElementById("dd");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

let countdown = document.getElementById("countdown");
let wishDays = 10;

let x = setInterval(function () {
  let currentYear = new Date().getFullYear();
  // event starts at 1st now 2023
  let eventTime = new Date(`Nov 1, ${currentYear} 00:00:00`);
  let currentTime = new Date().getTime();
  let distance = eventTime - currentTime;

  // time calculation
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s = Math.floor((distance % (1000 * 60)) / 1000);

  // output the result
  days.innerHTML = d + "<br><span>Days</span>";
  hours.innerHTML = h + "<br><span>Hours</span>";
  minutes.innerHTML = m + "<br><span>Minutes</span>";
  seconds.innerHTML = s + "<br><span>Seconds</span>";

  // animate stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  // if countdown is over, change the innerText of .text
  if (distance < 0) {
    document.querySelector(".text").innerText = `Registration Closed ☹️`;
  }
}, 1000);

// --------------------- For scramble effect
document.addEventListener("DOMContentLoaded", function () {
  // Set effect velocity in ms
  // high means slow
  var velocity = 100;

  var shuffleElements = document.querySelectorAll(".shuffle");

  shuffleElements.forEach(function (element) {
    element.dataset.text = element.textContent;
  });

  var shuffle = function (o) {
    for (
      var j, x, i = o.length;
      i;
      j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
    );
    return o;
  };

  var shuffleText = function (element, originalText) {
    var elementTextArray = [];
    var randomText = [];

    for (var i = 0; i < originalText.length; i++) {
      elementTextArray.push(originalText.charAt(i));
    }

    var repeatShuffle = function (times, index) {
      if (index == times) {
        element.textContent = originalText;
        return;
      }

      setTimeout(function () {
        randomText = shuffle(elementTextArray);
        for (var i = 0; i < index; i++) {
          randomText[i] = originalText[i];
        }
        randomText = randomText.join("");
        element.textContent = randomText;
        index++;
        repeatShuffle(times, index);
      }, velocity);
    };

    repeatShuffle(element.textContent.length, 0);
  };

  shuffleElements.forEach(function (element) {
    element.addEventListener("mouseenter", function () {
      shuffleText(this, this.dataset.text);
    });
  });
});

// ------------------------ For cursor trailing effect
new cursoreffects.snowflakeCursor({
  element: document.querySelector("#snowflake"),
});

// ------------------------- For particles enable
const config = {
  particles: {
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 2441.9062623079944,
      },
    },
    color: {
      value: "#fff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      // random: true,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 6,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 400,
        size: 4,
        duration: 0.3,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 10,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
};

document.addEventListener("DOMContentLoaded", function () {
  particlesJS("particles-js", config);
});

// For custom cursor pointer
let cursors = document.querySelectorAll(".cursor-pointer");

function mouseCursor(e) {
  cursors.forEach((el) => {
    el.style.top = e.clientY + "px";
    el.style.left = e.clientX + "px";
  });
}

window.addEventListener("mousemove", mouseCursor);
