'use strict';

screen.addEventListener('orientationchange', function () {
  console.log('The orientation of the screen is: ' + screen.orientation);
});

screen.lockOrientation('landscape');
