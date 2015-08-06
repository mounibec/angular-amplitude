# Angular wrapper for Amplitude JS API

# Example of use #
1. Get an api key from: https://amplitude.com
2. Create a service like such:

```javascript
app.service('Amplitude', function ($amplitude, $rootScope, amplitudeApiKey, $location) {
  function init() {
    $amplitude.init(amplitudeApiKey);
    // if using angular-ui-router
    $rootScope.$on('$locationChangeStart', function() {
      logEvent('visited_app_page', {page: $location.$$path});
    });
  }

  function identifyUser(userId, userProperties) {
    $amplitude.setUserId(userId);
    $amplitude.setUserProperties(userProperties);
  }

  function logEvent(eventName, params) {
    $amplitude.logEvent(eventName, params);
  }

  return{
    init: init,
    logEvent: logEvent,
    identifyUser: identifyUser
  };

});
```
