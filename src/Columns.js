import React from 'react';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';
import { Panel } from 'fundamental-react/Panel';

function Columns() {
  return (
    <main>
      <LayoutGrid cols={6}>
        <Panel>
          <Panel.Body>
            Panel 1
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Body>
            Panel 2
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Body>
            Panel 3
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Body>
            Panel 4
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Body>
            Panel 5
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Body>
            Panel 6
          </Panel.Body>
        </Panel>
      </LayoutGrid>
    </main>
  );
}

export default Columns;