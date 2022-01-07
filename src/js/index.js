export const indexLoad = () => {
  $('html, body').css({
    'overflow': 'hidden'
  });

  // Slide in title
  setTimeout(() => {
    $('.intro__h2--first').css({
      'left': '0',
      'opacity': '100%'
    });
  }, 500);
  // Slide in the second title
  setTimeout(() => {
    $('.intro__h2--second').css({
      'left': '0',
      'opacity': '100%'
    });
  }, 1000);
  // Fade in the github section
  setTimeout(() => {
    $('.outro').css({
      'opacity': '100%'
    });
  }, 1500);
};