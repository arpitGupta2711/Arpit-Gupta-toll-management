import React from "react";
import Navbar from "../Navbar/Navbar.jsx";

const TollEntries = ({ setTollFlag, setLogsFlag, entries,tollList }) => {
  return (
    <>
      <Navbar
        title={"Toll entries/Vehicle entries"}
        searchPlaceholder={"Search Vehicle"}
        setTollFlag={setTollFlag}
        setLogsFlag={setLogsFlag}
        tollList={tollList}
        filter
      />

      <table className="toll-table">
        <thead className="table-header">
          <tr>
            <th className="header-cell">VEHICLE TYPE</th>
            <th className="header-cell">VEHICLE NUMBER</th>
            <th className="header-cell">DATE/TIME</th>
            <th className="header-cell">TOLL NAME</th>
            <th className="header-cell">TARIFF</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {entries.map((item) => {
            return (
              <tr>
                <td className="body-cell">{item.vehicleType}</td>

                <td className="body-cell">{item.vehicleNumber}</td>
                <td className="body-cell">{item.date}</td>

                <td className="body-cell">{item.tollName}</td>
                <td className="body-cell">{item.tariff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TollEntries;
