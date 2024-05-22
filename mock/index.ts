import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/users',
    method: 'post',
    response: () => {
      return [];
    },
  },
  {
    url: '/api/users',
    method: 'get',
    response: () => {
      return {name: 'sony.lin'};
    },
  },
] as MockMethod[];
