/* eslint no-console: 0 */

const path = require('path');
const express = require('express');
const webpack = require('webpack');
var helmet = require('helmet');

const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const root = path.normalize(__dirname); 


const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();


if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });


  app.use(middleware);
  app.use(helmet());
  app.use(express.static(root));

  app.use(webpackHotMiddleware(compiler));
  /*app.get('/', function response(req, res) {
    
  });*/

  // Always return the main index.html, so react-router render the route in the client
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });
  app.use(helmet()); 

} else {
  app.use(express.static(root));
  app.use(helmet());
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });
  
}


app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

/*
app.listen(80, function() {
  console.log('server started on port 80');
});
*/

