import "./Output.css";

export const Output = () => {
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
        rows="4"
        onChange={(e) => {
          console.log(e.target.value, "OutPut");
        }}
        id="txtarea"
      ></textarea>
      <p className="exit-after"> &#125;</p>
    </div>
  );
};
