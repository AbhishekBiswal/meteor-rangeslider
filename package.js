Package.describe({
    name: 'wirddin:meteor-rangeslider',
    version: '0.1.0',
    summary: 'wrapper for Ion.RangeSlider',
    git: 'https://github.com/AbhishekBiswal/meteor-rangeslider',
    documentation: 'README.md'
});

Npm.depends({
    "ion-rangeslider": "2.0.13"
});

Package.onUse(function (api) {
    api.versionsFrom('1.1');
    api.addFiles('.npm/package/node_modules/ion-rangeslider/js/ion.rangeSlider.min.js', 'client');
    api.addFiles('.npm/package/node_modules/ion-rangeslider/css/ion.rangeSlider.css', 'client');
    api.addFiles('.npm/package/node_modules/ion-rangeslider/css/ion.rangeSlider.skinHTML5.css', 'client');
    api.addFiles('.npm/package/node_modules/ion-rangeslider/img/sprite-skin-nice.png', 'client', {isAsset: true});
});
