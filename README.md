# babel-plugin-rewrite-promise-catch

## About AST

## use Babel better understand this in javascript

When babel met below javascript code,

```javascript
const foo = {
  bar: () => this.name,
  name: 'mike'
}

const Foo = new foo()
Foo.bar() // mike

// after babel transform
const foo = {
  _this: this,
  bar: () => _this.name,
  name: 'mike'
}
```

but when we change it another way,

```javascript
// TODO
```

## Steps

1. analysis: recept code, and output AST tree, which means a tree compose of tokens, normally its node has property like start, end, loc.
2. transform: is a main proccess that babel plugin make effect.
3. generate: travel ast tree and generate code.

### transform

```javascript
module.exports = {
  type: "FunctionDeclaration",
  id: {
    type: "Identifier",
    name: "square"
  },
  params: [{
    type: "Identifier",
    name: "n"
  }],
  body: {
    type: "BlockStatement",
    body: [{
      type: "ReturnStatement",
      argument: {
        type: "BinaryExpression",
        operator: "*",
        left: {
          type: "Identifier",
          name: "n"
        },
        right: {
          type: "Identifier",
          name: "n"
        }
      }
    }]
  }
}
```

a ast tree will be like uppon.

## Reference

1. (google)[www.google.com]
2. (handbook)[https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-lexical-analysis]
