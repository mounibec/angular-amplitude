/**
 * @author Mounir Benchemled <mounibec@gmail.com>
 * @see https://github.com/amplitude/Amplitude-Javascript
 */

// AngularJs wrapper

(function(){
    var module = angular.module('angular-amplitude', ['ng']);

    module.provider('$amplitude', [function $amplitudeProvider() {
        this.$get = ['$window', function($window) {
            (function(h,a){var f=h.amplitude||{};var b=a.createElement("script");b.type="text/javascript";
                b.async=true;b.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-2.0.3-min.js";
                var g=a.getElementsByTagName("script")[0];g.parentNode.insertBefore(b,g);
                f._q=[];function e(i){f[i]=function(){f._q.push([i].concat(Array.prototype.slice.call(arguments,0)))}}
                var c=["init","logEvent","setUserId","setUserProperties","setVersionName","setDomain","setDeviceId",
                    "setGlobalUserProperties"];
                for(var d=0;d<c.length;d++){e(c[d])}h.amplitude=f})(window,document);
            return $window.amplitude;
        }];
    }]);
    return module;
}())