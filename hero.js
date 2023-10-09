// for hero wolf animation for register btn hover
const btn = document.querySelector(".btn");
const wolf = document.querySelector(".wolf");
const tail = document.querySelector(".wolf .tail");
const wolfHead = document.querySelector(".wolf .head");
const maneLower1 = document.querySelector(".wolf .head .mane-lower-1");
const maneLower2 = document.querySelector(".wolf .head .mane-lower-2");
const frontChest = document.querySelector(".wolf .front-chest");

btn.addEventListener("mouseover", () => {
  // Apply custom variable values
  wolf.style.setProperty("--white", "var(--black)");
  wolf.style.setProperty("--wolf-grey", "var(--black)");
  wolf.style.setProperty("--wolf-light-grey", "var(--black)");
  wolf.style.setProperty("--wolf-body", "var(--black)");
  wolf.style.setProperty("--wolf-leg-behind", "var(--black)");
  wolf.style.setProperty("--wolf-chest", "var(--black)");
  wolf.style.setProperty("--wolf-mane", "var(--black)");

  // Pause the tail animation
  tail.style.animationPlayState = "paused";

  // Apply transformations
  wolfHead.style.transform = "rotate(85deg)";
  maneLower1.style.transform = "rotate(-85deg)";
  maneLower2.style.transform =
    "rotate(-79deg) skewY(-17deg) translate(-8px, -11px)";
  frontChest.style.transform = "translate(2px, -5px)";
});

btn.addEventListener("mouseout", () => {
  // Reset custom variable values
  wolf.style.removeProperty("--white");
  wolf.style.removeProperty("--wolf-grey");
  wolf.style.removeProperty("--wolf-light-grey");
  wolf.style.removeProperty("--wolf-body");
  wolf.style.removeProperty("--wolf-leg-behind");
  wolf.style.removeProperty("--wolf-chest");
  wolf.style.removeProperty("--wolf-mane");

  // Resume the tail animation
  tail.style.animationPlayState = "running";

  // Reset transformations
  wolfHead.style.transform = "";
  maneLower1.style.transform = "";
  maneLower2.style.transform = "";
  frontChest.style.transform = "";
});
