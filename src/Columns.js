import React from 'react';
import { LayoutGrid } from 'fundamental-react/LayoutGrid';
import { Tile } from 'fundamental-react/Tile';
import { Icon } from 'fundamental-react/Icon';

function Columns() {
  var sections = JSON_DATA.data.map((day, i) => {
    return <section key={i}><ColumnSection data={day} /></section>;
  });

  return (
    <main className="table-wrapper">
      <LayoutGrid cols={6}>
        {sections}
      </LayoutGrid>
    </main>
  );
}

function ColumnSection(props) {
  var date = new Date(props.data.date);
  date = date.toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'short', year: '2-digit'
  });
  date = date.split(", ");

  var day = date[0];
  var shortdate = date[1];

  return (
    <section>
      <Header day={day} date={shortdate} time={props.data.totalTime} />
      <ColumnBody Planned={props.data.Planned} Reactive={props.data.Reactive} NAM={props.data.NAM} />
    </section>
  );
}

function Header(props) {
  return (
    <div className="header">
      <h2>{props.day}</h2>
      <span className="header-date">{new Date(props.date).toLocaleDateString()}</span>
      <span className="header-time">{props.time}</span>
    </div>
  );
}

function ColumnBody(props) {
  return (
    <div className="column">
      <h3 className="planned">Planned ({props.Planned.length})</h3>
      <ItemList type="planned" items={props.Planned} />

      <h3 className="reactive">Reactive ({props.Reactive.length})</h3>
      <ItemList type="reactive" items={props.Reactive} />

      <h3 className="nam">NAM ({props.NAM.length})</h3>
      <ItemList type="nam" items={props.NAM} />
    </div>
  );
}

function ItemList(props) {
  var itemTiles = props.items.map((item, i) => {
    return <li className="test" key={i}><ItemTile description={item.description} funcLocation={item.funcLocation} workOrder={item.workOrder} timeWorked={item.timeWorked} timeTravel={item.timeTravel} /></li>;
  });

  return (
    <ul className={props.type}>
      {itemTiles}
    </ul>
  );
}

function ItemTile(props) {
  return (
    <Tile>
      <Tile.Content title={props.description}>
        <span>{props.funcLocation}</span>
        <div>{props.workOrder}</div>
        <div>
          <Icon size="l" glyph="accept" /> {props.timeWorked}
        </div>
        <div>
          <Icon size="l" glyph="car-rental" /> {props.timeTravel}
        </div>
      </Tile.Content>
    </Tile>
  );
}

var JSON_DATA = {
  "data":[
     {
        "date":"2019-08-26",
        "totalTime":"5.00",
        "Planned":[

        ],
        "Reactive":[

        ],
        "NAM":[
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.25",
              "timeWorked":"1.00",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           },
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.25",
              "timeWorked":"1.00",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           },
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.25",
              "timeWorked":"1.00",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           },
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.25",
              "timeWorked":"1.00",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           }
        ]
     },
     {
        "date":"2019-08-27",
        "totalTime":"132.70",
        "Planned":[
           {
              "description":"Operation 2",
              "funcLocation":"LLWYN-ON",
              "timeTravel":"14.20",
              "timeWorked":"8.60",
              "activityType":"0020",
              "woType":"Planned",
              "workOrder":"45401480"
           },
           {
              "description":"Ponsticcle, sludge conveyor",
              "funcLocation":"Treated Water",
              "timeTravel":"2.40",
              "timeWorked":"20.80",
              "activityType":"0010",
              "woType":"Planned",
              "workOrder":"45401611"
           },
           {
              "description":"128 - 1",
              "funcLocation":"Treated Water",
              "timeTravel":"5.60",
              "timeWorked":"19.40",
              "activityType":"0010",
              "woType":"Planned",
              "workOrder":"45401949"
           },
           {
              "description":"Test 128 - 2 - 1",
              "funcLocation":"Treated Water",
              "timeTravel":"3.80",
              "timeWorked":"9.60",
              "activityType":"0010",
              "woType":"Planned",
              "workOrder":"45401950"
           },
           {
              "description":"Test 128 - 2 - 2",
              "funcLocation":"Treated Water",
              "timeTravel":"1.00",
              "timeWorked":"5.40",
              "activityType":"0020",
              "woType":"Planned",
              "workOrder":"45401950"
           },
           {
              "description":"Test 128 - 2 - 3",
              "funcLocation":"Treated Water",
              "timeTravel":"6.60",
              "timeWorked":"3.80",
              "activityType":"0030",
              "woType":"Planned",
              "workOrder":"45401950"
           },
           {
              "description":"Test 128 - 2 - 4",
              "funcLocation":"Treated Water",
              "timeTravel":"16.20",
              "timeWorked":"6.20",
              "activityType":"0040",
              "woType":"Planned",
              "workOrder":"45401950"
           },
           {
              "description":"Test 128 - 2 - 5",
              "funcLocation":"Treated Water",
              "timeTravel":"0.00",
              "timeWorked":"8.60",
              "activityType":"0050",
              "woType":"Planned",
              "workOrder":"45401950"
           }
        ],
        "Reactive":[

        ],
        "NAM":[
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.17",
              "timeWorked":"0.33",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           }
        ]
     },
     {
        "date":"2019-08-28",
        "totalTime":"9.70",
        "Planned":[
           {
              "description":"Test 111 - 1 - 1",
              "funcLocation":"Treated Water",
              "timeTravel":"0.40",
              "timeWorked":"3.00",
              "activityType":"0010",
              "woType":"Planned",
              "workOrder":"45401951"
           },
           {
              "description":"Test 111 - 1 - 2",
              "funcLocation":"Treated Water",
              "timeTravel":"0.40",
              "timeWorked":"2.00",
              "activityType":"0020",
              "woType":"Planned",
              "workOrder":"45401951"
           },
           {
              "description":"Test 111 - 1 - 3",
              "funcLocation":"Treated Water",
              "timeTravel":"2.20",
              "timeWorked":"1.20",
              "activityType":"0030",
              "woType":"Planned",
              "workOrder":"45401951"
           }
        ],
        "Reactive":[

        ],
        "NAM":[
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.17",
              "timeWorked":"0.33",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           }
        ]
     },
     {
        "date":"2019-08-29",
        "totalTime":"1.20",
        "Planned":[
           {
              "description":"Test 111 - 1 - 4",
              "funcLocation":"Treated Water",
              "timeTravel":"0.20",
              "timeWorked":"0.00",
              "activityType":"0040",
              "woType":"Planned",
              "workOrder":"45401951"
           }
        ],
        "Reactive":[

        ],
        "NAM":[
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.17",
              "timeWorked":"0.33",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           },
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.17",
              "timeWorked":"0.33",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           }
        ]
     },
     {
        "date":"2019-08-30",
        "totalTime":"0.00",
        "Planned":[

        ],
        "Reactive":[

        ],
        "NAM":[

        ]
     },
     {
        "date":"2019-08-31",
        "totalTime":"2.50",
        "Planned":[

        ],
        "Reactive":[

        ],
        "NAM":[
           {
              "description":"TMB",
              "funcLocation":"Team Meeting/ General Briefing",
              "timeTravel":"0.17",
              "timeWorked":"0.33",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           },
           {
              "description":"SLP",
              "funcLocation":"Sleep in Time",
              "timeTravel":"0.00",
              "timeWorked":"2.00",
              "activityType":"0010",
              "woType":"NAM",
              "workOrder":""
           }
        ]
     }
  ]
};

export default Columns;