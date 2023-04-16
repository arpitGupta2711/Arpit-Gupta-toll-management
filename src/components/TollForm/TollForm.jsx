import React from "react";
import "./styles.css";
import { useState } from "react";
const TollForm = ({ setTollFlag }) => {
  const [tollName, setTollName] = useState("");
  const [zeroZero, setZeroZero] = useState("");
  const [zeroOne, setZeroOne] = useState("");
  const [zeroTwo, setZeroTwo] = useState("");
  const [oneZero, setOneZero] = useState("");
  const [oneOne, setOneOne] = useState("");
  const [oneTwo, setOneTwo] = useState("");

  const [twoZero, setTwoZero] = useState("");
  const [twoOne, setTwoOne] = useState("");
  const [twoTwo, setTwoTwo] = useState("");

  const [threeZero, setThreeZero] = useState("");
  const [threeOne, setThreeOne] = useState("");
  const [threeTwo, setThreeTwo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newToll = {
      tollName,
      vehicleDetails: [
        {
          [zeroZero]: {
            singleFare: zeroZero,
            returnFare: zeroTwo,
          },
        },
        {
          [oneZero]: {
            singleFare: oneZero,
            returnFare: oneTwo,
          },
        },
        {
          [twoZero]: {
            singleFare: twoZero,
            returnFare: twoTwo,
          },
        },
        {
          [threeZero]: {
            singleFare: threeZero,
            returnFare: threeTwo,
          },
        }
      ]
    };

    console.log(newToll);

    // setTollName("");
    // setVehicleType("");
    // setSingleJourneyFare("");
    // setReturnJourneyFare("");
  };
  return (
    <div className="overlay">
      <div className="form-container">
        <div className="AddTollForm">
          <div className="AddTollForm__header">
            <h2>Add New Toll</h2>
            <button
              onClick={() => {
                setTollFlag(false);
              }}
            >
              ×
            </button>
          </div>

          <div className="AddTollForm__section">
            <label htmlFor="tollName">Toll Name*</label>
            <input
              type="text"
              id="tollName"
              required
              value={tollName}
              onChange={(e) => setTollName(e.target.value)}
            />
          </div>

          <div className="AddTollForm__section">
            <label htmlFor="vehicleFare">Vehicle Fare Details*</label>
          </div>

          <div className="AddTollForm__section">
            <div className="AddTollForm__vehicleRow">
              <select onChange={(e) => setZeroZero(e.target.value)}>
                <option>Select Vehicle Type</option>
                <option>Car/Jeep/Van</option>
                <option>LCV</option>
                <option>Truck/Bus</option>
                <option>Heavy vehicle</option>
              </select>
              <input
                type="number"
                placeholder="Single Journey"
                value={zeroOne}
                onChange={(e) => setZeroOne(e.target.value)}
              />
              <input
                type="number"
                placeholder="Return Journey"
                value={zeroTwo}
                onChange={(e) => setZeroTwo(e.target.value)}
              />
            </div>

            <div className="AddTollForm__vehicleRow">
              <select onChange={(e) => setOneZero(e.target.value)}>
                <option>Select Vehicle Type</option>

                <option>Car/Jeep/Van</option>
                <option>LCV</option>
                <option>Truck/Bus</option>
                <option>Heavy vehicle</option>
              </select>
              <input
                type="number"
                placeholder="Single Journey"
                value={oneOne}
                onChange={(e) => setOneOne(e.target.value)}
              />
              <input
                type="number"
                placeholder="Return Journey"
                value={oneTwo}
                onChange={(e) => setOneTwo(e.target.value)}
              />
            </div>

            <div className="AddTollForm__vehicleRow">
              <select onChange={(e) => setTwoZero(e.target.value)}>
                <option>Select Vehicle Type</option>

                <option>Car/Jeep/Van</option>
                <option>LCV</option>
                <option>Truck/Bus</option>
                <option>Heavy vehicle</option>
              </select>
              <input
                type="number"
                placeholder="Single Journey"
                value={twoOne}
                onChange={(e) => setTwoOne(e.target.value)}
              />
              <input
                type="number"
                placeholder="Return Journey"
                value={twoTwo}
                onChange={(e) => setTwoTwo(e.target.value)}
              />
            </div>

            <div className="AddTollForm__vehicleRow">
              <select onChange={(e) => setThreeZero(e.target.value)}>
                <option>Select Vehicle Type</option>

                <option>Car/Jeep/Van</option>
                <option>LCV</option>
                <option>Truck/Bus</option>
                <option>Heavy vehicle</option>
              </select>
              <input
                type="number"
                placeholder="Single Journey"
                value={threeOne}
                onChange={(e) => setThreeOne(e.target.value)}
              />
              <input
                type="number"
                placeholder="Return Journey"
                value={threeTwo}
                onChange={(e) => setThreeTwo(e.target.value)}
              />
            </div>
          </div>

          <div className="AddTollForm__footer">
            <button onClick={handleSubmit} className="AddTollForm__submitBtn">
              Add Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TollForm;
