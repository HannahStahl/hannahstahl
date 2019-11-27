const dev = {
  emailServiceURL: 'https://m9nbwrw0ye.execute-api.us-east-1.amazonaws.com/dev',
};

const prod = {
  emailServiceURL: 'https://3x7y40mgsh.execute-api.us-east-1.amazonaws.com/prod',
};

const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  ...config,
  cloudFrontURL: 'http://d3me27l3ng8az4.cloudfront.net',
};
