import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./styles.css";

const TollList = ({
  setTollFlag,
  setLogsFlag,
  tollList,
  setTollFilter,
  tollFilter,
  tollSearch,
  setTollSearch,
  setTollList,
}) => {
  console.log("i am rendered");

  var searchToll = tollList.find((item) => {
    return item.tollName === tollSearch;
  });

  const handleDelete = (e) => {
    // console.log('herer dfs is ',df);
    console.log(e.currentTarget.getAttribute("data-value"));
    const toDeleteToll = e.currentTarget.getAttribute("data-value");
    const newEntries = tollList.filter((item) => {
      return item.tollName !== toDeleteToll;
    });
    setTollList(newEntries);
    localStorage.setItem('tolls',JSON.stringify(newEntries));   
  };
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
        tollSearch={tollSearch}
        setTollSearch={setTollSearch}
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
          {tollSearch === "" ? (
            tollList.map((item) => {
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
                    {item["Truck/Bus"].singleFare}/
                    {item["Truck/Bus"].returnFare}
                  </td>
                  <td className="body-cell">
                    {item["Heavy vehicle"].singleFare}/
                    {item["Heavy vehicle"].returnFare}
                  </td>
                  <td>
                    <button
                      data-value={`${item.tollName}`}
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : searchToll ? (
            <tr>
              <td className="body-cell">{searchToll.tollName}</td>

              <td className="body-cell">
                {searchToll["Car/Jeep/Van"].singleFare}/
                {searchToll["Car/Jeep/Van"].returnFare}
              </td>
              <td className="body-cell">
                {searchToll.LCV.singleFare}/{searchToll.LCV.returnFare}
              </td>

              <td className="body-cell">
                {searchToll["Truck/Bus"].singleFare}/
                {searchToll["Truck/Bus"].returnFare}
              </td>
              <td className="body-cell">
                {searchToll["Heavy vehicle"].singleFare}/
                {searchToll["Heavy vehicle"].returnFare}
              </td>
              <td>
                <button
                  data-value={`${searchToll.tollName}`}
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </td>
            </tr>
          ) : (
            <div>Sorry No Such toll</div>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TollList;
