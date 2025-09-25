import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faEnvelope, faInbox, faBuilding } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';

import { ContactSection } from './styled-components/Contact.styled';
import contactImg from './assets/contacImg.png';

// Si querés mantener tu tipo/estado inicial desde tu modelo:
import { ContactEmptyForm, ContactType } from '@/models';

function Contact() {
  const [buttonText, setButtonText] = useState<string>('Send');
  const [sending, setSending] = useState<boolean>(false);
  const [form, setForm] = useState<ContactType>(ContactEmptyForm);

  useEffect(() => {
    const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('.contact-input');
    inputs.forEach((input) => {
      const onFocus = () => {
        input.parentElement?.classList.add('focus', 'not-empty');
      };
      const onBlur = () => {
        if (!input.value) input.parentElement?.classList.remove('not-empty', 'focus');
      };
      input.addEventListener('focus', onFocus);
      input.addEventListener('blur', onBlur);
      return () => {
        input.removeEventListener('focus', onFocus);
        input.removeEventListener('blur', onBlur);
      };
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);
    setButtonText('Sending...');

    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.Name,
          company: form.Company,
          email: form.Email,
          message: form.Message,
        }),
      });

      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Error sending');

      setButtonText('Sent');
      (e.target as HTMLFormElement).reset();
      setForm(ContactEmptyForm);
    } catch (error) {
      console.error(error);
      setButtonText('Try Again');
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
                <div className="input-wrap w-100">
                  <input
                    className="contact-input"
                    type="text"
                    autoComplete="off"
                    name="Name"
                    required
                    onChange={handleChange}
                    disabled={sending}
                  />
                  <label>Name</label>
                  <FontAwesomeIcon icon={faAddressCard} />
                </div>

                <div className="input-wrap w-100">
                  <input
                    className="contact-input"
                    type="text"
                    autoComplete="off"
                    name="Company"
                    onChange={handleChange}
                    disabled={sending}
                  />
                  <label>Company</label>
                  <FontAwesomeIcon icon={faBuilding} />
                </div>

                <div className="input-wrap w-100">
                  <input
                    className="contact-input"
                    type="email"
                    autoComplete="off"
                    name="Email"
                    required
                    onChange={handleChange}
                    disabled={sending}
                  />
                  <label>Email</label>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>

                <div className="input-wrap textarea w-100">
                  <textarea
                    className="contact-input"
                    autoComplete="off"
                    name="Message"
                    required
                    onChange={handleChange}
                    disabled={sending}
                  />
                  <label>Message</label>
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
            <img src={contactImg} className="img" />
            <div className="wave-wrap">
              <svg className="wave" viewBox="0 0 783 1536" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  id="wave"
                  d="M236.705 1356.18C200.542 1483.72 64.5004 1528.54 1 1535V1H770.538C793.858 63.1213 797.23 196.197 624.165 231.531C407.833 275.698 274.374 331.715 450.884 568.709C627.393 805.704 510.079 815.399 347.561 939.282C185.043 1063.17 281.908 1196.74 236.705 1356.18Z"
                />
              </svg>
            </div>

            <svg className="dashed-wave" viewBox="0 0 345 877" fill="none" xmlns="http://www.w3.org/2000/svg">
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
