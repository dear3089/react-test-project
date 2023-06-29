import logo from './logo.svg';
import './App.css';
import Transection from './Components/Transection';
import './Components/App.css'


// const Title = () => <h1>แอปบัญชีรายรับ - รายจ่าย</h1>


function App() {
  const design = {color:'red', textAlign:"center", fontSize:"1.5rem"}
  return (
    <div className='container'>
      {/* <h1 style = {{color:'red', textAlign:"center", fontSize:"1.5 rem"}}>แอปบัญชีรายรับ - รายจ่าย</h1> */}
      <h1 style = {design}>แอปบัญชีรายรับ - รายจ่าย</h1>
      <Transection/>
    </div>
  );
}

export default App;
