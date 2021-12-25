import regenatorRuntime from "regenerator-runtime";

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
        $(`a[href*=${location}]`).addClass('navigation__active');
      };
    }
  )
};