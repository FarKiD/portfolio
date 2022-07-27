const scrollActivator = () => {
  $('html, body').css({
    'overflow-y': 'visible',
    'overflow-x': 'hidden'
  });
};

export default scrollActivator;