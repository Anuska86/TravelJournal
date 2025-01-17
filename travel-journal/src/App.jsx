import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";

export default function App() {
  console.log(data);

  const entries = data.map((entry) => (
    <Entry
      key={entry.id}
      img_properties={entry.img_properties}
      img={entry.img}
      title={entry.title}
      country={entry.country}
      googleMapsLink={entry.googleMapsLink}
      date={entry.date}
      text={entry.text}
    />
  ));

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="entries">{entries}</div>
    </>
  );
}
