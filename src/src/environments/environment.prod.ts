export const environment = {
  production: true,
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
