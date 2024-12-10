export default function StudentList(props) {
  // pull out individual props by name with destructing
  const {title, listData} = props

  // js functions and computations live before the return statement

  // always return JSX, one parent top level component
  return (
    <>
      <div>
        <h2>{title}</h2>
      </div>
      {/* Mapping functions are like a for loop that returns JSX with some JS values within */}
      {listData.map((item) => {
        return (
          <div>
            {item.name}'s grade is {item.grade}
          </div>
        )
      })}
    </>
  )
}
