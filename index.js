import *as dotenv from 'dotenv'
import express from 'express';
import router from './app/router.js';


const app = express();
const port = process.env.PORT || 3001;
dotenv.config();
app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(router)

app.use(function(req,res){
    res.status(404).render("error" ,{
      message: 'La page demandée n\'a pas pu être trouvée'
    });
  })

  app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
  });