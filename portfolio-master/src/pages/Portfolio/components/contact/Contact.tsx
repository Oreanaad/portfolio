import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faInbox, faBuilding } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

import { ContactSection } from './styled-components/Contact.styled';
import contactImg from './assets/contacImg.webp';
import { ContactEmptyForm, ContactType } from '@/models';
import { SnackbarUtilities } from '@/utilities';

type FieldName = keyof ContactType;

function Contact() {
  const [buttonText, setButtonText] = useState<string>('Send');
  const [sending, setSending] = useState<boolean>(false);
  const [form, setForm] = useState<ContactType>(ContactEmptyForm);
  const [focused, setFocused] = useState<FieldName | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Drives the floating-label styling that the stylesheet keys off .focus / .not-empty.
  // Previously this was wired up with raw addEventListener calls whose cleanup never
  // ran, because it was returned from a forEach callback rather than from the effect.
  const wrapClass = (field: FieldName) => {
    const isFocused = focused === field;
    const hasValue = Boolean(form[field]);
    return `input-wrap w-100${isFocused ? ' focus' : ''}${isFocused || hasValue ? ' not-empty' : ''}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setButtonText('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.Name,
          company: form.Company,
          email: form.Email,
          message: form.Message,
        }),
      });

      const data = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Error sending');

      setButtonText('Sent');
      setForm(ContactEmptyForm);
      SnackbarUtilities.success('Thanks! Your message is on its way.');
    } catch (error) {
      setButtonText('Try Again');
      SnackbarUtilities.error(
        error instanceof Error && error.message !== 'Error sending'
          ? error.message
          : 'Something went wrong. You can also email me directly at oreanadev@gmail.com'
      );
    } finally {
      setTimeout(() => setButtonText('Send'), 2500);
      setSending(false);
    }
  };

  return (
    <ContactSection>
      <div className="container">
        <div className="left">
          <div className="form-wrapper">
            <div className="contact-heading">
              <h1 className="animate__animated animate__bounceInDown">
                Get in touch <span>.</span>
              </h1>
              <p className="text">
                Or reach me via :{' '}
                <a href="mailto:oreanadev@gmail.com">
                  oreanadev<span>@</span>gmail<span>.</span>com
                </a>
              </p>
            </div>

            <div className="animate__animated animate__fadeIn">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className={wrapClass('Name')}>
                  <input
                    id="contact-name"
                    className="contact-input"
                    type="text"
                    autoComplete="name"
                    name="Name"
                    required
                    value={form.Name}
                    onChange={handleChange}
                    onFocus={() => setFocused('Name')}
                    onBlur={() => setFocused(null)}
                    disabled={sending}
                  />
                  <label htmlFor="contact-name">Name</label>
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>

                <div className={wrapClass('Company')}>
                  <input
                    id="contact-company"
                    className="contact-input"
                    type="text"
                    autoComplete="organization"
                    name="Company"
                    value={form.Company}
                    onChange={handleChange}
                    onFocus={() => setFocused('Company')}
                    onBlur={() => setFocused(null)}
                    disabled={sending}
                  />
                  <label htmlFor="contact-company">Company</label>
                  <FontAwesomeIcon icon={faBuilding} />
                </div>

                <div className={wrapClass('Email')}>
                  <input
                    id="contact-email"
                    className="contact-input"
                    type="email"
                    autoComplete="email"
                    name="Email"
                    required
                    value={form.Email}
                    onChange={handleChange}
                    onFocus={() => setFocused('Email')}
                    onBlur={() => setFocused(null)}
                    disabled={sending}
                  />
                  <label htmlFor="contact-email">Email</label>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className={`${wrapClass('Message')} textarea`}>
                  <textarea
                    id="contact-message"
                    className="contact-input"
                    name="Message"
                    required
                    value={form.Message}
                    onChange={handleChange}
                    onFocus={() => setFocused('Message')}
                    onBlur={() => setFocused(null)}
                    disabled={sending}
                  />
                  <label htmlFor="contact-message">Message</label>
                  <FontAwesomeIcon icon={faInbox} />
                </div>

                <div className="contact-buttons">
                  <input type="submit" value={buttonText} className="btn" disabled={sending} />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="image-wrapper">
            <img src={contactImg} className="img" alt="" aria-hidden="true" />
            <div className="wave-wrap">
              <svg
                className="wave"
                viewBox="0 0 783 1536"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  id="wave"
                  d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                />
              </svg>
            </div>

            <svg
              className="dashed-wave"
              viewBox="0 0 345 877"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                id="dashed-wave"
                d="M0.5 876C25.6667 836.167 73.2 739.8 62 673C48 589.5 35.5 499.5 125.5 462C215.5 424.5 150 365 87 333.5C24 302 44 237.5 125.5 213.5C207 189.5 307 138.5 246 87C185 35.5 297 1 344.5 1"
                stroke="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </ContactSection>
  );
}

export default Contact;
