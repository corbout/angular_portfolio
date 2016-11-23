(function() {
    var app = angular.module("PortfolioApp", ['ui.router', 'ngAnimate'])

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home')

        $stateProvider
            .state('home', {
            url: '/home',
            controller: 'HomeController as home',
            templateUrl: '/partials/home.html'
            })
            .state('about', {
            url: '/about',
            controller: 'AboutController as about',
            templateUrl: '/partials/about.html'
            })
            .state('projects', {
            url: '/projects',
            controller: 'ProjectController as project',
            templateUrl: '/partials/project.html'
            })
            .state('contact', {
            url: '/contact',
            controller: 'ContactController as contact',
            templateUrl: '/partials/contact.html'
            })
    })
})();
