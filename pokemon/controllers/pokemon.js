'use strict'

const dynamo = require('../../common/dynamo')
const params = { TableName: 'pokemon' }

exports.entity = {
  async get(id) {
    params['Key'] = { id: id }
    const client = await dynamo.db.client()
    const result = await client.get(params).promise()
    return result.Item
  },
  async regist(req) {
    const item = JSON.parse(req.body)
    params['Item'] = item
    const client = await dynamo.db.client()
    await client.put(params).promise()
    return
  },
  async update(req) {
    const item = JSON.parse(req.body)
    params['Item'] = item
    const client = await dynamo.db.client()
    await client.put(params).promise()
    return
  },
}
