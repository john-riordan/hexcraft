import React from 'react';

const PatchChangeDetails = ({ content }) => {
  const contentFormatted = content
    .replaceAll('</strong>:', '</strong>')
    .replaceAll('<li>', '<li class="attribute">');
  return (
    <div className='item-change-modal'>
      <div dangerouslySetInnerHTML={{ __html: contentFormatted }} />
    </div>
  );
};

export default PatchChangeDetails;
