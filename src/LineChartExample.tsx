import React from "react";
import { AxisOptions, Chart } from "react-charts";

interface DataPoint {
  primary: Date;
  secondary: number;
}

const generateRandomData = () => {
  const data = Array.from({ length: 10 }, () => ({
    label: "Serie Aleatorie",
    data: Array.from({ length: 30 }, (_, i) => ({
      primary: new Date(Date.now() - i * 1000 * 60 * 60 * 24),
      secondary: Math.random() * 100,
    })),
  }));
  return data;
};

export default function Line() {
  const [data, setData] = React.useState(generateRandomData);

  // Funcția pentru randomizarea datelor
  const randomizeData = () => setData(generateRandomData());

  const primaryAxis = React.useMemo<AxisOptions<DataPoint>>(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo<AxisOptions<DataPoint>[]>(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      <button onClick={randomizeData}>Randomize Data</button>
      <br />
      <br />
      <div style={{ width: "100%", height: "400px" }}>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    </>
  );
}
