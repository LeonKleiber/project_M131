import './App.css';
import Menu from './Components/Menu';
import TimeTable from './Components/TimeTable';

const App = () => {
  return (
    <div className="Wrapper">
      <Content />
    </div>
  );
}

const Content = () => {
  return (
    <>
      <Menu />
      <TimeTable />
    </>

  )
}

export default App;
