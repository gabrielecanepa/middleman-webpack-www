import { buildSidebarMenu, highlightSidebar } from './components/sidebar';
import zoom from './components/zoom';

// Build sidebar and highlight current section title
const sidebar = document.querySelector('.sidebar');
const sidebarHeadings = document.querySelectorAll('h1, h2, h3');

buildSidebarMenu(sidebar, sidebarHeadings);

window.addEventListener('scroll', () => {
  highlightSidebar(sidebar, sidebarHeadings);
});

// Don't decorate links around code
document.querySelectorAll('a code').forEach((codeBlock) => {
  const linkStyle = codeBlock.parentElement.style;
  linkStyle.textDecoration = 'none';
});

// Zoom screen pictures and adjust paragraph style
document.querySelectorAll('.docs img[src*="screen"]').forEach((img) => {
  const zoomImage = zoom({
    scaleExtra: 1,
    transitionDuration: 0.3
  });
  zoomImage.listen(img);

  const paragraphStyle = img.parentElement.style;
  paragraphStyle.margin = 0;
  paragraphStyle.lineHeight = 0;
});
