import { useDispatch } from 'react-redux';
import { incrementNum, decrementNum, setText, resetNum, incrementNum5, decrementNum5 } from './redux/reducer';


const Btn = () => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>{
                dispatch(setText('Hello Geeks!'))
            }}>change</button>
            <button onClick={()=>{
                dispatch(incrementNum())
            }}>+1</button>
            <button onClick={()=>{
                dispatch(decrementNum())
            }}>-1</button>
            <button onClick={()=>{
                dispatch(resetNum())
            }}>Reset</button>
            <button onClick={()=>{
                dispatch(incrementNum5())
            }}>+5</button>
            <button onClick={()=>{
                dispatch(decrementNum5())
            }}>-5</button>
        </div>
    );
}

export default Btn;
