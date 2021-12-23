// Remove activation class from all navlinks
export const rmvClassActive = () => {
  $('.navigation__item').removeClass('navigation__active');
};

// Select the target nav item and make it active
export const isActive = (event, path) => {
  if($(event.target).attr('href') === path) {
    rmvClassActive();
    $(event.target).addClass('navigation__active');
  }
};

export const onLoadActive = () => {
  const pathName = window.location.pathname;
  const location = pathName.slice(1).toString();
  $(`a[href*=${location}]`).addClass('navigation__active');
};