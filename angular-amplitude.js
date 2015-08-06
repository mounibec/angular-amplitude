/**

 * @author Mounir Benchemled <mounibec@gmail.com>
 * @see https://github.com/amplitude/Amplitude-Javascript
 */

// AngularJs wrapper

(function(){
    var module = angular.module('angular-amplitude', ['ng']);

    module.provider('$amplitude', [function $amplitudeProvider() {
        this.$get = ['$window', function($window) {
          (function(e,t){var r=e.amplitude||{};var n=t.createElement("script");n.type="text/javascript";
          n.async=true;n.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-2.2.0-min.gz.js";
          var s=t.getElementsByTagName("script")[0];s.parentNode.insertBefore(n,s);r._q=[];
          function a(e){r[e]=function(){r._q.push([e].concat(Array.prototype.slice.call(arguments,0)));
          }}var i=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties"];
          for(var o=0;o<i.length;o++){a(i[o])}e.amplitude=r})(window,document);
          return $window.amplitude;
        }];
    }]);
    return module;
}());
