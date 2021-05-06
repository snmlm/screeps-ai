import {CreepSetup} from './CreepSetup';

/**
 * 一个规则类型的mapping，按creeps规则访问
 */
export const Roles = {
	// 平民规则
	drone     : 'drone',
	filler    : 'filler',
	claim     : 'infestor',
	pioneer   : 'pioneer',
	manager   : 'manager',
	queen     : 'queen',
	scout     : 'scout',
	transport : 'transport',
	worker    : 'worker',
	upgrader  : 'upgrader',
	// 战斗规则
	guardMelee: 'broodling',
	// guardRanged: 'mutalisk',
	melee     : 'zergling',
	ranged    : 'hydralisk',
	healer    : 'transfuser',
	bunkerGuard : 'bunkerGuard',
	dismantler: 'lurker',
};

/**
 * 此对象包含各种类型creeps的分类默认身体设置
 */
export const Setups = {

	drones: {
		extractor: new CreepSetup(Roles.drone, {
			pattern  : [WORK, WORK, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		miners: {

			default: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, CARRY, MOVE],
				sizeLimit: 3,
			}),

			standard: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE],
				sizeLimit: 1,
			}),

			emergency: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, CARRY, MOVE],
				sizeLimit: 1,
			}),

			double: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, WORK, WORK, WORK, WORK, CARRY, MOVE, MOVE, MOVE],
				sizeLimit: 2,
			}),

			sourceKeeper: new CreepSetup(Roles.drone, {
				pattern  : [WORK, WORK, CARRY, MOVE],
				sizeLimit: 5,
			})
		}
	},

	filler: new CreepSetup(Roles.filler, {
		pattern  : [CARRY, CARRY, MOVE],
		sizeLimit: 1,
	}),

	infestors: {

		claim: new CreepSetup(Roles.claim, {
			pattern  : [CLAIM, MOVE],
			sizeLimit: 1
		}),

		reserve: new CreepSetup(Roles.claim, {
			pattern  : [CLAIM, MOVE],
			sizeLimit: 4,
		}),

		controllerAttacker: new CreepSetup(Roles.claim, {
			pattern  : [CLAIM, MOVE],
			sizeLimit: Infinity,
		}),

	},

	pioneer: new CreepSetup(Roles.pioneer, {
		pattern  : [WORK, CARRY, MOVE, MOVE],
		sizeLimit: Infinity,
	}),


	managers: {

		default: new CreepSetup(Roles.manager, {
			pattern  : [CARRY, CARRY, CARRY, CARRY, MOVE],
			sizeLimit: 3,
		}),

		twoPart: new CreepSetup(Roles.manager, {
			pattern  : [CARRY, CARRY, MOVE],
			sizeLimit: 8,
		}),

		stationary: new CreepSetup(Roles.manager, {
			pattern  : [CARRY, CARRY],
			sizeLimit: 8,
		}),

		stationary_work: new CreepSetup(Roles.manager, {
			pattern  : [WORK, WORK, WORK, WORK, CARRY, CARRY],
			sizeLimit: 8,
		}),

	},

	queens: {

		default: new CreepSetup(Roles.queen, {
			pattern  : [CARRY, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		early: new CreepSetup(Roles.queen, {
			pattern  : [CARRY, MOVE],
			sizeLimit: Infinity,
		}),

	},

	scout: new CreepSetup(Roles.scout, {
		pattern  : [MOVE],
		sizeLimit: 1,
	}),

	transporters: {

		default: new CreepSetup(Roles.transport, {
			pattern  : [CARRY, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		early: new CreepSetup(Roles.transport, {
			pattern  : [CARRY, MOVE],
			sizeLimit: Infinity,
		}),

	},

	workers: {

		default: new CreepSetup(Roles.worker, {
			pattern  : [WORK, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		early: new CreepSetup(Roles.worker, {
			pattern  : [WORK, CARRY, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

	},

	upgraders: {

		default: new CreepSetup(Roles.upgrader, {
			pattern  : [WORK, WORK, WORK, CARRY, MOVE],
			sizeLimit: Infinity,
		}),

		rcl8: new CreepSetup(Roles.upgrader, {
			pattern  : [WORK, WORK, WORK, CARRY, MOVE],
			sizeLimit: 5,
		}),

	}

};


/**
 * 此对象包含各种与战斗相关的creeps的默认身体设置

 */
export const CombatSetups = {

	/**
	 * Zerglings 是只进行近战的creeps（除了sourceKeeper设置）
	 */
	zerglings: {

		default: new CreepSetup(Roles.melee, {
			pattern  : [ATTACK, MOVE],
			sizeLimit: Infinity,
		}),

		armored: new CreepSetup(Roles.melee, {
			pattern  : [TOUGH, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

		boosted_T3_defense: new CreepSetup(Roles.melee, {
			pattern  : [TOUGH, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

		boosted_T3: new CreepSetup(Roles.melee, {
			pattern  : [TOUGH, TOUGH, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

		sourceKeeper: new CreepSetup(Roles.melee, {
			pattern  : [MOVE, MOVE, MOVE, MOVE, ATTACK, ATTACK, ATTACK, ATTACK, HEAL, MOVE],
			sizeLimit: Infinity,
		}),

	},

	/**
	 * Hydralisks 是远程creeps，可能有少量的治疗
	 */
	hydralisks: {

		early: new CreepSetup(Roles.ranged, {
			pattern  : [RANGED_ATTACK, MOVE],
			sizeLimit: Infinity,
		}),

		default: new CreepSetup(Roles.ranged, {
			pattern  : [RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, HEAL],
			sizeLimit: Infinity,
		}),

		boosted_T3: new CreepSetup(Roles.ranged, {
			pattern  : [TOUGH, TOUGH, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
						MOVE, MOVE, HEAL],
			sizeLimit: Infinity,
		}),

		siege: new CreepSetup(Roles.ranged, {
			pattern  : [RANGED_ATTACK, RANGED_ATTACK, MOVE, MOVE, MOVE, MOVE, HEAL, HEAL],
			sizeLimit: Infinity,
		}),

		siege_T3: new CreepSetup(Roles.ranged, {
			pattern  : [TOUGH, TOUGH, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK,
						MOVE, MOVE, HEAL, HEAL],
			sizeLimit: Infinity,
		}),

		sourceKeeper: new CreepSetup(Roles.ranged, {
			pattern  : [MOVE, MOVE, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK, RANGED_ATTACK, HEAL, HEAL, MOVE],
			sizeLimit: Infinity,
		}),

	},

	/**
	 * 治疗者（输血者）是只做治疗的creeps
	 */
	healers: {

		default: new CreepSetup(Roles.healer, {
			pattern  : [HEAL, MOVE],
			sizeLimit: Infinity,
		}),

		armored: new CreepSetup(Roles.healer, {
			pattern  : [TOUGH, HEAL, HEAL, HEAL, MOVE, MOVE, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

		boosted_T3: new CreepSetup(Roles.healer, {
			pattern  : [TOUGH, TOUGH, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

	},

	/**
	 * Broodlings 主要是近战 creeps , 可能有少量的愈合
	 */
	broodlings: {

		early: new CreepSetup(Roles.guardMelee, {
			pattern  : [ATTACK, MOVE],
			sizeLimit: Infinity,
		}),

		default: new CreepSetup(Roles.guardMelee, {
			pattern  : [TOUGH, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE, MOVE, MOVE, HEAL],
			sizeLimit: Infinity,
		}),

	},

	/**
	 * 纯近战的powercreeps，永远不应该离开地堡。这些是一个房间的最后守卫
	 */
	bunkerGuard: {

		early: new CreepSetup(Roles.bunkerGuard, {
			pattern  : [ATTACK, MOVE],
			sizeLimit: Infinity,
		}),

		default: new CreepSetup(Roles.bunkerGuard, {
			pattern  : [ATTACK, ATTACK, MOVE],
			sizeLimit: Infinity,
		}),

		halfMove: new CreepSetup(Roles.bunkerGuard, {
			pattern  : [ATTACK, ATTACK, ATTACK, ATTACK, MOVE],
			sizeLimit: Infinity,
		}),

		boosted_T3: new CreepSetup(Roles.bunkerGuard, {
			// 22 ATTACK, 3 MOVE times 2
			pattern  : [ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK,
				ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, ATTACK, MOVE, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

	},

	/**
	 * 拆卸者（潜伏者）是带着零件的creeps
	 */
	dismantlers: {

		default: new CreepSetup(Roles.dismantler, {
			pattern  : [WORK, MOVE],
			sizeLimit: Infinity,
		}),

		armored: new CreepSetup(Roles.dismantler, {
			pattern  : [TOUGH, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

		boosted_T3: new CreepSetup(Roles.dismantler, {
			pattern  : [TOUGH, TOUGH, WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE],
			sizeLimit: Infinity,
		}),

	},

};
