angular.module('videoScroll')
.directive('playVideo', ['$window', function ($window){
        // left: 37, up: 38, right: 39, down: 40,
        // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
        var keys = {37: 1, 38: 1, 39: 1, 40: 1};

        // raw: raw DOM element, totalTime: length of video, currentTime: current time of video
        // elementTop: distance of element from top of page, timeOffset: amount of time to adjust video when scrolling
        var raw, totalTime, currentTime, scrollTop, timeOffset;

        currentTime = 0;
        timeOffset = .15;

        // set time of video with scrolling
        function scrollVideo (e){
            if(e == null){
                disableScroll();
                return;
            }
            if(currentTime > totalTime){
                currentTime = totalTime;
                enableScroll();
                return;
            }
            if(currentTime < 0){
                currentTime = 0;
                enableScroll();
                return;
            }
            if(e != null) {
                // handle different type of scroll events
                switch (e.type) {
                    case 'wheel':
                        if (e.deltaY >= 0) {
                            currentTime += timeOffset;
                        } else {
                            currentTime -= timeOffset;
                        }
                        break;
                    case 'keydown':
                        switch(e.keyCode){
                            case 37:
                            case 38:
                                currentTime -= timeOffset;
                                break;
                            case 39:
                            case 40:
                                currentTime += timeOffset;
                                break;
                        }
                        break;
                }
                raw.currentTime = currentTime;
            }
        }

        // get distance of video element from top of page
        function getTop(element){
            if (element.getBoundingClientRect) {
                // Using getBoundingClientRect is vastly faster, if it's available
                return element.getBoundingClientRect().top;
            } else {
                var pixels = 0;

                if (element.offsetParent) {
                    do {
                        pixels += element.offsetTop;
                        element = element.offsetParent;
                    } while (element);
                }

                return pixels;
            }
        }

        // disable scrolling events
        function disableScroll() {
            if (window.addEventListener) // older FF
                window.addEventListener('DOMMouseScroll', preventDefault, false);
            window.onwheel = preventDefault; // modern standard
            window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
            window.ontouchmove  = preventDefault; // mobile
            document.onkeydown  = preventDefaultForScrollKeys;
        }

        // enable scrolling events
        function enableScroll() {
            if (window.removeEventListener)
                window.removeEventListener('DOMMouseScroll', preventDefault, false);
            window.onmousewheel = document.onmousewheel = null;
            window.onwheel = null;
            window.ontouchmove = null;
            document.onkeydown = null;
        }

        // prevent default scroll events
        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault)
                e.preventDefault();
            e.returnValue = false;
            scrollVideo(e);
        }

        // prevent default key scroll events
        function preventDefaultForScrollKeys(e) {
            console.log("here");
            if (keys[e.keyCode]) {
                preventDefault(e);
                scrollVideo(e);
                return false;
            }
        }


        return {
            restrict: 'A',
            link: function ($scope, $element){
                raw = $element[0];      // get raw DOM element
                scrollTop = getTop(raw);    //  get distance from top

                // bind function to scroll events
                angular.element($window).bind('scroll', function (){
                    if(isNaN(totalTime)) {
                        totalTime = raw.duration; // initialize totalTime (done here because of loading issues)
                        console.log(totalTime);
                    }
                    // check if video is in right location
                    if($window.scrollY >= scrollTop - 225 && $window.scrollY <= scrollTop - 175){
                        scrollVideo(null);
                    }
                });
            }
        }
    }]);
