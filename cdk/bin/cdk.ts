#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CartServiceStack } from '../lib/cdk-stack';

const app = new cdk.App();
new CartServiceStack(app, 'CartServiceStack', {
  env: { region: 'eu-west-1' },
});
