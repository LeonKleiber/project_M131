import { useState, useEffect } from 'react'
import Menu from './Components/Menu'
import Schedule from './Components/Schedule'
import { motion } from "framer-motion"
import { useIsMount } from './Helper/useIsMount';


const App = () => {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }

  // state Object for ClassId to send it to the Table 
  // Default: Local Storage or 0
  const [classId, setClassId] = useState(parseInt(localStorage.getItem('class')) || -1)
  const isMount = useIsMount();

  useEffect(() => {
    //saves ClassId in Local Storge if it changes except for the first render
    if (!isMount) {
      localStorage.setItem('class', classId)
    }
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [classId]
  )
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className="Wrapper">
      {/* includes Title and Dropdowns */}
      <Menu classId={classId} setClassId={setClassId} />
      {/* includes Table and Week changer */}
      <Schedule classId={classId} />
    </motion.div>
  )
}

export default App;
