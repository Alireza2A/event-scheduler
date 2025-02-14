// components/FormInput.js

function FormInput({ type, placeholder, value, onChange, className, ...props }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-2 rounded bg-green-950 bg-opacity-40 placeholder-white ${className}`}
        {...props}
      />
    );
  }
  
  export default FormInput;
  