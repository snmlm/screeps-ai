import mountWork from './mount'
import { doing, stateScanner, generatePixel } from './utils'
import creepNumberListener from './modules/creepController'
import { ErrorMapper } from './modules/errorMapper'

export const loop = ErrorMapper.wrapLoop(() => {
    if (Memory.showCost) console.log(`-------------------------- [${Game.time}] -------------------------- `)

    // 挂载拓展
    mountWork()

    // creep 数量控制
    creepNumberListener()

    // 所有建筑、creep、powerCreep 执行工作
    doing(Game.structures, Game.creeps, 
        //Game.powerCreeps
        )
    /*doing(_.filter(Game.structures,structure=>
        structure.structureType == STRUCTURE_SPAWN
        ||structure.structureType == STRUCTURE_TOWER
        ||structure.structureType == STRUCTURE_CONTROLLER
        ||structure.structureType == STRUCTURE_LINK
        ||structure.structureType == STRUCTURE_STORAGE
        ||structure.structureType == STRUCTURE_TERMINAL
        ||structure.structureType == STRUCTURE_FACTORY
        ||structure.structureType == STRUCTURE_EXTRACTOR
        ||structure.structureType == STRUCTURE_LAB
        ||structure.structureType == STRUCTURE_OBSERVER
        ||structure.structureType == STRUCTURE_POWER_SPAWN
        ),
    Game.creeps
    //,Game.powerCreeps
    );*/
    // 搓 pixel
    generatePixel()

    // 统计全局资源使用
    stateScanner()
})
