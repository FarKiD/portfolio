export const skillsLoad = () => {
  $('html, body').css({
    'overflow-y': 'visible',
    'overflow-x': 'hidden'
  });

  setTimeout(() => {
    $('.front--title').css({
      'width': '25%'
    });
  }, 500);
};