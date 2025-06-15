function scrollElemWheel(container) {
    let scrollAmount = 0;
  
    container.addEventListener('wheel', function (e) {
      if (container.scrollWidth > container.clientWidth) {
        e.preventDefault();
        scrollAmount += e.deltaY;
        scrollAmount = Math.max(
          0,
          Math.min(scrollAmount, container.scrollWidth - container.clientWidth)
        );
        container.scrollLeft = scrollAmount;
      }
    });
  }
  

const blogContainer = document.querySelector('.section-5-blog-media');

scrollElemWheel(blogContainer);