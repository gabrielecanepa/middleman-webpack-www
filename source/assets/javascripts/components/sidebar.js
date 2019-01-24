const packageJSON = require('../../../../package.json');

const buildSidebarMenu = (sidebar, headings) => {
  headings.forEach((heading) => {
    let sidebarLink;

    if (heading.tagName === 'H1') {
      sidebarLink = `
        <a class="sidebar-title" href="#${heading.id}">
          <div class="logo-container">
            <img src="assets/images/logo.svg" class="logo">
          </div>
          <code>${packageJSON.version}</code>
        </a>
      `;
    } else if (heading.tagName === 'H2') {
      sidebarLink = `
        <h4>
          <a href="#${heading.id}">
            ${heading.innerText}
          </a>
        </h4>
      `;
    } else {
      sidebarLink = `
        <h6>
          <a href="#${heading.id}">
            ${heading.innerText}
          </a>
        </h6>
      `;
    }

    sidebar.insertAdjacentHTML('beforeend', sidebarLink);
  });
};

const highlightSidebar = (sidebar, headings) => {
  const windowPosition = window.scrollY;

  headings.forEach((heading, index) => {
    const sidebarLinks = sidebar.querySelectorAll('a');
    const headingPosition = heading.offsetTop;
    let nextHeadingPosition;

    if (headings[index + 1]) {
      nextHeadingPosition = headings[index + 1].offsetTop;
    } else {
      nextHeadingPosition = document.body.offsetHeight;
    }

    if (windowPosition > headingPosition && windowPosition < nextHeadingPosition) {
      const currentLink = sidebar.querySelector(`[href="#${heading.id}"]`);

      sidebarLinks.forEach(link => link.classList.remove('active'));
      currentLink.classList.add('active');
    }

    if (windowPosition < headings[0].offsetTop) {
      sidebarLinks.forEach(link => link.classList.remove('active'));
    }
  });
};

export { buildSidebarMenu, highlightSidebar };
