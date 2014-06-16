var path = require('path');
var rootPath = path.normalize(__dirname+'/..');

module.exports={
	development: {
    db: 'mongodb://localhost/qa_dev',
    root: rootPath,
    app: {
      name: 'Questions'
    }
},
test: {
    db: 'mongodb://localhost/qa_dev',
    root: rootPath,
    app: {
      name: 'Questions'
    }
},
production: {
    db: 'mongodb://localhost/qa_dev',
    root: rootPath,
    app: {
      name: 'Questions'
    }
}

}