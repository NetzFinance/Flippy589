import { keyframes } from "@emotion/react";

//        animation={`${bounce} 2s infinite`}

export const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
`;

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeInHome = keyframes`
  from { opacity: 0; }
  to { opacity: 0.9; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

export const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const slideIn = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

export const slideOut = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

export const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

export const slideDown = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;

export const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.02); }
`;

export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
  20%, 40%, 60%, 80% { transform: translateX(10px); }
`;

export const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const pulse2 = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export const pulse3 = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(27, 253, 156, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(27, 253, 156, 0); }
  100% { box-shadow: 0 0 0 0 rgba(27, 253, 156, 0); }
`;

export const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Fade In from Left
export const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-100%); }
  to { opacity: 1; transform: translateX(0); }
`;

// Fade In from Right
export const fadeInRight = keyframes`
  from { opacity: 0; transform: translateX(100%); }
  to { opacity: 1; transform: translateX(0); }
`;

// Rotate and Scale
export const rotateScale = keyframes`
  from { transform: rotate(0deg) scale(0.5); }
  to { transform: rotate(360deg) scale(1); }
`;

// Wobble Animation
export const wobble = keyframes`
  0% { transform: translateX(0); }
  15% { transform: translateX(-25px) rotate(-5deg); }
  30% { transform: translateX(20px) rotate(3deg); }
  45% { transform: translateX(-15px) rotate(-3deg); }
  60% { transform: translateX(10px) rotate(2deg); }
  75% { transform: translateX(-5px) rotate(-1deg); }
  100% { transform: translateX(0); }
`;

// Flip Animation
export const flip = keyframes`
  from { transform: perspective(400px) rotateY(0); }
  to { transform: perspective(400px) rotateY(180deg); }
`;

// Flash Animation
export const flash = keyframes`
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
`;

// Swing Animation
export const swing = keyframes`
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`;

// Zoom In Animation
export const zoomIn = keyframes`
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// Zoom Out Animation
export const zoomOut = keyframes`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0); opacity: 0; }
`;

// Heartbeat Animation
export const heartbeat = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.3); }
`;

// Pop In Animation
export const popIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// Pop Out Animation
export const popOut = keyframes`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.8); opacity: 0; }
`;

// Ripple Effect
export const ripple = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1); }
  100% { box-shadow: 0 0 0 20px rgba(0, 0, 0, 0); }
`;

// Skew Animation
export const skewIn = keyframes`
  from { transform: skewX(30deg); opacity: 0; }
  to { transform: skewX(0deg); opacity: 1; }
`;

// Jello Effect
export const jello = keyframes`
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1.25, 0.75, 1); }
  40% { transform: scale3d(0.75, 1.25, 1); }
  50% { transform: scale3d(1.15, 0.85, 1); }
  65% { transform: scale3d(0.95, 1.05, 1); }
  75% { transform: scale3d(1.05, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
`;

// Bounce In Animation
export const bounceIn = keyframes`
  0% { transform: scale(0.5); opacity: 0; }
  60% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); }
`;

// Bounce Out Animation
export const bounceOut = keyframes`
  0% { transform: scale(1); }
  60% { transform: scale(1.2); }
  100% { transform: scale(0.5); opacity: 0; }
`;

// Roll In Animation
export const rollIn = keyframes`
  from { opacity: 0; transform: translateX(-100%) rotate(-120deg); }
  to { opacity: 1; transform: translateX(0) rotate(0deg); }
`;

// Roll Out Animation
export const rollOut = keyframes`
  from { opacity: 1; transform: translateX(0) rotate(0deg); }
  to { opacity: 0; transform: translateX(100%) rotate(120deg); }
`;

// Fly In
export const flyIn = keyframes`
  from { transform: translateY(-100vh); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// Fly Out
export const flyOut = keyframes`
  from { transform: translateY(0); opacity: 1; }
  to { transform: translateY(-100vh); opacity: 0; }
`;

// Drift Animation
export const drift = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(0); }
`;

// Expand Animation
export const expand = keyframes`
  from { transform: scale(0.8); }
  to { transform: scale(1.2); }
`;

// Contract Animation
export const contract = keyframes`
  from { transform: scale(1.2); }
  to { transform: scale(0.8); }
`;
