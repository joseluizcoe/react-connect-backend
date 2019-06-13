const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (request, response) => {

  const resposta = [
    {
      name: {
        common: "Aruba",
      }
    },
    {
      name: {
        common: "Sany",
      }
    }
  ];

  response.send(resposta);

});

app.listen(3001, (error) => {
  if (error) {
    console.log('error', error);
    return;
  } 
  console.log('Listening on port 3000');
});