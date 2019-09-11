import React from "react";

const Meals = props => {
  const { meals, height, width, containerSize, containerHeight, title } = props;

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h3>{title}</h3>
      </div>
      {meals.map(meal => {
        return (
          <div
            key={meal.id}
            style={{
              border: "2px solid black",
              margin: "20px",
              width: containerSize,
              height: containerHeight,
              overflow: "hidden"
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontFamily: "bold",
                color: "green",
                margin: "5px"
              }}
            >
              {meal.name}
            </div>
            <img src={meal.url} width={width} height={height} />
          </div>
        );
      })}
    </div>
  );
};

export default Meals;
