import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";

const App = () => {
  const [data, setData] = React.useState("Not Found");

  return (
    <>
      <BarcodeScannerComponent
        width={500}
        height={300}
        onUpdate={(err, result) => {
          if (result) setData(result.text);
          if (result) console.log(result.text.split("@"));
          else setData("Not Found");
        }}
      />
      <p>{data}</p>
    </>
  );
}

export default App;
