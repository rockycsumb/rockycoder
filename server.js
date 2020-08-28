var sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// enable ssl redirect
app.use(sslRedirect());

//before deploy to heroku notes
// commented out app.get (below), and added //Serve static assets, also added const path = require('path)
// added this to package.json in scripts> underneath dev, "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix client && npm run build --prefix client"

app.use(express.json({extended: false}));
app.use(cors({origin: 'https://mernstack-shrnureact.run-us-west2.goorm.io'}))
// app.get('/', (req, res)=>res.send('API Running'));

app.post('/plaidApply', async (req, res) => {
	console.log("res ", req.body);
	try {
		res.send("hello ");
	} catch(err){
		console.error(err.message);
		res.status(500).send("Server Error");
	}
})

//Serve static assets in production
if(process.env.NODE_ENV === 'production'){
   //Set Static folder
	app.use(express.static('client/build'));
	app.get('*', (req, res)=>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));
