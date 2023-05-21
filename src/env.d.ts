declare namespace NodeJS {
  /** Merge declaration with `process` in order to override the global-scoped env. */
  export interface ProcessEnv {
    /**
     * Built-in environment variable.
     * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
     *
     */
    POKEMONTCG_API_KEY: '90170835-e8a0-403d-ac5c-ea1b3002a3c6';
    readonly NG_APP_ENV: string;

    // Add your environment variables below
  }
}
