// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";

import UsuariosChart from "./UsuariosChart.jsx";
import NFTsChart from "./NFTsChart.jsx";
import BarsChart from "./BarsChart.jsx";
import PiesChart from "./PiesChart.jsx";

import './DashboardView.css'

function DashboardView() {
    return (
        <div className="dash-container">
          <h1 className="tit">Dashboard</h1>
          <br/>
          <h2 className="subtit">Total Users:</h2>
          <div>
            <div className="chart-container">
              <UsuariosChart />
            </div>
          </div>
          <br/>
          <h2 className="subtit">Total NFTs:</h2>
          <div>
            <div className="chart-container">
              <NFTsChart />
            </div>
          </div>
          <br/>
          <div>
          <h2 className="subtit">NFTs sold</h2>
            <div className="chart-container">
              <BarsChart />
            </div>
          </div>
          <br/>
          <h2 className="subtit">Sold and unsold NFTs</h2>
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