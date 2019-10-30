export const environment = {
  production: true,
  chumbok: {
    enableMock: false,
    apiCallThroughLocalServer: true,
    pingEndpoint: 'http://dev.chumbok.com:33001/gateway/uaa/ping',
    uaaApiBaseEndpoint: 'http://localhost:33002',
    apiBaseEndpointLocalServer: 'http://dev.chumbok.com:33012',
    appName: 'dentist-point'
  }
};
