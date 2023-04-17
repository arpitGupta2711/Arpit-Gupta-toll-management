import React from "react";
import Navbar from "../Navbar/Navbar.jsx";

const TollEntries = ({
  setTollFlag,
  setLogsFlag,
  entries,
  tollList,
  setTollFilter,
  tollFilter,
  entrySearch,
  setEntrySearch,
}) => {
  console.log("toll filter is ", tollFilter);
  var newEntries;
  if (entrySearch === "") {
    newEntries = entries.filter((item) => {
      return item.tollName === tollFilter;
    });
  } else {
    if (tollFilter === "") {
      newEntries = entries.filter((item) => {
        return item.vehicleNumber === entrySearch;
      });
    } else {
      newEntries = entries.filter((item) => {
        return item.tollName === tollFilter;
      });
      newEntries = newEntries.filter((item) => {
        return item.vehicleNumber === entrySearch;
      });
    }
  }

  return (
    <>
      <Navbar
        title={"Toll entries/Vehicle entries"}
        searchPlaceholder={"Search Vehicle"}
        setTollFlag={setTollFlag}
        setLogsFlag={setLogsFlag}
        tollList={tollList}
        setTollFilter={setTollFilter}
        filter
        tollFilter={tollFilter}
        entrySearch={entrySearch}
        setEntrySearch={setEntrySearch}
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
          {tollFilter === "" && entrySearch === ""
            ? entries.map((item) => {
                return (
                  <tr>
                    <td className="body-cell">{item.vehicleType}</td>

                    <td className="body-cell">{item.vehicleNumber}</td>
                    <td className="body-cell">{item.date}</td>

                    <td className="body-cell">{item.tollName}</td>
                    <td className="body-cell">{item.tariff}</td>
                  </tr>
                );
              })
            : newEntries.map((item) => {
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
