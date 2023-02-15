import React from "react";
import Sidebar from "./Sidebar";
import CircleDesign from "./CircleDesign";
import "./Circleprogress.css";
function CircleProgress() {
  return (
    <Sidebar>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="card shadow"
            style={{
              width: " 350px",
              height: " 350px",
              marginLeft: "70px",
              marginTop: "120px",
            }}
          >
            <div className="circle1">
              <label className="pname">ToDo</label>
              <CircleDesign percentage={"50"} circlewidth="250" />
            </div>
          </div>
          <div
            className="card shadow"
            style={{
              width: " 350px",
              height: " 350px",
              marginLeft: "50px",
              marginTop: "120px",
            }}
          >
            <div className="circle2">
              <label className="pname2">OverallProgress</label>
              <CircleDesign percentage={"22"} circlewidth="250" />
            </div>
          </div>
          <div
            className="card shadow"
            style={{
              width: " 350px",
              height: " 350px",
              marginLeft: "50px",
              marginTop: "120px",
            }}
          >
            <div className="circle3">
              <label className="pname3">DeadlineRemaing</label>
              <CircleDesign percentage={"50"} circlewidth="250" />
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default CircleProgress;
