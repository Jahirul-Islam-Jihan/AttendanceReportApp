import React from 'react';
import { StyleProp, ViewStyle, ColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientBackgroundProps {
  colors: ColorValue[]; 
  style?: StyleProp<ViewStyle>;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: readonly [number, number, ...number[]] | null; 
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  colors,
  style,
  start = { x: 0, y: 0 },
  end = { x: 1, y: 0 },
  locations,
}) => {
  return (
    <LinearGradient
      colors={colors as [ColorValue, ColorValue, ...ColorValue[]]}
      style={style}
      start={start}
      end={end}
      locations={locations}
    />
  );
};

export default GradientBackground;
