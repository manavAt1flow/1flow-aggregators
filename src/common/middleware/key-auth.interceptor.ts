import { CallHandler, ExecutionContext, Injectable, NestInterceptor, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AccountProjectService } from 'src/modules/account/account-project/account-project.service';
import { KeyService } from 'src/modules/account/key/key.service';
import { Encryptor } from '../utils/encryptor/encryptor';

@Injectable()
export class KeyAuthInterceptor implements NestInterceptor {
  constructor(private keyService: KeyService, private encryptor: Encryptor,private accountProjectService: AccountProjectService) { }

	async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
		let req = context.switchToHttp().getRequest();
		if (!(req.headers.authorization || req.headers.api_key)) {
			throw new UnauthorizedException("invalid_key");
		}
		let one_flow_key = null;
		if(req.headers.api_key){
			one_flow_key = req.headers.api_key
		}else if(req.headers.authorization){
			one_flow_key = (req.headers?.authorization?.split(" ")?.[1] || req.headers?.authorization?.split(" ")?.[0]);
		}
		one_flow_key = (one_flow_key.includes("prod")) ? one_flow_key.replace("oneflow_prod_", '') : one_flow_key.replace("oneflow_sandbox_", '');
		const tokenData = await this.keyService.findOne(one_flow_key);
		
		if (!tokenData) {
			throw new UnauthorizedException("invalid_key");
		}
		let decoded = this.encryptor.decodeBase64(one_flow_key);
		decoded = decoded.split("-")[0];

		const project = await this.accountProjectService.findById(decoded);
		if (!project) {
			throw new UnauthorizedException("invalid_key");
		}
		
		req.project = project;
    	req.one_flow_key = one_flow_key;
		req.token_id = tokenData._id;
    	req.tokenData = tokenData;
		return next.handle().pipe();
	}
}
