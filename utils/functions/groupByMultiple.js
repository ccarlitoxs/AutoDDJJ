export const groupByMultiple = (data, keys) => {   
    return data.reduce((result, r) => {
      const key = keys.map(k => r[k]).join(',');     
     (result[key] = result[key] || []).push(r);
      return result   
    }, {})
}