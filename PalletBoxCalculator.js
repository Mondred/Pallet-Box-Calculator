import React, { useState } from 'react';

function PalletBoxCalculator() {
  const [boxLength, setBoxLength] = useState('');
  const [boxWidth, setBoxWidth] = useState('');
  const [boxHeight, setBoxHeight] = useState('');
  const [palletLength, setPalletLength] = useState('');
  const [palletWidth, setPalletWidth] = useState('');
  const [palletHeight, setPalletHeight] = useState('');
  const [numberOfBoxes, setNumberOfBoxes] = useState(0);

  const calculateNumberOfBoxes = () => {
    const maxBoxesLength = Math.floor(palletLength / boxLength);
    const maxBoxesWidth = Math.floor(palletWidth / boxWidth);
    const maxBoxesHeight = Math.floor(palletHeight / boxHeight);
    const totalBoxes = maxBoxesLength * maxBoxesWidth * maxBoxesHeight;
    setNumberOfBoxes(totalBoxes);
  };

  return (
    <div>
      <h2>Pallet Box Calculator</h2>

      <div>
        <label>Box Length (inches):</label>
        <input
          type="number"
          value={boxLength}
          onChange={(e) => setBoxLength(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Box Width (inches):</label>
        <input
          type="number"
          value={boxWidth}
          onChange={(e) => setBoxWidth(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Box Height (inches):</label>
        <input
          type="number"
          value={boxHeight}
          onChange={(e) => setBoxHeight(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Pallet Length (inches):</label>
        <input
          type="number"
          value={palletLength}
          onChange={(e) => setPalletLength(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Pallet Width (inches):</label>
        <input
          type="number"
          value={palletWidth}
          onChange={(e) => setPalletWidth(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Pallet Height (inches):</label>
        <input
          type="number"
          value={palletHeight}
          onChange={(e) => setPalletHeight(Number(e.target.value))}
        />
      </div>

      <button onClick={calculateNumberOfBoxes}>Calculate</button>

      <div>
        <p>The number of boxes that will fit inside the pallet is: {numberOfBoxes}</p>
      </div>
    </div>
  );
}

export default PalletBoxCalculator;
