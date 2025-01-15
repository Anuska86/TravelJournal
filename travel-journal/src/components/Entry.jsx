import japan from "../imgs/japan.png";
import ubication from "../imgs/ubication.png";

export default function Entry() {
  return (
    <article className="journal-entry">
      <div className="japan-img-container">
        <img className="japan" src={japan} alt="picture of Japan" />
      </div>
      <div className="info-container">
        <img className="ubication" src={ubication} alt="ubication marker" />
        <span className="country">Japan</span>
        <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
          View on Google Maps{" "}
        </a>
        <h2 className="entry-title">Temple of Japan</h2>
        <p className="trip-dates">22 March, 2024 - 7 April,2024</p>
        <p className="entry-text">
          In Japan, two kinds of religious buildings can be found: Buddhist
          temples (寺) and Shinto shrines (神社). They share some common
          features and are often confused with one another. This is because they
          both feature traditional Japanese architecture: usually wooden
          structures with columns and typical large roofs... The influences of
          both religions are mixed as much on the substance as on the form.
          Practices and rituals cross and it is not uncommon to find Buddha
          symbols in a Shinto shrine and vice versa. This is due to the
          religious syncretism that has persisted in Japan since the
          introduction of Buddhism around the 5th century. This is the
          phenomenon of combining totally different beliefs to create a new
          religion. However, in order to differentiate these two sacred
          monuments, you only have to pay some special attention to certain
          details. In the Land of the Rising Sun there are more than 100,000
          Japanese shrines, spread throughout the country.{" "}
        </p>
        <p className="entry-text">
          As for the number of temples, they are estimated to be around 80,000.
          Tokyo, Kyoto, Nara, Nikko and Miyajima are cities full of places of
          worship to visit. In addition, the regions of Kansai, Kanto and Aichi
          Prefecture are home to many Japanese temples.
        </p>
      </div>
    </article>
  );
}
