// SubmitButton.tsx

import React from 'react';

interface SubmitButtonProps {
  isDisabled: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ isDisabled }) => {
  return (
    <div className="form-row">
      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </div>
  );
};

export default SubmitButton;
