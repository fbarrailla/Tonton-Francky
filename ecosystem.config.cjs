module.exports = {
  apps: [
    {
      name: 'tonton-francky',
      script: 'server.ts',
      interpreter: 'tsx',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3001,
      },
    },
    {
      name: 'backoffice',
      script: 'backoffice/run.cjs',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
    },
  ],
};
