angular.module('News.controllers.Main', [])

.controller('MainController', function($scope){

  $scope.NEWS_SETTING = [
    {
        id: 'tinhte',
        name: 'tinhte.vn',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9001',
            ],
        },
        needSort: false,
        needRemoveOld: true,
    },
    {
        id: 'linkhay',
        name: 'linkhay.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=6',
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'hacker-news',
        name: 'news.ycombinator.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=1',
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    // {
    //     id: 'kipalog-links',
    //     name: 'news.kipalog.com',
    //     type: 'rss',
    //     params: {
    //         urls: [
    //             'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=2',
    //         ],
    //     },
    //     needSort: false,
    //     needRemoveOld: false,
    // },
    {
        id: 'gamek',
        name: 'gamek.vn',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9002',
            ],
        },
        needSort: false,
        needRemoveOld: true,
    },
    // {
    //     id: 'lienquan',
    //     name: 'lienquan.garena.vn',
    //     type: 'rss',
    //     params: {
    //         urls: [
    //             'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=5',
    //         ],
    //     },
    //     needSort: false,
    //     needRemoveOld: false,
    // },
    // {
    //     id: 'hiepsibaotap',
    //     name: 'hiepsibaotap.com',
    //     type: 'rss',
    //     params: {
    //         urls: [
    //             'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9003',
    //         ],
    //     },
    //     needSort: false,
    //     needRemoveOld: false,
    // },
    {
        id: 'gameworld',
        name: 'gameworld.vn',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=8'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'DroidGamers',
        name: 'droidgamers.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9004'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    // {
    //     id: 'vnexpress-trangchu',
    //     name: 'vnexpress.net',
    //     type: 'rss',
    //     params: {
    //         urls: [
    //             'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9005'
    //         ],
    //     },
    //     needSort: true,
    //     needRemoveOld: false,
    // },
    {
        id: 'github-trends',
        name: 'github-trends.ryotarai.info',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9007'
            ],
        },
        needSort: false,
        needRemoveOld: false,
        needShowDesc: true,
        removedTextInTitle: ' - All languages - Daily',
    },
    {
        id: 'android-developers',
        name: 'android-developers.blogspot.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9008'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'google-developers',
        name: 'developers.googleblog.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9009'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'google-blog',
        name: 'blog.google',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9010'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'unity3d',
        name: 'blogs.unity3d.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9011'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'raywenderlich',
        name: 'raywenderlich.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9012'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'smashingmagazine',
        name: 'smashingmagazine.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9013'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'cherrytree',
        name: 'cherrytree.fr',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9020'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'dangbong',
        name: 'dangbong.xyz',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9021'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    // {
    //     id: 'cafebiz',
    //     name: 'cafebiz.vn',
    //     type: 'rss',
    //     params: {
    //         urls: [
    //             'http://cafebiz.vn/thoi-su.rss',
    //             'http://cafebiz.vn/kinh-te-vi-mo.rss',
    //             'http://cafebiz.vn/cau-chuyen-kinh-doanh.rss',
    //             'http://cafebiz.vn/cong-nghe.rss',
    //             'http://cafebiz.vn/song.rss',
    //         ],
    //     },
    //     needSort: true,
    //     needRemoveOld: true,
    // },
    // {
    //     id: 'clashroyalearena',
    //     name: 'clashroyalearena.com',
    //     type: 'rss',
    //     params: {
    //         urls: [
    //             'https://clashroyalearena.com/feed',
    //         ],
    //     },
    //     needSort: false,
    //     needRemoveOld: false,
    // },
    // {
    //     id: 'trumpsc',
    //     name: 'youbute.com/user/trumpsc',
    //     type: 'rss',
    //     params: {
    //         urls: [
    //             'https://www.youtube.com/feeds/videos.xml?user=trumpsc',
    //         ],
    //     },
    //     needSort: false,
    //     needRemoveOld: false,
    // },
    {
        id: 'truyentranhtuan',
        name: 'truyentranhtuan.com',
        type: 'rss',
        params: {
            urls: [
                //'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=4001',//hunter x hunter
                //'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=4002',//legendary moonlight sculptor
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=4003',//one peice
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=4004',//solo leveling
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'voz',
        name: 'voz.vn',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9022',
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'thehackernews',
        name: 'thehackernews.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9006'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
     {
        id: 'scotch',
        name: 'scotch.io',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9014'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'tutsplus',
        name: 'tutsplus.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9015'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'androidweekly',
        name: 'androidweekly.net',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9016'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    // {
    //     id: 'pcgamesn',
    //     name: 'pcgamesn.com',
    //     type: 'rss',
    //     params: {
    //         urls: [
    //             'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9017'
    //         ],
    //     },
    //     needSort: false,
    //     needRemoveOld: false,
    // },
    {
        id: 'pocketgamer',
        name: 'pocketgamer.biz',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9018'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
    {
        id: 'gamasutra',
        name: 'gamasutra.com',
        type: 'rss',
        params: {
            urls: [
                'https://script.google.com/macros/s/AKfycbw6_xi4hXbhy-BxM1DDuVRfjfYlghebmV8BLGcsFAR5jpIUW1w/exec?id=9019'
            ],
        },
        needSort: false,
        needRemoveOld: false,
    },
  ];

  $scope.date = new Date().toISOString().slice(0,10).replace(/-/g,'');

  //FIXME: fix not set url '#/news/id' when tap on an item in menu (only on mobile??)
  if(!window.location.hash){
    window.location.hash = '#/news/' + $scope.NEWS_SETTING[0].id;
  }

});