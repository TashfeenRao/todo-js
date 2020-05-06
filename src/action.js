const action = (() => {
  const editStatus = (todo) => {
    if (todo.status === false) {
      todo.status = true;
    } else {
      todo.status = false;
    }
  };

  const displayStatus = (todo) => {
    if (todo.status === true) {
      return 'Completed';
    }

    return 'Not completed';
  };
  return { editStatus, displayStatus };
})();

export default action;
