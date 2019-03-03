const colors = {
  red: "rgba(255, 0, 0, 0.1)",
  green: "rgba(0, 255, 0, 0.1)",
  blue: "rgba(0, 0, 255, 0.1)"
};

export default {
  root: {
    background: props => colors[props.color]
  }
};
