# videoScroll
---------------

[![Bower version](https://img.shields.io/badge/bower-v0.0.2-green.svg)](https://github.com/rbingham/videoScroll)

Video Scroll is an angular directive to allow for playing an html5 video while you scroll.

## Installation
---------------
	bower install angular-videoScroll --save


## Code Examples
----------------

Include videoScroll as a dependency of your angular module
```js
angular.module('yourModule', ['videoScroll']);
```

Add the play-video attribute to the video you want to play
```html
<video id="v0" tabindex="0" autobuffer="autobuffer" preload="preload" play-video>
	<source type="video/webm; codecs=&quot;vp8, vorbis&quot;" src="videos/video.mp4">
	<source type="video/ogg; codecs=&quot;theora, vorbis&quot;" src="videos/video.mp4">
	<source type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;" src="videos/video.mp4">
	<p>Sorry, your browser does not support the &lt;video&gt; element.</p>
</video>
```

## License

Video Scroll is an open-sourced software licensed under the [MIT licence](http://opensource.org/licenses/MIT)
