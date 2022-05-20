const headerConfig = (authority) =>
  authority === 'ARG'
    ? {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }
    : {
        authority: process.env.AUTORITY_PY,
        accept: 'application/json, text/javascript, */*; q=0.01',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Connection': 'keep-alive'
      };

export default headerConfig;
