import React from 'react';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';
import { Tile } from 'fundamental-react/Tile';
import { Icon } from 'fundamental-react/Icon';

function Columns() {
  return (
    <main className="table-wrapper">
      <LayoutGrid cols={6}>
        <section>
          <div className="header">
            <h2>Friday</h2>
            <span className="header-date">{new Date().toLocaleDateString()}</span>
            <span className="header-time">5hr 0m</span>
          </div>
          <div className="column">
            <h3>Planned (0)</h3>
            <ul></ul>

            <h3>Reactive (0)</h3>
            <ul></ul>

            <h3>NAM (4)</h3>
            <ul>
              <Tile>
                <Tile.Content title="Training Course (TRC)">
                  <div>
                    <Icon glyph="accept" /> 1hr 0m
                  </div>
                  <div>
                    <Icon glyph="car-rental" /> 2hr 7m
                  </div>
                </Tile.Content>
              </Tile>
              
              <Tile>
                <Tile.Content title="Team Meeting/ General Briefing (TMB)">
                  <div>
                    <Icon glyph="accept" /> 1hr 0m
                  </div>
                  <div>
                    <Icon glyph="car-rental" /> 0hr 15m
                  </div>
                </Tile.Content>
              </Tile>
            </ul>
          </div>
        </section>
        <section>
          section 2
        </section>
        <section>
          section 3
        </section>
        <section>
          section 4
        </section>
        <section>
          section 5
        </section>
        <section>
          section 6
        </section>
      </LayoutGrid>
    </main>
  );
}

export default Columns;