const Section = ({ children, padding }) => {
  return (
    <div
      className={`max-w-screen-xl mx-auto px-4 ${
        padding === "top" ? "pt-28" : padding === "bottom" ? "pb-28" : "py-28"
      }`}
    >
      {children}
    </div>
  );
};

export default Section;
