import React from 'react';
import { ActionBar } from 'fundamental-react/ActionBar';
import { Button } from 'fundamental-react/Button';
import { Modal } from 'fundamental-react/Modal';
import { DatePicker } from 'fundamental-react/DatePicker';
import { TimePicker } from 'fundamental-react/TimePicker';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';
import { InlineHelp } from 'fundamental-react/InlineHelp';
import { FormSet, FormItem, FormLabel, FormSelect } from 'fundamental-react/Forms';

class Header extends React.Component {
  constructor(props) {
    super(props);

    const today = new Date();
    var tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    this.state = {
      "show": false,
      "disableAfterDate": tomorrow
    };
  }

  _toggleModal(bShow) {
    this.setState({ "show": bShow });
  }

  render() {
    return (
      <div className="header-container">
        <ActionBar>
          <ActionBar.Header
            description="A dashboard for booking time"
            title="NAM Dashboard 2.0"
          />
          <ActionBar.Actions>
            <Button
              onClick={() => this._toggleModal(true)}
              glyph="positive"
              option="emphasized">
              Add Time
            </Button>
            <Modal
              className="modal"
              show={this.state.show}
              actions={<><Button onClick={() => this._toggleModal(false)} option="light">Cancel</Button><Button onClick={function S(){}}>Submit</Button></>}
              onClose={() => this._toggleModal(false)}
              title="Add NAM Activity">
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
                    disableAfterDate={this.state.disableAfterDate}
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
            </Modal>
          </ActionBar.Actions>
        </ActionBar>
      </div>
    );
  }
}

export default Header;
