import regenatorRuntime from "regenerator-runtime";

// Remove activation class from all navlinks
export const rmvClassActive = () => {
  $('.navigation__item').removeClass('navigation--active');
};

// Select the target nav item and make it active
export const isActive = (event, path) => {
  if($(event.target).attr('href') === path) {
    rmvClassActive();
    $(`.navigation > a[href$="${$(event.target).attr('href')}"]`).addClass('navigation--active');
  }
};

// Activate the corresponding nav item on link redirect
export const activateNavItem = (event, path) => {
  switch (event.target.attr('href')) {
    case '/about':
      $('.navigation > a[href$="/about"]').addClass('navigation--active');
      break;
    case '/skills':
      $('.navigation > a[href$="/skills"]').addClass('navigation--active');
      break;
    case '/projects':
      $('.navigation > a[href$="/projects"]').addClass('navigation--active');
      break;
  }
};

// Gives the active class to the links on load
export const onLoadActive = () => {
  // get pathname on load
  async function getPathAsync() {
    let pathName;
    return pathName = window.location.pathname;
  }

  // take the slash from the start of the pathname
  getPathAsync().then(
    function(pathName) {
     let location;
     return location = pathName.slice(1).toString();
    }
  )
  .then(
    function(location) {
      // gives the active class to any link containing current location
      if(location) {
        $(`.navigation > a[href*=${location}]`).addClass('navigation--active');
      };
    }
  );
};