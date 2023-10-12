<h1 style="text-align: center;">Chem-tech-mobile-app</h1>

## About

📱 Chem-tech-mobile-app is a mobile application for the chemical industry. It is a part of the Chem-tech project. It is written in React Native and TypeScript. It is a cross-platform application, which means that it can be run on both Android and IOS devices. Check the design 🎨 [figma](https://www.figma.com/file/SHuA4PBjmBcX8BMmpSRwX8/Chem-tech---app?type=design&node-id=246-1407&mode=design&t=Jj2ipxZH9GRzPiCg-0)

<!-- Table of contest -->

## Table of Contents

- [About](#about)
- [Table of Contents](#table-of-contents)
- [Get started](#get-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Tests](#tests)

<!-- Get started -->

## Get started

### Prerequisites

- [Node.js](https://nodejs.org/en/)

### Installation

1. Clone the repo

```sh
git clone
```

2. Install node modules inside `app` directory

```sh
npm install
```

3. Create `.env.development` file inside `app` directory and add the following variables
   ```
   APP_NAME={{name of app}}
   AWS_COGNITO_CLIENT_ID={{cognito client id}}
   AWS_DEFAULT_REGION={{aws default regionfor example eu-central-1}}
   AWS_COGNITO_USER_POOL_ID={{cognito user pool id}}
   AWS_COGNITO_AUTHORITY=https://cognito-idp.${aws_default_region}.amazonaws.com/$%7BAWS_COGNITO_USER_POOL_ID}
   ```

1) ‼ Only for IOS - install pods

```
cd /app/ios
pod install
```

## Tests

Project is equipped with testing. To run tests, use the following command:

1. Lint test

```
npm run lint-fix
```

2. Deepsource

Deepsource tests are runned with github actions. You can't run them locally

3. Selenium

In progress

```
Tests are in progress... Please don't kill me im working on it
```
