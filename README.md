# Project Name

> The proxy server for Goodreads' proxy. **Renders Description, Author, and Review modules via `bundle.js` files running on each service and loaded directly in index.html**

## Related Projects

> These services will need to be setup (either locally or remotely) to run the proxy

  - https://github.com/rpt12-sdc-highgarden/aarushi-service
  - https://github.com/rpt12-sdc-highgarden/alyssa-service
  - https://github.com/rpt12-sdc-highgarden/mike-service

## Usage

> For setup, please follow this pattern:

1. `npm install`
2. ensure `index.html` script tags at bottom are pointed to the correct three `bundle.js` files on remote services. **Skipping this step will result in the proxy not working**
3. `npm start`
4. Navigate to [localhost:3000](http://localhost:3000)
5. `artillery run stressTest.yml` for stress testing

