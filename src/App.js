import {useState,useEffect,useRef} from 'react';
import './App.css';
import PointsInput from './Components/PointsInput';
import Window from './Components/Window';


function App() {
  const [points,setPoints]=useState(0)
  const [max, setMax] = useState(1)
  const pointsInput = useRef();
  const maxInput = useRef();

  useEffect(() => {
    if(points>max){setMax(points); maxInput.current.value=max;}
  }, [points])

  function checkResult(result){
    let note=2;
    if(result>=0.5)note+=1;
    if(result>=0.7)note+=1;
    if(result>=0.85)note+=1;
    return note;
 }
  function calculateGrade(){
    let result = points/max;
    let note = checkResult(result)
    alert(`Student's note: ${note} (${Math.floor(result*100)}%)`);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-sky-900">
      <Window>
        <form action='#' onSubmit={(e)=>{e.preventDefault();calculateGrade();}} className='p-2 flex flex-col justify-center w-full h-full'>
        <h1 className='text-5xl'>Grade calculator</h1>
        <PointsInput id='points' reff={pointsInput} placeholder={"Points"} min={0} max={max} value={points} onChange={(e)=>setPoints(+e.target.value)}/>    
        <PointsInput id='max' reff={maxInput} placeholder={"Max"} min={1} value={max} onChange={(e)=>setMax(+e.target.value)}/>
        <button className='text-gray-50 bg-green-700 text-4xl self-center w-1/2 p-2 hover:bg-green-500' style={{'transition':'1.5s'}}>Calculate the grade</button>
        </form>
      </Window>      
    </div>

  );
}

export default App;
