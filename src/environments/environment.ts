// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  chumbok: {
    enableMock: false,
    pingEndpoint: 'http://localhost:33002/ping',
    dentistPointApiBaseEndPoint: 'http://localhost:33012',
    uaaApiBaseEndpoint: 'http://localhost:33002',
    serverManagerApiBaseEndpoint: 'http://localhost:33020',
    appName: 'dentist-point',
    // appName: 'uaa',
    // appName: 'server-manager',
  }

};
