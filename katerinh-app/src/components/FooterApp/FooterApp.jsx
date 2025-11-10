import style from "./FooterApp.module.css"
export default function FooterApp() {
  return (
    <footer className={style.container}>
      <h1>Αλέξιος Σταμέλος © Copyright Ελλάδα {new Date().getFullYear()}</h1>
    </footer>
  );
}
