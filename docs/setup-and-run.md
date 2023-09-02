1. Install dependencies:

```bash
$ npm install
```

2. Prepare **.env** file

```bash
$ cp .env.sample .env
```

3. Then, run in development mode:

```bash
$ npm run dev
```

Now, please open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. Or, build and run in production mode:

```bash
$ npm run build
$ npm run start
```

5. Running unit Tests:

```bash
$ npm run test
```

Or, with coverage:

```bash
$ npm run test:coverage
```

6. Running end to end Tests:

```bash
$ npm run test:e2e
```

Or to open the Cypress UI:

```bash
$ npm run cypress
```

7. Installing and running SonarQube:

```bash
$ docker pull sonarqube:latest
$ docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
```

Then run Sonar Scanner:

```bash
$ npm run sonar
```
