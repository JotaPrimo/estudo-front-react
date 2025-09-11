import { forwardRef } from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
};

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, ...props }, ref) => {
    return (
       <div className="d-md-colmun col-md-6 col-lg-4 mb-3">
        <label htmlFor={props.id} className="form-label float-start">{label}</label>
        <select ref={ref} {...props} className={`form-control ${error ? "border-danger" : ""}`}>
          <option value="">Selecione...</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && <span className="text-danger text-sm float-start">{error}</span>}
      </div>
    );
  }
);

export default Select;
