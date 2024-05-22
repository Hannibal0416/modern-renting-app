import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/oauth2/token',
    method: 'post',
    response: () => {
      return {
        "access_token": "M68FDiPO_-Axxa7Woaq29THUOk3k_fB978fN8a9pu9q2ylTiRRYyELQTFUPB4tzy2YXp5wOfsZ_Js9qPTvOZtCpXVyQworUgzFJeEYI1rR6gsC5EBs7Lvqki478lUlCe",
        "refresh_token": "bAGiwRqV-vXnZ3WxFLEAAT4b_5WukSXI8VoGpvPifrKdzQWE_wRUImKilegZvw_Zl9gXCLEm3jEF6gjhGcJ9FwdV1RvqyVwA_6hSzOr44HnliogMVDvIxSRr7ubHpB_e",
        "token_type": "Bearer",
        "expires_in": 17999,
      }
    },
  },
  {
    url: '/oauth2/revoke',
    method: 'post',
    response: () => {
      return ''
    },
  },
  {
    url: '/api/users',
    method: 'post',
    response: () => {
      return  {
        "username": "Sony",
        "email": "Sony.lin@taodigitalusa.com",
        "phone": "0988888888"
      };
    },
  },
  {
    url: '/api/users',
    method: 'put',
    response: () => {
      return  {
        "username": "Sony",
        "email": "Sony.lin@taodigitalusa.com",
        "phone": "0988888888"
      };
    },
  },
  {
    url: '/users',
    method: 'get',
    response: () => {
      return {
        "username": "Sony",
        "email": "Sony.lin@taodigitalusa.com",
        "phone": "0988888888"
      };
    },
  },
] as MockMethod[];
