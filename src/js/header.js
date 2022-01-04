import regenatorRuntime from "regenerator-runtime";

// Remove activation class from all navlinks
export const rmvClassActive = () => {
  $('.navigation--item').removeClass('navigation_active');
};

// Select the target nav item and make it active
export const isActive = (event, path) => {
  if($(event.target).attr('href') === path) {
    rmvClassActive();
    $(event.target).addClass('navigation_active');
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
        $(`a[href*=${location}]`).addClass('navigation_active');
      };
    }
  );
};

export const isDropDownActive = (event, state) => {
  if(!state.dropDownState) {
    event.preventDefault();
    $('.navigation--language--dropdown').css({
      'display': 'block'
    });
    this.setState({
      dropDownState: true
    });
    console.log('IT WORKS!');
  } else {
    event.preventDefault();
    $('.navigation--language--dropdown').css({
      'display': 'none'
    });
    this.setState({
      dropDownState: false
    });
  };
}