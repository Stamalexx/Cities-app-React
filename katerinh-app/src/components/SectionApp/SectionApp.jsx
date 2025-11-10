import style from "./SectionApp.module.css"
import citiesData from "../../assets/cities.json";

export default function SectionApp({ selectedCity }) {
  let description = citiesData[selectedCity].description;
  let title = citiesData[selectedCity].name;
  
  return (
    <section className={style.container}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
