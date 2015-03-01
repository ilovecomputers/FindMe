angular.module('FindMe.Utility', [])

/**
 * Optimized resize register, from this MDN article: https://developer.mozilla.org/en-US/docs/Web/Events/resize
 */
.factory("OptimizedResize", function() {
    var callbacks = [],
      running = false,
      eventSet = false;

    // fired on resize event
    function resize() {

      if (!running) {
        running = true;

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(runCallbacks);
        } else {
          setTimeout(runCallbacks, 66);
        }
      }

    }

    // run the actual callbacks
    function runCallbacks() {

      angular.forEach(callbacks, function(callback) {
        callback();
      });

      running = false;
    }

    // adds callback to loop
    function addCallback(callback) {

      if (callback) {
        callbacks.push(callback);
      }

    }

    return {

      // public method to register callback on resize events
      add: function(callback) {
        if (!eventSet) {
          window.addEventListener('resize', resize);
          eventSet = true;
        }
        addCallback(callback);
      }
    };
  })
;