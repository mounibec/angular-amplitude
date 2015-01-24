# Angular wrapper for Amplitude JS API

# Example of use #
1. Get an api key from: https://amplitude.com
2. 

		var app = angular.module('myapp', ['angular-amplitude']);

       	app.service("TrackingsService", function TrackingsService($amplitude, rootScope){
       		 return{
		        init: init,
		        logEvent: logEvent
		    }

		    function init(){
		        $amplitude.init(YOUR_API_KEY, null, { saveEvents: true })
		        $amplitude.setVersionName(YOUR_APP_VERSION); //optional

		       	//if you use angular-ui-router
		        $rootScope.$on("$locationChangeStart", function(event, next, current) {
		            logEvent('page_visit', $location.$$path);
		        });
		    }

		    function logEvent(event_name, params){
		        $amplitude.logEvent(event_name, params);
		    }
       	})

