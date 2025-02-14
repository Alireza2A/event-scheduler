function ColorStrokeBox({ children, className }) {
  return (
    <div
      className={`relative p-6 rounded-lg shadow-lg transition-all overflow-auto ${className}`}
      style={{
        minWidth: "24rem",
        maxWidth: "75ch",
        width: "fit-content",
        maxHeight: "90vh",
        borderWidth: "0px",
        borderStyle: "solid",
        borderColor: "#27450D",
        background: "linear-gradient(to top, rgba(76, 122, 37, 0.95), rgba(148, 193, 121, 0.95))",
      }}
    >
      {children}
    </div>
  );
}

export default ColorStrokeBox;
