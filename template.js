function template(recebe) {
  return `<div>
        <div class=${recebe ? "lalala" : ""} ></div>
    <div>${recebe}`;
}

export default template;
