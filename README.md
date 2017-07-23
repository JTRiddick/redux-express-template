# redux-express-template
Simple starter for isomorphic Redux on Express 5 with React-Router 4

Based on a Universal JS example application by [Luciano Mammino](https://github.com/lmammino)

Start from run-server.js until issues with babel and webpack settings are cleared up.
EsLint settings and plugins are here

Might take the Scormblr test blog stuff out, this thing is already too big.
Shouldn't need Redux middlewares so the test action should be rewritten.

This is still incomplete
-----------------------
Untested:
- rendering from data folder
- redux on the server
- my understanding of css modules

Fix:
- eslint
- why run-server.js is necessary
- babel configuration is all over the place
- superfluous npm packages
- using as template throws npm install error for babel-preset-react-app


Add:
- hot module loading and replacement
- postCss loader (with autoprefixer plugin)
- dedupe plugin
- commonsChunk plugin
