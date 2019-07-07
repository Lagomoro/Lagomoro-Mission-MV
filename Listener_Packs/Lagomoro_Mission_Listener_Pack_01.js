/*:
 * ======================================================================
 * 插件描述
 * ----------------------------------------------------------------------
 * @plugindesc Lagomoro任务系统 监听器包 01
 * @author Lagomoro
 * ======================================================================
 * 插件帮助
 * ----------------------------------------------------------------------
 * @param 监听获得金钱
 * @type boolean
 * @off 关闭
 * @on 开启
 * @desc 获得金钱
 * @default true
 * 
 * @param 监听获得物品
 * @type boolean
 * @off 关闭
 * @on 开启
 * @desc 获得物品[物品id]
 * @default true
 * 
 * @param 监听获得武器
 * @type boolean
 * @off 关闭
 * @on 开启
 * @desc 获得武器[武器id]
 * @default true
 * 
 * @param 监听获得防具
 * @type boolean
 * @off 关闭
 * @on 开启
 * @desc 获得防具[防具id]
 * @default true
 * 
 * @param 监听击杀敌人
 * @type boolean
 * @off 关闭
 * @on 开启
 * @desc 击杀敌人[敌人id]
 * @default true
 * 
 * @param 监听移动
 * @type boolean
 * @off 关闭
 * @on 开启
 * @desc 移动
 * @default true
 * 
 * @help 
 * ======================================================================
 * Lagomoro新版任务系统 功能最强大的任务系统！
 * https://github.com/Lagomoro/Lagomoro-Mission-MV
 * ----------------------------------------------------------------------
 * 帮助详情请参阅chm使用手册
 * ======================================================================
 * 本插件是Lagomoro_Mission的监听器补充包，
 * 请在插件管理器中放在Lagomoro_Mission后面。
 * ======================================================================
 * */

// ======================================================================
// * 注册变量
// ----------------------------------------------------------------------
var Lagomoro = Lagomoro || {};
Lagomoro.Mission = Lagomoro.Mission || {};
Lagomoro.Mission.Listener = Lagomoro.Mission.Listener || {};
Lagomoro.Mission.Listener.Parameters_Pack_01 = PluginManager.parameters('Lagomoro_Mission_Listener_Pack_01');
// ----------------------------------------------------------------------
Lagomoro.Mission.Listener.GAIN_GOLD   = Boolean(Lagomoro.Mission.Listener.Parameters_Pack_01['监听获得金钱'] || true);
Lagomoro.Mission.Listener.GAIN_ITEM   = Boolean(Lagomoro.Mission.Listener.Parameters_Pack_01['监听获得物品'] || true);
Lagomoro.Mission.Listener.GAIN_WEAPON = Boolean(Lagomoro.Mission.Listener.Parameters_Pack_01['监听获得武器'] || true);
Lagomoro.Mission.Listener.GAIN_ARMOR  = Boolean(Lagomoro.Mission.Listener.Parameters_Pack_01['监听获得防具'] || true);
Lagomoro.Mission.Listener.KILL_ENEMY  = Boolean(Lagomoro.Mission.Listener.Parameters_Pack_01['监听击杀敌人'] || true);
Lagomoro.Mission.Listener.MOVEMENT    = Boolean(Lagomoro.Mission.Listener.Parameters_Pack_01['监听移动'] || true);
// ======================================================================

// ======================================================================
// * 监听获得金钱
// ----------------------------------------------------------------------
Game_Party.prototype.Lagomoro_Mission_Listener_GAIN_GOLD_gainGold = Game_Party.prototype.gainGold;
Game_Party.prototype.gainGold = function(amount) {
    this.Lagomoro_Mission_Listener_GAIN_GOLD_gainGold(amount);
    if(Lagomoro.Mission.Listener.GAIN_GOLD && amount > 0){
        $gameSystem.appendListener("获得金钱", amount);
    }
};

// ======================================================================
// * 监听获得物品
// ----------------------------------------------------------------------
Game_Party.prototype.Lagomoro_Mission_Listener_GAIN_ITEM_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
    this.Lagomoro_Mission_Listener_GAIN_ITEM_gainItem(item, amount, includeEquip);
    if(Lagomoro.Mission.Listener.GAIN_ITEM && DataManager.isItem(item) && amount > 0){
        $gameSystem.appendListener("获得物品[" + item.id + "]", amount);
    }
};

// ======================================================================
// * 监听获得武器
// ----------------------------------------------------------------------
Game_Party.prototype.Lagomoro_Mission_Listener_GAIN_WEAPON_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
    this.Lagomoro_Mission_Listener_GAIN_WEAPON_gainItem(item, amount, includeEquip);
    if(Lagomoro.Mission.Listener.GAIN_WEAPON && DataManager.isWeapon(item) && amount > 0){
        $gameSystem.appendListener("获得武器[" + item.id + "]", amount);
    }
};

// ======================================================================
// * 监听获得防具
// ----------------------------------------------------------------------
Game_Party.prototype.Lagomoro_Mission_Listener_GAIN_ARMOR_gainItem = Game_Party.prototype.gainItem;
Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
    this.Lagomoro_Mission_Listener_GAIN_ARMOR_gainItem(item, amount, includeEquip);
    if(Lagomoro.Mission.Listener.GAIN_ARMOR && DataManager.isArmor(item) && amount > 0){
        $gameSystem.appendListener("获得防具[" + item.id + "]", amount);
    }
};

// ======================================================================
// * 监听击杀敌人
// ----------------------------------------------------------------------
Game_Enemy.prototype.Lagomoro_Mission_Listener_KILL_ENEMY_die = Game_Enemy.prototype.die;
Game_Enemy.prototype.die = function() {
    this.Lagomoro_Mission_Listener_KILL_ENEMY_die();
    if(Lagomoro.Mission.Listener.KILL_ENEMY){
        $gameSystem.appendListener("击杀敌人[" + this._enemyId + "]", 1);
    }
};

// ======================================================================
// * 监听移动
// ----------------------------------------------------------------------
Game_Party.prototype.Lagomoro_Mission_Listener_MOVEMENT_increaseSteps = Game_Party.prototype.increaseSteps;
Game_Party.prototype.increaseSteps = function() {
    this.Lagomoro_Mission_Listener_MOVEMENT_increaseSteps();
    if(Lagomoro.Mission.Listener.MOVEMENT){
        $gameSystem.appendListener("移动", 1);
    }
};