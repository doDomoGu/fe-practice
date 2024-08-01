let encoder = new TextEncoder()

async function verifySignature(secret, header, payload) {
  let parts = header.split('=')
  let sigHex = parts[1]
  console.log(sigHex)
  let algorithm = { name: 'HMAC', hash: { name: 'SHA-256' } }

  let keyBytes = encoder.encode(secret)
  let extractable = false
  let key = await crypto.subtle.importKey(
    'raw',
    keyBytes,
    algorithm,
    extractable,
    ['sign', 'verify']
  )

  let sigBytes = hexToBytes(sigHex)
  let dataBytes = encoder.encode(payload)
  console.log({ algorithmName: algorithm.name, key, sigBytes, dataBytes })
  let equal = await crypto.subtle.verify(
    algorithm.name,
    key,
    sigBytes,
    dataBytes
  )

  return equal
}

function hexToBytes(hex) {
  let len = hex.length / 2
  let bytes = new Uint8Array(len)

  let index = 0
  for (let i = 0; i < hex.length; i += 2) {
    let c = hex.slice(i, i + 2)
    let b = parseInt(c, 16)
    bytes[index] = b
    index += 1
  }

  return bytes
}

export default verifySignature
