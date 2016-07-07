const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Root
router.get('/', (req, res) => {
    res.status(200).json(
        {
            api_version: 'v1.0.0', 
            posts: '/posts'
        });
})

// INDEX '/'
router.get('/posts', (req, res) => {
    res.status(200).json({results: ['posts1', 'posts2']})
})

// Show action
router.get('/posts/:id', (req, res) => {
    res.status(200).json({ results: `posts${req.params.id}` })
})

// Create action
router.post('/posts/', (req, res) => {
    console.log(req.body)
    res.status(201).json({ message: 'Posts created',
        title: req.body.title
    })
})

// Update
router.put('/posts/:id', (req, res) => {
    res.status(200).json({ message: `posts${req.params.id} updated` })
})

// New action
// Edit
// Update
// Delete/Destroy

module.exports = router