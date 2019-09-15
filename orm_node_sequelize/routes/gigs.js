const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');

// Get gig list
router.get('/', (req, res) =>
  Gig.findAll()
    .then(gigs => {
      res.json(gigs);
      console.log(gigs);
     // res.sendStatus(200);
    })
    .catch(err => console.log(err))
);

// Add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'Simple Wordpress website',
    technologies: 'wordpress, php html, css',
    budget: '$1000',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sollicitudin tellus lacus, sed maximus orci vehicula eget. Nullam non nunc mi. In hac habitasse platea dictumst. Morbi nec leo ac dui laoreet porttitor.',
    contact_email: 'user2@gmail.com'
  };

  let { title, technologies, budget, description, contact_email } = data;

  // Insert into table
  Gig.create({
    title,
    technologies,
    description,
    budget,
    contact_email
  })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports = router;
