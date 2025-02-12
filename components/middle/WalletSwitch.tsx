import { useState } from 'react';

export default function WalletSwitch() {
  const [isScammer, setIsScammer] = useState(true);

  return (
    <div className="relative flex items-center justify-center my-8">
      <div 
        className={`
          absolute w-[280px] h-[60px] rounded-2xl transition-all duration-500 ease-out
          ${isScammer 
            ? 'bg-cyan-400/90 shadow-[0_0_50px_rgba(34,211,238,0.3),0_0_100px_rgba(34,211,238,0.2)]' 
            : 'bg-green-400/90 shadow-[0_0_50px_rgba(74,222,128,0.3),0_0_100px_rgba(74,222,128,0.2)]'
          }
          cursor-pointer backdrop-blur-xl
        `}
        style={{
          transform: isScammer ? 'translateY(0)' : 'translateY(80px)',
        }}
        onClick={() => setIsScammer(true)}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            SCAMMER WALLET #5
          </span>
        </div>
      </div>

      <div 
        className={`
          absolute w-[280px] h-[60px] rounded-2xl transition-all duration-500 ease-out
          ${!isScammer 
            ? 'bg-green-400/90 shadow-[0_0_50px_rgba(74,222,128,0.3),0_0_100px_rgba(74,222,128,0.2)]' 
            : 'bg-cyan-400/90 shadow-[0_0_50px_rgba(34,211,238,0.3),0_0_100px_rgba(34,211,238,0.2)]'
          }
          cursor-pointer backdrop-blur-xl
        `}
        style={{
          transform: !isScammer ? 'translateY(0)' : 'translateY(80px)',
        }}
        onClick={() => setIsScammer(false)}
      >
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-white text-2xl font-bold tracking-wider drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
            RECOVER CRYPTO
          </span>
        </div>
      </div>
    </div>
  );
}
