import { Counter } from "../../App";
import "./Loading.scss";
const Loading = ({ stop }: { stop: boolean }) => {
  return (
    <div className="loading">
      <div className="l"></div>
      <span>
        <Counter stop={stop} />
      </span>
      <div className="r"></div>
    </div>
  );
};

export default Loading;
