//Load the library and specify options
const replace = require('replace-in-file');
const options = {
  files: 'statics/index.html',
  from: [/MARKET/g, /CATALOGID/g],
  to: ['de', '1afcaa70-c578-4c2e-b7e4-2d341b04ed4f'], 
};

replace(options)
  .then(results => {
    console.log('Replacement results:', results);
  })
  .catch(error => {
    console.error('Error occurred:', error);
  });