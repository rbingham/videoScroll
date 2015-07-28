# videoScroll

[![Bower version](https://img.shields.io/badge/bower-v0.5.1-green.svg)](https://github.com/rbingham/videoScroll)

Video Scroll is an angular directive to allow for playing an html5 video while you scroll.

## Installation
	bower install angular-videoScroll --save


## Code Examples

Include videoScroll as a dependency of your angular module.
```js
angular.module('yourModule', ['videoScroll']);
```

Add the play-video attribute to the video you want to play.
```html
<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload" play-video>
</video>
```

To change the scroll speed of the video add the time attribute.
Note: The default time is .15 seconds.
```html
<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload" play-video time=".15">
</video>
```

To change when the video starts playing relative to the top of the screen (in pixels), use the offset attribute.
```html
<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload" play-video offset="100">
</video>
```

To change whether normal scrolling is disabled while the video is playing, add the preventScroll option. Default is set to true.
```html
<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload" play-video preventScroll="true">
</video>
```

## License

Video Scroll is an open-sourced software licensed under the [MIT licence](http://opensource.org/licenses/MIT)
