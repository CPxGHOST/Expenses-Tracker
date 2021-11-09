import ChartBar from "./ChartBar/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximumValue = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
