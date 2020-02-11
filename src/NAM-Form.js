import React from 'react';
import { DatePicker } from 'fundamental-react/DatePicker';
import { TimePicker } from 'fundamental-react/TimePicker';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';
import { InlineHelp } from 'fundamental-react/InlineHelp';
import { FormSet, FormItem, FormLabel, FormSelect } from 'fundamental-react/Forms';


function _getTomorrowDate() {
  const today = new Date();
  var tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
}

function NAMForm() {
  return(
    <div>
      <FormSet>
      <FormItem>
        <FormLabel>
          NAM Type: 
        </FormLabel>
        <FormSelect id="select-1">
          <option value="ADM">ADM-Administration</option>
          <option value="BGA">BGA-Below Ground Assets</option>
          <option value="DCP">DCP-Dwr Cymru Projects</option>
          <option value="HAS">HAS-Health and Safety</option>
          <option value="LIU">LIU-Lieu Time</option>
        </FormSelect>
      </FormItem>
      
      <FormItem>
        <FormLabel>
          Date: 
          <InlineHelp
            className="fd-has-float-right zindex-2"
            placement="bottom-left"
            text="You can only book NAM time for today and tomorrow." />
        </FormLabel>
        <DatePicker
          className="span-width"
          disableAfterDate={_getTomorrowDate()}
          disablePastDates="true" />
      </FormItem>

      <LayoutGrid cols={2} className="buff-bot">
      <FormItem>
        <FormLabel>
          Work Start: 
        </FormLabel>
        <TimePicker showSecond={false} />
      </FormItem>
      <FormItem>
        <FormLabel>
          Work End: 
        </FormLabel>
        <TimePicker showSecond={false} />
      </FormItem>

      <FormItem>
        <FormLabel>
          Travel Start: 
        </FormLabel>
        <TimePicker showSecond={false} />
      </FormItem>
      <FormItem>
        <FormLabel>
          Travel End: 
        </FormLabel>
        <TimePicker showSecond={false} />
      </FormItem>
      </LayoutGrid>

    </FormSet>
  </div>
  );
}

export default NAMForm;