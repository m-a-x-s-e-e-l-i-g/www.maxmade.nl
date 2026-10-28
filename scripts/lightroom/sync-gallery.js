import { openStorage } from '../../services/photography/storage.mjs';
import { getAuthenticatedClient } from '../../services/photography/credentials.mjs';
import { syncGallery } from '../../services/photography/sync.mjs';

const storage = openStorage({ cloud: false });
try {
	const result = await syncGallery({
		getClient: () => getAuthenticatedClient(storage),
		storage,
		onProgress: ({ album, count, total }) => {
			if (count === 1 || count % 10 === 0 || count === total)
				console.log(`${album}: ${count}/${total}`);
		}
	});
	console.log(JSON.stringify(result));
} catch (error) {
	console.error(error.message);
	process.exitCode = 1;
}
