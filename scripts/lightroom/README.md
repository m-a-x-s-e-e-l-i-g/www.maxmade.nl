# Lightroom cloud API access proof

This is the first gate for a custom MAXmade photography gallery. It checks access
to the cloud catalog, lists albums, and optionally downloads one existing edited
2048px JPEG from a selected album. It only makes GET requests to Lightroom.

Nothing is deployed or published. No Adobe photos or album settings are changed.
Tokens obtained by the OAuth helper are saved with Windows DPAPI encryption,
bound to the current Windows user. Local results live in the Git-ignored
`.lightroom-proof/` directory, outside `static/` and the site build.

## Adobe setup

1. Open [Adobe Developer Console](https://developer.adobe.com/console/). Review any
   updated Developer Terms yourself before continuing.
2. Create a project for MAXmade Photography. Choose **Add API → Creative Cloud →
   Lightroom Services**, as described in Adobe's
   [integration guide](https://developer.adobe.com/lightroom/lightroom-api-docs/getting-started/create-integration/).
   If Lightroom Services is unavailable, API eligibility is the blocker. Do not
   substitute the Firefly Lightroom processing API: it is a different product.
3. Obtain a **user access token** for your Lightroom account and API key. Follow
   Adobe's [Lightroom authentication guide](https://developer.adobe.com/lightroom/lightroom-api-docs/getting-started/authenticate-customers/).
   It specifies `openid,AdobeID,lr_partner_apis,lr_partner_rendition_apis`. Check the
   scopes actually entitled to the key. A server-to-server token cannot stand in
   for permission to your personal Lightroom library.
4. Copy the two placeholders in `.env.example` into `.env.lightroom.local` and fill
   them locally. Do not paste tokens into chat or put them in a `PUBLIC_` variable.
   This proof does not need the client secret. Keep credentials in a secure store
   for any eventual deployed integration.

Adobe's general IMS scope table and Lightroom-specific guide differ. Use the
Lightroom-specific scopes and verify them against the actual console credential;
the live access test is what establishes entitlement.

Console check on 2026-10-28: Lightroom Services is available on Max's account,
labelled "Requires Adobe review". Its OAuth Web App setup includes mandatory
`lr_partner_apis`, `openid`, `offline_access`, `AdobeID` and
`lr_partner_rendition_apis` scopes. The UI says these cannot be deselected;
`lr_partner_apis` permits both reading and writing photos, even though this proof
only reads. Having `offline_access` listed does not yet prove token renewal works.

## Run (Node.js 22.6 or newer)

For the approved OAuth Web App credential, the development redirect is
`https://localhost:4280/lightroom/callback`. With client ID and secret configured
locally, run:

```sh
npm run lightroom:authorize
```

Open the URL from `.lightroom-proof/oauth-request.json` and complete Adobe's consent
yourself. No local HTTPS server is started. The browser's final localhost address
will show a connection error; copy that full address into
`.lightroom-proof/oauth-response.txt`. Do not bypass any certificate warning or
paste the code into chat. The helper checks state and PKCE, exchanges the code
with Adobe, tests an immediate refresh if a refresh token is provided, then reads
Parkour (or the first regular photo album) and saves one JPEG. Credentials and
tokens are encrypted in `.lightroom-proof/credentials.dpapi` using Windows DPAPI;
they can only be unlocked by the same Windows user. Both handoff files are removed
on completion or timeout. A one-shot
`.lightroom-proof/credential-input.json` can supply `clientId` and `clientSecret`
instead of an environment file; it is consumed and deleted immediately.

After authorizing, `lightroom:probe` reuses the saved access token without repeating
consent. This proof does not automatically renew an expired token yet. A successful
immediate refresh exchange is evidence that refresh works now, not proof that it
will remain valid indefinitely.

Alternatively, with a user access token obtained separately:

```sh
npm run lightroom:probe
npm run lightroom:probe -- --album ALBUM_ID_FROM_THE_LIST
```

The first command only lists albums. The second checks the selected album's paged
contents and saves `sample.jpg` and `result.json` locally. Open the JPEG to confirm
the current edit visually. A missing or stale rendition is a failed proof; this
tool deliberately does not generate a replacement or silently use an older size.

The live API returned `collection` for ordinary user albums and `collection_set`
for folders, unlike the `project` examples in the reference. The probe accepts
regular `collection` and partner `project` albums; smart albums remain unverified.

```sh
npm run test:lightroom
```

The tests use mocked Adobe responses and do not establish live account access.

## Live proof on 2026-10-28

- Created the MAXmade Photography OAuth Web App integration in development mode.
- Account consent succeeded; catalog enumeration returned 63 albums / folders.
- An immediate refresh-token exchange succeeded.
- Read all 75 members of Parkour and downloaded an existing 2048px JPEG
  (345,793 bytes). The image opened correctly for visual inspection. Whether it
  matches the owner's latest intended edit is not independently established.
- Saved the credential encrypted with Windows DPAPI. No tokens, credential files
  or downloaded photographs are included in the repository or public build.

These checks establish real account and image access, not a deployed gallery or
continuous sync. The development integration has not been submitted for review.

## Gallery implementation

The [photography gallery](../../services/photography/README.md) now implements the
owner's Parkour and Favorites selection, web-image caching, encrypted hosted
credentials, renewable authentication and a Netlify background schedule. Local
browser and sync checks use real photos. Production setup, hosted function
verification and long-term token renewal are separate from this access proof.

The local authorization helper is a development handoff, not a public connection
endpoint. Adobe's [IMS reference](https://developer.adobe.com/developer-console/docs/guides/authentication/UserAuthentication/ims)
requires HTTPS redirect URIs. Never bypass browser certificate warnings.
