import React, { Component } from "react";
import { Consumer } from "../../context";
import Loader from "../layout/Loader";
import Track from "../tracks/Track";
export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value;
          if (track_list === undefined || track_list.length === 0) {
            return <Loader />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{heading}</h3>
                <div className="row">
                  {track_list.map((track) => (
                    <Track track={track.track} key={track.track.track_id} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
