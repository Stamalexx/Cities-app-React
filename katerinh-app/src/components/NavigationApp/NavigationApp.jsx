import style from "./NavigationApp.module.css"
export default function NavigationApp({ onCitySelect }) {
  return (
    <nav className={style.container}>
      <button
        className={style.navButton}
        onClick={() => onCitySelect("thessaloniki")}
      >
        Θεσσαλονίκη
      </button>
      <button
        className={style.navButton}
        onClick={() => onCitySelect("athens")}
      >
        Αθήνα
      </button>
      <button
        className={style.navButton}
        onClick={() => onCitySelect("katerini")}
      >
        Κατερίνη
      </button>
    </nav>
  );
}
