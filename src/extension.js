const vscode = require('vscode');

function activate(context) {
  let provider = vscode.languages.registerCompletionItemProvider('ncl', {
    provideCompletionItems(document, position) {
      const completionItems = [];

      // Provide "module" snippet
      const moduleCompletion = new vscode.CompletionItem('module');
      moduleCompletion.insertText = new vscode.SnippetString('module ${1:moduleName} {\n\t${2:node}\n}');
      moduleCompletion.documentation = new vscode.MarkdownString('Insert a module block');
      completionItems.push(moduleCompletion);

      // Provide "rule" snippet
      const ruleCompletion = new vscode.CompletionItem('rule');
      ruleCompletion.insertText = new vscode.SnippetString('rule ${1:ruleName} {\n\t${2:selectors}\n}');
      ruleCompletion.documentation = new vscode.MarkdownString('Insert a rule block');
      completionItems.push(ruleCompletion);

      // Provide "when/then" snippet with JavaScript support
      const whenCompletion = new vscode.CompletionItem('when');
      whenCompletion.insertText = new vscode.SnippetString(
        'when ${1:condition} then\n\t${2:// JavaScript logic}\n\t${3:console.log("Condition met");}\nend'
      );
      whenCompletion.documentation = new vscode.MarkdownString('Insert a when/then block with JavaScript');
      completionItems.push(whenCompletion);

      // Provide "composition" snippet
      const composeCompletion = new vscode.CompletionItem('compose');
      composeCompletion.insertText = new vscode.SnippetString('compose ${1:compositionName} {\n\t${2:compositionRules}\n}');
      composeCompletion.documentation = new vscode.MarkdownString('Insert a composition block');
      completionItems.push(composeCompletion);

      // Provide "import" snippet
      const importCompletion = new vscode.CompletionItem('import');
      importCompletion.insertText = new vscode.SnippetString('import ${1:moduleName}');
      importCompletion.documentation = new vscode.MarkdownString('Insert a module import');
      completionItems.push(importCompletion);

      return completionItems;
    }
  });

  context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
