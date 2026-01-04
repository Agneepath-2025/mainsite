'use client';

import SwimmingPoolBackground from './SwimmingPoolBackground';
import FootballFieldBackground from './FootballFieldBackground';
import ChessboardBackground from './ChessboardBackground';

export default function BackgroundStage() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <FootballFieldBackground />
      <SwimmingPoolBackground />
      <ChessboardBackground />
    </div>
  );
}
