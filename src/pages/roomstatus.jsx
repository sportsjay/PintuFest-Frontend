import React from "react";

//import components
import HorizontalLabelPositionBelowStepper from "../components/home/progress";

export default function RoomStatus() {
  return (
    <div style={{ marginTop: "100px", height: "100vh" }}>
      <HorizontalLabelPositionBelowStepper room={1} />
    </div>
  );
}
