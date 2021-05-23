interface IRating {
  value: number;
  text: string;
  color?: string;
}

let arr: JSX.Element[] = [];

const Rating = (props: IRating) => {
  const { value, text, color } = props;
  arr = [];
  for (let i = 0; i < 5; i++) {
    const currentValue = value - i;

    const element = (
      <span key={Math.random().toString()}>
        <i
          style={{ color }}
          className={
            currentValue >= 1
              ? "fas fa-star"
              : currentValue >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </span>
    );

    arr.push(element);
  }

  return (
    <div className="rating">
      {arr} <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "orange",
};
export default Rating;
