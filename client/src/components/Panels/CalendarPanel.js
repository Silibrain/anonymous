import React, { Component } from "react";

import { Panel } from "react-bootstrap";

import "./style.css";

class CalendarPanel extends Component {

  render() {
    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title componentClass="h3">Schedule</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <div className="calendarItem">
            <p>date</p>
            <p>time</p>
            <p>view</p>
            <p>cancel</p>
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default CalendarPanel;