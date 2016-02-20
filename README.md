# Pong

A redux of the classic 1972 game, Pong.

![Pong](http://g.recordit.co/UDCQfTqHi5.gif)

#### Deployed Game
[Play Pong](https://rjohnson4444.github.io/pong/)

To install the dependencies:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```

---

###### 2 Player Independent controls
* Separate controls for each player, can move at same time, in both horizontal
and vertical motions.

* Player 1: `q` / `e` for horizontal motion, `w` / `s` for vertical

* Player 2: `←` / `→` for horizontal motion, `↑` / `↓` for vertical motion.
