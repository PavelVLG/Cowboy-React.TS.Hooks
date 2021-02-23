import "./Output.css";

export const Output: React.FC = () => {
  return (
    <div className="exitConteiner">
      <p className="exit-befor">
        {" "}
        .class &ensp;&#123; <br />
        display: flex;{" "}
      </p>
      <textarea
        className="exitInput"
        placeholder="поле ввода"
        onChange={(e) => {
          console.log(e.target.value, "OutPut");
        }}
        id="txtarea"
      ></textarea>
      <p className="exit-after"> &#125;</p>
    </div>
  );
};
