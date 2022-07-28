import { React , useState , useEffect } from "react";

const DateNow = () => {

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
  "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const [date, setDate] = useState(new DateNow());

    useEffect(() => {
        var timerID = setInterval( () =>setDate(new DateNow()), 1000 );
        return function cleanup() {
            clearInterval(timerID);
          };
       });
     return (
          <div>
          {days[date.getDay()]}&nbsp;
          {date.getDate()}&nbsp;
          {monthNames[date.getMonth()]}&nbsp;
          {date.getFullYear()}
          </div>
        
      );
  }

  export default DateNow