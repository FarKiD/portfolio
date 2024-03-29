export const skillsLoad = () => {
  /* CODE FOR TITLES ANIMATION START */
  // Select the back title
  let backTitleQuery = document.querySelector('.back > h2');

  let observerOptions = {
    rootMargin: '0px',
    thereshold: 0
  };

  // Change width of title on load, showing the border
  setTimeout(() => {
    $('.front__title').css({
      'width': '25%'
    });
  }, 500);

  // Change width of back title when its visible
  let observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        setTimeout(() => {
          $('.back__title').css({
            'width': '25%'
          });
        }, 500);
      }
    });
  };

  let observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(backTitleQuery);
  /* CODE FOR TITLES ANIMATION END */
};