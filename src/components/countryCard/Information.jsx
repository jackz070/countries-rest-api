import React from "react";

const Information = ({ label, data }) => {
  const formatData = () => {
    if (label === "Currencies") {
      let dataToShow = [];
      for (let key in data) {
        dataToShow.push(`${data[key].name}`);
      }
      return dataToShow.join(", ");
    } else if (label === "Languages") {
      let dataToShow = [];
      for (let key in data) {
        dataToShow.push(`${data[key]}`);
      }
      return dataToShow.join(", ");
    } else if (typeof data === "number") {
      return new Intl.NumberFormat("en-US").format(data);
    } else {
      return data;
    }
  };

  return (
    <div className="flex items-center">
      <h3 className="font-semibold mr-1">{label}:</h3>
      <span className="font-light">{formatData()}</span>
    </div>
  );
};

export default Information;
