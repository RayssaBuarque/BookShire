const proxy = [
    {
      context: '/api',
      target: 'https://0un8uy3hp5.execute-api.us-east-1.amazonaws.com/dev',
      logLevel: 'debug',
      // pathRewrite: {'^/api' : ''}
    }
];
  
module.exports = proxy;


// "headers": {"Authorization": "Basic cm8vdDpub3ZlvGw="}