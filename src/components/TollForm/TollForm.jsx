import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";
const TollForm = ({ setTollFlag, setTollList }) => {
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

      [zeroZero]: {
        singleFare: zeroOne,
        returnFare: zeroTwo,
      },

      [oneZero]: {
        singleFare: oneOne,
        returnFare: oneTwo,
      },

      [twoZero]: {
        singleFare: twoOne,
        returnFare: twoTwo,
      },
      [threeZero]: {
        singleFare: threeOne,
        returnFare: threeTwo,
      },
    };

    setTollList((prev) => {
      prev.push(newToll);
      return prev;
    });

    setTollName("");
    setZeroZero("");
    setZeroOne("");
    setZeroTwo("");
    setOneZero("");
    setOneOne("");
    setOneTwo("");

    setTwoZero("");
    setTwoOne("");
    setTwoTwo("");

    setThreeZero("");
    setThreeOne("");
    setThreeTwo("");
    setTollFlag(false);
  };

  return (
    <div className="overlay">
      <div className="form-container">
        <form className="AddTollForm" onSubmit={handleSubmit}>
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
              <select required onChange={(e) => setZeroZero(e.target.value)}>
                <option value="">Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy vehicle</option>
              </select>
              <input
                type="number"
                placeholder="Single Journey"
                value={zeroOne}
                required
                onChange={(e) => setZeroOne(e.target.value)}
              />
              <input
                type="number"
                placeholder="Return Journey"
                value={zeroTwo}
                required
                onChange={(e) => setZeroTwo(e.target.value)}
              />
            </div>

            <div className="AddTollForm__vehicleRow">
              <select required onChange={(e) => setOneZero(e.target.value)}>
                <option value="">Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy vehicle</option>
              </select>
              <input
                type="number"
                placeholder="Single Journey"
                value={oneOne}
                required
                onChange={(e) => setOneOne(e.target.value)}
              />
              <input
                type="number"
                placeholder="Return Journey"
                value={oneTwo}
                required
                onChange={(e) => setOneTwo(e.target.value)}
              />
            </div>

            <div className="AddTollForm__vehicleRow">
              <select required onChange={(e) => setTwoZero(e.target.value)}>
                <option value="">Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy vehicle</option>
              </select>
              <input
                type="number"
                placeholder="Single Journey"
                value={twoOne}
                required
                onChange={(e) => setTwoOne(e.target.value)}
              />
              <input
                type="number"
                placeholder="Return Journey"
                value={twoTwo}
                required
                onChange={(e) => setTwoTwo(e.target.value)}
              />
            </div>

            <div className="AddTollForm__vehicleRow">
              <select required onChange={(e) => setThreeZero(e.target.value)}>
                <option value="">Select Vehicle Type</option>
                <option value="Car/Jeep/Van">Car/Jeep/Van</option>
                <option value="LCV">LCV</option>
                <option value="Truck/Bus">Truck/Bus</option>
                <option value="Heavy vehicle">Heavy vehicle</option>
              </select>
              <input
                type="number"
                placeholder="Single Journey"
                value={threeOne}
                required
                onChange={(e) => setThreeOne(e.target.value)}
              />
              <input
                type="number"
                placeholder="Return Journey"
                value={threeTwo}
                required
                onChange={(e) => setThreeTwo(e.target.value)}
              />
            </div>
          </div>

          <div className="AddTollForm__footer">
            <button type="submit" className="AddTollForm__submitBtn">
              Add Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TollForm;
