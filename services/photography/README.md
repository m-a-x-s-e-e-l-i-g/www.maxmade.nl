# Lightroom photography gallery

The gallery lives at `/photography`, with `/photography/parkour` and
`/photography/favorites`. These are the only two albums the owner selected for
publication. `albums.json` contains the private source IDs; the public route list
in `src/lib/photography/albums.json` contains only slugs and titles.

## Local development

Use Node.js 22.18 or newer. After the one-time Lightroom connection described in
`scripts/lightroom/README.md`:

```sh
npm run photography:sync
npm run dev
```

The sync uses the Windows DPAPI credential from `.lightroom-proof/`. Web images
and a complete gallery manifest are stored in `.photography-cache/`. Both folders
are ignored by Git and are outside the public asset directory. The frontend only
receives the selected albums and their web-image references.

Photo rows preserve original proportions. The fullscreen viewer supports arrow
keys, Escape, pointer swipes and explicit previous/next/close buttons. Without
JavaScript, photograph links open the corresponding web image.

```sh
npm run test:lightroom
npm run test:photography
npm run check
npm run build
```

## Sync behavior

- Only allowlisted album IDs are read for publication. Other Lightroom albums
  never become public just because they exist or are shared through Adobe.
- The source album's custom or capture-date sort order is respected. A collapsed
  stack contributes its cover photo, not every hidden member of the stack.
- Adds, removals, captions, edits and title changes are read from Lightroom.
  Deleting a whole album is applied only after Adobe confirms its ID returns 404.
- Unchanged images reuse cached derivatives. Images are rotated correctly,
  converted to sRGB WebP at 640/1280/2048px, and stripped of EXIF/XMP metadata.
- Every selected album and image must finish before one atomic manifest update
  publishes the result. An Adobe failure preserves the last successful gallery.
  Fully completed private image-cache entries survive a partial run for retry.
- A lease covers token refresh and the complete image sync, preventing overlapping
  jobs from racing refresh-token rotation. Expired locks in hosted storage can be
  reclaimed using conditional writes. A local crash may leave `sync.lock`; remove
  that single file only after confirming no local sync process is running.
- Old image objects remain in storage for safe retries; they are not served unless
  referenced by the current allowlisted manifest. Storage garbage collection is
  deliberately separate from publication.

## Netlify setup

Netlify adapter 6 uses modern Functions so the page renderer and background job
can access Netlify Blobs without a separate account-wide access token. The site
remains on SvelteKit 2. The configured Node version is 22.

Before the first hosted sync, prepare the encrypted credential handoff locally:

```sh
npm run photography:prepare-hosting
```

This creates `.lightroom-proof/netlify-environment.json`, which contains secrets.
Set its values privately in the **existing MAXmade Netlify site's production
environment**, with Functions scope. Never commit, log, serve, or upload that file
as an asset. Do not replace `LIGHTROOM_CREDENTIAL_KEY` after the first hosted sync
without re-encrypting the stored credential.

| Variable                       | Purpose                                                                    |
| ------------------------------ | -------------------------------------------------------------------------- |
| `LIGHTROOM_CREDENTIAL_KEY`     | Random 32-byte AES-GCM key, encoded as base64                              |
| `LIGHTROOM_INITIAL_CREDENTIAL` | Encrypted bootstrap credential, used only while the private store is empty |
| `LIGHTROOM_SYNC_SECRET`        | Bearer credential for the background sync dispatcher                       |
| `LIGHTROOM_SYNC_ENABLED`       | Set to `true` to enable the job; absent means disabled                     |

Credentials are encrypted again with AES-256-GCM before storage in the private
`maxmade-lightroom-private` blob store. Renewed access and refresh tokens replace
the previous encrypted credential. The public image cache is the separate
`maxmade-photography` store. No photo upload, edit or deletion request is sent to
Lightroom; token renewal uses Adobe IMS.

The `lightroom-schedule` function queues the authenticated background function
every 15 minutes, only on published production deploys. Netlify does not run the
schedule automatically in branch deploys or Deploy Previews. Enable the variables
only in production unless explicitly testing a separate environment: site-wide
blob stores are shared across deploys.

After deployment, use **Run now** on `lightroom-schedule`, inspect the background
job's completion log, then verify both public albums and an image. The first sync
downloads the selected photos; later syncs reuse unchanged images. Do not change
`albums.maxmade.nl` DNS or remove Adobe Portfolio until the hosted replacement has
passed these checks. Once the private blob credential exists, the bootstrap
variable can be removed. Delete the local environment handoff file after setup.

## Validation status

Local testing uses real Lightroom data: Parkour has 75 visible photos and Favorites
has 132. The API access proof, immediate refresh exchange, image rendering,
incremental reuse, responsive browser layout, fullscreen keyboard navigation and
pointer swipe navigation have been checked. Automated tests cover failed syncs,
deletions, metadata stripping, credential rotation and publication boundaries.

Hosted Blobs, the deployed function schedule and long-term Adobe renewal still
require deployment and live verification. Browser mobile emulation does not
replace testing on a physical phone.
