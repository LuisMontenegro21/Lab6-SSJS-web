const express = require('express')
const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const swaggerDefinition = require('./swaggerDefinition')
const cors = require('cors')
const app = express()
const port = 3000


const options  = {
    swaggerDefinition,
    apis: ['./design/*.js']
}

const corsOptions = {
    origin: true, 
    credentials: true,
    optionSuccessStatus: 200
}

const swaggerSpec = swaggerJSDoc(options)


// configurar el uso de Swageger, Cors y Express
app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// get posts
app.get('/posts', (req, res) => {
  res.status(200).json(posts)
})

// get posts id
app.get('/posts/:postId', cors(corsOptions), (req, res) => {
    const { postId } = req.params
    const post = posts.find(p => p.id === parseInt(postId))
    if (post) {
        res.status(200).json(post)
    } 
    else{
        res.status(400).send('Error: Post not found')
    }
})


 
// post posts
app.post('/posts', (req, res) => {
    const { title, content } = req.body
    const newPost = { id: posts.length + 1, title, content}
    posts.push(newPost)
    res.status(200).json(newPost)
})

// put posts id
app.put('/posts/:postId', (req, res) => {
    const { postId } = req.params
    const { title, content } = req.body
    const postIndex = posts.findIndex(p => p.id === parseInt(postId))
    if (postIndex > -1){
        const updatedPost = { id: parseInt(postId), title, content}
        posts[postIndex] = updatedPost
        res.status(200).json(updatedPost)
    }
    else{
        res.status(400).send('Error: Post not found')
    }
})

// delete posts id
app.delete('/posts/:postId', cors(corsOptions), (req, res) =>{
    const { postId } = req.params
    posts = posts.filter(p => p.id !== parseInt(postId))
    res.status(204).send()
})


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
