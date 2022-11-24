import * as babylon from 'babylon'
import traverse from 'babel-traverse'
import * as t from 'babel-types'

import { foo, promise } from './test.js'

const ast = babylon.parse(node)

traverse(ast, {
  enter(path) {
    console.log(path)
  }
})
