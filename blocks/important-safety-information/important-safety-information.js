export default function decorate(block) {
  const wrapper = document.createElement('div');
  wrapper.classList.add('isi-inner');
  [...block.children].forEach(row => wrapper.append(row));
  block.replaceChildren(wrapper);
  if (block.classList.contains('sticky')) {
    window.addEventListener('scroll', () => {
      const rect = block.getBoundingClientRect();
      block.classList.toggle('is-sticky', rect.top > window.innerHeight);
    });
  }
}