const blogsRouter = require('../controllers/blogs')

const dummy = (blogs) => {
    return 1
  }

  const totalLikes = (blogs) => {
    if (blogs.length === 0) {
        return null
    }
    else{
    const allLikes = blogs.map(blog => blog['likes'])
    const totalLikes = allLikes.reduce((previousVal, currentVal) => previousVal + currentVal, 0)
    return totalLikes}
  }
  
  
  module.exports = {
    dummy,
    totalLikes
  }