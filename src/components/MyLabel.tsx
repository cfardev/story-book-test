import "./MyLabel.css";

interface MyLabelProps {
  /**
   * The display text of the label
   */
  label: string;
  /**
   * The size of the label
   */
  size: "normal" | "h1" | "h2" | "h3";

  /**
   * All the letters gonna be uppercase
   */

  allCaps?: boolean;

  /**
   * The color of the label
   */

  color?: "primary" | "secondary" | "tertiary";

  /**
   * Custom Color
   */
  fontColor?: string;
}

const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color} ${allCaps && "allCaps"}`}
      style={{
        color: fontColor,
      }}
    >
      {label}
    </span>
  );
};

export default MyLabel;
