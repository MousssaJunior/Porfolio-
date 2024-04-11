import { useEffect, useRef,useState } from "react";

export function Typing(TextTotype,
    interKeyStrokeDurationInMs) {

    const [currentPosition, setcurrentPosition] = useState(0);
    const currentPositionRef = useRef();
    useEffect(() => {
      const intervalId =  setInterval(() => {
        console.log("interval");
            setcurrentPosition((value) => value + 1);
            currentPositionRef.current += 1;
            if(currentPositionRef.current > TextTotype.length){
                clearInterval(intervalId);
            }
        }, interKeyStrokeDurationInMs);
        return () =>{
         clearInterval(intervalId);
         currentPositionRef.current = 0;
         setcurrentPosition(0)
        }
    }, [interKeyStrokeDurationInMs,TextTotype]);
    return TextTotype.substring(0, currentPosition);
}

