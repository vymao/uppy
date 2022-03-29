/**
 * instantiates the aws-sdk s3 client that will be used for s3 uploads.
 *
 * @param {object} companionOptions the companion options object
 */
 module.exports = (companionOptions) => {
    let s3Client = null
    if (companionOptions.providerOptions.s3) {
      const S3 = require('aws-sdk/clients/s3')
      const AWS = require('aws-sdk')
      const s3ProviderOptions = companionOptions.providerOptions.s3
      const dynamoProviderOptions = companionOptions.providerOptions.dynamo

      const s3ClientOptions = {
        signatureVersion: 'v4',
        endpoint: s3ProviderOptions.endpoint,
        region: s3ProviderOptions.region,
      }

      const dynamoClientOptions = {
        endpoint: dynamoProviderOptions.endpoint,
        region: dynamoProviderOptions.region,
      }
  
      // Use credentials to allow assumed roles to pass STS sessions in.
      // If the user doesn't specify key and secret, the default credentials (process-env)
      // will be used by S3 in calls below.
      if (s3ProviderOptions.key && s3ProviderOptions.secret) {
        dynamoClientOptions.credentials = new AWS.Credentials(
          s3ProviderOptions.key,
          s3ProviderOptions.secret,
        )
      }
      dynamoClient = new DynamoDBClient(dynamoClientOptions)
    }
  
    return dynamoClient
  }
  