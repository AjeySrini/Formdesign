// FormWithPreFilledInputs.tsx

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import "./FormWithPreFilledInputs.css"; // Import the CSS file
import SubmitButton from "./submitbutton.tsx";

interface FormData {
  otherField: string | number | readonly string[] | undefined;
  hasOtherField: boolean | undefined;
  date: string;
  source: string;
  job: string;
  techId: number;
  techName: string;
  techContact: string;
  hasRemark: boolean;
  remark: string;
}

interface FormWithPreFilledInputsProps {
  initialValues: FormData;
}

const FormWithPreFilledInputs: React.FC<FormWithPreFilledInputsProps> = ({
  initialValues
}) => {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [isTechContactFilled, setIsTechContactFilled] = useState(
    !!initialValues.techContact
  );
  const [isRemarkFilled, setIsRemarkFilled] = useState(false);
  const [isOtherFieldFilled, setIsOtherFieldFilled] = useState(false);

  useEffect(() => {
    setIsTechContactFilled(!!formData.techContact);
    setIsRemarkFilled(!!formData.remark);
    setIsOtherFieldFilled(!!formData.otherField);
  }, [formData.techContact, formData.remark, formData.otherField]);

  const isSubmitDisabled =
    !isTechContactFilled ||
    (formData.hasRemark && !isRemarkFilled) ||
    (formData.hasOtherField && !isOtherFieldFilled);
  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      if (name === "hasRemark") {
        const hasRemark = value === "true";
        setFormData((prevFormData) => ({
          ...prevFormData,
          hasRemark,
          remark: hasRemark ? prevFormData.remark : ""
        }));
      } else if (name === "hasOtherField") {
        const hasOtherField = value === "true";
        setFormData((prevFormData) => ({
          ...prevFormData,
          hasOtherField,
          otherField: hasOtherField ? prevFormData.otherField : ""
        }));
      }
    } else {
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Here you can perform any action with the form data, like submitting it to a server.
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <label>Date:</label>
        <input
          type="text"
          name="date"
          value={formData.date}
          onChange={handleChange}
          readOnly
          className="input-field"
        />
      </div>
      <div className="form-row">
        <label>Source:</label>
        <input
          type="text"
          name="source"
          value={formData.source}
          onChange={handleChange}
          readOnly
          className="input-field"
        />
      </div>
      <div className="form-row">
        <label>Job:</label>
        <input
          type="text"
          name="job"
          value={formData.job}
          onChange={handleChange}
          readOnly
          className="input-field"
        />
      </div>
      <div className="form-row">
        <label>TECHID:</label>
        <input
          type="number"
          name="techId"
          value={formData.techId.toString()}
          onChange={handleChange}
          readOnly
          className="input-field"
        />
      </div>
      <div className="form-row">
        <label>Tech Name:</label>
        <input
          type="text"
          name="techName"
          value={formData.techName}
          onChange={handleChange}
          readOnly
          className="input-field"
        />
      </div>
      <div className="form-row">
        <label>Tech Contact:</label>
        <input
          type="text"
          name="techContact"
          value={formData.techContact}
          onChange={handleChange}
          className="input-field"
        />
      </div>
      <div className="form-row">
        <label>Has Remark:</label>
        <div className="radio-options">
          <label>
            <input
              type="radio"
              name="hasRemark"
              value="true"
              checked={formData.hasRemark}
              onChange={handleChange}
              className="radio-input"
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasRemark"
              value="false"
              checked={!formData.hasRemark}
              onChange={handleChange}
              className="radio-input"
            />
            No
          </label>
        </div>
      </div>
      {formData.hasRemark && (
        <div className="form-row">
          <label>Remark:</label>
          <textarea
            name="remark"
            value={formData.remark}
            onChange={handleChange}
            className="input-field"
          />
        </div>
      )}
      <div className="form-row">
        <label>Has Other Field:</label>

        <label>
          <input
            type="radio"
            name="hasOtherField"
            value="true"
            checked={formData.hasOtherField}
            onChange={handleChange}
            className="radio-input"
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="hasOtherField"
            value="false"
            checked={!formData.hasOtherField}
            onChange={handleChange}
            className="radio-input"
          />
          No
        </label>
      </div>
      {formData.hasOtherField && (
        <div className="form-row">
          <label>Other Field:</label>
          <input
            type="text"
            name="otherField"
            value={formData.otherField}
            onChange={handleChange}
            className="input-field"
          />
        </div>
      )}
      <SubmitButton isDisabled={isSubmitDisabled} />
    </form>
  );
};

export default FormWithPreFilledInputs;
