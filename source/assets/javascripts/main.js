// Remove file extension from urls in production
if (process.env.NODE_ENV === "production") {
  document.querySelectorAll("a").forEach((link) => {
    let linkHref = link.href;

    if (linkHref.includes(".html")) {
      linkHref = linkHref.replace(".html", "");
    }
  });
}

// Open local links in current tab
document.querySelectorAll("a").forEach((link) => {
  if (link.href.includes(window.location.hostname)) {
    link.removeAttribute("target");
  }
});

// Allow :active styles
document.addEventListener("touchstart", () => {}, true);
