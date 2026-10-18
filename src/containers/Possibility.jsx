import image from '../assets/possibility.webp';

export default function Possibility() {
  return (
    <section className="section possibility" id="possibility">
      <div className="possibility__image">
        <img src={image} alt="Woman in a VR headset reaching toward a floating My Apps menu" width="900" height="1002" loading="lazy" />
      </div>
      <div className="possibility__content">
        <a href="#signup" className="possibility__kicker">Request Early Access to Get Started</a>
        <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <a href="#signup" className="accent-link">Request Early Access to Get Started</a>
      </div>
    </section>
  );
}
