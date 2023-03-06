
let {router} =  require('./router');
let {app} = require('./handler')
let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use('/api',router);

		
