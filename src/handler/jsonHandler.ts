import {
  workspace,
  window,
  TextEditor,
  TextDocument,
  ViewColumn
} from 'vscode';

type command = 'format' | 'minify' | 'stringify' | 'parse';

export const jsonHandler: (command: command) => (textEditor: TextEditor) => void = (command) => (textEditor) => {
  let selectedText = textEditor.document.getText(textEditor.selection);
  if (!selectedText) {
    return;
  }
  let content;
  if (command === 'format') {
    content = JSON.stringify(JSON.parse(selectedText), null, 2);
  } else if (command === 'minify') {
    content = JSON.stringify(JSON.parse(selectedText), null, 0);
  } else if (command === 'stringify') {
    content = JSON.stringify(selectedText.trim());
  } else if (command === 'parse') {
    content = JSON.parse(selectedText);
  }
  workspace.openTextDocument({
    content: content,
    language: "text"
  }).then((doc: TextDocument) => {
    window.showTextDocument(doc, ViewColumn.Beside, true);
  });
};