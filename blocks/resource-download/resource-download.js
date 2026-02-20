export default function decorate(block) {
  [...block.children].forEach(row => {
    row.classList.add('resource-item');
    const link = row.querySelector('a');
    if (link) {
      link.classList.add('download-link');
      link.setAttribute('download', '');
      link.addEventListener('click', () => {
        window.adobeDataLayer?.push({ event: 'download', title: link.textContent });
      });
    }
  });
}