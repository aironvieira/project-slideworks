import "../css/rating.css";

interface RateProps {
  rate: string;
}

export default ({ rate }: RateProps) => {
  return (
    <>
      <div className="rating">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
        >
          <path
            d="M7.99992 0.833313L10.0599 5.00665L14.6666 5.67998L11.3333 8.92665L12.1199 13.5133L7.99992 11.3466L3.87992 13.5133L4.66659 8.92665L1.33325 5.67998L5.93992 5.00665L7.99992 0.833313Z"
            fill="white"
            stroke="white"
          />
        </svg>
        {rate}/10
      </div>
    </>
  );
};
