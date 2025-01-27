import {useEffect, useState} from "react";


export const UseWindowSize = () => {
    const [windowSize, setWindowSize] = useState([0,0]);
    useEffect(() => {

        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        }


        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    } , []);

    return {
        width: windowSize[0],
        height: windowSize[1]
    };
}