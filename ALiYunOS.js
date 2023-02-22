/**
 * 获取阿里云client配置
 * @param {Object} config 阿里云配置
 * @param {Number} timeout  超时时间, 默认为 60000
 * @returns {Promise<Client>}
 */
const getOssClient = async function (config, timeout = 60000) {
  const OSS = require('ali-oss')
  const ossConfig = {
    accessKeyId: config.accessKeyId,
    accessKeySecret: config.accessKeySecret,
    bucket: config.bucketName,
    endpoint: 'oss-cn-shenzhen.aliyuncs.com',
    stsToken: config.securityToken,
    region: 'oss-cn-shenzhen',
    timeout: timeout
  }
  return new OSS(ossConfig)
}

/**
 * 完整上传
 * @param bufferArr  文件
 * @param timeout 超时时间, 默认为 60000
 * @param config 阿里云配置
 * @returns {Promise<*>}
 */
const uploadFile = async function (bufferArr, config, timeout = 60000) {
  try {
    const client = await getOssClient(config, timeout)
    return await client.put(config.objectKey, bufferArr)
  } catch (e) {
    console.error('完整上传文件失败', e)
    throw e
  }
}

export default {
  getOssClient,
  uploadFile
}
