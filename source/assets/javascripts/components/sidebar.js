const buildSidebar = (target, headings) => {
  headings.forEach((heading) => {
    let sidebarLink;

    if (heading.tagName === "H2") {
      sidebarLink = `
        <a href="#${heading.id}" style="display: block;">
          ${heading.innerText}
        </a>
        <br>
      `;
    } else {
      sidebarLink = `
        <small>
          <a href="#${heading.id}" style="display: block;">
            ${heading.innerText}
          </a>
        </small>
        <br>
      `;
    }

    target.insertAdjacentHTML("beforeend", sidebarLink);
  });
};

export default buildSidebar;
