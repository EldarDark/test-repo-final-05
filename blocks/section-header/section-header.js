export default function decorate(block) {
  const heading = block.querySelector('h1, h2, h3, h4, h5, h6');
  if (heading) heading.classList.add('section-header-title');
  const accentRow = block.querySelector(':scope > div:last-child');
  if (accentRow && accentRow.textContent.trim()) {
    block.style.setProperty('--accent-color', accentRow.textContent.trim());
    accentRow.remove();
  }
}