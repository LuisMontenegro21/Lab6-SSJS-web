const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// get posts
app.get('/posts', (req, res) => {
  res.status(200).json(posts)
})

// get posts id
app.get('/posts/:postId', (req, res) => {
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
app.delete('/posts/:postId', (req, res) =>{
    const { postId } = req.params
    posts = posts.filter(p => p.id !== parseInt(postId))
    res.status(204).send()
})


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
