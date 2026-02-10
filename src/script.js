const tabs = document.getElementById("tabs");
const tabContents = tabs.querySelectorAll("button");
const navButton = document.getElementById("nav-button");

navButton?.addEventListener("click", (event) => {
  console.log('tombol ditekn')
  if (event.currentTarget.getAttribute("aria-expanded") === "true") {
    event.currentTarget.setAttribute("aria-expanded", "false");
    document.getElementById("nav-button-image").src = "./images/icon-hamburger.svg";
    document.getElementById("logo").src="./images/logo-bookmark.svg";
  } else {
    event.currentTarget.setAttribute("aria-expanded", "true");
    document.getElementById("logo").src="./images/logo-bookmark-full-light.svg";
    document.getElementById("nav-button-image").src =
      "./images/icon-close.svg";
  }
});

const data = [
  {
    title: "Bookmark in one click",
    description:
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "./images/illustration-features-tab-1.svg",
  },
  {
    title: "Intelligent search",
    description:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "./images/illustration-features-tab-2.svg",
  },
  {
    title: "Share your bookmarks",
    description:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "./images/illustration-features-tab-3.svg",
  },
];

tabs?.addEventListener("click", (event) => {
  const button = event.target.closest("button");

  if (!button) return;

  tabContents.forEach((tabContent) => {
    tabContent.setAttribute("aria-selected", "false");
  });
  button.setAttribute("aria-selected", "true");

  changeContent(parseInt(button.dataset.index));
});

function changeContent(index) {
  const { title, description, image } = data[index];
  document.getElementById("features-title").textContent = title;
  document.getElementById("features-description").textContent = description;
  document.getElementById("features-image").src = image;
}
