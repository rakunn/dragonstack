const app = require('../app');

app.listen(process.env.PORT, () => console.log('serving app on ' + process.env.PORT));