import React from 'react';
import { LazyMotion } from 'framer-motion';

const loadFeatures = () => import('./framerMotionFeatures').then((module) => module.domAnimation);

const FramerMotionProvider: React.FC = ({ children }) => {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
};

export { FramerMotionProvider };
