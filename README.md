# fabric代码规范

一个包含 prettier，eslint，stylelint 的配置文件合集

A collection of configuration files containing prettier, eslint, stylelint

## Use

安装

```
npm i @juln/fabric -D
yarn add @juln/fabric -D
```

in .eslintrc.js

```js
const path = require("path");

module.exports = {
  extends: [path.resolve('./node_modules/@juln/fabric')],

  rules: {
    // your rules
  },
};
```

或

```js
module.exports = {
  extends: ['@juln/fabric'],

  rules: {
    // your rules
  },
};
```

in .prettierrc.js

```js
const prettier = require('@juln/fabric/prettier');

module.exports = {
  ...prettier,
};
```

in .stylelintrc.js

```js
module.exports = {
  extends: [require.resolve('@juln/fabric/stylelint')],
  rules: {
    // your rules
  },
};
```

## 相关问题

1. @typescript-eslint/no-unused-var 误报

@typescript-eslint/no-unused-vars 规则在极少数情况下会误报。 比如下面这段代码, ts函数类型定义，函数中的参数会被当作真实变量被判断。

```ts
type Fn = (arg: any) => void; // arg 误报
```

解决方案: 使用`@typescript-eslint/no-unused-vars-experimental`代替`@typescript-eslint/no-unused-vars`。但是lint速度会很明显变慢很多

```js
// .eslintrc.js
module.exports = {
  extends: ['@juln/fabric'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars-experimental': 'error',
  },
};
```
