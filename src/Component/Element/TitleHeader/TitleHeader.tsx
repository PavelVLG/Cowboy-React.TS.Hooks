import "./TitleHeader.css";

interface TitleText {
  titleText: string;
}
export const TitleHeader: React.FC<TitleText> = (props) => {
  return (
    <div className="headerText">
      <div className="headerTitle">
        <p>
          Введение Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
          blanditiis cumque repellendus, officia voluptatibus omnis.
        </p>
      </div>
    </div>
  );
};
