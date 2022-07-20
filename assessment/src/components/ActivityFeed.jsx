import React, { useState, useEffect } from 'react';
import './ActivityFeed.css';
import {
  BsTelephoneXFill,
  BsTelephoneInboundFill,
  BsTelephoneOutboundFill,
  BsTelephoneInbound,
} from 'react-icons/bs';

const ActivityFeed = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    fetch('https://aircall-job.herokuapp.com/activities')
      .then((res) => {
        return res.json();
      })
      .then((data) => setCalls(data));
  }, []);
  return (
    <div>
      <ul className="all-calls">
        {calls.map((call) => (
          <div key={call.id} className="call">
            <li id="caller" className="call-item">
              {call.from}
            </li>
            <li className="call-item">{call.via}</li>
            <li className="call-status call-item">
              {call.direction == 'inbound' ? (
                <div className="call-direction">
                  <BsTelephoneInboundFill style={{ color: 'green' }} />
                </div>
              ) : (
                <div className="call-direction">
                  <BsTelephoneOutboundFill style={{ color: 'orange' }} />
                </div>
              )}
            </li>
            <li className="call-item">
              {call.call_type === 'voicemail' ? (
                <div>Voicemail</div>
              ) : (
                <div></div>
              )}
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
