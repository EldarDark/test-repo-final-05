export default function decorate(block) {
  const link = block.querySelector('a');
  const poster = block.querySelector('picture');
  if (link) {
    const url = new URL(link.href);
    const isYouTube = url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be');
    if (isYouTube) {
      const wrapper = document.createElement('div');
      wrapper.classList.add('video-placeholder');
      if (poster) wrapper.append(poster);
      block.innerHTML = '';
      block.append(wrapper);
      wrapper.addEventListener('click', () => {
        const id = url.searchParams.get('v') || url.pathname.split('/').pop();
        block.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      });
    }
  }
}