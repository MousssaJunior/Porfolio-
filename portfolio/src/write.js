import { useEffect, useRef, useState } from "react";

export function Typing(TextToType, interKeyStrokeDurationInMs) {
    const [currentPosition, setcurrentPosition] = useState(0);
    const currentPositionRef = useRef();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setcurrentPosition((value) => {
                const nextPosition = value + 1;
               
                if (nextPosition > TextToType.length) {
                    return 0;
                }
                return nextPosition;
            });
        }, interKeyStrokeDurationInMs);

        return () => clearInterval(intervalId);
    }, [interKeyStrokeDurationInMs, TextToType]);

    return TextToType.substring(0, currentPosition);
}
