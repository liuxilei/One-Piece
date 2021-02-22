## Redux 原生页面练习

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Document</title>
		<script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
	</head>
	<body>
		<div>
			<p>
				Clicked: <span id="value">0</span> times
				<button id="increment">+</button>
				<button id="decrement">-</button>
				<button id="incrementIfOdd">Increment if odd</button>
				<button id="incrementAsync">Increment async</button>
			</p>
		</div>
		<script>
			function counter(state, action) {
				if (typeof state == "undefined") {
					return 0;
				}

				switch (action.type) {
					case "INCREMENT":
						return state + 1;
					case "DECREMENT":
						return state - 1;
					default:
						return state;
				}
			}
			var store = Redux.createStore(counter);
			var valueEl = document.querySelector("#value");
			function render() {
				valueEl.innerHTML = store.getState().toString();
			}
			store.subscribe(render);

			document
				.querySelector("#increment")
				.addEventListener("click", () => {
					store.dispatch({
						type: "INCREMENT",
					});
				});

			document
				.querySelector("#decrement")
				.addEventListener("click", () => {
					store.dispatch({
						type: "DECREMENT",
					});
				});

			document
				.querySelector("#incrementIfOdd")
				.addEventListener("click", () => {
					if (valueEl.innerHTML % 2 !== 1) {
						store.dispatch({
							type: "INCREMENT",
						});
					}
				});

			document
				.querySelector("#incrementAsync")
				.addEventListener("click", () => {
					setTimeout(function () {
						store.dispatch({
							type: "INCREMENT",
						});
					}, 1000);
				});
		</script>
	</body>
</html>
```
