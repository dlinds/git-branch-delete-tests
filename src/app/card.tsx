import { CSSProperties } from "react";

type CardProps = Readonly<{
  variant:
    | {
        type: "LARGE";
        title: string;
        subTitle: string;
        description: string;
        onClose?: () => void;
      }
    | {
        type: "SMALL";
        title: string;
        description: string;
      };
  onClick?: () => void;
}>;

export function Card({ variant, onClick }: CardProps) {
  if (variant.type === "LARGE") {
    return (
      <a style={styles.largeCard} onClick={onClick}>
        {!!variant.onClose && (
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
            onClick={variant.onClose}
          >
            X
          </div>
        )}
        <h2>
          {variant.title} <span>-&gt;</span>
        </h2>
        <h3>{variant.subTitle}</h3>
        <p>{variant.description}</p>
      </a>
    );
  }

  return (
    <a style={styles.smallCard} onClick={onClick}>
      <h2>
        {variant.title} <span>-&gt;</span>
      </h2>
      <p>{variant.description}</p>
    </a>
  );
}

const styles: { [key: string]: CSSProperties } = {
  largeCard: {
    backgroundColor: "white",
    color: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    marginTop: "20px",
    width: "100%",
    height: "100%",
  },
  smallCard: {
    backgroundColor: "white",
    color: "black",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    marginTop: "20px",
    width: "50%",
    height: "50%",
  },
};
