var path = require('path');
var SRC_DIR = path.join(__dirname, '/client');
var DIST_DIR = path.join(__dirname, '/client/dist');
module.exports = {  
  entry: `${SRC_DIR}/app`,
  output: { 
   filename: 'bundle.js',
   path: DIST_DIR  
  }, 
  module : {    
    loaders : [
      { test : /\.jsx?$/, 
        include : SRC_DIR, 
        exclude: /node_modules/,
        loader : 'babel-loader', 
        query: {
          presets: ['react', 'es2015', 'stage-0']        
        }      
      },
      { test: /\.css$/, 
        loader: 'style-loader!css-loader'
      }   
    ]  
  }
};
