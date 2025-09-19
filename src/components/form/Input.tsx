import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, ...props }, ref) => {
    return (
      <div className="col col-md-4 col-md-6">
        <label htmlFor={id} className="form-label float-start">{label}</label>
        <input ref={ref} {...props} id={id} className={`form-control border p-2 rounded ${error ? "border-danger" : ""}`} />            
        {error && <span className="text-danger text-sm float-start">{error}</span>}
      </div>
    );
  }
);

export default Input;