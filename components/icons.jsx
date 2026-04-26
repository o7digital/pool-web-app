const makeIcon = (symbol) =>
  function Icon({ size = 22, className = '' }) {
    return (
      <span
        className={className}
        style={{
          fontSize: size,
          lineHeight: 1,
          display: 'inline-flex',
          width: size,
          height: size,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        aria-hidden="true"
      >
        {symbol}
      </span>
    )
  }

export const Icons = {
  waves: makeIcon('≈'),
  gauge: makeIcon('◴'),
  alert: makeIcon('⚠'),
  check: makeIcon('✓'),
  qr: makeIcon('▣'),
  leaf: makeIcon('◆'),
  calendar: makeIcon('◷'),
  map: makeIcon('⌖'),
  radar: makeIcon('◉'),
  spark: makeIcon('✦'),
  arrow: makeIcon('→'),
  chart: makeIcon('▥'),
  shield: makeIcon('◇'),
  menu: makeIcon('☰'),
  close: makeIcon('×'),
  cloud: makeIcon('☀'),
  drop: makeIcon('◌'),
}
