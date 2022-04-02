import { checkError, client } from './client';

export async function fetchTodos() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}