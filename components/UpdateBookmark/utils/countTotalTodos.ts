export const countTotalTodos = (todos: any[] | undefined): string => {
  if (todos) return todos.length.toString();
  return "0";
};
