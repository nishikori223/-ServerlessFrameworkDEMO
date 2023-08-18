'use strict'

const aws = require('aws-sdk')

exports.db = {
  async client() {
    return process.env.IS_OFFLINE
      ? new aws.DynamoDB.DocumentClient({
          region: 'localhost',
          endpoint: 'http://localhost:8000',
          accessKeyId: 'xxxxxxxxx',
          secretAccessKey: 'xxxxxx',
        })
      : new aws.DynamoDB.DocumentClient()
  },
}
