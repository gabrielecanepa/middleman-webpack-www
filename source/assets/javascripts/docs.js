import { buildSidebarMenu, highlightSidebar } from "./components/sidebar";
import zoom from "./components/zoom";

// Allow :active styles
document.addEventListener("touchstart", () => {}, true);

// Build sidebar and highlight current section title
const sidebar = document.querySelector(".sidebar");
const sidebarHeadings = document.querySelectorAll("h1, h2, h3");

buildSidebarMenu(sidebar, sidebarHeadings);

window.addEventListener("scroll", () => {
  highlightSidebar(sidebar, sidebarHeadings);
});

// Don't decorate links around code
document.querySelectorAll("a code").forEach((code) => {
  const link = code.parentElement;

  link.style.textDecoration = "none";
});

// Remove margin and line-height from paragraphs around screen pictures
document.querySelectorAll(".about img[src*=\"screen\"]").forEach((img) => {
  const paragraphStyle = img.parentElement.style;

  paragraphStyle.margin = 0;
  paragraphStyle.lineHeight = 0;
});

// Zoom screen pictures (open image source on mobile)
document.querySelectorAll(".about img[src*=\"screen\"]").forEach((img) => {
  if (window.innerWidth > 576) {
    const zoomImage = zoom({
      scaleExtra: 1,
      transitionDuration: 0.2
    });

    zoomImage.listen(img);
  } else {
    const imgLink = document.createElement("a");
    imgLink.innerHTML = img.outerHTML;
    imgLink.setAttribute("href", img.src);

    img.parentNode.insertBefore(imgLink, img);
    img.remove();
  }
});

// Open links in a new tab, except for the local ones
document.querySelectorAll(".about a").forEach((a) => {
  if (!a.href.includes(window.location.hostname)) {
    a.setAttribute("target", "_blank");
  }
});
