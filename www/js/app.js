// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['editprofile.controllers','profile.controllers','news.controllers','newspromotion.controllers','detailhistory.controllers','history.controllers','favoritemenu1.controllers','addfavorite.controllers','favorite.controllers','qrcode.controllers','cart.controllers','hotcoffee.controllers','drink.controllers','menushop.controllers','allcomment.controllers','comment.controllers','coffeeshop1.controllers','nearby.controllers','menu.controllers','ionic', 'starter.controllers','authen.controllers','register.controllers','home.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
   .state('login', {
    url: '/login',
    
        templateUrl: 'templates/login.html',
        controller: 'AuthenCtrl'
      
    }
  )
  .state('app.nearby', {
    url: '/nearby',
    views: {
      'menuContent': {
        templateUrl: 'templates/nearby.html',
        controller: 'NearbyCtrl'
      }}
    }
  )
   .state('coffeeshop1', {
    url: '/coffeeshop1',
    
        templateUrl: 'templates/coffeeshop1.html',
        controller: 'CoffeeShop1Ctrl'
      
    }
  )
  .state('comment', {
    url: '/comment',
    
        templateUrl: 'templates/comment.html',
        controller: 'CommentCtrl'
      
    }
  )
    .state('allcomment', {
    url: '/allcomment',
    
        templateUrl: 'templates/allcommeent.html',
        controller: 'AllCommentCtrl'
      
    }
  )
   .state('menushop', {
    url: '/menushop',
    
        templateUrl: 'templates/menushop.html',
        controller: 'MenuShopCtrl'
      
    }
  )
  .state('drink', {
    url: '/drink',
    
        templateUrl: 'templates/drink.html',
        controller: 'DrinkCtrl'
      
    }
  )
  .state('hotcoffee', {
    url: '/hotcoffee',
    
        templateUrl: 'templates/hotcoffee.html',
        controller: 'HotCoffeeCtrl'
      
    }
  )
  .state('cart', {
    url: '/cart',
    
        templateUrl: 'templates/cart.html',
        controller: 'CartCtrl'
      
    }
  )
  .state('qrcode', {
    url: '/qrcode',
    
        templateUrl: 'templates/qrcode.html',
        controller: 'QRCodeCtrl'
      
    }
  )
   .state('favorite', {
    url: '/favorite',
    
        templateUrl: 'templates/favorite.html',
        controller: 'FavoriteCtrl'
      
    }
  )
   .state('addfavorite', {
    url: '/addfavorite',
    
        templateUrl: 'templates/addfavorite.html',
        controller: 'AddFavoriteCtrl'
      
    }
  )
  .state('favoritemenu1', {
    url: '/favoritemenu1',
    
        templateUrl: 'templates/favoritemenu1.html',
        controller: 'FavoriteMenu1Ctrl'
      
    }
  )
   .state('history', {
    url: '/history',
    
        templateUrl: 'templates/history.html',
        controller: 'HistoryCtrl'
      
    }
  )
  .state('detailhistory', {
    url: '/detailhistory',
    
        templateUrl: 'templates/detailhistory.html',
        controller: 'DetailHistoryCtrl'
      
    }
  )
  .state('newspromotion', {
    url: '/newspromotion',
    
        templateUrl: 'templates/newspromotion.html',
        controller: 'NewsPromotionCtrl'
      
    }
  )
  .state('news', {
    url: '/news',
    
        templateUrl: 'templates/news.html',
        controller: 'NewsCtrl'
      
    }
  )
   .state('profile', {
    url: '/profile',
    
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      
    }
  )
   .state('editprofile', {
    url: '/editprofile',
    
        templateUrl: 'templates/editprofile.html',
        controller: 'EditProfileCtrl'
      
    }
  )
  .state('register', {
    url: '/register',
    
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
        
    }
  );
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('login');
});
