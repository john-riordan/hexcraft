import React from 'react';

const PatchChangeDetails = ({ content }) => {
  return (
    <div className="item-change-modal">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PatchChangeDetails;
