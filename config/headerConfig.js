const headerConfig = (token) => ({
    'accept': 'application/json',
    'EmpID': 1,
    'authorization': 'Basic '+token
  });

export default headerConfig;