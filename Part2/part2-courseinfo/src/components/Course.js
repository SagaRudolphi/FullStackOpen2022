import React from 'react'

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

const Header = ({ courseName }) => <h2>{courseName}</h2>

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.map(part => part.exercises).reduce((previousVal, currentVal) => previousVal + currentVal, 0)} />
    </div>
  )
}

export default Course