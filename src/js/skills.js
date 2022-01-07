export const skillsLoad = () => {
  $('html, body').css({
    'overflow-y': 'visible',
    'overflow-x': 'hidden'
  });

  setTimeout(() => {
    $('.front__title').css({
      'width': '25%'
    });
  }, 500);
};