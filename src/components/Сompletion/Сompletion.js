import "./Сompletion.css";
import ImageQualityIndexPath from "../../images/Quality_Index.svg";
function Сompletion() {
  return (
    <div className="completion__container">
      <img
        src={ImageQualityIndexPath}
        className="completion__img"
        alt="картинка успешной работы"
      />
      <h2 className="completion__header">Отличная работа!</h2>
      <p className="completion__text">
        Упакуйте товары и поставьте коробку на конвейер
      </p>
    </div>
  );
}

export default Сompletion;
