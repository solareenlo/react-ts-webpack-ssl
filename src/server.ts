import * as Express from 'express';
import sampleController from './controllers/sampleController';

const app = Express();

app.get('/', sampleController);

app.listen(process.env.PORT || 3000, () => {
    console.log('Express app listening on port 3000!');
});
