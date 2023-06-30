import React from 'react';

const BoxPalletGraphic = ({ boxesPerLayer, totalLayers, wd,ht }) => {
  const renderGraphic = () => {
    const layers = Array(totalLayers).fill(null);

    return layers.map((_, index) => (
      <div key={index} className="layer" >
        {Array(boxesPerLayer).fill(null).map((_, boxIndex) => (
          <div key={boxIndex} className="box" style={{ width : (wd*10).toString()+'px', height: (ht*10).toString()+'px' }}/>
        ))}
      </div>
    ));
  };

  return <div className="graphic">{renderGraphic()}</div>;
};

export default BoxPalletGraphic;
