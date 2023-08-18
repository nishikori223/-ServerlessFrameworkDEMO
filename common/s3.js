'use strict'

const aws = require('aws-sdk')

exports.s3 = {
  async client() {
    return process.env.IS_OFFLINE
      ? new aws.S3({
          s3ForcePathStyle: true,
          region: 'localhost',
          accessKeyId: 'S3RVER',
          secretAccessKey: 'S3RVER',
          endpoint: new aws.Endpoint('http://localhost:4568'),
        })
      : new aws.S3()
  },
}
