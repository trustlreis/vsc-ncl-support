const vscode = require('vscode');

function activate(context) {
  // Provide completion items for NCL language
  let provider = vscode.languages.registerCompletionItemProvider('ncl', {
    provideCompletionItems(document, position) {
      const completionItems = [];

      const whenCompletion = new vscode.CompletionItem('when');
      whenCompletion.insertText = new vscode.SnippetString('when ${1:condition} then\n\t${2:// JavaScript logic}\nend');
      whenCompletion.documentation = new vscode.MarkdownString('Insert a when/then block with JavaScript');
      completionItems.push(whenCompletion);

      return completionItems;
    }
  });

  context.subscriptions.push(provider);

  // Register a DefinitionProvider for NCL language
  let definitionProvider = vscode.languages.registerDefinitionProvider('ncl', {
    provideDefinition(document, position, token) {
      // Get the word under the cursor (the rule reference)
      const wordRange = document.getWordRangeAtPosition(position, /[a-zA-Z_][a-zA-Z0-9_]*/);
      const ruleReference = document.getText(wordRange);

      // Get the full document text
      const text = document.getText();

      // Create a more accurate regular expression to find the rule definition in the document
      const ruleDefinitionRegex = new RegExp(`^\\s*(${ruleReference})\\s*\\[`, 'gm');

      let match;
      while ((match = ruleDefinitionRegex.exec(text)) !== null) {
        const matchIndex = match.index;
        const matchedText = match[0];

        // Adjust position more accurately by trimming whitespace from the matched line
        const trimmedIndex = matchIndex + matchedText.indexOf(match[1]);

        // Get the position of the matched rule definition more accurately
        const startPos = document.positionAt(trimmedIndex);

        // Return the location with the exact starting position
        return new vscode.Location(document.uri, startPos);
      }

      return null;
    }
  });

  context.subscriptions.push(definitionProvider);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
