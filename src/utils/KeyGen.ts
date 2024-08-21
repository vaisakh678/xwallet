export default class CryptoKeyGen {
	private algorithm: RsaHashedKeyGenParams;

	constructor() {
		this.algorithm = {
			name: "RSA-OAEP",
			modulusLength: 2048,
			publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
			hash: "SHA-256",
		};
	}

	async generateKeyPair(): Promise<{ publicKey: string; privateKey: string }> {
		const keyPair = await window.crypto.subtle.generateKey(
			this.algorithm,
			true, // extractable
			["encrypt", "decrypt"] // key usages
		);

		const publicKeyString = await this.exportKeyAsString(keyPair.publicKey, "spki");
		const privateKeyString = await this.exportKeyAsString(keyPair.privateKey, "pkcs8");

		return {
			publicKey: publicKeyString,
			privateKey: privateKeyString,
		};
	}

	private async exportKeyAsString(key: CryptoKey, format: "spki" | "pkcs8"): Promise<string> {
		const exportedKey = await window.crypto.subtle.exportKey(format, key);

		const exportedAsString = String.fromCharCode(...new Uint8Array(exportedKey));
		const exportedAsBase64 = btoa(exportedAsString);

		return exportedAsBase64;
	}

	private async importKey(keyString: string, format: "spki" | "pkcs8", keyUsages: KeyUsage[]): Promise<CryptoKey> {
		const keyData = Uint8Array.from(atob(keyString), (c) => c.charCodeAt(0));
		const key = await window.crypto.subtle.importKey(
			format,
			keyData.buffer,
			this.algorithm,
			true, // extractable
			keyUsages
		);
		return key;
	}

	async encryptData(publicKeyString: string, data: string): Promise<string> {
		const publicKey = await this.importKey(publicKeyString, "spki", ["encrypt"]);
		const encodedData = new TextEncoder().encode(data);

		const encryptedData = await window.crypto.subtle.encrypt(
			{
				name: "RSA-OAEP",
			},
			publicKey,
			encodedData
		);

		return btoa(String.fromCharCode(...new Uint8Array(encryptedData)));
	}

	async decryptData(privateKeyString: string, encryptedData: string): Promise<string> {
		const privateKey = await this.importKey(privateKeyString, "pkcs8", ["decrypt"]);
		const encryptedArrayBuffer = Uint8Array.from(atob(encryptedData), (c) => c.charCodeAt(0)).buffer;

		const decryptedData = await window.crypto.subtle.decrypt(
			{
				name: "RSA-OAEP",
			},
			privateKey,
			encryptedArrayBuffer
		);

		return new TextDecoder().decode(decryptedData);
	}
}

// // Example usage:
// (async () => {
// 	const generator = new CryptoKeyGenerator();
// 	const { publicKey, privateKey } = await generator.generateKeyPair();

// 	console.log("Public Key (Base64):", publicKey);
// 	console.log("Private Key (Base64):", privateKey);

// 	// Encrypt a message
// 	const message = "Hello, World!";
// 	const encryptedMessage = await generator.encryptData(publicKey, message);
// 	console.log("Encrypted Message:", encryptedMessage);

// 	// Decrypt the message
// 	const decryptedMessage = await generator.decryptData(privateKey, encryptedMessage);
// 	console.log("Decrypted Message:", decryptedMessage);
// })();

