export interface IArrayDeclNode {
  _nodetype: 'ArrayDecl';
  type: INode;
  dim?: INode;
  dim_equals: string[];
  coord?: string;
}

export interface IArrayRefNode {
  _nodetype: 'ArrayRef';
  name: INode;
  subscript: INode;
  coord?: string;
}

export interface IAssignmentNode {
  _nodetype: 'Assignment';
  op: string;
  lvalue: INode;
  rvalue: INode;
  coord?: string;
}

export interface IBinaryOpNode {
  _nodetype: 'BinaryOp';
  op: string;
  left: INode;
  right: INode;
  coord?: string;
}

export interface IBreakNode {
  _nodetype: 'Break';
  coord?: string;
}

export interface ICaseNode {
  _nodetype: 'Case';
  expr: INode;
  stmts?: INode[];
  coord?: string;
}

export interface ICastNode {
  _nodetype: 'Cast';
  to_type: INode;
  expr: INode;
  coord?: string;
}

export interface ICompoundNode {
  _nodetype: 'Compound';
  block_items?: INode[];
  coord?: string;
}

export interface ICompoundLiteralNode {
  _nodetype: 'CompoundLiteral';
  type: INode;
  init: INode;
  coord?: string;
}

export interface IConstantNode {
  _nodetype: 'Constant';
  type: string;
  value: string;
  coord?: string;
}

export interface IContinueNode {
  _nodetype: 'Continue';
  coord?: string;
}

export interface IDeclNode {
  _nodetype: 'Decl';
  name: string;
  quals: string[];
  storage: string[];
  funcspec: string[];
  type: INode;
  init?: INode;
  bitsize?: INode;
  coord?: string;
}

export interface IDeclListNode {
  _nodetype: 'DeclList';
  decls: INode[];
  coord?: string;
}

export interface IDefaultNode {
  _nodetype: 'Default';
  stmts: INode[];
  coord?: string;
}

export interface IDoWhileNode {
  _nodetype: 'DoWhile';
  cond: INode;
  stmt: INode;
  coord?: string;
}

export interface IEllipsisParamNode {
  _nodetype: 'EllipsisParam';
  coord?: string;
}

export interface IEmptyStatementNode {
  _nodetype: 'EmptyStatement';
  coord?: string;
}

export interface IEnumNode {
  _nodetype: 'Enum';
  name: string;
  values?: INode;
  coord?: string;
}

export interface IEnumeratorNode {
  _nodetype: 'Enumerator';
  name: string;
  values?: INode;
  coord?: string;
}

export interface IEnumeratorListNode {
  _nodetype: 'EnumeratorList';
  enumerators: INode[];
  coord?: string;
}

export interface IExprListNode {
  _nodetype: 'ExprList';
  exprs: INode[];
  coord?: string;
}

export interface IFileASTNode {
  _nodetype: 'FileAST';
  ext: INode[];
  coord?: string;
}

export interface IForNode {
  _nodetype: 'For';
  init?: INode;
  cond?: INode;
  next?: INode;
  stmt: INode;
  coord?: string;
}

export interface IFuncCallNode {
  _nodetype: 'FuncCall';
  name: INode;
  args?: INode;
  coord?: string;
}

export interface IFuncDeclNode {
  _nodetype: 'FuncDecl';
  args?: INode;
  type: INode;
  coord?: string;
}

export interface IFuncDefNode {
  _nodetype: 'FuncDef';
  decl: INode;
  param_decls?: INode[];
  body?: INode;
  coord?: string;
}

export interface IGotoNode {
  _nodetype: 'Goto';
  name: string;
  coord?: string;
}

export interface IIDNode {
  _nodetype: 'ID';
  name: string;
  coord?: string;
}

export interface IIdentifierTypeNode {
  _nodetype: 'IdentifierType';
  names: any;
  coord?: string;
}

export interface IIfNode {
  _nodetype: 'If';
  cond: INode;
  iftrue: INode;
  iffalse?: INode;
  coord?: string;
}

export interface IInitListNode {
  _nodetype: 'InitList';
  exprs: INode[];
  coord?: string;
}

export interface ILabelNode {
  _nodetype: 'Label';
  name: string;
  stmt: INode;
  coord?: string;
}

export interface INamedInitializerNode {
  _nodetype: 'NamedInitializer';
  name: INode[];
  expr: INode;
  coord?: string;
}

export interface IParamListNode {
  _nodetype: 'ParamList';
  params: INode[];
  coord?: string;
}

export interface IPtrDeclNode {
  _nodetype: 'PtrDecl';
  quals: any;
  type: INode;
  coord?: string;
}

export interface IReturnNode {
  _nodetype: 'Return';
  expr?: INode;
  coord?: string;
}

export interface IStructNode {
  _nodetype: 'Struct';
  name: string;
  decls?: INode[];
  coord?: string;
}

export interface IStructRefNode {
  _nodetype: 'StructRef';
  name: INode;
  type: string;
  field: INode;
  coord?: string;
}

export interface ISwitchNode {
  _nodetype: 'Switch';
  cond: INode;
  stmt: INode;
  coord?: string;
}

export interface ITernaryOpNode {
  _nodetype: 'TernaryOp';
  cond: INode;
  iftrue: INode;
  iffalse: INode;
  coord?: string;
}

export interface ITypeDeclNode {
  _nodetype: 'TypeDecl';
  declname: string;
  quals: any;
  type: INode;
  coord?: string;
}

export interface ITypedefNode {
  _nodetype: 'Typedef';
  name: string;
  quals: string[];
  storage: string[];
  type: INode;
  coord?: string;
}

export interface ITypenameNode {
  _nodetype: 'Typename';
  name: string;
  quals: string[];
  type: INode;
  coord?: string;
}

export interface IUnaryOpNode {
  _nodetype: 'UnaryOp';
  op: string;
  expr: INode;
  coord?: string;
}

export interface IUnionNode {
  _nodetype: 'Union';
  name: string;
  decls: INode[];
  coord?: string;
}

export interface IWhileNode {
  _nodetype: 'While';
  cond: INode;
  stmt: INode;
  coord?: string;
}

export interface IPragmaNode {
  _nodetype: 'Pragma';
  string: string;
  coord?: string;
}

export type INode =
  | IArrayDeclNode
  | IArrayRefNode
  | IAssignmentNode
  | IBinaryOpNode
  | IBreakNode
  | ICaseNode
  | ICastNode
  | ICompoundNode
  | ICompoundLiteralNode
  | IConstantNode
  | IContinueNode
  | IDeclNode
  | IDeclListNode
  | IDefaultNode
  | IDoWhileNode
  | IEllipsisParamNode
  | IEmptyStatementNode
  | IEnumNode
  | IEnumeratorNode
  | IEnumeratorListNode
  | IExprListNode
  | IFileASTNode
  | IForNode
  | IFuncCallNode
  | IFuncDeclNode
  | IFuncDefNode
  | IGotoNode
  | IIDNode
  | IIdentifierTypeNode
  | IIfNode
  | IInitListNode
  | ILabelNode
  | INamedInitializerNode
  | IParamListNode
  | IPtrDeclNode
  | IReturnNode
  | IStructNode
  | IStructRefNode
  | ISwitchNode
  | ITernaryOpNode
  | ITypeDeclNode
  | ITypedefNode
  | ITypenameNode
  | IUnaryOpNode
  | IUnionNode
  | IWhileNode
  | IPragmaNode;

export type INodeType =
  | 'ArrayDecl'
  | 'ArrayRef'
  | 'Assignment'
  | 'BinaryOp'
  | 'Break'
  | 'Case'
  | 'Cast'
  | 'Compound'
  | 'CompoundLiteral'
  | 'Constant'
  | 'Continue'
  | 'Decl'
  | 'DeclList'
  | 'Default'
  | 'DoWhile'
  | 'EllipsisParam'
  | 'EmptyStatement'
  | 'Enum'
  | 'Enumerator'
  | 'EnumeratorList'
  | 'ExprList'
  | 'FileAST'
  | 'For'
  | 'FuncCall'
  | 'FuncDecl'
  | 'FuncDef'
  | 'Goto'
  | 'ID'
  | 'IdentifierType'
  | 'If'
  | 'InitList'
  | 'Label'
  | 'NamedInitializer'
  | 'ParamList'
  | 'PtrDecl'
  | 'Return'
  | 'Struct'
  | 'StructRef'
  | 'Switch'
  | 'TernaryOp'
  | 'TypeDecl'
  | 'Typedef'
  | 'Typename'
  | 'UnaryOp'
  | 'Union'
  | 'While'
  | 'Pragma';
