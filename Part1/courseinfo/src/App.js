

const Header = ({text}) => {

  return (
  <div> 
    <h1>{text}</h1>
  </div>
)
}

const Content = ({parts}) => {
  
 let allparts = [] 

 parts.forEach(element => {
    console.log(<Part name = {element.name} exercises = {element.exercises}/>)
    allparts.push(<Part name = {element.name} exercises = {element.exercises}/>)
  });

  return(
    <div>
      {allparts}
    </div>
  )
}

const Part = ({name, exercises}) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )             
}


const Total = ({exercises}) => {
  
  console.log(exercises)
  
  let tot = 0

  exercises.forEach(element => {
   tot += element.exercises
  } )

  return (
    <div>
      <p>Number of exercises: {tot}</p>
    </div>
  )
}

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


export default App;
