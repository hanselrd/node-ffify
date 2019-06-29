import { IDeclNode, IFuncDefNode, INode, INodeType } from './node';
import { parse } from './parser';
import { visit } from './visitor';

const printAst = (ast: INode, indent: number) => {
  const padding = '  '.repeat(indent);
  console.log(`${padding}${ast._nodetype}: ${ast.coord}`);

  switch (ast._nodetype) {
    case 'ArrayDecl':
      printAst(ast.type, indent + 1);
      if (ast.dim) {
        printAst(ast.dim, indent + 1);
      }
      break;
    case 'ArrayRef':
      printAst(ast.name, indent + 1);
      printAst(ast.subscript, indent + 1);
      break;
    case 'Assignment':
      printAst(ast.lvalue, indent + 1);
      printAst(ast.rvalue, indent + 1);
      break;
    case 'BinaryOp':
      printAst(ast.left, indent + 1);
      printAst(ast.right, indent + 1);
      break;
    case 'Break':
      break;
    case 'Case':
      printAst(ast.expr, indent + 1);
      if (ast.stmts) {
        ast.stmts.forEach(val => {
          printAst(val, indent + 1);
        });
      }
      break;
    case 'Cast':
      printAst(ast.to_type, indent + 1);
      printAst(ast.expr, indent + 1);
      break;
    case 'Compound':
      if (ast.block_items) {
        ast.block_items.forEach(val => {
          printAst(val, indent + 1);
        });
      }
      break;
    case 'CompoundLiteral':
      printAst(ast.type, indent + 1);
      printAst(ast.init, indent + 1);
      break;
    case 'Constant':
      break;
    case 'Continue':
      break;
    case 'Decl':
      printAst(ast.type, indent + 1);
      if (ast.init) {
        printAst(ast.init, indent + 1);
      }
      if (ast.bitsize) {
        printAst(ast.bitsize, indent + 1);
      }
      break;
    case 'DeclList':
      ast.decls.forEach(val => {
        printAst(val, indent + 1);
      });
      break;
    case 'Default':
      ast.stmts.forEach(val => {
        printAst(val, indent + 1);
      });
      break;
    case 'DoWhile':
      printAst(ast.cond, indent + 1);
      printAst(ast.stmt, indent + 1);
      break;
    case 'EllipsisParam':
      break;
    case 'EmptyStatement':
      break;
    case 'Enum':
      if (ast.values) {
        printAst(ast.values, indent + 1);
      }
      break;
    case 'Enumerator':
      if (ast.values) {
        printAst(ast.values, indent + 1);
      }
      break;
    case 'EnumeratorList':
      ast.enumerators.forEach(val => {
        printAst(val, indent + 1);
      });
      break;
    case 'ExprList':
      ast.exprs.forEach(val => {
        printAst(val, indent + 1);
      });
      break;
    case 'FileAST':
      ast.ext.forEach(val => {
        printAst(val, indent + 1);
      });
      break;
    case 'For':
      if (ast.init) {
        printAst(ast.init, indent + 1);
      }
      if (ast.cond) {
        printAst(ast.cond, indent + 1);
      }
      if (ast.next) {
        printAst(ast.next, indent + 1);
      }
      printAst(ast.stmt, indent + 1);
      break;
    case 'FuncCall':
      printAst(ast.name, indent + 1);
      if (ast.args) {
        printAst(ast.args, indent + 1);
      }
      break;
    case 'FuncDecl':
      if (ast.args) {
        printAst(ast.args, indent + 1);
      }
      printAst(ast.type, indent + 1);
      break;
    case 'FuncDef':
      printAst(ast.decl, indent + 1);
      if (ast.param_decls) {
        ast.param_decls.forEach(val => {
          printAst(val, indent + 1);
        });
      }
      if (ast.body) {
        printAst(ast.body, indent + 1);
      }
      break;
    case 'Goto':
      break;
    case 'ID':
      break;
    case 'IdentifierType':
      break;
    case 'If':
      printAst(ast.cond, indent + 1);
      printAst(ast.iftrue, indent + 1);
      if (ast.iffalse) {
        printAst(ast.iffalse, indent + 1);
      }
      break;
    case 'InitList':
      ast.exprs.forEach(val => {
        printAst(val, indent + 1);
      });
      break;
    case 'Label':
      printAst(ast.stmt, indent + 1);
      break;
    case 'NamedInitializer':
      ast.name.forEach(val => {
        printAst(val, indent + 1);
      });
      printAst(ast.expr, indent + 1);
      break;
    case 'ParamList':
      ast.params.forEach(val => {
        printAst(val, indent + 1);
      });
      break;
    case 'Pragma':
      break;
    case 'PtrDecl':
      printAst(ast.type, indent + 1);
      break;
    case 'Return':
      if (ast.expr) {
        printAst(ast.expr, indent + 1);
      }
      break;
    case 'Struct':
      if (ast.decls) {
        ast.decls.forEach(val => {
          printAst(val, indent + 1);
        });
      }
      break;
    case 'StructRef':
      printAst(ast.field, indent + 1);
      break;
    case 'Switch':
      printAst(ast.cond, indent + 1);
      printAst(ast.stmt, indent + 1);
      break;
    case 'TernaryOp':
      printAst(ast.cond, indent + 1);
      printAst(ast.iftrue, indent + 1);
      printAst(ast.iffalse, indent + 1);
      break;
    case 'TypeDecl':
      printAst(ast.type, indent + 1);
      break;
    case 'Typedef':
      printAst(ast.type, indent + 1);
      break;
    case 'Typename':
      printAst(ast.type, indent + 1);
      break;
    case 'UnaryOp':
      printAst(ast.expr, indent + 1);
      break;
    case 'Union':
      ast.decls.forEach(val => {
        printAst(val, indent + 1);
      });
      break;
    case 'While':
      printAst(ast.cond, indent + 1);
      printAst(ast.stmt, indent + 1);
      break;
    // default:
    //   console.log(`${ast._nodetype} unsupported`);
    //   break;
  }
};

const smartPrintAst = (ast: INode, indent: number) => {
  const padding = '  '.repeat(indent);
  console.log(`${padding}${ast._nodetype}: ${ast.coord}`);

  for (const [key, value] of Object.entries(ast)) {
    if (key === '_nodetype' || key === 'coord') {
      continue;
    }

    console.log(`${padding}  ${key}: ${value} (${ast._nodetype})`);

    if (value instanceof Array) {
      value.forEach(elem => {
        for (const [key2, value2] of Object.entries(elem)) {
          if (key2 === '_nodetype') {
            smartPrintAst(elem as INode, indent + 1);
          }
        }
      });
    }

    if (value instanceof Object) {
      for (const [key3, value3] of Object.entries(value)) {
        if (key3 === '_nodetype') {
          smartPrintAst(value as INode, indent + 1);
        }
      }
    }
  }
};

const parsedAst = parse('src/lib/test.h', false, false)!;

// const parsedAst = parse('deps/redis/src/redis-cli.c', false, false, [
//   'deps/redis/src',
//   'deps/redis/deps/lua/src',
//   'deps/redis/deps/hiredis',
//   'deps/redis/deps/linenoise'
// ])!;

visit(
  parsedAst,
  ['FuncDecl'],

  node => {
    smartPrintAst(node, 0);
  }
);
