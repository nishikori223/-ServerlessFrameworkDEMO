'use strict'

const s3 = require('../../common/s3')

let params = {
  'Bucket':'',
  'Prefix':'',
}

exports.entity = {
  async getList(bucket) {
    const client = await s3.s3.client()
    params.Bucket = bucket
    const result = await client.listObjectsV2(params).promise();
    return result;
  }
}
