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


  $('html, body').css({
    'overflow-y': 'visible',
    'overflow-x': 'hidden'
  });
};

/* 
export const toggleSkill = (event) => {
  let targetElement = ['.front__skill__item', 'front__skill__item h4', 'front__skill__item h4 i'];
  let parentElement = event.target;
  let visible = false;
  if (jQuery.inArray(event.target, targetElement)) {
    do {
      if (parentElement.className == 'front__skill__item' && !visible) {
        $(parentElement.childNodes[1]).css({
          'top': '0',
          'opacity': '100%',
          'max-height': '50rem'
        });
        visible = true;
        return;
      } else if (parentElement.className == 'front__skill__item' && visible) {
        $(parentElement.childNodes[1]).css({
          'top': '-1.2rem',
          'opacity': '0',
          'max-height': '0'
        });
        visible = false;
        return;
      }

      parentElement = parentElement.parentNode;
    } while (parentElement);
  }
}; 
*/