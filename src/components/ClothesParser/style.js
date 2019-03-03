export default {
  root: {},
  button: {
    width: 100,
    height: 50,
    border: "1px solid white",
    borderRadius: 3,
    background: "none",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      background: "white",
      color: "black"
    }
  },
  active: {
    background: "#00a9ec"
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  buttonsRow: {
    display: "flex",
    flexDirection: "row",
    margin: [20, 0],
    "&>:not(:last-child)": {
      marginRight: 10
    }
  }
};
