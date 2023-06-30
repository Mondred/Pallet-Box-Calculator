import React, { useState } from 'react';
import BoxPalletGraphic from './BoxPalletGraphic';
const BoxPallet = () => {
  const [boxLength, setBoxLength] = useState(0);
  const [boxWidth, setBoxWidth] = useState(0);
  const [boxHeight, setBoxHeight] = useState(0);
  const [palletLength, setPalletLength] = useState(0);
  const [palletWidth, setPalletWidth] = useState(0);
  const [palletHeight, setPalletHeight] = useState(0);
  const [boxesPerLayer, setBoxesPerLayer] = useState(0);
  const [totalLayers, setTotalLayers] = useState(0);
  const [totalBoxes, setTotalBoxes] = useState(0);
  const [totalBxs, setTotalBxs] = useState(0);
  const [boxesPerRow, setBoxesPerRow] = useState(0);
  const [boxesPerCol, setBoxesPerCol] = useState(0);
  
  const calculateBoxes = () => {
    const boxesPerLayer = Math.floor(
      (palletLength * palletWidth) / (boxLength * boxWidth)
    );
    const totalLayers = Math.floor(palletHeight / boxHeight);
    const totalBoxes = boxesPerLayer * totalLayers;

    const boxesPerRow = Math.floor(palletWidth / boxWidth);
    const boxesPerCol = Math.floor(palletLength / boxLength);

    let bxArea = boxesPerRow * boxesPerCol;
    let pltArea = palletWidth * palletLength;
    setTotalBxs(bxArea);
    setBoxesPerRow(boxesPerRow)
    setBoxesPerCol(boxesPerCol)

    console.log(boxesPerRow, boxesPerCol, bxArea, pltArea);

    setBoxesPerLayer(boxesPerLayer);
    setTotalLayers(totalLayers);
    setTotalBoxes(totalBoxes);
  };
  const calculateBoxCount = () => {
    const boxesPerRow = Math.floor(palletWidth / boxWidth);
    const boxesPerCol = Math.floor(palletLength / boxLength);
    console.log(boxesPerRow);
    const rows = Math.floor(palletHeight / boxHeight);
    const totalCount = boxesPerRow * rows;
    setBoxCount(totalCount);
  };

  return (
    <div>
      <h2>Box Pallet Calculator</h2>
      <div>
        <label htmlFor="boxLength">Box Length:</label>
        <input
          type="number"
          id="boxLength"
          value={boxLength}
          onChange={(e) => setBoxLength(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="boxWidth">Box Width:</label>
        <input
          type="number"
          id="boxWidth"
          value={boxWidth}
          onChange={(e) => setBoxWidth(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="boxHeight">Box Height:</label>
        <input
          type="number"
          id="boxHeight"
          value={boxHeight}
          onChange={(e) => setBoxHeight(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="palletLength">Pallet Length:</label>
        <input
          type="number"
          id="palletLength"
          value={palletLength}
          onChange={(e) => setPalletLength(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="palletWidth">Pallet Width:</label>
        <input
          type="number"
          id="palletWidth"
          value={palletWidth}
          onChange={(e) => setPalletWidth(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="palletHeight">Pallet Height:</label>
        <input
          type="number"
          id="palletHeight"
          value={palletHeight}
          onChange={(e) => setPalletHeight(Number(e.target.value))}
        />
      </div>
      <button onClick={calculateBoxes}>Calculate</button>
      <div>
        <h3>Output:</h3>
        <p>Boxes per Layer: {boxesPerLayer}</p>
        <p>Total Layers: {totalLayers}</p>
        <p>Total Boxes: {totalBoxes}</p>
      </div>
      <BoxPalletGraphic boxesPerLayer={boxesPerRow} totalLayers={boxesPerCol} wd={boxWidth} ht={boxLength} />
    </div>
  );
};

export default BoxPallet;
