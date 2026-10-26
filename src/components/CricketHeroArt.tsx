export default function CricketHeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 760 640" role="presentation" focusable="false">
        <defs>
          <linearGradient id="court-gradient" x1="0" y1="0" x2="0.85" y2="1">
            <stop offset="0" stopColor="#1c4735" />
            <stop offset="1" stopColor="#0d211b" />
          </linearGradient>
          <radialGradient id="court-glow">
            <stop offset="0" stopColor="#c3f477" stopOpacity="0.3" />
            <stop offset="1" stopColor="#c3f477" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ball-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e4ffad" />
            <stop offset="1" stopColor="#91c64f" />
          </linearGradient>
          <clipPath id="court-clip">
            <path d="M131 123 644 82 699 505 94 542Z" />
          </clipPath>
        </defs>
        <ellipse className="art-glow" cx="420" cy="305" rx="290" ry="260" fill="url(#court-glow)" />
        <path className="art-outline" d="m131 123 513-41 55 423-605 37z" fill="url(#court-gradient)" />
        <g className="art-net" clipPath="url(#court-clip)" fill="none">
          <path d="m181 117-13 432m60-437-8 433m63-438-3 433m65-439 3 435m65-441 9 437m66-442 15 438m65-444 21 440m65-445 26 441" />
          <path d="m100 184 570-48m-575 97 582-49m-589 98 597-50m-603 99 610-50m-617 99 625-50m-630 99 638-51m-645 100 652-51" />
        </g>
        <path className="art-lane" d="m291 142 211-17 48 340-222 13z" fill="#b4ec70" fillOpacity="0.08" />
        <path className="art-pitch" d="m368 186 105-9 37 273-111 7z" fill="#e9f3d5" fillOpacity="0.1" />
        <path className="art-pitch-line" d="m370 207 107-9m27 225-104 6m-23-222 30 221" />
        <g className="art-stumps">
          <path d="m410 393 7 46m12-47 6 46m10-47 5 46" />
          <path d="m409 390 29-3" />
        </g>
        <circle className="art-ball-shadow" cx="536" cy="347" r="34" />
        <g className="art-ball">
          <circle cx="536" cy="337" r="27" fill="url(#ball-gradient)" />
          <path d="M519 320c9 10 21 25 33 34m-40-19c13-1 29-1 47 0" fill="none" stroke="#31492b" strokeOpacity=".75" strokeWidth="2" />
        </g>
        <path className="art-floor-line" d="m107 528 593-36M136 125l-35 401m507-440 93 404" />
        <g className="art-label">
          <rect x="104" y="78" width="145" height="32" rx="16" />
          <circle cx="122" cy="94" r="4" />
          <text x="135" y="98">PRACTICE SPACE 01</text>
        </g>
        <g className="art-mark">
          <circle cx="623" cy="142" r="25" />
          <path d="m612 142 8 8 15-17" />
        </g>
      </svg>
      <span className="hero-art-caption"><span /> AN ILLUSTRATION OF THE GAME</span>
    </div>
  )
}
