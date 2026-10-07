// Hat logo mark: a wide-brim sun hat tipped to one side, with a ribbon band and a
// small flower. Returned as SVG markup (64×64 viewBox) so the React header/footer and
// the generated favicon in vite.config.js draw the exact same mark.
export const hatMark = ({ hat, band, flower, center }) => `
  <g transform="rotate(-14 32 38)">
    <ellipse cx="32" cy="42" rx="28" ry="7.5" fill="${hat}"/>
    <path d="M18 42C18 26.5 23.5 18 32 18s14 8.5 14 24z" fill="${hat}"/>
    <path d="M18.4 42.6Q32 47.5 45.6 42.6" fill="none" stroke="${band}" stroke-opacity=".35" stroke-width="1.4" stroke-linecap="round"/>
    <path d="M18.6 33Q32 36.6 45.4 33L45.8 38.2Q32 41.8 18.2 38.2z" fill="${band}"/>
    <g fill="${flower}">
      <circle cx="40" cy="33.2" r="2.6"/>
      <circle cx="43.6" cy="35.2" r="2.6"/>
      <circle cx="42.6" cy="39" r="2.6"/>
      <circle cx="38.6" cy="39.2" r="2.6"/>
      <circle cx="37.2" cy="35.4" r="2.6"/>
    </g>
    <circle cx="40.4" cy="36.4" r="1.8" fill="${center}"/>
  </g>`;
