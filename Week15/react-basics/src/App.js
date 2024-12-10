import StudentList from './components/StudentList'

const students = [
  {name: 'Katie', grade: 'A+++'},
  {name: 'Mark', grade: 'F'},
  {name: 'Tony', grade: 'B+'},
]

const otherStudents = [
  {name: 'Bob', grade: 'C'},
  {name: 'Karen', grade: 'A-'},
]

function App() {
  return (
    <div>
      <StudentList title="Hello Props" listData={students} />
      <StudentList
        title="Second use of this component"
        listData={otherStudents}
      />
    </div>
  )
}

export default App
