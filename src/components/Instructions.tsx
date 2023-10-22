import { memo } from 'react';

// TODO:
// This component isn't being used yet
// Perhaps it never will be

function Instructions() {
  return (
    <div className="component">
      <h3>Instructions</h3>
      <div className="collection">(instruction on how to upload to various meeting apps)</div>
    </div>
  );
}

export default memo(Instructions);
