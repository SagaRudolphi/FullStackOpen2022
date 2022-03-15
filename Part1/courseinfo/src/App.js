
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 
  
  return (
    <div>
      <Header text={course} />
      <Content part = {part1} exercise = {exercises1}/>
      <Content part = {part2} exercise = {exercises2}/>
      <Content part = {part3} exercise = {exercises3}/>
      <Total exe1 = {exercises1} exe2 = {exercises2} exe3 = {exercises3}/>
    </div>
  );
}

const Header = (props) => {
return (
  <div> 
    <h1>{props.text}</h1>
  </div>
)
}

const Content = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.exe1 + props.exe2 + props.exe3}</p>
    </div>
  )
}

export default App;
