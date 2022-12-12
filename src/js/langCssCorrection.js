export const langCssCorrection = (lang) => {
  // Small correction for Farsi, in case of going back to the page
  if (lang === 'farsi') {
    // Font
    $('body, .header').css({
      'font-family': "'vazirmatn', Arial, sans-serif",
      'letter-spacing': '0.05rem'
    });

    // About
    $(`
      .profile__info,
      .info__biography,
      .info__points h3
    `).css({
      'direction': 'rtl'
    });

    $('.info__points__items > a').css({
      'letter-spacing': '0'
    });

    // Projects
    $(`
      .kanda__content,
      .applanding__content
    `).css({
      'direction': 'rtl',
      'background': `linear-gradient(
        275deg, rgba(0, 21, 35, 0.6),
        rgba(0, 21, 35, 0.1) 70%,
        rgba(0, 21, 35, 0) 80%
      )`
    });

    // Index
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
  } else if (lang === 'english') {
    //Font
    $('body, .header').css({
      'font-family': "'outfit', Arial, Helvetica, sans-serif",
      'letter-spacing': '.1rem'
    });

    // About
    $(`
      .profile__info,
      .info__biography,
      .info__points h3
    `).css({
      'direction': 'ltr'
    });
    $('.info__points__items > a').css({
      'letter-spacing': '.2rem'
    });

    // Projects
    $(`
        .kanda__content,
        .applanding__content
      `).css({
        'direction': 'ltr',
        'background': `linear-gradient(
          75deg, rgba(0, 21, 35, 0.6),
          rgba(0, 21, 35, 0.1) 70%,
          rgba(0, 21, 35, 0) 80%
        )`
      });

    // Index
    $(`
      .intro__paragraph,
      .second__paragraph,
      .outro__content,
      .intro__link,
      .outro__link
    `).css({
      'direction': 'ltr'
    });
    $(`
      .intro__text,
      .second__text
    `).css({
      'align-items': 'flex-start'
    });
  } else if (lang === 'japanese') {
    // Font
    $('body, .header').css({
      'font-family': "'mplus', Arial, sans-serif",
      'letter-spacing': '.1rem'
    });
    // About
    $(`
      .profile__info,
      .info__biography,
      .info__points h3
    `).css({
      'direction': 'ltr'
    });
    $('.info__points__items > a').css({
      'letter-spacing': '.2rem'
    });
    // Projects
    $(`
        .kanda__content,
        .applanding__content
      `).css({
        'direction': 'ltr',
        'background': `linear-gradient(
          75deg, rgba(0, 21, 35, 0.6),
          rgba(0, 21, 35, 0.1) 70%,
          rgba(0, 21, 35, 0) 80%
        )`
      });
      // Index
      $(`
        .intro__paragraph,
        .second__paragraph,
        .outro__content,
        .intro__link,
        .outro__link
      `).css({
        'direction': 'ltr'
      });
      $(`
        .intro__text,
        .second__text
      `).css({
        'align-items': 'flex-start'
      });
  }
};