import "./LevelChange.css";

export const LevelChange = () => {
  return (
    <div className="textButton-conteiner">
      <div className="textFlex">
        <div className="buttonText">
          <p>Уровень </p>
        </div>
        <div className="battonItem">
          <div>
            <button className="button-1" type="button" onClick={()=> console.log("button--1")}>
              назад
            </button> 
          </div>
          <div>
            <button className="button-2" type="button" onClick={()=> console.log("button--2")}>
              вперед
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
