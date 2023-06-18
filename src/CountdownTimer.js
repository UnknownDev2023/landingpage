import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({ deadline = new Date().toString() }) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState(parsedDeadline - Date.now());

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, [parsedDeadline]);

    return (
        <div style={{paddingTop: "12px"}} className="timer">
            <div className="row">
            {Object.entries({
                Days: time / DAY,
                Hours: (time / HOUR) % 24,
                Minutes: (time / MINUTE) % 60,
                Seconds: (time / SECOND) % 60,
            }).map(([label, value]) => (
                
                <div style={{flex: "0 0 0", marginLeft: "auto", marginRight:"auto"}} key={label} className="col-sm">
                    <div className="box">
                        <p style={{margin:"0 0 0", fontSize:"30px", fontWeight:"700"}}>{`${Math.floor(value)}`.padStart(2, "0")}</p>
                        <span className="text">{label}</span>
                    </div>
                </div>
                
            ))}
            </div>
        </div>
    );
};
export default (Timer);