import { useState } from "react";

export function Button() {
  const [amountOfClicks, setAmountOfClicks] = useState(0);

  return (
    <>
      <p>Amount of clicks: {amountOfClicks}</p>
      <button
        className="button"
        style={styles.button}
        onClick={() => setAmountOfClicks(amountOfClicks + 1)}
      >
        Increase clicks
      </button>
    </>
  );
}

const styles = {
  button: {
    backgroundColor: "red",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    marginTop: "20px",
  },
};
