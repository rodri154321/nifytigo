// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

import LinesChart from "./LinesChart.jsx";
import BarsChart from "./BarsChart.jsx";
import PiesChart from "./PiesChart.jsx";

import './DashboardView.css'

function DashboardView() {
    return (
        <div className="dash-container">
          <h1 className="tit">Dashboard</h1>
          <div>
            <div className="chart-container">
              <LinesChart />
            </div>
          </div>
          {/* <hr className="custom-margin-top custom-margin-bottom" /> */}
          <br/>
          <div>
            <div className="chart-container">
              <BarsChart />
            </div>
          </div>
          {/* <hr className="custom-margin-top custom-margin-bottom" /> */}
          <br/>
          <div>
            <div className="chart-container">
              <div className="inner-chart-container">
                <PiesChart />
              </div>
            </div>
          </div>
          <br />
        </div>
      );
    }

export default DashboardView;