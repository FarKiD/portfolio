export const loadModalFromURL = (cb) => {
  $('#portfolioLink').click((e) => {
    e.preventDefault();
  });

  // if the link contains #portfolio then open the modal using a callback function
  if(window.location.href.indexOf('#portfolio') != -1) {
    cb();
  };
};

export const loadAnimations = () => {
  setTimeout(() => {
    $('.kanda__image').css({
      'left': '0',
      'opacity': '100%'
    });

    $('.kanda__content > a').css({
      'opacity': '100%'
    });
    
  }, 500);

  setTimeout(() => {
    $('.kanda__image, .applanding__image').css({
      'left': '0',
      'opacity': '100%'
    });

    $('.applanding__content > a').css({
      'opacity': '100%'
    });
  }, 1000);

  setTimeout(() => {
    $('.farda__image').css({
      'left': '0',
      'opacity': '100%'
    });

    $('.farda__content > a').css({
      'opacity': '100%'
    });
  }, 1500);

  setTimeout(() => {
    $('.others div:nth-of-type(n+1):not(div:nth-of-type(n+3))').css({
      'left': '0'
    });

    $('.others div:nth-of-type(n+3)').css({
      'right': '0'
    });
  }, 2000);

  setTimeout(() => {
    $('.others div').css({
      'opacity': '100%'
    });
  }, 2200);
};