// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

import LinesChart from "./LinesChart";
import BarsChart from "./BarsChart";
import PiesChart from "./PiesChart";

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
          <hr className="custom-margin-top custom-margin-bottom" />
          <div>
            <div className="chart-container">
              <BarsChart />
            </div>
          </div>
          <hr className="custom-margin-top custom-margin-bottom" />
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