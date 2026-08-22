/**
 * HTTP request header name's constant options.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers}
 */
export const HttpHeader = Object.freeze({
    // Authentication
    Authorization: 'Authorization',
    WWWAuthenticate: 'WWW-Authenticate',
    ProxyAuthenticate: 'Proxy-Authenticate',
    ProxyAuthorization: 'Proxy-Authorization',

    // Caching
    Age: 'Age',
    CacheControl: 'Cache-Control',
    ClearSiteData: 'Clear-Site-Data',
    Expires: 'Expires',
    NoVarySearch : 'No-Vary-Search',

    // Conditionals
    LastModified: 'Last-Modified',
    ETag: 'ETag',
    IfMatch: 'If-Match',
    IfNoneMatch: 'If-None-Match',
    IfModifiedSince: 'If-Modified-Since',
    IfUnmodifiedSince: 'If-Unmodified-Since',
    Vary: 'Vary',

    // Connection management
    Connection: 'Connection',
    KeepAlive: 'Keep-Alive',

    // Content negotiation
    Accept: 'Accept',
    AcceptEncoding: 'Accept-Encoding',
    AcceptLanguage: 'Accept-Language',
    AcceptPatch: 'Accept-Patch',
    AcceptPost: 'Accept-Post',

    // Controls
    Expect: 'Expect',
    MaxForwards: 'Max-Forwards',

    // Cookies
    Cookie: 'Cookie',
    SetCookie: 'Set-Cookie',

    // CORS
    AccessControlAllowCredentials: 'Access-Control-Allow-Credentials',
    AccessControlAllowHeaders: 'Access-Control-Allow-Headers',
    AccessControlAllowMethods: 'Access-Control-Allow-Methods',
    AccessControlAllowOrigin: 'Access-Control-Allow-Origin',
    AccessControlExposeHeaders: 'Access-Control-Expose-Headers',
    AccessControlMaxAge: 'Access-Control-Max-Age',
    AccessControlRequestHeaders: 'Access-Control-Request-Headers',
    AccessControlRequestMethod: 'Access-Control-Request-Method',
    Origin: 'Origin',
    TimingAllowOrigin: 'Timing-Allow-Origin',

    // Downloads
    ContentDisposition: 'Content-Disposition',

    // Integrity digests
    ContentDigest: 'Content-Digest',
    ReprDigest: 'Repr-Digest',
    WantContentDigest: 'Want-Content-Digest',
    WantReprDigest: 'Want-Repr-Digest',

    // Integrity policy
    IntegrityPolicy: 'Integrity-Policy',
    IntegrityPolicyReportOnly: 'Integrity-Policy-Report-Only',

    // Message body information
    ContentLength: 'Content-Length',
    ContentType: 'Content-Type',
    ContentEncoding: 'Content-Encoding',
    ContentLanguage: 'Content-Language',
    ContentLocation: 'Content-Location',

    // Preferences
    Prefer: 'Prefer',
    PreferenceApplied: 'Preference-Applied',

    // Proxies
    Forwarded: 'Forwarded',
    Via: 'Via',

    // Range requests
    AcceptRanges: 'Accept-Ranges',
    Range: 'Range',
    IfRange: 'If-Range',
    ContentRange: 'Content-Range',

    // Redirects
    Location: 'Location',
    Refresh: 'Refresh',

    // Request context
    From: 'From',
    Host: 'Host',
    Referer: 'Referer',
    ReferrerPolicy: 'Referrer-Policy',
    UserAgent: 'User-Agent',

    // Response context
    Allow: 'Allow',
    Server: 'Server',

    // Security
    CrossOriginEmbedderPolicy: 'Cross-Origin-Embedder-Policy',
    CrossOriginOpenerPolicy: 'Cross-Origin-Opener-Policy',
    CrossOriginResourcePolicy: 'Cross-Origin-Resource-Policy',
    ContentSecurityPolicy: 'Content-Security-Policy',
    ContentSecurityPolicyReportOnly: 'Content-Security-Policy-Report-Only',
    ExpectCT: 'Expect-CT',
    PermissionsPolicy: 'Permissions-Policy',
    ReportingEndpoints: 'Reporting-Endpoints',
    StrictTransportSecurity: 'Strict-Transport-Security',
    UpgradeInsecureRequests: 'Upgrade-Insecure-Requests',
    XContentTypeOptions: 'X-Content-Type-Options',
    XFrameOptions: 'X-Frame-Options',
    XPermittedCrossDomainPolicies: 'X-Permitted-Cross-Domain-Policies',
    XPoweredBy: 'X-Powered-By',
    XXSSProtection: 'X-XSS-Protection',

    // Fetch metadata request headers
    SecFetchSite: 'Sec-Fetch-Site',
    SecFetchMode: 'Sec-Fetch-Mode',
    SecFetchUser: 'Sec-Fetch-User',
    SecFetchDest: 'Sec-Fetch-Dest',
    SecPurpose: 'Sec-Purpose',
    ServiceWorkerNavigationPreload: 'Service-Worker-Navigation-Preload',

    // Fetch storage access headers
    SecFetchStorageAccess: 'Sec-Fetch-Storage-Access',
    ActivateStorageAccess: 'Activate-Storage-Access',

    // Server-sent events
    ReportTo: 'Report-To',

    // Transfer coding
    TransferEncoding: 'Transfer-Encoding',
    TE: 'TE',
    Trailer: 'Trailer',

    // WebSockets
    SecWebSocketAccept: 'Sec-WebSocket-Accept',
    SecWebSocketExtensions: 'Sec-WebSocket-Extensions',
    SecWebSocketKey: 'Sec-WebSocket-Key',
    SecWebSocketProtocol: 'Sec-WebSocket-Protocol',
    SecWebSocketVersion: 'Sec-WebSocket-Version',

    // Other
    AltSvc: 'Alt-Svc',
    AltUsed: 'Alt-Used',
    Date: 'Date',
    Link: 'Link',
    RetryAfter: 'Retry-After',
    ServerTiming: 'Server-Timing',
    ServiceWorker: 'Service-Worker',
    ServiceWorkerAllowed: 'Service-Worker-Allowed',
    SourceMap: 'SourceMap',
    Upgrade: 'Upgrade',
    Priority: 'Priority',

    // Experimental: Attribution Reporting headers
    AttributionReportingEligible: 'Attribution-Reporting-Eligible',
    AttributionReportingRegisterSource: 'Attribution-Reporting-Register-Source',
    AttributionReportingRegisterTrigger: 'Attribution-Reporting-Register-Trigger',

    // Experimental: Client hints
    AcceptCH: 'Accept-CH',
    CriticalCH: 'Critical-CH',

    // Experimental: User agent client hints
    SecCHUA: 'Sec-CH-UA',
    SecCHUAArch: 'Sec-CH-UA-Arch',
    SecCHUABitness: 'Sec-CH-UA-Bitness',
    SecCHUAFormFactors: 'Sec-CH-UA-Form-Factors',
    SecCHUAFullVersion: 'Sec-CH-UA-Full-Version',
    SecCHUAFullVersionList: 'Sec-CH-UA-Full-Version-List',
    SecCHUAMobile: 'Sec-CH-UA-Mobile',
    SecCHUAModel: 'Sec-CH-UA-Model',
    SecCHUAPlatform: 'Sec-CH-UA-Platform',
    SecCHUAPlatformVersion: 'Sec-CH-UA-Platform-Version',
    SecCHUAWoW64: 'Sec-CH-UA-WoW64',
    SecCHPrefersColorScheme: 'Sec-CH-Prefers-Color-Scheme',
    SecCHPrefersReducedMotion: 'Sec-CH-Prefers-Reduced-Motion',
    SecCHPrefersReducedTransparency: 'Sec-CH-Prefers-Reduced-Transparency',

    // Experimental: Device and responsive image client hints
    SecCHDeviceMemory: 'Sec-CH-Device-Memory',
    SecCHDPR: 'Sec-CH-DPR',
    SecCHViewportHeight: 'Sec-CH-Viewport-Height',
    SecCHViewportWidth: 'Sec-CH-Viewport-Width',
    SecCHWidth: 'Sec-CH-Width',

    // Deprecated: Device and responsive image client hints
    DeviceMemory: 'Device-Memory',
    DPR: 'DPR',
    ViewportWidth: 'Viewport-Width',
    Width: 'Width',

    // Experimental: Network client hints
    Downlink: 'Downlink',
    ECT: 'ECT',
    RTT: 'RTT',
    SaveData: 'Save-Data',

    // Experimental: Compression dictionary transport
    AvailableDictionary: 'Available-Dictionary',
    DictionaryID: 'Dictionary-ID',
    UseAsDictionary: 'Use-As-Dictionary',

    // Experimental: Privacy
    DNT: 'DNT',
    Tk: 'Tk',
    SecGPC: 'Sec-GPC',

    // Experimental: Security
    OriginAgentCluster: 'Origin-Agent-Cluster',

    // Experimental: Server-sent events
    NEL: 'NEL',

    // Experimental: Topics API
    ObserveBrowsingTopics: 'Observe-Browsing-Topics',
    SecBrowsingTopics: 'Sec-Browsing-Topics',

    // Experimental: Other
    EarlyData: 'Early-Data',
    IdempotencyKey: 'Idempotency-Key',
    SetLogin: 'Set-Login',
    SpeculationRules: 'Speculation-Rules',
    SecSpeculationTags: 'Sec-Speculation-Tags',
    SupportsLoadingMode: 'Supports-Loading-Mode',

    // Non-standard
    XForwardedFor: 'X-Forwarded-For',
    XForwardedHost: 'X-Forwarded-Host',
    XForwardedProto: 'X-Forwarded-Proto',
    XDNSPrefetchControl: 'X-DNS-Prefetch-Control',
    XRobotsTag: 'X-Robots-Tag',

    // Deprecated
    Pragma: 'Pragma',
    Warning: 'Warning',
});

/**
 * HTTP request header name's constant options.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers}
 * 
 * @interface
 */
export type HttpHeader = typeof HttpHeader;

/**
 * HTTP header name.
 * 
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers}
 */
export type HeaderName = typeof HttpHeader[keyof typeof HttpHeader];