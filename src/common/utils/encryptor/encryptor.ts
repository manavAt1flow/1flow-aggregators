import * as crypto from 'crypto';
import { ConfigService } from '@nestjs/config';

export class Encryptor {
	algorithm: string;
	password: string;
	iv: Buffer;
	key: Buffer;
	cipher: crypto.Cipher;
	decipher: crypto.Decipher;

	constructor(algorithm: string, password: string, salt: string) {
		try{
			this.algorithm = 'aes-192-cbc';
			this.password = '@#1@F@L@O#W@@@@APP_+%$#%';
			this.iv = Buffer.alloc(16, 0);
			this.key = crypto.scryptSync('@#1@F@L@O#W@@@@APP_+%$#%', 'S#A@!##L$##$%#$%$#@@*&@', 24);
			this.bindEncryptorFunctions();
		}catch(e){
			
		}
	}

	bindEncryptorFunctions() {
		this.encypt = this.encypt.bind(this);
		this.decrypt = this.decrypt.bind(this);
	}

	encypt(content: string) {
		this.cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
		let encrypted = this.cipher.update(content, "utf8", "hex");
		encrypted += this.cipher.final("hex");
		return encrypted;
	}

	decrypt(content: string) {
		this.decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
		let decrypted = this.decipher.update(content, "hex", "utf8");
		decrypted += this.decipher.final("utf8");
		return decrypted;
	}

	createBase64(content: string) {
		this.cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
		let encrypted = this.cipher.update(content, "utf8", "base64");
		encrypted += this.cipher.final("base64");
		return encrypted;
	}

	decodeBase64(content: string) {
		try {
			this.decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv);
			let decrypted = this.decipher.update(content, "base64", "utf8");
			decrypted += this.decipher.final("utf8");
			return decrypted;
		} catch (e) {
			e.code = 404;
			throw e;
		}
	}
}
