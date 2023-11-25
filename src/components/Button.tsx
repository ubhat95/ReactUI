interface ButtonProps {
  text: string;
  onClose: () => void;
  color?: "primary" | "secondary";
}
const Button = ({ text, onClose, color }: ButtonProps) => {
  return (
    <button
      type="button"
      color={color}
      className="btn btn-primary"
      onClick={() => {
        onClose();
      }}
    >
      {text}
    </button>
  );
};

export default Button;
