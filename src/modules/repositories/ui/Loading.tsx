import React from 'react';

function LoadingBase(): React.ReactElement {
  return (
    <p>... Loading ...</p>
  );
}

export const Loading = React.memo(LoadingBase);
