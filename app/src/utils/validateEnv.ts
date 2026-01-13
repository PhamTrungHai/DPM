/**
 * Environment validation utility
 * - Fails fast if required env vars are missing or empty
 * - Works in Node.js and Vite environments
 */

type EnvSource = Record<string, string | undefined>

export interface ValidateEnvOptions {
  /**
   * Required environment variable names
   */
  required: readonly string[]

  /**
   * Optional prefix filter (ex: VITE_)
   */
  prefix?: string

  /**
   * Throw error instead of console.error
   * Default: true
   */
  throwOnError?: boolean
}

export function validateEnv(
  env: ImportMetaEnv | EnvSource,
  options: ValidateEnvOptions
): void {
  const {
    required,
    prefix,
    throwOnError = true
  } = options

  const missing: string[] = required.filter(
    (k) => !env[prefix ? `${prefix}${k}` : k]
  )

  if (missing.length > 0) {
    const message =
      `Missing required environment variables:\n` +
      missing.map((k) => `  - ${k}`).join('\n')

    if (throwOnError) {
      throw new Error(message)
    } else {
      console.error(message)
    }
  }
}
