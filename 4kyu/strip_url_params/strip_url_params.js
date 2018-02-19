stripUrlParams = (url, excludedParams)  => {
    const [baseUrl, params] = url.split('?')

    if (params === undefined 
        || (typeof excludedParams === undefined)) {
      return baseUrl;
    }
    
    let paramsLookup = {};
    if (excludedParams) {
      excludedParams.forEach(param => {
        paramsLookup[param] = true;
      });
    }
    
    const paramsArr = params.split('&');
    
    const paramsToBeLeft = paramsArr.filter(param => {
      const currentParam = param.split('=')[0];
      if (paramsLookup[currentParam] === undefined) {
        paramsLookup[currentParam] = true;
        return true;
      }
      return false;
    });
    
    return `${baseUrl}?${paramsToBeLeft.join('&')}`;
  };
  
  console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2')) // returns 'www.codewars.com?a=1&b=2'
  console.log(stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b'])) // returns 'www.codewars.com?a=1'
  console.log(stripUrlParams('www.codewars.com', ['b'])) // returns 'www.codewars.com'
  