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
    'react': 'react.production.min.js',
    'react-dom': 'react-dom.production.min.js',
    'css': 'css.js'
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('/index.js')
  .catch(console.error.bind(console));