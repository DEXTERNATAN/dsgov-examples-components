import React, { memo } from 'react';

export const Button = memo(() => {
  return (
    <button
      className="br-button"
      type="button"
      aria-label="Exibir lista"
      tabIndex={-1}
      data-trigger="data-trigger"
    >
      <i className="fas fa-angle-down" aria-hidden="true" />
    </button>
  );
});
