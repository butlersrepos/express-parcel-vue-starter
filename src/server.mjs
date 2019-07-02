import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('./src/dist'));

app.get('/', (req, res) => res.sendFile('/index.html'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
