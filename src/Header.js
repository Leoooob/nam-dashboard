import React from 'react';
import { ActionBar } from 'fundamental-react/ActionBar';
import { Button } from 'fundamental-react/Button';
import { Modal } from 'fundamental-react/Modal';
import NAMForm from './NAM-Form.js';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "show": false
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
              glyph="add"
              option="emphasized">
              Add Time
            </Button>
            <Modal
              className="modal"
              show={this.state.show}
              actions={<><Button onClick={() => this._toggleModal(false)} option="light">Cancel</Button><Button onClick={function S(){}}>Submit</Button></>}
              onClose={() => this._toggleModal(false)}
              title="Add NAM Activity">
              
              <NAMForm />
            </Modal>
          </ActionBar.Actions>
        </ActionBar>
      </div>
    );
  }
}

export default Header;
