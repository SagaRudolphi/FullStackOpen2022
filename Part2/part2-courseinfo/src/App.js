
const Course = ({ courses }) => {
  return (
    courses.map(course =>
      <div key = {course.id}>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total sum={course.parts.map(part => part.exercises).reduce((previousVal, currentVal) => previousVal + currentVal, 0)} />
      </div>
    )
  )
}

const Header = ({ course }) => <h2>{course.name}</h2>

const Total = ({ sum }) => <b>Number of exercises {sum}</b>

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />)}
  </>

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
}

export default App