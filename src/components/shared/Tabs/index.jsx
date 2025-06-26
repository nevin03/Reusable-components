import React, { useState } from "react";
import PropTypes from "prop-types";

function Tabs({ tabs = [], defaultIndex = 0, className = "", ...rest }) {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className={`w-full ${className}`} {...rest}>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-2 px-4 text-sm font-medium transition-colors duration-300
              ${
                activeIndex === index
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content here*/}
      <div className="p-4">
        {tabs[activeIndex] && tabs[activeIndex].content}
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  defaultIndex: PropTypes.number,
  className: PropTypes.string,
};

export default Tabs;
