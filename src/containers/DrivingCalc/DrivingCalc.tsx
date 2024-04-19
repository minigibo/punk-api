import { useState, ChangeEvent } from "react";
import "./DrivingCalc.scss";

type DrivingCalcProps = {
  isFullWidth: boolean;
};

const DrivingCalc = ({ isFullWidth }: DrivingCalcProps) => {
  const [weight, setWeight] = useState<number>(0);
  const [gender, setGender] = useState<string>("male");
  const [timeSinceFirstDrink, setTimeSinceFirstDrink] = useState<number>(0);
  const [pintsConsumed, setPintsConsumed] = useState<number>(0);
  const [bac, setBAC] = useState<number>(0);

  const calculateBAC = () => {
    const alcoholConsumed = pintsConsumed * 0.568 * 0.05;
    const weightInKgs = weight * 0.453592;
    const genderConstant = gender === "male" ? 0.68 : 0.55;
    const metabolicRate = 0.017;
    const timeInHours = timeSinceFirstDrink;
    const bacValue =
      (alcoholConsumed * 100) / (weightInKgs * genderConstant) -
      metabolicRate * timeInHours;
    setBAC(bacValue);
  };

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(parseFloat(e.target.value));
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleTimeSinceFirstDrinkChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setTimeSinceFirstDrink(parseInt(e.target.value));
  };

  const handlePintsConsumedChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPintsConsumed(parseInt(e.target.value));
  };

  return (
    <div className={`driving-calculator ${isFullWidth ? "full-width" : ""}`}>
      <h2 className="driving-calculator__title">Driving Calculator</h2>
      <form className="driving-calculator__form">
        <label className="driving-calculator__label">
          Weight (kg):
          <input
            className="driving-calculator__input"
            type="number"
            value={weight}
            onChange={handleWeightChange}
          />
        </label>
        <br />
        <label className="driving-calculator__label">
          Gender:
          <select
            className="driving-calculator__select"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label className="driving-calculator__label">
          Time since first drink (hours):
          <input
            className="driving-calculator__input"
            type="number"
            value={timeSinceFirstDrink}
            onChange={handleTimeSinceFirstDrinkChange}
          />
        </label>
        <br />
        <label className="driving-calculator__label">
          Pints consumed:
          <input
            className="driving-calculator__input"
            type="number"
            value={pintsConsumed}
            onChange={handlePintsConsumedChange}
          />
        </label>
        <br />
        <button
          className="driving-calculator__button"
          type="button"
          onClick={calculateBAC}
        >
          CALCULATE
        </button>
      </form>
      <div className="driving-calculator__result">
        <h3 className="driving-calculator__result-title">
          Blood Alcohol Concentration (BAC): {bac.toFixed(3)}%
        </h3>
        <p className="driving-calculator__result-message">
          {bac >= 0.08
            ? "You are over the legal limit."
            : "You are under the legal limit."}
        </p>
      </div>
    </div>
  );
};

export default DrivingCalc;
