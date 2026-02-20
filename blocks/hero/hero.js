export default function decorate(block) {
  const container = document.createElement('div');
  container.classList.add('hero-container');
  const picture = block.querySelector('picture');
  if (picture) {
    const bg = document.createElement('div');
    bg.classList.add('hero-bg');
    bg.append(picture);
    block.prepend(bg);
  }
  const content = block.querySelector(':scope > div > div:not(.hero-bg)');
  if (content) {
    content.classList.add('hero-content');
    const links = content.querySelectorAll('a');
    links.forEach(link => link.classList.add('button', 'primary'));
  }
}