import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';
const DateRange = () => {

  const [selection, setSelection] = useState(
    {
        startDate: new Date(), endDate: new Date(), key:'selection'
    }
  )
  
  function handleSelect(ranges){
    setSelection({...selection,
      startDate:ranges.selection.startDate, endDate:ranges.selection.endDate})
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }

  return (
    <DateRangePicker
        ranges={[selection]}
        onChange={handleSelect}
      />
  );
};

export default DateRange;