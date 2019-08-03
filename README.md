# scrollduration.js Documentation

### Include this file:
``` html
<script src="https://cdn.jsdelivr.net/gh/tobiasroeder/scrollduration.js@1.0.0/js/scrollduration.min.js"></script>
```

---

### Syntax ([Example](https://codepen.io/tobiasroeder/pen/qePQXw))

``` css
/* css */
* {
	margin: 0;
	padding: 0;
}
```

``` javascript
// javascript
window.onscroll = function() {
	scrollDuration({
		barColor: '#000',
		barHeight: '1em'
	});
}
```

---

### Parameter
Parameter | Type | Default
--|--|--
barColor | string | #00bfff
barHeight | string | 4px

---

[Try it yourself](https://codepen.io/tobiasroeder/pen/qePQXw)
