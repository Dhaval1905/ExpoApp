import {Colors} from '../theme';

export const lineChartConfig = theme => {
  return {
    backgroundColor: Colors[theme].white,
    backgroundGradientFrom: Colors[theme].white,
    backgroundGradientTo: Colors[theme].white,
    color: () => Colors[theme].black,
    propsForDots: {
      strokeWidth: 2,
      stroke: Colors[theme].blue,
    },
  };
};
