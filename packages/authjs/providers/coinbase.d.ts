/**
 * <div style={{backgroundColor: "#000", display: "flex", justifyContent: "space-between", color: "#fff", padding: 16}}>
 * <span>Built-in <b>Coinbase</b> integration.</span>
 * <a href="https://coinbase.com/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/providers/coinbase.svg" height="48" width="48"/>
 * </a>
 * </div>
 *
 * @module providers/coinbase
 */
import type { OAuthConfig, OAuthUserConfig } from "./index.js";
/**
 * Add Coinbase login to your page.
 *
 * ### Setup
 *
 * #### Callback URL
 * ```
 * https://example.com/api/auth/callback/coinbase
 * ```
 *
 * #### Configuration
 *```js
 * import Auth from "@auth/core"
 * import Coinbase from "@auth/core/providers/coinbase"
 *
 * const request = new Request(origin)
 * const response = await Auth(request, {
 *   providers: [Coinbase({ clientId: COINBASE_CLIENT_ID, clientSecret: COINBASE_CLIENT_SECRET })],
 * })
 * ```
 *
 * ### Resources
 *
 *  - [Coinbase OAuth documentation](https://developers.coinbase.com/api/v2)
 *
 * ### Notes
 *
 * :::tip
 * This Provider template has a 2 hour access token to it. A refresh token is also returned.
 * :::
 *
 * By default, Auth.js assumes that the Coinbase provider is
 * based on the [OAuth 2](https://www.rfc-editor.org/rfc/rfc6749.html) specification.
 *
 * :::tip
 *
 * The Coinbase provider comes with a [default configuration](https://github.com/nextauthjs/next-auth/blob/main/packages/core/src/providers/coinbase.ts).
 * To override the defaults for your use case, check out [customizing a built-in OAuth provider](https://authjs.dev/guides/providers/custom-provider#override-default-options).
 *
 * :::
 *
 * :::info **Disclaimer**
 *
 * If you think you found a bug in the default configuration, you can [open an issue](https://authjs.dev/new/provider-issue).
 *
 * Auth.js strictly adheres to the specification and it cannot take responsibility for any deviation from
 * the spec by the provider. You can open an issue, but if the problem is non-compliance with the spec,
 * we might not pursue a resolution. You can ask for more help in [Discussions](https://authjs.dev/new/github-discussions).
 *
 * :::
 */
export default function Coinbase(options: OAuthUserConfig<Record<string, any>>): OAuthConfig<Record<string, any>>;
//# sourceMappingURL=coinbase.d.ts.map