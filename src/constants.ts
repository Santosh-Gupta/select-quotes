import { Selection, Position, TextEditorSelectionChangeEvent, TextEditorSelectionChangeKind } from 'vscode';

export const SELECT_QUOTES_COMMAND_ID = "select-quotes";

export const DOUBLE_QUOTE = "\"";
export const SINGLE_QUOTE = "'";
export const LEFT_BRACKET = "(";
export const RIGHT_BRACKET = ")";

export const DEFAULT_POSITION:  Position  = new Position(0,0);
export const DEFAULT_SELECTION: Selection = new Selection(DEFAULT_POSITION, DEFAULT_POSITION);

export const isQuote = (c: string) => c === DOUBLE_QUOTE || c === SINGLE_QUOTE || c === LEFT_BRACKET || c === RIGHT_BRACKET; 

export const isMouseEvent             = (e: TextEditorSelectionChangeEvent) => e.kind === TextEditorSelectionChangeKind.Mouse;
export const isOnlyOneActiveSelection = (e: TextEditorSelectionChangeEvent) => e.selections.length === 1;

export const isDefaultPosition = (p: Position) => p === DEFAULT_POSITION;

export const isActualSelection     = (s: Selection) => s.start.character !== s.end.character;
export const isDefaultSelection    = (s: Selection) => s === DEFAULT_SELECTION;
export const isSelectionOnOneLine  = (s: Selection) => s.start.line === s.end.line;

