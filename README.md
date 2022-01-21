Hello , this is a module for **receives input**

## How to use :

- install

```bash
npm i input-dot-js
```

- config :

```javascript
const input = require("input-dot-js");
```

- how to get input :

```javascript
let answer = await input("what is your name ?");
```

- example uses :

```javascript
// run.js file :
const input = require("input-dot-js");

(async () => {
  let name = await input("what is your name ?");
  let family = await input("what is your lastName ?");
  console.log(`your full name is ${name} ${family}`);
})();

// node run.js
// - what is your name ?
// + hamid
// - what is your lastName ?
// + ghahremani
// - your full name is hamid ghahremani
```
