# Image processing application

## Overview
This application is designed using the AWS Serverless Application Model (SAM) and features a robust architecture that includes two Amazon S3 buckets, a Lambda function, and an API Gateway. It integrates a frontend client developed in Angular, allowing users to interact seamlessly with the serverless backend. The core functionality revolves around image processing: users send files through the client, which are then stored in an S3 bucket. This action triggers a Lambda function written in Python that analyzes the uploaded file, generates metadata, and saves this metadata file to a different S3 bucket.

## Architecture
- **Amazon S3 Buckets**: Two S3 buckets are used. The first bucket is for uploading and storing files sent by users. The second bucket is for storing metadata files generated by the Lambda function.
- **AWS Lambda**: A serverless computing service that runs the Python code in response to triggers (file uploads to the first S3 bucket), processes the files, generates metadata, and stores the output in the second S3 bucket.
- **Amazon API Gateway**: Manages secure access to the Lambda function, allowing the frontend client to interact with the backend without direct access to the resources.

## Frontend Client
Developed with Angular, the frontend client provides a user-friendly interface for uploading files to the application. It communicates with the backend through API Gateway, ensuring a smooth and secure interaction.

## File Processing Flow
1. The user uploads an image via the Angular frontend client.
2. The file is sent to the first S3 bucket.
3. The upload triggers the Lambda function.
4. The Lambda function fetches the uploaded file, analyzes it, generates metadata, and saves the metadata file to the second S3 bucket.

## Getting Started
### Prerequisites
- AWS Account
- AWS CLI installed and configured
- Node.js and NPM installed (for Angular frontend)
- Angular CLI installed
- Pyhton

### Deployment
1. **Deploy the Backend**:
   - Navigate to the SAM template directory.
   - Use the SAM CLI to build your application: `sam build --use-container`
   - Deploy your application: `sam deploy --guided`

2. **Setup Frontend**:
   - Navigate to the frontend directory.
   - Install dependencies: `npm install`
   - Run the Angular application: `ng serve`
   - Access the application at `http://localhost:4200`.

### Usage
- Open the Angular client in your browser.
- Follow the UI prompts to upload a file.
- The application processes the file and saves the metadata in the designated S3 bucket.

## Security
Ensure that your AWS resources (S3 buckets, Lambda functions, and API Gateway) are configured with appropriate permissions and access controls to safeguard your data and operations.
