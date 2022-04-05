import { checkError, client } from './client';

export async function fetchTodos() {
  const resp = await client.from('todos').select('*').order('id');
  return checkError(resp);
}

export async function checkOffItem(status, id) {
  const resp = await client.from('todos').update({ complete: status }).match({ id });
  return checkError(resp);
}

export async function addNewTodo(todo) {
  const resp = await client.from('todos').insert({ todo: todo });
  return checkError(resp);
}