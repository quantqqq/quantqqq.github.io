$.ajaxSetup({ cache: false });

angular.module('News.controllers.News', [])

.controller('NewsController', ['$scope', '$routeParams', function($scope, $routeParams){

  $scope.newsId = $routeParams.newsId;
  $scope.newsList = [];

  var setting = _.find($scope.NEWS_SETTING, function(news){return news.id == $scope.newsId;});

  //--------------------------------------

  var _getRss = function(setting, scope){
    $scope.date = new Date().toISOString().slice(0,10).replace(/-/g,'');

    var urls = setting.params.urls;
    var needSort = setting.needSort;
    var needRemoveOld = setting.needRemoveOld;

    var finishedUrlNum = 0;

    var parser = new RSSParser();
    for(var i = 0, len = urls.length; i < len; i++){
      var url = urls[i];
      $.get({url:url, dataType:'text', success:function(data){
        parser.parseString(data, function(err, feed){
      
        finishedUrlNum++;

        //add to scope
        var entries = feed.items;

        for(var i = 0; i < entries.length; i++){
          var entry = entries[i]

          var date = entry.pubDate ? entry.pubDate : entry.published;

          var desc = setting.needShowDesc ? entry.contentSnippet : '';

          var title = (entry.title && typeof entry.title === 'object') ? entry.title.content : entry.title;
          if(setting.removedTextInTitle){
            title = title.replace(setting.removedTextInTitle, '');
          }

          var link = entry.origLink || entry.link;
          if(link && typeof link === 'object'){
            link = link.href;
          }

          scope.newsList.push({title: title, link: link, date: ""+Sugar.Date(date).relative(), desc: desc});
        }

        //remove too old news
        if(needRemoveOld){
          scope.newsList = _.filter(scope.newsList, function(news){
            var d = Sugar.Date(news.date);
            return d.is('today') || d.is('yesterday');
          });
        }

        //sort
        if(needSort){
          scope.newsList = _.sortBy(scope.newsList, function(news){
            return -Sugar.Date(news.date).now;
          });
        }

        //distinct
        scope.newsList = _.uniq(scope.newsList, function(news){return news.link;});

        //if error
        if(finishedUrlNum == len && scope.newsList.length <= 0){
          scope.newsList = [{
            title: '[LOADING ERROR] '+setting.name,
            link: 'http://'+setting.name,
            date: Date.now(),
            desc: '',
          }];
        }

        scope.$apply();

        });
      }});


    }
  };

  //--------------------------------------

  switch(setting.type){
    case 'rss':
        _getRss(setting, $scope);
        return;
  }

}])

.controller('PageController', ['$scope', '$routeParams', function($scope, $routeParams){

  $scope.pageId = $routeParams.pageId;

  var setting = _.find($scope.NEWS_SETTING, function(news){return news.id == $scope.pageId;});

  $scope.pageSetting = setting;
  $scope.pageUrl = setting.params.url;
}])  

.filter('trustThisUrl', ["$sce", function ($sce) {
  return function (val) {
    return $sce.trustAsResourceUrl(val);
  };
}])

.filter('sidebarLink', ["$sce", function ($sce) {
  return function (val, scope) {
    if(val.type == 'direct'){
      return val.params.url;
    }else if(val.type == 'page'){
      return "#/page/"+val.id+"?d="+scope.date;
    }else{
      return "#/news/"+val.id+"?d="+scope.date;
    }
  };
}])

.filter('sidebarLinkTarget', ["$sce", function ($sce) {
  return function (val) {
    if(val.type == 'direct'){
      return '_blank';
    }else{
      return '';
    }
  };
}])

;