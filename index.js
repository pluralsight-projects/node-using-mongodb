import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/productsdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {

  });
const db = mongoose.connection;
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
  console.log(`Problem connection to the database${error}`);
});
/* db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
	console.log("h");
}); */

exports.test = function (req, res) {
  res.render('test');
};

app.get('/', (req, res) => res.send(`Store server running on port ${PORT}`));

app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
