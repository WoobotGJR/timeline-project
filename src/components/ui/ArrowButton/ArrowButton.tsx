interface ArrowButtonProps {
  direction: 'left' | 'right' | 'up' | 'down';
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction }) => {
  const rotateAngle = {
    left: 0,
    right: 180,
    up: 90,
    down: 270,
  };

  return (
    <div className="arrow-btn-wrapper">
      <svg
        className="arrow-btn"
        width="10"
        height="14"
        viewBox="0 0 10 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `rotate(${rotateAngle[direction]}deg)` }}
      >
        <path
          d="M8.49988 0.750001L2.24988 7L8.49988 13.25"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};
export default ArrowButton;
