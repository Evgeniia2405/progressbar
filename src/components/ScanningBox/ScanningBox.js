import "./ScanningBox.css";

function ScanningBox({ typeBox }) {
  const scanningboxTextAccent = `scanningbox__text-accent ${
    typeBox === "YMA"
      ? "scanningbox__text-accent_theme_red"
      : typeBox === "YMF"
      ? "scanningbox__text-accent_theme_golden"
      : typeBox === "MYF"
      ? "scanningbox__text-accent_theme_purple"
      : typeBox === "YMC"
      ? "scanningbox__text-accent_theme_green"
      : typeBox === "MYA"
      ? "scanningbox__text-accent_theme_coral"
      : typeBox === "MYB"
      ? "scanningbox__text-accent_theme_darkred"
      : typeBox === "MYC"
      ? "scanningbox__text-accent_theme_azure"
      : typeBox === "MYD"
      ? "scanningbox__text-accent_theme_yellow"
      : typeBox === "MYE"
      ? "scanningbox__text-accent_theme_brown" : ''
  }`;
  return (
    <div className="scanningbox__container">
      <p className="scanningbox__text">
        Упакуйте товары и&nbsp;сканируйте коробку{" "}
        <span className={scanningboxTextAccent}>{typeBox}</span>
      </p>
    </div>
  );
}

export default ScanningBox;
