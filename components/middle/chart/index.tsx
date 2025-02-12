export default function CryptoFlow() {
  return (
    <div className="mt-8 mb-6 p-4 rounded-3xl bg-[#111] dark:bg-[#111]" style={{height: '280px'}}>
      <svg width="100%" height="100%" viewBox="0 0 1200 200">
        {/* Connection line in background */}
        <path 
          className="connection-line" 
          stroke="#333" 
          strokeWidth="1" 
          strokeDasharray="4,4"
          fill="none"
          d="M100,98 L240,98 L440,120 L640,120 L840,98 L840,40 L1100,98"
        />

        {/* Nodes */}
        <g className="nodes">
          {/* YOU Left */}
          <g transform="translate(20,80)">
            <rect width="80" height="36" rx="4" fill="#222" />
            <text x="40" y="27" textAnchor="middle" fill="#fff" fontSize="14px">YOU</text>
          </g>

          {/* SCAMMER WALLET #1 */}
          <g transform="translate(240,80)">
            <rect width="160" height="36" rx="4" fill="#222" />
            <text x="80" y="27" textAnchor="middle" fill="#fff" fontSize="14px">SCAMMER WALLET #1</text>
          </g>

          {/* SCAMMER WALLET #2 */}
          <g transform="translate(440,120)">
            <rect width="160" height="36" rx="4" fill="#222" />
            <text x="80" y="27" textAnchor="middle" fill="#fff" fontSize="14px">SCAMMER WALLET #2</text>
          </g>

          {/* SCAMMER WALLET #3 */}
          <g transform="translate(640,120)">
            <rect width="160" height="36" rx="4" fill="#222" />
            <text x="80" y="27" textAnchor="middle" fill="#fff" fontSize="14px">SCAMMER WALLET #3</text>
          </g>

          {/* SCAMMER WALLET #4 */}
          <g transform="translate(840,80)">
            <rect width="160" height="36" rx="4" fill="#222" />
            <text x="80" y="27" textAnchor="middle" fill="#fff" fontSize="14px">SCAMMER WALLET #4</text>
          </g>

          {/* RECOVER CRYPTO 1 */}
          <g transform="translate(840,40)">
            <rect 
              width="160" 
              height="36" 
              rx="4" 
              fill="#22c55e"
              stroke="#4ade80"
              strokeWidth="1.5"
              className="shadow-[0_0_40px_rgba(74,222,128,0.7),0_0_80px_rgba(74,222,128,0.6),0_0_120px_rgba(74,222,128,0.5)]"
            />
            <text x="80" y="27" textAnchor="middle" fill="#fff" fontSize="14px" className="drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">RECOVER CRYPTO</text>
          </g>

          {/* RECOVER CRYPTO 2 */}
          <g transform="translate(840,120)">
            <rect 
              width="160" 
              height="36" 
              rx="4" 
              fill="#22c55e"
              stroke="#4ade80"
              strokeWidth="1.5"
              className="shadow-[0_0_40px_rgba(74,222,128,0.7),0_0_80px_rgba(74,222,128,0.6),0_0_120px_rgba(74,222,128,0.5)]"
            />
            <text x="80" y="27" textAnchor="middle" fill="#fff" fontSize="14px" className="drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">RECOVER CRYPTO</text>
          </g>

          {/* RECOVER CRYPTO 3 */}
          <g transform="translate(840,160)">
            <rect 
              width="160" 
              height="36" 
              rx="4" 
              fill="#22c55e"
              stroke="#4ade80"
              strokeWidth="1.5"
              className="shadow-[0_0_40px_rgba(74,222,128,0.7),0_0_80px_rgba(74,222,128,0.6),0_0_120px_rgba(74,222,128,0.5)]"
            />
            <text x="80" y="27" textAnchor="middle" fill="#fff" fontSize="14px" className="drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]">RECOVER CRYPTO</text>
          </g>

          {/* YOU Right */}
          <g transform="translate(1100,80)">
            <rect width="80" height="36" rx="4" fill="#222" />
            <text x="40" y="27" textAnchor="middle" fill="#fff" fontSize="14px">YOU</text>
          </g>
        </g>

        {/* Animated neon green dot */}
        <circle 
          r="3" 
          fill="#4ade80"
          className="drop-shadow-[0_0_8px_rgba(74,222,128,0.8)]"
        >
          <animateMotion 
            dur="8s" 
            repeatCount="indefinite"
            keyPoints="0;0.5;0.55;0.6;0.65;0.7;0.75;1"
            keyTimes="0;0.5;0.55;0.6;0.65;0.7;0.75;1"
            calcMode="linear"
            path="M100,98 L240,98 L440,120 L640,120 L840,98 L840,40 L840,98 L840,40 L840,98 L840,40 L840,40 L1100,98"
          />
        </circle>


      </svg>
    </div>
  )
}
