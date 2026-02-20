export default function decorate(block) {
  const link = block.querySelector('a');
  if (link) {
    block.classList.add('is-clickable');
    block.addEventListener('click', () => {
      window.location.href = link.href;
    });
  }
  [...block.children].forEach(row => {
    if (row.querySelector('picture')) row.classList.add('teaser-card-image');
    else row.classList.add('teaser-card-body');
  });
}