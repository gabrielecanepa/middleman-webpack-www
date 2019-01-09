import { buildSidebarMenu, highlightSidebar } from "./components/sidebar";
import zoomer from "./components/zoomer";

// Build sidebar and highlight current section title
const sidebar = document.querySelector(".sidebar");
const sidebarHeadings = document.querySelectorAll("h1, h2, h3");

buildSidebarMenu(sidebar, sidebarHeadings);

window.addEventListener("scroll", () => {
  highlightSidebar(sidebar, sidebarHeadings);
});

// Don't decorate links around code
document.querySelectorAll("a code").forEach((codeBlock) => {
  const linkStyle = codeBlock.parentElement.style;
  linkStyle.textDecoration = "none";
});

// Zoom screen pictures (open on mobile) and adjust paragraph style
document.querySelectorAll(".docs img[src*=\"screen\"]").forEach((img) => {
  if (window.innerWidth > 576) {
    const zoomImage = zoomer({
      scaleExtra: 1,
      transitionDuration: 0.3
    });

    zoomImage.listen(img);
  } else {
    const imgLink = document.createElement("a");

    imgLink.innerHTML = img.outerHTML;
    imgLink.setAttribute("href", img.src);
    img.parentNode.insertBefore(imgLink, img);
    img.remove();
  }

  const paragraphStyle = img.parentElement.style;
  paragraphStyle.margin = 0;
  paragraphStyle.lineHeight = 0;
});
