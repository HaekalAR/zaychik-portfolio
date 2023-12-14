import { useState, useEffect } from "react";

const Greetings = () => {
    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 5 && currentHour < 12) {
            setTimeOfDay('Morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setTimeOfDay('Afternoon');
        } else {
            setTimeOfDay('Evening');
        }
    }, []);

    return <div>Good {timeOfDay}! &nbsp; </div>
};

export default Greetings