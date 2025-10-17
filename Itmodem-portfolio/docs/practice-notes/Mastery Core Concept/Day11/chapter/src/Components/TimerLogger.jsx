import React, { useEffect } from 'react'

const TimerLogger = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer is runing....");
        }, 1000);

        return () => {
            console.log("Timer Cleared")
            clearInterval(timer);
        }
    }, []);
    return (
        <div>
            <h2>Timer runing... (Check console)</h2>
        </div>
    )
}

export default TimerLogger
