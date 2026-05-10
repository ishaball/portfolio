import { useMemo, useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', msg: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const mailtoHref = useMemo(() => {
    const to = 'ishaball137@gmail.com';

    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n');

    return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
      'Portfolio Contact'
    )}&body=${encodeURIComponent(body)}`;
  }, [form]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (form.name.trim().length < 2) {
      setStatus({ type: 'error', msg: 'Please enter your name.' });
      return;
    }
    if (!isValidEmail(form.email)) {
      setStatus({ type: 'error', msg: 'Please enter a valid email address.' });
      return;
    }
    if (form.message.trim().length < 10) {
      setStatus({ type: 'error', msg: 'Message should be at least 10 characters.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'ok', msg: 'Opening your email client…' });
    window.location.href = mailtoHref;
  };

  const nameId = 'contact-name';
  const emailId = 'contact-email';
  const messageId = 'contact-message';

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__grid">
        <label className="field" htmlFor={nameId}>
          <span className="field__label">Name</span>
          <input
            id={nameId}
            className="field__input"
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="Enter your name"
            disabled={isSubmitting}
          />
        </label>

        <label className="field" htmlFor={emailId}>
          <span className="field__label">Email</span>
          <input
            id={emailId}
            className="field__input"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            placeholder="Enter your email"
            disabled={isSubmitting}
          />
        </label>
      </div>

      <label className="field" htmlFor={messageId}>
        <span className="field__label">Message</span>
        <textarea
          id={messageId}
          className="field__textarea"
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          placeholder="Write your message..."
          rows={5}
          disabled={isSubmitting}
        />
      </label>

      {status.type !== 'idle' && (
        <div
          className={status.type === 'error' ? 'alert alert--err' : 'alert alert--ok'}
          role="status"
          aria-live="polite"
        >
          {status.msg}
        </div>
      )}

      <div className="form__actions">
        <button className="btn btn--primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send Message'}
          <span className="btn__shine" aria-hidden="true" />
        </button>
        <a className="btn btn--ghost" href={mailtoHref} aria-disabled={isSubmitting}>
          Use Email Client
        </a>
      </div>
    </form>
  );
}


