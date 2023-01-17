async function silentHandle<T, U = Error>(
  fn: Function,
  ...args: Array<unknown>
): Promise<[U, null] | [null, T]> {
  let result: [U, null] | [null, T]

  try {
    result = [null, await fn(...args)]
  } catch (e: any) {
    result = [e, null]
  }

  return result
}

export default silentHandle
