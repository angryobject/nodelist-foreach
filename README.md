# nodelist-foreach

[![Build Status](https://travis-ci.org/angryobject/nodelist-foreach.svg?branch=master)](https://travis-ci.org/angryobject/nodelist-foreach)

A polyfill to add `forEach` on `NodeList` for non supporting browsers (e.g. IE). 

```javascript
import 'nodelist-foreach';

querySelectorAll('.my-component').forEach(doStuff);
```

## Installation

npm:

```bash
npm i -S nodelist-foreach
```

yarn:

```bash
yarn add nodelist-foreach
```