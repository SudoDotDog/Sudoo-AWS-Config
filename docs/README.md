# Sudoo-AWS-Config

[![Continuous Integration](https://github.com/SudoDotDog/Sudoo-AWS-Config/actions/workflows/ci.yml/badge.svg)](https://github.com/SudoDotDog/Sudoo-AWS-Config/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-AWS-Config/branch/main/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-AWS-Config)
[![npm version](https://badge.fury.io/js/%40sudoo%2Faws-config.svg)](https://www.npmjs.com/package/@sudoo/aws-config)
[![downloads](https://img.shields.io/npm/dm/@sudoo/aws-config.svg)](https://www.npmjs.com/package/@sudoo/aws-config)

AWS Config for Node

## Install

```sh
yarn add @sudoo/aws-config
# Or
npm install @sudoo/aws-config --save
```

## Usage

```ts
import { AWSConfig } from "@sudoo/aws-config";

AWSConfig.declareUpdateFunction(() => {
    return {
        region: "us-east-1",
    };
});
AWSConfig.update(); // Update if not initiated
AWSConfig.check(); // If initiated
AWSConfig.ensure(); // Throw if not initiated
```
