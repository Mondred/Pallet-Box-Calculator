import React, { useState } from 'react';

const PalletBoxCalculator = () => {
  const [palletWidth, setPalletWidth] = useState(0);
  const [palletHeight, setPalletHeight] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const [boxCount, setBoxCount] = useState(0);

  const calculateBoxCount = () => {
    const boxesPerRow = Math.floor(palletWidth / boxWidth);
    console.log(boxesPerRow)
    const rows = Math.floor(palletHeight / boxHeight);
    const totalCount = boxesPerRow * rows;
    setBoxCount(totalCount);
  };
  const get_ratio = (x, y) => {
    if (y === 0) {
        return 0
    }
    return x/y | 0
}

  return (
    <div>
      <h2>Pallet Box Calculator</h2>
      <div>
        <label>Pallet Width:</label>
        <input
          type="number"
          value={palletWidth}
          onChange={(e) => setPalletWidth(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Pallet Height:</label>
        <input
          type="number"
          value={palletHeight}
          onChange={(e) => setPalletHeight(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Box Width:</label>
        <input
          type="number"
          value={boxWidth}
          onChange={(e) => setBoxWidth(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Box Height:</label>
        <input
          type="number"
          value={boxHeight}
          onChange={(e) => setBoxHeight(parseInt(e.target.value))}
        />
      </div>
      <button onClick={calculateBoxCount}>Calculate</button>
      <div>
        <label>Box Count:</label>
        <span>{boxCount}</span>
      </div>
    </div>
  );
};

export default PalletBoxCalculator;
