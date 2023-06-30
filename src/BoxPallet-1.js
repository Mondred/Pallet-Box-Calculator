import React, { useState } from 'react';

const BoxPallet = () => {
  const [boxWeight, setBoxWeight] = useState(0);
  const [palletWeight, setPalletWeight] = useState(0);
  const [boxesPerLayer, setBoxesPerLayer] = useState(0);
  const [totalLayers, setTotalLayers] = useState(0);
  const [totalBoxes, setTotalBoxes] = useState(0);

  const calculateBoxes = () => {
    const boxesPerLayer = Math.floor(palletWeight / boxWeight);
    const totalLayers = Math.floor(boxWeight / palletWeight);
    const totalBoxes = boxesPerLayer * totalLayers;

    setBoxesPerLayer(boxesPerLayer);
    setTotalLayers(totalLayers);
    setTotalBoxes(totalBoxes);
  };

  return (
    <div>
      <h2>Box Pallet Calculator</h2>
      <div>
        <label htmlFor="boxWeight">Box Weight:</label>
        <input
          type="number"
          id="boxWeight"
          value={boxWeight}
          onChange={(e) => setBoxWeight(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="palletWeight">Pallet Weight:</label>
        <input
          type="number"
          id="palletWeight"
          value={palletWeight}
          onChange={(e) => setPalletWeight(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateBoxes}>Calculate</button>
      <div>
        <h3>Output:</h3>
        <p>Boxes per Layer: {boxesPerLayer}</p>
        <p>Total Layers: {totalLayers}</p>
        <p>Total Boxes: {totalBoxes}</p>
      </div>
    </div>
  );
};

export default BoxPallet;
