module.exports = {
  apps: [{
    name: "portfolio",
    cwd: "/var/www/portfolio",
    script: "node_modules/next/dist/bin/next",
    args: "start -p 3000",
    env: {
      NODE_ENV: "production"
    },
    max_restarts: 10,
    watch: false,
    instances: 1,         
    exec_mode: "fork"  
  }]
}