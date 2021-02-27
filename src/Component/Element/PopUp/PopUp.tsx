import "./PopUp.css";

export const PopUp: React.FC = () => {
  return (
    <div className="modal">
      <div className="modalContent">
        <div className="modalText">
          <p>
            <span>Джо cбежал</span>
          </p>
        </div>
      </div>
      {/* изначально план был что бы модальное окно появлялось в зависимости от props и по клику закрывалось,  делал через класс и менял стейт в зависимости от пропса но получалось зацикливание, в текущем положении тоже не получилось, сделал окно без кнопки через timer в props, еще пробовал компоненты жизненного цикла, тоде не вышло. Так как я хотел сделать основную логику popUp здесь, то решил не добавлять новых state родительскому компоненту для реализации закрытия. */}
      {/* <div className="modal__close"><button className="close__btn" onClick={() => test()}>X</button></div> */}
    </div>
  );
};
 