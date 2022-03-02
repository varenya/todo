function createTodo(id, title) {
  return { id, title };
}

function addTodo(todoList = [], todoItem) {
  return [...todoList, todoItem];
}

function updateTodo(todoList = [], todoId, params) {
  const updatedList = [...todoList];
  const itemIndex = todoList.findIndex(({ id }) => id === todoId);
  const item = todoList[itemIndex];
  const updatedItem = { ...item, ...params };
  updatedList.splice(itemIndex, 1, updatedItem);
  return updatedList;
}

export { createTodo, addTodo, updateTodo };
