# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## (2023-10-12) Colin
- Bumps Node engine to 14.17.5
- Locks ember-composability-tools to "1.0.1", build incompaitibility I could not fix without.
- Adds fontSize to initTextLabel to reflect style on initial load.
- Fixes a bug in a specific call of Ember.set(). Or hides it. But it works. 

## [5.0.0](https://github.com/knownasilya/google-maps-markup/compare/v4.0.0...v5.0.0) (2021-06-08)


### ⚠ BREAKING CHANGES

* internal components renamed, which might have been used by consumers directly.
* drop Node.js < 12

### Bug Fixes

* changing mode not changing results ([2b33f28](https://github.com/knownasilya/google-maps-markup/commit/2b33f2848d58a3d36e80f678bbeb29de661ac5c5))
* convert results component to glimmer component ([ab18a13](https://github.com/knownasilya/google-maps-markup/commit/ab18a13bfd7fbbd68239b79e24ade9a91206a0a4))
* convert tools to gc ([041b80d](https://github.com/knownasilya/google-maps-markup/commit/041b80d4e5893d7f585eb1791f9fb1b6469300b3))
* general fixes around editable, popups, and rendering items ([ba25220](https://github.com/knownasilya/google-maps-markup/commit/ba252205c0b34959f9c926b0b1e4b09125ab506f))
* map events setup ([12d6862](https://github.com/knownasilya/google-maps-markup/commit/12d68622d9f87d000871992fa560b287f5e240a4))
* parent/child registration (hover on geom highlights ui) ([97af4f2](https://github.com/knownasilya/google-maps-markup/commit/97af4f24d4f71442630008b809c59dc594557836)), closes [/github.com/miguelcobain/ember-composability-tools/issues/47#issuecomment-835463333](https://github.com/knownasilya//github.com/miguelcobain/ember-composability-tools/issues/47/issues/issuecomment-835463333)
* rename internal components ([a49429e](https://github.com/knownasilya/google-maps-markup/commit/a49429e9ee09e47353ad6615adc58422260d2866))
* update deps, and drop node < 12 ([fb7ef16](https://github.com/knownasilya/google-maps-markup/commit/fb7ef16dd31536594dcd3e63fd795783089c9f4f))
* update setup on map load, and remove jquery ([713482d](https://github.com/knownasilya/google-maps-markup/commit/713482d636289ac9fdfe2151a16151f6db44316a))
* update the rest to GC and use new composability tools ([73e5640](https://github.com/knownasilya/google-maps-markup/commit/73e5640cb45b0a908f0beec017495c5f620d12f0))

## [4.0.0](https://github.com/knownasilya/google-maps-markup/compare/v3.2.5...v4.0.0) (2021-05-07)


### ⚠ BREAKING CHANGES

* drop Ember < 3.16

### Bug Fixes

* embroider maybe test ([c03f109](https://github.com/knownasilya/google-maps-markup/commit/c03f109448adbfd1344a66137776e2c831a5b7d5))
* v3.17.0...v3.26.1 ([260785e](https://github.com/knownasilya/google-maps-markup/commit/260785ec415b7d4d0ae22b13d3ee686ae0df2b3e))

### [3.2.5](https://github.com/knownasilya/google-maps-markup/compare/v3.2.4...v3.2.5) (2021-04-07)


### Bug Fixes

* update dependencies ([b2d1683](https://github.com/knownasilya/google-maps-markup/commit/b2d1683d7d49be4abe603680fcd645f6366d26cd))

### [3.2.4](https://github.com/knownasilya/google-maps-markup/compare/v3.2.3...v3.2.4) (2020-09-30)


### Bug Fixes

* tools using google before init ([041b60c](https://github.com/knownasilya/google-maps-markup/commit/041b60c27c614872d3889f0e1ead8e12da8aa44f))

### [3.2.3](https://github.com/knownasilya/google-maps-markup/compare/v3.2.2...v3.2.3) (2020-09-24)


### Bug Fixes

* setup the options so edit works on import, also fix layer interactions not working after changing modes ([2e4a188](https://github.com/knownasilya/google-maps-markup/commit/2e4a18885155376c30f58cc436cac30f039844ce))

### [3.2.2](https://github.com/knownasilya/google-maps-markup/compare/v3.2.1...v3.2.2) (2020-09-24)


### Bug Fixes

* class syntax a bit and preserve editability on load ([#45](https://github.com/knownasilya/google-maps-markup/issues/45)) ([182f7ad](https://github.com/knownasilya/google-maps-markup/commit/182f7adcedef7167cc331a7f34bf7b78eea5c2c1))

### [3.2.1](https://github.com/knownasilya/google-maps-markup/compare/v3.2.0...v3.2.1) (2020-09-17)


### Bug Fixes

* update dnd library ([5d49f92](https://github.com/knownasilya/google-maps-markup/commit/5d49f92d5714c9b27c8c178966321a72f70594e9))

## [3.2.0](https://github.com/knownasilya/google-maps-markup/compare/v3.1.0...v3.2.0) (2020-09-17)


### Features

* fill opacity ([7e7cd45](https://github.com/knownasilya/google-maps-markup/commit/7e7cd454a6439b978f9d0632c1b6abe68823a104))


### Bug Fixes

* opacity not setting untill mouse out, make options ui a grid, over only over header now ([c09adcd](https://github.com/knownasilya/google-maps-markup/commit/c09adcd1b710fa17e4af786493359d59db5894a0))

## [3.1.0](https://github.com/knownasilya/google-maps-markup/compare/v3.0.4...v3.1.0) (2020-09-17)


### Features

* text highlight on mouseover ([a9d6635](https://github.com/knownasilya/google-maps-markup/commit/a9d66357546f497d220bb4c36907c1926a456999))


### Bug Fixes

* hovering over items if text present on map ([9cc549b](https://github.com/knownasilya/google-maps-markup/commit/9cc549bde7ceb94222c8c266e9de6f589c44b1e6))
* remove scrollbar from tall text ([7330c7e](https://github.com/knownasilya/google-maps-markup/commit/7330c7ee410e0be89f118d7456743249250ef39a))

### [3.0.4](https://github.com/knownasilya/google-maps-markup/compare/v3.0.3...v3.0.4) (2020-09-16)


### Bug Fixes

* clicking edit on items throwing error for text features ([69a2a72](https://github.com/knownasilya/google-maps-markup/commit/69a2a7238def59873771825cdc627d8cf30aecfa))
* codemods ([33e89da](https://github.com/knownasilya/google-maps-markup/commit/33e89dacdff20c3122290d0c81be4fa885df6101))
* no imlicit this ([c987c61](https://github.com/knownasilya/google-maps-markup/commit/c987c61dd4df79164a2337753d76768cebb3522d))
* not being able to place text on measured shapes ([61420a7](https://github.com/knownasilya/google-maps-markup/commit/61420a709035798a12804520f8104390c7690f69))
* plotter computeArea being undefined ([2f6c465](https://github.com/knownasilya/google-maps-markup/commit/2f6c465da2610c0c74f5e90dbaca157c496f140d))

<a name="3.0.3"></a>
## [3.0.3](https://github.com/knownasilya/google-maps-markup/compare/v3.0.2...v3.0.3) (2020-05-13)


### Bug Fixes

* default export map label ([545bb74](https://github.com/knownasilya/google-maps-markup/commit/545bb74))



<a name="3.0.2"></a>
## [3.0.2](https://github.com/knownasilya/google-maps-markup/compare/v3.0.1...v3.0.2) (2020-05-11)


### Bug Fixes

* dont use google in module scope ([222f511](https://github.com/knownasilya/google-maps-markup/commit/222f511))



<a name="3.0.1"></a>
## [3.0.1](https://github.com/knownasilya/google-maps-markup/compare/v3.0.0...v3.0.1) (2020-04-29)


### Bug Fixes

* use ember-copy and loosen up deps ([11cda0f](https://github.com/knownasilya/google-maps-markup/commit/11cda0f))



<a name="3.0.0"></a>
# [3.0.0](https://github.com/knownasilya/google-maps-markup/compare/v2.2.13...v3.0.0) (2020-04-29)


### Bug Fixes

* update changes from auto update ([5fd2947](https://github.com/knownasilya/google-maps-markup/commit/5fd2947))
* update composability tools ([d0b1507](https://github.com/knownasilya/google-maps-markup/commit/d0b1507))
* v3.1.4...v3.17. ([de287e6](https://github.com/knownasilya/google-maps-markup/commit/de287e6))


### BREAKING CHANGES

* Drop old node, ember-cli, and ember support. See compatibility section in readme.



<a name="2.2.13"></a>
## [2.2.13](https://github.com/knownasilya/google-maps-markup/compare/v2.2.12...v2.2.13) (2019-05-01)


### Bug Fixes

* remove bower ([8f1077a](https://github.com/knownasilya/google-maps-markup/commit/8f1077a))
* update clear all message, resolves [#34](https://github.com/knownasilya/google-maps-markup/issues/34) ([6dedcd1](https://github.com/knownasilya/google-maps-markup/commit/6dedcd1))
* update ghpages dep ([6a03ac3](https://github.com/knownasilya/google-maps-markup/commit/6a03ac3))



<a name="2.2.12"></a>
## [2.2.12](https://github.com/knownasilya/google-maps-markup/compare/v2.2.11...v2.2.12) (2018-10-01)


### Bug Fixes

* update power select version ([0dcb421](https://github.com/knownasilya/google-maps-markup/commit/0dcb421))



<a name="2.2.11"></a>
## [2.2.11](https://github.com/knownasilya/google-maps-markup/compare/v2.2.10...v2.2.11) (2018-07-17)


### Bug Fixes

* auto unit change for distance, format to own module ([a0edf9a](https://github.com/knownasilya/google-maps-markup/commit/a0edf9a))



<a name="2.2.10"></a>
## [2.2.10](https://github.com/knownasilya/google-maps-markup/compare/v2.2.9...v2.2.10) (2018-07-17)


### Bug Fixes

* area unit assumptions and usage ([7d22133](https://github.com/knownasilya/google-maps-markup/commit/7d22133))



<a name="2.2.9"></a>
## [2.2.9](https://github.com/knownasilya/google-maps-markup/compare/v2.2.8...v2.2.9) (2018-07-16)


### Bug Fixes

* area auto next unit if above a threshold ([429ac37](https://github.com/knownasilya/google-maps-markup/commit/429ac37))
* remove non existent references to a util ([eabdf0e](https://github.com/knownasilya/google-maps-markup/commit/eabdf0e))



<a name="2.2.8"></a>
## [2.2.8](https://github.com/knownasilya/google-maps-markup/compare/v2.2.7...v2.2.8) (2018-06-01)


### Bug Fixes

* clean up deprecations and linting ([dff2d76](https://github.com/knownasilya/google-maps-markup/commit/dff2d76))
* update all the things ([735cfec](https://github.com/knownasilya/google-maps-markup/commit/735cfec))
* update the deps, add load and save to dummy app ([fc7c903](https://github.com/knownasilya/google-maps-markup/commit/fc7c903))



<a name="2.2.7"></a>
## [2.2.7](https://github.com/knownasilya/google-maps-markup/compare/v2.2.6...v2.2.7) (2018-03-21)


### Bug Fixes

* **service:** move distanceUnitId to result from feature ([217066b](https://github.com/knownasilya/google-maps-markup/commit/217066b))
* save distanceUnitId on feature for markup ([3209a1a](https://github.com/knownasilya/google-maps-markup/commit/3209a1a))



<a name="2.2.6"></a>
## [2.2.6](https://github.com/knownasilya/google-maps-markup/compare/v2.2.5...v2.2.6) (2017-12-18)


### Bug Fixes

* distanceUnitId being overwritten on click ([f567a26](https://github.com/knownasilya/google-maps-markup/commit/f567a26))



<a name="2.2.5"></a>
## [2.2.5](https://github.com/knownasilya/google-maps-markup/compare/v2.2.4...v2.2.5) (2017-11-16)


### Bug Fixes

* enable crosshair for freeform poly tool ([8913108](https://github.com/knownasilya/google-maps-markup/commit/8913108))
* path distance incorrectly setting the wrong var ([b90989a](https://github.com/knownasilya/google-maps-markup/commit/b90989a))



<a name="2.2.4"></a>
## [2.2.4](https://github.com/knownasilya/google-maps-markup/compare/v2.2.3...v2.2.4) (2017-10-18)


### Bug Fixes

* option layout columns ([01dce1a](https://github.com/knownasilya/google-maps-markup/commit/01dce1a))



<a name="2.2.3"></a>
## [2.2.3](https://github.com/knownasilya/google-maps-markup/compare/v2.2.2...v2.2.3) (2017-10-18)


### Bug Fixes

* name not set when using featureToResult in service ([15d0e17](https://github.com/knownasilya/google-maps-markup/commit/15d0e17))



<a name="2.2.2"></a>
## [2.2.2](https://github.com/knownasilya/google-maps-markup/compare/v2.2.1...v2.2.2) (2017-10-18)


### Bug Fixes

* add name to feature for saving ([9e4e304](https://github.com/knownasilya/google-maps-markup/commit/9e4e304))



<a name="2.2.1"></a>
## [2.2.1](https://github.com/knownasilya/google-maps-markup/compare/v2.2.0...v2.2.1) (2017-10-18)


### Bug Fixes

* remove unused helper, add tool-id test ([b9bb7f3](https://github.com/knownasilya/google-maps-markup/commit/b9bb7f3))
* use getTool on click, prevents error ([312d776](https://github.com/knownasilya/google-maps-markup/commit/312d776))
* use reduce to calc value for path distance ([4ba8e7b](https://github.com/knownasilya/google-maps-markup/commit/4ba8e7b))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/knownasilya/google-maps-markup/compare/v2.1.3...v2.2.0) (2017-10-16)


### Bug Fixes

* add back dependencies missed during cli upgrade ([401ea0a](https://github.com/knownasilya/google-maps-markup/commit/401ea0a))
* make edit mode exclusive ([1bf8fb2](https://github.com/knownasilya/google-maps-markup/commit/1bf8fb2))
* result item hover on the full draggable element ([931fd68](https://github.com/knownasilya/google-maps-markup/commit/931fd68))


### Features

* hover markup on map mouse interaction ([0fb9ec3](https://github.com/knownasilya/google-maps-markup/commit/0fb9ec3))



<a name="2.1.3"></a>
## [2.1.3](https://github.com/knownasilya/google-maps-markup/compare/v2.1.2...v2.1.3) (2017-10-16)


### Bug Fixes

* missing event in dblclick handler for measurement plotter ([cf9d549](https://github.com/knownasilya/google-maps-markup/commit/cf9d549))



<a name="2.1.2"></a>
## [2.1.2](https://github.com/knownasilya/google-maps-markup/compare/v2.1.1...v2.1.2) (2017-10-16)


### Bug Fixes

* freeform activating on of the dm tools if those clicked before hand ([f5483b1](https://github.com/knownasilya/google-maps-markup/commit/f5483b1))



<a name="2.1.1"></a>
## [2.1.1](https://github.com/knownasilya/google-maps-markup/compare/v2.1.0...v2.1.1) (2017-10-16)


### Bug Fixes

* freeform polygon keeping path drawing around after finishing shape ([34b07ab](https://github.com/knownasilya/google-maps-markup/commit/34b07ab))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/knownasilya/google-maps-markup/compare/v2.0.3...v2.1.0) (2017-10-15)


### Bug Fixes

* add autoreset to freeform poly and change tool (to text as well) ([e24a6f3](https://github.com/knownasilya/google-maps-markup/commit/e24a6f3))
* add eps dep explicitly, styles and remove old stuff ([7d54b58](https://github.com/knownasilya/google-maps-markup/commit/7d54b58))
* build issue fixed ([#26](https://github.com/knownasilya/google-maps-markup/issues/26)) ([f69bc31](https://github.com/knownasilya/google-maps-markup/commit/f69bc31))
* Can only enter one text character ([#27](https://github.com/knownasilya/google-maps-markup/issues/27)) ([17d50f1](https://github.com/knownasilya/google-maps-markup/commit/17d50f1))
* certain styles leaking into others ([77a546f](https://github.com/knownasilya/google-maps-markup/commit/77a546f))
* Circle or Rectangle on the map is getting draw without fill color ([#24](https://github.com/knownasilya/google-maps-markup/issues/24)) ([5c00d8f](https://github.com/knownasilya/google-maps-markup/commit/5c00d8f))
* drag and drop ui layout ([52368fc](https://github.com/knownasilya/google-maps-markup/commit/52368fc))
* dynamic-label error when removing ([78155d3](https://github.com/knownasilya/google-maps-markup/commit/78155d3))
* edit allowed by default, editable option only enables shape editing ([4127a5a](https://github.com/knownasilya/google-maps-markup/commit/4127a5a))
* freeform drawing with mobile ([d83256f](https://github.com/knownasilya/google-maps-markup/commit/d83256f))
* freeform polygon transparent by and styles leaking ([354c68e](https://github.com/knownasilya/google-maps-markup/commit/354c68e))
* infowindow popup during edit ([7caa87e](https://github.com/knownasilya/google-maps-markup/commit/7caa87e))
* make fill color checkbox clickable with label ([1ce1529](https://github.com/knownasilya/google-maps-markup/commit/1ce1529))
* make markers not editable for now ([e33297f](https://github.com/knownasilya/google-maps-markup/commit/e33297f))
* marker hover/zindex change ([59ce53d](https://github.com/knownasilya/google-maps-markup/commit/59ce53d))
* modules codemod ran ([a5ca8de](https://github.com/knownasilya/google-maps-markup/commit/a5ca8de))
* move data to another file ([d6ee138](https://github.com/knownasilya/google-maps-markup/commit/d6ee138))
* **deps:** remove unused bower deps, update merge trees ([be946ab](https://github.com/knownasilya/google-maps-markup/commit/be946ab))
* normalize options into a component ([a43960b](https://github.com/knownasilya/google-maps-markup/commit/a43960b))
* options layout and rectangle missing stroke weight ([55d29fc](https://github.com/knownasilya/google-maps-markup/commit/55d29fc))
* options size on small screen ([3422463](https://github.com/knownasilya/google-maps-markup/commit/3422463))
* text fontsize changing and position during zoom and sizing ([98c35c3](https://github.com/knownasilya/google-maps-markup/commit/98c35c3))
* unit issues and how units are saved. Remove data from tools ([d426d81](https://github.com/knownasilya/google-maps-markup/commit/d426d81))
* update deps and fix text label in items list ([b72a5de](https://github.com/knownasilya/google-maps-markup/commit/b72a5de))
* update linting, remove unused jshint config ([bd515d3](https://github.com/knownasilya/google-maps-markup/commit/bd515d3))
* Update to ember-cli 2.16 ([2563baf](https://github.com/knownasilya/google-maps-markup/commit/2563baf))


### Features

* Ability to change line width of markup/measurement ([#22](https://github.com/knownasilya/google-maps-markup/issues/22)) ([3090d60](https://github.com/knownasilya/google-maps-markup/commit/3090d60))
* Add option to change font size for text ([#23](https://github.com/knownasilya/google-maps-markup/issues/23)) ([32e7890](https://github.com/knownasilya/google-maps-markup/commit/32e7890))
* Allow reorder markup in the list ([#20](https://github.com/knownasilya/google-maps-markup/issues/20)) ([e9c5105](https://github.com/knownasilya/google-maps-markup/commit/e9c5105))
* bring forward to the top any markup when you hover over it in the list ([#21](https://github.com/knownasilya/google-maps-markup/issues/21)) ([4d81b98](https://github.com/knownasilya/google-maps-markup/commit/4d81b98))
* Create a choice of measurement units ([#19](https://github.com/knownasilya/google-maps-markup/issues/19)) ([dc2bdc0](https://github.com/knownasilya/google-maps-markup/commit/dc2bdc0))
* Individual markups editing (colors, opacity) ([#25](https://github.com/knownasilya/google-maps-markup/issues/25)) ([28b28ca](https://github.com/knownasilya/google-maps-markup/commit/28b28ca))
