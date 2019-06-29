import { INode, INodeType } from './node';

export const visit = (ast: INode, filter: INodeType[], visitor: (ast: INode) => void) => {
  if (filter.includes(ast._nodetype)) {
    visitor(ast);
  }

  for (const [key, value] of Object.entries(ast)) {
    if (key === '_nodetype' || key === 'coord') {
      continue;
    }

    if (value instanceof Array) {
      value.forEach(elem => {
        for (const [key2, value2] of Object.entries(elem)) {
          if (key2 === '_nodetype') {
            visit(elem as INode, filter, visitor);
          }
        }
      });
    }

    if (value instanceof Object) {
      for (const [key3, value3] of Object.entries(value)) {
        if (key3 === '_nodetype') {
          visit(value as INode, filter, visitor);
        }
      }
    }
  }
};
