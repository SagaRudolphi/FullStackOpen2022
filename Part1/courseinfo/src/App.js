
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentas of React', 
        exercises: 10
      }, 
      {
        name: 'Using props to pass data', 
        exercises: 7
      },
      {
        name: 'State of a component', 
        exercises: 14
      }
    ]
  } 

  
  return (
    <div>
      <Header text={course.name} />
      <Content parts = {course.parts} />
      <Total exercises = {course.parts}/>
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
  
 let allparts = [] 

 props.parts.forEach(element => {
    console.log(<Part name = {element.name} exercises = {element.exercises}/>)
    allparts.push(<Part name = {element.name} exercises = {element.exercises}/>)
  });

  return(
    <div>
      {allparts}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )             
}


const Total = (props) => {
  
  console.log(props)
  
  let tot = 0

  props.exercises.forEach(element => {
   tot += element.exercises
  } )

  return (
    <div>
      <p>Number of exercises: {tot}</p>
    </div>
  )
}

export default App;
