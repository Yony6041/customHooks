import { useState, useEffect} from 'react';
//Start with use always
//true is the inicial value
const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards){
                setCounter ((prevCounter) => prevCounter + 1);
            } else {
                setCounter ((prevCounter) => prevCounter - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [forwards]);
    return counter;
};


export default useCounter;