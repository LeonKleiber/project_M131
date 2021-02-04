import { useState } from 'react'
import Menu from './Components/Menu';
import Schedule from './Components/Schedule';

const App = () => {
  const [classId, setClassId] = useState(localStorage.getItem('class') || 0)
  return (
    <div className="Wrapper">
      <Menu classId={classId} setClassId={(id) => {
        setClassId(id)
        localStorage.setItem('class', id)
      }} />
      <Schedule classId={classId} />
    </div>
  )
}

export default App;
