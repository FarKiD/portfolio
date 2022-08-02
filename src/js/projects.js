export const loadModalFromURL = (cb) => {
  console.log(window.location.pathname);
  $('#portfolioLink').click((e) => {
    e.preventDefault();
  });

  // if the link contains #portfolio then open the modal using a callback function
  if(window.location.href.indexOf('#portfolio') != -1) {
    cb();
  };
};