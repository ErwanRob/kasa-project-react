function Banner(props) {
  const currentBanner = window.location.pathname;

  return (
    <div
      className={`banner ${
        currentBanner === "/about" ? "resizableBanner" : ""
      }`}
    >
      {currentBanner !== "/about" && (
        <div
          className={`banner__darkbackground ${
            currentBanner === "/about" ? "resizableBanner" : ""
          }`}
        ></div>
      )}
      <img
        className={`banner__img ${
          currentBanner === "/about" ? "resizableBanner" : ""
        }`}
        src={props.image}
        alt="une banner"
      />
      <p className="banner__txt">{props.text}</p>
    </div>
  );
}
export default Banner;

/* {
  //si l'on veut ne pas render le txt sur la page about :
  currentBanner !== "/about" && <p className="banner__txt">{props.text}</p>;
}
 */
