export const indexLoad = (lang) => {
  // Scrollability
  $('html, body').css({
    'overflow-y': 'visible',
    'overflow-x': 'hidden'
  });

// Animations
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
  // Fade in the infinite slider
  setTimeout(() => {
    $('.slider__container').css({
      'opacity': '100%'
    });
  }, 2000);
  
// Animations End

// Small correction for Farsi, in case of going back to the page
if(lang === 'farsi') {
  $(`
    .intro__paragraph,
    .second__paragraph,
    .outro__content,
    .intro__link,
    .outro__link
  `).css({
    'direction': 'rtl'
  });
  $(`
      .intro__text,
      .second__text
    `).css({
      'align-items': 'flex-end'
    });
  }
};