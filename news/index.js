/* eslint no-alert: 0 */

//mobile-angular-ui-1.3.4

'use strict';

//
// Here is how to define your module
// has dependent on mobile-angular-ui
//
var app = angular.module('MobileAngularUiExamples', [
  'ngRoute',
  'mobile-angular-ui',

  // touch/drag feature: this is from 'mobile-angular-ui.gestures.js'.
  // This is intended to provide a flexible, integrated and and
  // easy to use alternative to other 3rd party libs like hammer.js, with the
  // final pourpose to integrate gestures into default ui interactions like
  // opening sidebars, turning switches on/off ..
  'mobile-angular-ui.gestures',

  'News.controllers.News',
  'News.controllers.Main',
]);

app.run(function($transform) {
  window.$transform = $transform;
});

//
// You can configure ngRoute as always, but to take advantage of SharedState location
// feature (i.e. close sidebar on backbutton) you should setup 'reloadOnSearch: false'
// in order to avoid unwanted routing.
//
app.config(function($routeProvider) {
  $routeProvider.when('/news/:newsId', {
    controller: 'NewsController',
    templateUrl:'news.html',
    reloadOnSearch: false,
  });
  $routeProvider.when('/page/:pageId', {
    controller: 'PageController',
    templateUrl:'page.html',
    reloadOnSearch: false,
  });
});
