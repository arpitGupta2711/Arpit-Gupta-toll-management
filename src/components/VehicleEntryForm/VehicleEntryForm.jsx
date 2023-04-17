import React, { useState } from "react";
import "./styles.css";

const VehicleEntryForm = ({ setLogsFlag, tollList, entries, setEntries }) => {
  const [tollName, setTollName] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [tariff, setTariff] = useState("");

  const handleSubmit = (event) => {
    const newEntry = {
      vehicleType: vehicleType,
      tariff: tariff,
      tollName: tollName,
      vehicleNumber: vehicleNumber,
      date: new Date().toLocaleString('en-GB', { day: 'numeric', month: 'numeric', year: '2-digit', hour: 'numeric', minute: 'numeric', second: 'numeric' ,hour12: true}).toUpperCase()
     ,
      seconds: new Date().getTime(),
    };
    event.preventDefault();
    setEntries((prev) => {
        
        prev.push(newEntry);
        localStorage.setItem('entries',JSON.stringify(prev))
      return prev;
    });

    setTollName("");
    setVehicleType("");
    setVehicleNumber("");
    setTariff("");
    setLogsFlag(false);
  };

  if (tollName && vehicleType&&vehicleNumber) {
    console.log('i entered here');
    const tolls = tollList;
    const toll = tolls.find((item) => {
      return item.tollName === tollName;
    });
    // console.log(toll[`${setVehicleType}`]);
    if (
      tariff !== toll[`${vehicleType}`].singleFare &&
      tariff !== toll[`${vehicleType}`].returnFare
    ) {
        console.log('herehere')
        console.log('entries are ',entries);
        const entry = entries.find(ent=>{
            return ent.vehicleNumber===vehicleNumber
        })

        console.log('herer entry is ',entry)
        if(entry?.tollName===tollName){
            console.log('entered inside')
            console.log('here is the time ',entry.seconds);
            const timeGap=parseInt( new Date().getTime())-parseInt(entry.seconds);
            if(timeGap<=3600000){
                console.log('helllo');
                setTariff(toll[`${vehicleType}`].returnFare);
            }
         
            else{
            setTariff(toll[`${vehicleType}`].singleFare);
            }
        }
        else{
            setTariff(toll[`${vehicleType}`].singleFare);
        }
      
    }
  }
  return (
    <div className="overlay">
      <div className="form-container">
        <form className="AddTollForm" onSubmit={handleSubmit}>
          <div className="AddTollForm__header">
            <h2>Add Vehicle Entry</h2>
            <button
              onClick={() => {
                setLogsFlag(false);
              }}
            >
              ×
            </button>
          </div>

          <div className="AddTollForm__section">
            <label htmlFor="vehicleFare">Select Toll Name*</label>
            <div>
              <select
                className="vDropDown"
                value={tollName}
                onChange={(event) => {
                  setTollName(event.target.value);
                  setTariff("")
                }}
                required
              >
                <option value="">Select</option>

                {tollList.map((item) => {
                  console.log(item.tollName);
                  return (
                    <option value={`${item.tollName}`}>{item.tollName}</option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="AddTollForm__section">
            <label htmlFor="vehicleFare">Select Vehicle Type*</label>
            <div>
              <select
                className="vDropDown"
                value={vehicleType}
                onChange={(event) => {
                    
                  setVehicleType(event.target.value);
                  setTariff("")
                }}
                required
              >
                <option value="">Select</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy vehicle</option>
              </select>
            </div>
          </div>
          <div className="AddTollForm__section">
            <label htmlFor="vehicleNumber">Vehicle Number*</label>
            <input
              type="text"
              required
              value={vehicleNumber}
              onChange={(e) => {
              
                setVehicleNumber(e.target.value);
                setTariff("")
              }}
            />
          </div>
          <div className="AddTollForm__section">
            <label htmlFor="vehicleNumber">Tariff*</label>
            <input type="text" disabled required value={tariff} />
          </div>

          <div className="AddTollForm__footer">
            <button className="AddTollForm__submitBtn" type="submit">
              Add Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VehicleEntryForm;
