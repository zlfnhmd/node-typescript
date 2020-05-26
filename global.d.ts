/**
 * Do not add any imports to this file as it turns it into a module instead of
 * creating types on the global.
 * @see https://stackoverflow.com/a/35074833/4101408
 */

declare namespace NodeJS {
  interface Global {
    window: never;
  }

  export interface ProcessEnv {
    /** NODE_ENV is used to indicate production/development environment */
    NODE_ENV: 'development' | 'production';

    /**
     * Used to indicate the different application environments we have.
     * Since other libraries (like React etc.) have specific checks against NODE_ENV for production optimizations, we
     * use a separate environment variable to indicate application environments.
     */
    APP_ENV: 'development' | 'test' | 'staging' | 'preproduction' | 'production';
  }
}
