export interface TranslationData { //changed from Root
    available_providers: string[]
    from_lang: string
    to_lang: string
    provider: Provider
  }
  
  export interface Provider {
    headers: Headers
    from_lang: string
    to_lang: string
    secret_access_key: any
    region: any
    kwargs: Kwargs
    email: string
    languages: string
  }
  
  export interface Headers {
    "User-Agent": string
  }
  
  export interface Kwargs {}
  