'use strict';

module.exports = function (app) {
  const express   = require('express');
  let usersRouter = express.Router();

  /*
    catches the Update request on a user
    PATCH "localhost:4200/api/users/1"
  */
  usersRouter.patch('/:id', function (request,res) {
    // Update data from the UI

    const userData = usersJson.data.find(user => user.id == request.params.id);
    if (!userData) return res.sendStatus(404);
    userData.attributes.archived = request.body.data.attributes.archived
    res.send();
  });

  /*
    catches the GET request on a user
    GET "localhost:4200/api/users/1"
  */
  usersRouter.get('/:id', function (request, res) {
    const user = usersJson.data.find((user)=> {
      return user.id === request.params.id;
    });

    res.send({ data: user });
  });

  /*
    catches the index request on users
    GET "localhost:4200/api/users"
  */
  usersRouter.get('/:archived?', function (req, res) {
    let result = usersJson;
    if(req.query != "" && req.query.archived != "") {
      let state = req.query.archived === "true";
      result = {data: usersJson.data.filter( user=> user.attributes.archived==state )};
    } 
    res.send(result); 
  });

  app.use('/api/users/', require('body-parser').json({ type: 'application/*+json' }), usersRouter);
};

// USER MOCK DATA
const usersJson = {
  "data": [
  {
    "id": "1",
    "type": "user",
    "attributes": {
      "name": "Albert Einstein",
      "image": "/images/Einstein.jpg",
      "value": "false",
      "archived": false,
    }
  },
  {
    "id": "2",
    "type": "user",
    "attributes": {
      "name": "Walt Disney",
      "image": "/images/Walt.jpg",
      "value": "false",
      "archived": false,
    }
  },
  {
    "id": "3",
    "type": "user",
    "attributes": {
      "name": "Bruce Lee",
      "image": "/images/Bruce.jpg",
      "value": "false",
      "archived": false,
    }
  },
  {
    "id": "4",
    "type": "user",
    "attributes": {
      "name": "Neil Armstrong",
      "image": "/images/Neil.jpg",
      "value": "false",
      "archived": false,
    }
  }
  ]
};
