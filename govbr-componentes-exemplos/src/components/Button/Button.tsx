import React, { memo } from "react";

export const Button = memo(() => {
  return (
    <button className="br-button primary mr-3" type="button">
      Primário
    </button>
  );
});
