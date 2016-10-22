angular.module('Resume', ['ngMaterial'])

.directive('resume', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: `<div class="resume">
      <section class="main" ng-transclude></section>
    </div>`
  }
})

.directive('resumeHeading', function() {
  return {
    restrict: 'E',
    scope: {
      firstName: '@',
      lastName: '@',
      website: '@',
      phone: '@',
      email: '@',
      github: '@',
      linkedin: '@'
    },
    template: `<div class="header">
      <div class="page-title-container">
        <h1 class="page-title page-title-first">{{firstName}}</h1>
        <h1 class="page-title page-title-last">{{lastName}}</h1>
      </div>
      <div class="header-icons">
        <span ng-if="website" class="md-subhead page-subhead"><i class="fa fa-lg fa-code"></i>{{website}}</span>
        <span ng-if="phone" class="md-subhead page-subhead"><i class="fa fa-lg fa-phone"></i>{{phone}}</span>
        <span ng-if="email" class="md-subhead page-subhead"><i class="fa fa-lg fa-envelope"></i>{{email}}</span>
        <span ng-if="github" class="md-subhead page-subhead"><i class="fa fa-lg fa-github"></i>{{github}}</span>
        <span ng-if="linkedin" class="md-subhead page-subhead"><i class="fa fa-lg fa-linkedin-square"></i>{{linkedin}}</span>
      </div>
    </div>`
  }
})

.directive('resumeBody', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: `<div layout="row" ng-transclude></div>`
  }
})

.directive('resumeColumn', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: `<div ng-transclude style="750px;"></div>`
  }
})

.directive('sidebarCategory', function() {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    transclude: true,
    template: `<div flex="" class="category-row">
      <div class="category">
        <h5 class="category-row-title">{{name}}</h5> 
        <ng-transclude></ng-transclude>
      </div>
    </div>`
  }
})

.directive('category', function() {
  return {
    restrict: 'E',
    scope: {
      name: '@'
    },
    transclude: true,
    template: `<div flex="" class="category-row">
      <h3 class="category-row-title">{{name}}</h3>
      <ng-transclude></ng-transclude>
    </div>`
  }
})

.directive('categoryItem', function() {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      date: '@',
      subtitle: '@'
    },
    transclude: true,
    template: `<div class="category">
        <h5 class="category-title md-body-2">{{title}}</h5>&nbsp;
        <h5 class="category-subtitle md-caption">{{subtitle}}</h5>
        <h5 class="category-title md-body-2" style="margin-left: 482px;">{{date}}</h5>
        <ul class="category-bullets" ng-transclude></ul>
    </div>`
  }
})
