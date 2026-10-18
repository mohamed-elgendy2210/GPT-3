import { footerColumns } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__heading">
        <h2 className="gradient__text">Do you want to step in to the future before others</h2>
      </div>
      <a className="footer__btn" href="#signup">Request Early Access</a>
      <div className="footer__links">
        <div className="footer__brand">
          <p className="footer__logo">GPT-3</p>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        {footerColumns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="footer__copy">© 2021 GPT-3. All rights reserved.</p>
    </footer>
  );
}
