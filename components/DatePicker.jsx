import TextField from '@material-ui/core/TextField';
import DateTimePicker from '@material-ui/lab/DateTimePicker';
import { useEffect, useState } from 'react';



export default function DatePicker() {
  const [date, setDate] = useState(null)
  const handleDateChange = (newDate) => {
    setDate(newDate);
    window.localStorage.setItem('Date', newDate)
  }

  useEffect(()=>{
      setDate(window.localStorage.getItem('Date') || new Date())
  },[])

  return (

      <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Waiting for"
        value={date}
        onChange={handleDateChange}
        minDate={new Date()}
      />
  );
}