// YourFormComponent.tsx

import React from "react";
import FormWithPreFilledInputs from "./FormWithPreFilledInputs";

const YourFormComponent: React.FC = () => {
  const initialValues: FormData = {
    date: "2023-07-31",
    source: "Sample Source",
    job: "Sample Job",
    techId: 12345,
    techName: "John Doe"
  };

  return (
    <div>
      <FormWithPreFilledInputs initialValues={initialValues} />
      {/* Other components or content */}
    </div>
  );
};

export default YourFormComponent;
