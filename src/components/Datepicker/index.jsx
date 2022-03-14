import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';

import { Card } from '@material-ui/core';

export default function DatePicker() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2020-08-18')
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Card className="rounded w-100 shadow-xxl bg-white my-5 p-5">
        <div className="d-flex align-items-center justify-content-center flex-wrap">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className="m-4">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </div>
          </MuiPickersUtilsProvider>
        </div>
      </Card>
    </>
  );
}
