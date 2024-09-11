# NCL Language Support for Visual Studio Code

This Visual Studio Code extension adds syntax highlighting, snippets, and basic IntelliSense support for the **NCL** language, as used in the [NCL repository by Trustly](https://github.com/TrustlyInc/ncl).

## Features

- Syntax highlighting for `.ncl` files
- Auto-completion of key NCL constructs: `module`, `rule`, `selector`, `when`, `then`, `else`, `compose`, `import`, etc.
- Support for defining **Modules**, **Rules**, **Selectors**, **Declaration Blocks**, **Composition Blocks**, **Module Imports**, and **Nested Rules**
- Special support for `when/then` blocks containing **JavaScript** logic
- Bracket matching for `{}`, `[]`, and `()`
- Comment support for single-line `#` and block comments `/* ... */`

## Project Structure

Here is the structure of the Visual Studio Code extension project:

```
ncl-vscode-extension/
├── .gitignore
├── package.json
├── syntaxes/
│   ├── ncl.tmLanguage.json
├── language-configuration.json
├── src/
│   ├── extension.js
```

### File Descriptions

1. **`.gitignore`**: Specifies which files and directories to ignore in the Git repository. This includes `node_modules`, build directories (`out/`, `dist/`), VS Code settings (`.vscode/`), and other temporary files.
   
2. **`package.json`**: The main configuration file for your VS Code extension. It defines metadata (such as name, description, and version), dependencies, and contribution points (e.g., languages and grammars).

3. **`syntaxes/ncl.tmLanguage.json`**: This file defines the **TextMate grammar** for NCL. It handles syntax highlighting by defining patterns for keywords, operators, comments, and specific NCL blocks (like `when/then` with JavaScript embedded).

4. **`language-configuration.json`**: Configures the language-specific settings such as comment styles, auto-closing pairs for brackets, and bracket matching.

5. **`src/extension.js`**: The main JavaScript file for your extension. It defines the **auto-completion** logic for NCL constructs (e.g., `module`, `rule`, `when/then`) and registers the extension with VS Code's API.

## Installation and Setup

### Clone the Repository

To get started, you need to clone the repository from GitHub and set up the extension in your local Visual Studio Code environment:

1. Clone the repository:
   ```bash
   git clone https://github.com/trustlreis/vsc-ncl-support.git
   ```

2. Navigate to the project directory:
   ```bash
   cd vsc-ncl-support
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Open the project in Visual Studio Code:
   ```bash
   code .
   ```

5. Press `F5` to launch the extension in a new VS Code window for testing.

### Building and Packaging the Extension

To build and package the extension for distribution, follow these steps:

1. Install `vsce` (Visual Studio Code Extension Manager), which is required to package the extension:
   ```bash
   npm install vsce --save-dev
   ```

2. Once `vsce` is installed, you can run the following command to package the extension:
   ```bash
   npm run build
   ```

   This will create a `.vsix` file in the current directory. This file can be installed locally or published to the Visual Studio Code Marketplace.

### Installing the Extension Locally

To test the packaged extension locally:

1. Open Visual Studio Code.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) to open the command palette.
3. Type `Extensions: Install from VSIX...` and select it.
4. Navigate to the `.vsix` file you packaged and install it.

## Usage

### Syntax Highlighting

This extension automatically highlights NCL-specific keywords, operators, comments, modules, nodes, rules, selectors, and more. JavaScript inside `when/then` blocks will also be highlighted and auto-completed.

### Auto-Completion

The extension provides completion for:
- **Modules** (`module`)
- **Rules** (`rule`)
- **Selectors** (`selector`)
- **When/Then blocks** with embedded **JavaScript**
- **Composition Blocks** (`compose`)
- **Module Imports** (`import`)

### Bracket Matching

Auto-closing and matching is supported for `{}`, `[]`, and `()` brackets.

### Comment Support

- **Single-line comments** use `#`
- **Block comments** use `/* ... */`

## Development

To contribute or modify the extension:

1. Fork the repository and clone it locally.
2. Make your changes in the relevant files (`src/extension.js`, `syntaxes/ncl.tmLanguage.json`, etc.).
3. Use the following command to build and test the extension:
   ```bash
   npm run build
   ```

## Future Plans

- Add advanced IntelliSense for NCL functions and attributes
- Provide linter support for NCL syntax
- Enable debugging support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

Special thanks to [Trustly's NCL repository](https://github.com/TrustlyInc/ncl) for the inspiration and documentation.

For the source code of this Visual Studio Code extension, visit [vsc-ncl-support on GitHub](https://github.com/trustlreis/vsc-ncl-support).
