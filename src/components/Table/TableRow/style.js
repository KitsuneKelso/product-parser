export default {
  tableRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    fontWeight: props => (props.header ? "bold" : "normal")
  },
  tableItem: {
    border: "1px solid white",
    padding: 5
  },
  dataMissing: {
    fontStyle: "italic",
    opacity: 0.5
  }
};
