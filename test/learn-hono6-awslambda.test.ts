/// <reference types="bun-types" />
import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { test } from "bun:test";

import { LearnHono6AwsLambdaStack } from "../lib/learn-hono6-awslambda-stack";

test("synthesizes the Lambda, URL, API Gateway, and log group", () => {
	const app = new App();
	const stack = new LearnHono6AwsLambdaStack(app, "MyTestStack");
	const template = Template.fromStack(stack);

	template.resourceCountIs("AWS::Lambda::Function", 1);
	template.hasResourceProperties("AWS::Lambda::Function", {
		Runtime: "nodejs24.x",
	});

	template.resourceCountIs("AWS::Lambda::Url", 1);
	template.hasResourceProperties("AWS::Lambda::Url", {
		AuthType: "NONE",
	});

	template.resourceCountIs("AWS::ApiGateway::RestApi", 1);
	template.resourceCountIs("AWS::ApiGateway::Deployment", 1);

	template.resourceCountIs("AWS::Logs::LogGroup", 1);
	template.hasResourceProperties("AWS::Logs::LogGroup", {
		RetentionInDays: 7,
	});
});
