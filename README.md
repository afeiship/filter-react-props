# filter-react-props
> Get filterd react props.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/filter-react-props
```

## usage
```js
import filterReactProps from '@jswork/filter-react-props';

const props = { l: true, x: true, y: true, children: [], rel: true };
const list = ['rel', 'x', 'y'];

// result:
// { children: [] }
```

## license
Code released under [the MIT license](https://github.com/afeiship/filter-react-props/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/filter-react-props
[version-url]: https://npmjs.org/package/@jswork/filter-react-props

[license-image]: https://img.shields.io/npm/l/@jswork/filter-react-props
[license-url]: https://github.com/afeiship/filter-react-props/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/filter-react-props
[size-url]: https://github.com/afeiship/filter-react-props/blob/master/dist/filter-react-props.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/filter-react-props
[download-url]: https://www.npmjs.com/package/@jswork/filter-react-props
