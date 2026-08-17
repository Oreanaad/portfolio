import styled from 'styled-components'
import { useI18n } from '@/i18n'

/**
 * Two-state segmented switch. Both options stay visible so the alternative
 * language is discoverable, rather than hidden behind a single-label toggle.
 */
function LanguageToggle() {
  const { lang, setLang, t } = useI18n()

  return (
    <Switch role="group" aria-label={t.a11y.language}>
      <button
        type="button"
        className={lang === 'en' ? 'active' : ''}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <span className="sep" aria-hidden="true" />
      <button
        type="button"
        className={lang === 'es' ? 'active' : ''}
        aria-pressed={lang === 'es'}
        onClick={() => setLang('es')}
      >
        ES
      </button>
    </Switch>
  )
}

export default LanguageToggle

const Switch = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 3px;
  border: 1px solid var(--surface-border);
  border-radius: 999px;
  background: var(--surface);

  button {
    font-family: var(--mono);
    font-size: 0.68rem;
    letter-spacing: 0.06em;
    padding: 3px 8px;
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--muted);
    cursor: pointer;
    transition: color .25s ease, background .25s ease;
  }

  button:hover {
    color: var(--color);
  }

  button.active {
    color: #fff;
    background: linear-gradient(135deg, var(--main-color), var(--accent-2));
  }

  .sep {
    width: 1px;
    height: 12px;
    background: var(--surface-border);
  }
`
