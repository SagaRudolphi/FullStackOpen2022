const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

beforeEach(async () => {
    await Blog.deleteMany({})

    let blogObject = new Blog(helper.initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(helper.initialBlogs[1])
    await blogObject.save() 
})

test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(initialBlogs.length)
}, 100000)

test('add new valid blog', async () => {
    const newBlog = {
        title: "Canonical string reduction",
        author: "Edsger W. Dijkstra",
        url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
        likes: 12
      } 

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)


    const response = await api.get('/api/blogs')
    const allBlogs = response.body.map(r => r.title)

    expect(response.body).toHaveLength(initialBlogs.length + 1)
    expect(allBlogs).toContain('Canonical string reduction')

}, 100000)

test('delete a blog', async () => {
    const blogsFromStart = await helper.blogsInDb()
    const blogToRemove = blogsFromStart[0]
    
    await api
        .delete(`/api/blogs/${blogToRemove._id}`)
        .expect(204)

    const blogsAfterDelete = await helper.blogsInDb()
    
    expect(blogsAfterDelete).toHaveLength(helper.initialBlogs.length - 1 )

    const contents = blogsAfterDelete.map(r => r.title)

    expect(contents).not.toContain(blogToRemove.title)
})

afterAll(() => {
  mongoose.connection.close()
})

