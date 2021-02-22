import "./StartButton.css";

export const StartButton = () => {
  return (
    <div className="start">
      <div className="startConteiner">
        <button
          className="startButton"
          type="button"
          onClick={() => console.log()}
        >
          Старт
        </button>
      </div>
    </div>
  );
};
