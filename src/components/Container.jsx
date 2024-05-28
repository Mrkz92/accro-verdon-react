import React from "react";
import "./Container.scss";

const Container = React.forwardRef(({ children, context }, ref) => {
  return (
    <div ref={ref} className={`Container Container--${context}`}>
      {children}
    </div>
  );
});

export default Container;
