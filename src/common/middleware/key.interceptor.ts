import { CallHandler, ExecutionContext, Injectable, NestInterceptor, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccountProjectService } from 'src/modules/account/account-project/account-project.service';
import { KeyService } from 'src/modules/account/key/key.service';
import { Encryptor } from '../utils/encryptor/encryptor';

@Injectable()
export class KeyInterceptor implements NestInterceptor {
	constructor(private keyService: KeyService, private encryptor: Encryptor,private accountProjectService: AccountProjectService) { }

	async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
		let req = context.switchToHttp().getRequest();
		if (!req.headers.authorization) {
			throw new UnauthorizedException("invalid_key");
		}
		let one_flow_key = Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString("utf-8").split(":")[0];
		one_flow_key = (one_flow_key.includes("prod")) ? one_flow_key.replace("oneflow_prod_", '') : one_flow_key.replace("oneflow_sandbox_", '');
		let tokenData = await this.keyService.findOne(one_flow_key);
		if (!tokenData) {
			throw new UnauthorizedException("invalid_key");
		}
		let decoded = this.encryptor.decodeBase64(one_flow_key);
		decoded = decoded.split("-")[0];

		const project = await this.accountProjectService.findById(decoded);
		req.one_flow_key = req.headers.authorization.split(" ")[1];
		req.project = project;
		req.token_id = tokenData._id;
		return next.handle().pipe();
	}
}
