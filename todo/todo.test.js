import { addTodo, createTodo, updateTodo } from "./todo";

test("should create a todo item", () => {
  expect(createTodo("1", "make a bug fix")).toMatchObject({
    id: "1",
    title: "make a bug fix",
  });
});

test("should add todoitem to list", () => {
  const result = addTodo([], createTodo("2", "fix prod bug"));
  expect(result).toHaveLength(1);
  expect(result[0]).toMatchObject({
    id: "2",
    title: "fix prod bug",
  });
});

test("should update todo based on id", () => {
  const currentList = [
    { id: 1, title: "something" },
    { id: 2, title: "something other than something" },
  ];
  const result = updateTodo(currentList, 2, { title: "updated todo" });
  const [_, second] = result;
  expect(second).toMatchObject({ id: 2, title: "updated todo" });
});
