const action = (() => {
  const editStatus = (todo) => {
    if (todo.status === false) {
      todo.status = true;
    } else {
      todo.status = false;
    }
  };

  return { editStatus };
})();

export default action;