import * as cdk from "aws-cdk-lib";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as logs from "aws-cdk-lib/aws-logs";
import type { Construct } from "constructs";

export class LearnHono6AwslambdaStack extends cdk.Stack {
	constructor(scope: Construct, id: string, props?: cdk.StackProps) {
		super(scope, id, props);

		const fn = new NodejsFunction(this, "lambda1", {
			entry: "lambda/index.ts",
			handler: "handler",
			runtime: lambda.Runtime.NODEJS_20_X,
			bundling: {
				minify: true, // minifyオプションを有効にする
				// format: OutputFormat.ESM, // ES Modulesを使用する。`[Warning at /LearnHono6AwslambdaStack] If you are relying on AWS SDK v2 to be present in the Lambda environment already, please explicitly configure a NodeJS runtime of Node 16 or lower.`とか言われる。
				// externalModules: ["aws-sdk"], // AWS SDKは外部モジュールとして扱う（デフォルト）
			},
		});
		new logs.LogGroup(this, "lambda1LogGroup", {
			logGroupName: `/aws/lambda/${fn.functionName}`,
			removalPolicy: cdk.RemovalPolicy.DESTROY,
			retention: logs.RetentionDays.ONE_WEEK,
		});

		fn.addFunctionUrl({
			authType: lambda.FunctionUrlAuthType.NONE,
		});
		const gw = new apigw.LambdaRestApi(this, "myapi1", {
			handler: fn,
		});
		new cdk.CfnOutput(this, "apiurl", {
			value: gw.url,
		});
	}
}
