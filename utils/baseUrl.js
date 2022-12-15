const baseUrl = process.env.NODE_ENV === "production" 
? 'https://amazon-trader-api.herokuapp.com' 
: 'https://amazon-trader-api.herokuapp.com';

export default baseUrl;