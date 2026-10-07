import salon from '../salon.config.js';
import { hatMark } from '../logo.js';

const markSvg = hatMark({
  hat: 'var(--brass)',
  band: 'var(--brass-deep)',
  flower: 'var(--cream)',
  center: 'var(--brass-deep)',
});

export default function Logo({ href }) {
  const Tag = href ? 'a' : 'div';
  return (
    <Tag href={href} className="brand" aria-label={href ? `${salon.name}, back to top` : undefined}>
      <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true" dangerouslySetInnerHTML={{ __html: markSvg }} />
      <span className="brand-words">
        <span className="brand-lead">{salon.logo.lead}</span>
        <span className="brand-sub">{salon.logo.sub}</span>
      </span>
    </Tag>
  );
}
