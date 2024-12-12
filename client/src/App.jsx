import "./App.css";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <div>
      <MyNavbar />
      <div className="flex-container center">
        <div className="instructions">
          <h2>Documentation</h2>
          <ol>
            <li>
              <strong>Page Overview:</strong>
              <ul>
                <li>
                  <strong>Remote:</strong> Know which buttons to press
                </li>
                <li>
                  <strong>Modbus History:</strong> Used for debugging Modbus
                  packets
                </li>

                <li>
                  <strong>Error Graph:</strong> View the measured error in the
                  slack
                </li>
                <li>
                  <strong>Sensor Data:</strong> View the current readings of the
                  loadcell and IMU
                </li>
                <li>
                  <strong>Configuration:</strong> Tune the speed, smoothing,
                  thresholds, etc....
                </li>
              </ul>
            </li>
            <li>
              <strong>Safety Considerations:</strong>
              <ul>
                <li>
                  Note the location of the red emergency stop button in the
                  navbar.
                </li>
                <li>
                  Note the lack of end-stops/limit switches, the software is not
                  aware of any physical/mechanical constraints.
                </li>
              </ul>
            </li>
            <li>
              <strong>Modes:</strong>
              &nbsp; Utilize the toggle in the navbar to toggle manual and
              automatic modes
              <ul>
                <li>
                  <strong>Manual:</strong> In manual mode, utilize the remote
                  page to know which buttons to press corresponding to the
                  orientation of the IMU. The IMU measures the direction and
                  angle of the slack in the chain to know which buttons will
                  correct the slack.
                </li>

                <li>
                  <strong>Automatic:</strong> In automatic mode, first configure
                  the parameters to your use-case in the "Configurations" page.
                  When enabled, the crane will automatically move to correct the
                  slack in the chain.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
