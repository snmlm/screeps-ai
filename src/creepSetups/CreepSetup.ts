export interface BodySetup {
	pattern: BodyPartConstant[];			// 要重复的体型
	sizeLimit: number;						// 身体最大单位重复次数
	prefix: BodyPartConstant[];				// 身体开始的东西
	suffix: BodyPartConstant[];				// 身体末端的东西
	proportionalPrefixSuffix: boolean;		// (?) 前缀/后缀与正文大小的比例
	ordered: boolean;						// (?) 排序 assemble as WORK WORK MOVE MOVE instead of WORK MOVE WORK MOVE
}

/* 返回整个身体部位数组的成本 */
export function bodyCost(bodyparts: BodyPartConstant[]): number {
	return _.sum(bodyparts, part => BODYPART_COST[part]);
}

/**
 * 当creeps需要被创建时，调用此方法，灵活生成身体组成。
 */
export class CreepSetup {

	role: string;
	bodySetup: BodySetup;

	constructor(roleName: string, bodySetup = {}) {
		this.role = roleName;
		// 默认配置
		_.defaults(bodySetup, {
			pattern                 : [],
			sizeLimit               : Infinity,
			prefix                  : [],
			suffix                  : [],
			proportionalPrefixSuffix: false,
			ordered                 : true,
		});
		this.bodySetup = bodySetup as BodySetup;
	}

	/*  计算最大的body，从该房间中生成
	 * 受限制于maxRepeats*/
	generateBody(availableEnergy: number): BodyPartConstant[] {
		let body: BodyPartConstant[] = [];
		let numRepeats:number = Math.min(Math.floor(availableEnergy / bodyCost(this.bodySetup.pattern)), Math.floor(MAX_CREEP_SIZE / this.bodySetup.pattern.length), this.bodySetup.sizeLimit);
		// 构建body

		if (this.bodySetup.ordered) { // 排序 
			for (const part of this.bodySetup.pattern) {
				for (let i = 0; i < numRepeats; i++) {
					body.push(part);
				}
			}
		} else {
			for (let i = 0; i < numRepeats; i++) {
				body = body.concat(this.bodySetup.pattern);
			}
		}
		return body;
	}
}
