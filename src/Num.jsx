import { useSelector } from 'react-redux';

const Num = () => {
    const num = useSelector((state) => state.reducer.num);
    const text = useSelector((state) => state.reducer.text);

    return (
        <div>
            <h1>{text}</h1>
            <h1>{num}</h1>
        </div>
    );
}

export default Num;
