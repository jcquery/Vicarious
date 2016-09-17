'use strict';

const express = require('express');
const boom = require('boom');
const knex = require('../knex');
const { checkAuth } = require('./middleware');
const bcrypt = require('bcrypt-as-promised');
const { camelizeKeys, decamelizeKeys } = require('humps');

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/users', (req, res, next) => {
  const { email, password } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((exists) => {
      if (exists) {
        throw boom.create(400, 'Email already exists.');
      }

      return bcrypt.hash(password, 12);
    })
    .then((hashedPassword) => {
      const newUser = { email, hashedPassword };
      const row = decamelizeKeys(newUser);

      return knex('users')
        .insert(row, '*');
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      next(err);
    });
});

router.get('/users/favorites', checkAuth, (req, res, next) => {
  knex('favorites')
    .innerJoin('users_favorites', 'favorite_id', 'favorites.id')
    .where('user_id', req.token.userId)
    .then((response) => {
      res.send(camelizeKeys(response));
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
