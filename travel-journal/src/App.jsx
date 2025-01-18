import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data";
import Footer from "./components/Footer";

export default function App() {
  console.log(data);

  const entries = data.map((entry) => <Entry key={entry.id} entry={entry} />);

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="entries">{entries}</div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}
