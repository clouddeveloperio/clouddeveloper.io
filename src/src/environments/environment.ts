// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  appInsights: {
    instrumentationKey: '3e4e9452-9312-4cb9-854c-0d40bc744fe0'
  },
  azureContainers: {
    baseUrl: 'blob.core.windows.net',
    playlist: 'clouddeveloperio'
  },
  tracking: {
    getVisitorCount: 'https://clouddeveloperiofunc.azurewebsites.net/api/GetVisitorCount?code=vsJ0tESibuHAzMMvSjfUrVOlegI1bg59eJnSvcIpwRc/jnyTTfVYDw==',
    updateVisitorCount: 'https://clouddeveloperiofunc.azurewebsites.net/api/UpdateVisitorCount?code=CMtdQVjF4VIJ2MPAGYmTdhdRBHUj3wvPDOdEdqqSnY6hZ2YIGIZMag=='
  }
};
