import './StartButton.css';

export const StartButton= () => {
    return (
        <div className="start">
            <div className="startConteiner">
                <button
                    className="startButton"
                    type="button"
                    onClick={(e)=> console.log(e.target) }
                >Старт</button></div>
        </div>)
}; 