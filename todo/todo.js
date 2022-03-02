import produce from "immer";

function createTodo(id, title) {
  return { id, title };
}

function addTodo(todoList = [], todoItem) {
  return produce(todoList, (draftTodo) => {
    draftTodo.push(todoItem);
  });
}

function updateTodo(todoList = [], todoId, params) {
  return produce(todoList, (draftTodo) => {
    let item = draftTodo.find(({ id }) => id === todoId);
    item.id = todoId;
    item.title = params.title;
  });
}

export { createTodo, addTodo, updateTodo };
