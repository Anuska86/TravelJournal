import ubication from "../imgs/ubication.png";

export default function Entry(props) {
  console.log(props);
  return (
    <article className="journal-entry">
      <div className="japan-img-container">
        <img className="japan" src={props.img} alt={props.img_properties.alt} />
      </div>
      <div className="info-container">
        <img className="ubication" src={ubication} alt="ubication marker" />
        <span className="country">{props.country}</span>
        <a href={props.googleMapsLink}>View on Google Maps </a>
        <h2 className="entry-title">{props.title}</h2>
        <p className="trip-dates">{props.date}</p>
        <p className="entry-text">{props.text}</p>
      </div>
    </article>
  );
}
