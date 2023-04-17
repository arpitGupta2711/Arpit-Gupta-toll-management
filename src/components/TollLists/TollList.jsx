import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./styles.css";

const TollList = ({
  setTollFlag,
  setLogsFlag,
  tollList,
  setTollFilter,
  tollFilter,
}) => {
  console.log("i am rendered");

  return (
    <>
      <Navbar
        title={"Tollgate List"}
        searchPlaceholder={"Search Tolls"}
        setTollFlag={setTollFlag}
        setLogsFlag={setLogsFlag}
        tollList={tollList}
        setTollFilter={setTollFilter}
        tollFilter={tollFilter}
      />

      <table className="toll-table">
        <thead className="table-header">
          <tr>
            <th className="header-cell">TOLL NAME</th>
            <th className="header-cell">CAR/JEEP/VAN</th>
            <th className="header-cell">LCV</th>
            <th className="header-cell">TRUCK/BUS</th>
            <th className="header-cell">HEAVY VEHICLE</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {tollList.map((item) => {
            return (
              <tr>
                <td className="body-cell">{item.tollName}</td>

                <td className="body-cell">
                  {item["Car/Jeep/Van"].singleFare}/
                  {item["Car/Jeep/Van"].returnFare}
                </td>
                <td className="body-cell">
                  {item.LCV.singleFare}/{item.LCV.returnFare}
                </td>

                <td className="body-cell">
                  {item["Truck/Bus"].singleFare}/{item["Truck/Bus"].returnFare}
                </td>
                <td className="body-cell">
                  {item["Heavy vehicle"].singleFare}/
                  {item["Heavy vehicle"].returnFare}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TollList;
