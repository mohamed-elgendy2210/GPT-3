import { useState } from 'react';
import AvatarStack from '../components/AvatarStack.jsx';
import illustration from '../assets/ai-illustration.webp';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Header() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus({ type: 'error', message: 'Enter a valid email address, like name@company.com.' });
      return;
    }
    setStatus({ type: 'success', message: `Thanks! We sent a confirmation to ${email.trim()}.` });
    setEmail('');
  };

  return (
    <section className="header section" id="home">
      <div className="header__content">
        <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI on Top of Your Business</h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
          Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <form className="header__form" id="signup" onSubmit={onSubmit} noValidate>
          <label htmlFor="email" className="sr-only">Your email address</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={status.type === 'error'}
            aria-describedby="email-status"
            autoComplete="email"
          />
          <button type="submit" className="btn">Get Started</button>
        </form>
        <p id="email-status" className={`form-status form-status--${status.type}`} role="status">{status.message}</p>
        <div className="header__people">
          <AvatarStack />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="header__image">
        <img src={illustration} alt="Low-poly blue face scanned by an AI" width="668" height="702" />
      </div>
    </section>
  );
}
