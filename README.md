# Dotnet Parallel Sonar Scanner Github Action

It works like regular dotnet sonar scanner , except that it can run in parallel with test jobs (unit,integration, functional ...etc  if there're any).
If there're test jobs in your github actions workflow and want to use  [Regular dotnet sonar scanner](https://github.com/marketplace/actions/dotnet-sonarscanner) , you need to either 
pass test command and repeat the tests twice or you can pass code coverage results to the sonar scanning job after the tests are completed. However, either way adds up extra time to your CI workflow , which is not ideal.

If you want to use this action, you need to upload code coverage result as artifact to and pass the name of the artifacts and solution root path to the action. It will first build the solution then it will pool uploaded artifacts and once the artifacts are uploaded by test jobs , the scanning result will be posted to sonarcloud/sonarqube server.

It also caches the sonar plugins.

## Usage
See [action.yml](action.yml) and [Sample Repo](https://github.com/NazmiAltun/dotnet-sonar-sample)

```yml
....
  - name: Scan
    uses: NazmiAltun/dotnet-parallel-sonar-scan@v1
    with:
      sonar-token: ${{ secrets.SONAR_TOKEN }}  #SONAR_TOKEN needs to be set in the secrets
      test-result-artifacts: unit-test-results,integration-test-results
      coverage-solution-root-path: /app # e.g; WORKDIR in dockerfile is set to /app.
    env:
        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
....
```

## TODO 
- Detect coverage-solution-root-path rather than getting it via parameters.

# License

The scripts and documentation in this project are released under the [MIT License](LICENSE)

# Contributions

Contributions are welcome!
