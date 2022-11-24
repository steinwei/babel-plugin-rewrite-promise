// learn babel plugin through explatation
function introduce({ types: t }) {
  return {
    visitor: {
      // identify tokens
      Identifier(path, state) {
        if (path.isReferencedIdentifier()) {}
        if (t.isReferenced(path.node, path.parent)) {}
      },
      // print ast node
      ASTNodeTypeHere(path, state) {},
      // binary travel tree
      BinaryExpression(path) {
        if (path.node.operator !== '===') {
          return
        }
      },
      Program(path) {},
      // vars tokens
      VariableDeclaration(path) {},
      // return tokens
      ReturnStatement(path) {},
      // declare functin 
      FunctionDeclaration(path, state) {
        // 
        const id = path.scope.generateUidIdentifierBasedOnNode(path.node.id)
        path.remove()
        path.scope.parent.push({ id, init: path.node })
        // plugins options
        console.log(state.opts)
      },
    }
  }
}

function replaceOneNode({ types: t }) {
  return {
    visitor: {
      BinaryExpression(path) {
        path.replaceWith(
          t.binaryExpression('**', path.node.left, t.numberLiteral(2))
        )
      }
    }
  }
}

function replaceMultipleNode({ types: t }) {
  return {
    visitor: {
      ReturnStatement(path) {
        path.replaceWithMultiple([
          t.expressionStatement(t.stringLiteral('Is this the real life?')),
          t.expressionStatement(t.stringLiteral('Is this just fantasy?')),
          t.expressionStatement(t.stringLiteral('(Enjou singing the rest of the song in your head)')),
        ])
      }
    }
  }
}

function makeBeforeAndAfterClearCode() {
  return {
    pre(state) {
      this.cache = new Map()
    },
    visitor: {
      StringLiteral(path) {
        this.cache.set(path.node.value, 1)
      }
    },
    post(state) {
      console.log(this.cache)
    },
  }
}

function enableOtherGrammer({ types: t }) {
  return {
    inherits: require('babel-plugin-syntax-jsx')
  }
}

function throwErrorBasedOtherPlugin({ types: t }) {
  return {
    visitor: {
      StringLiteral(path) {
        throw path.buildCodeFrameError('Error message here')
      }
    }
  }
}
