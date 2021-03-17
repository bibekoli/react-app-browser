SystemJS.config({
  baseURL:'/libs/',
  defaultExtension: true,
  packages:{
    "/": "js"
  },
  meta: {
    '*.js': {
      'babelOptions': {
        react: true
      }
    },
    '*.css': {
      loader: 'css'
    },
    '*.jpg': {
      loader: 'image'
    },
  },
  map: {
    'plugin-babel': 'plugin-babel.js',
    'systemjs-babel-build': 'systemjs-babel-browser.js',
    'react': 'react.js',
    'react-dom': 'react-dom.js',
    'css': 'css-loader.js',
    'image': 'image-loader.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('/index.js')
  .catch(console.error.bind(console));