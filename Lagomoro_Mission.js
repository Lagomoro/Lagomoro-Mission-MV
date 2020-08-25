/*:
 * ======================================================================
 * 插件描述
 * ----------------------------------------------------------------------
 * @plugindesc Lagomoro任务系统 V14.1.2 正式版
 * @author Lagomoro
 * ======================================================================
 * 插件参数
 * ----------------------------------------------------------------------
 * @param 数据库存储路径
 * @type text
 * @desc 数据库的存储路径，支持.xls .xlsx .xlsm .xlsb .json格式
 * @default data/Lagomoro_Mission.xlsx
 * 
 * @param 是否推送任务信息
 * @type boolean
 * @off 不推送
 * @on 推送
 * @desc 在任务状态发生变动时是否向玩家推送变动消息。（V13.0.0 Build 该功能禁用）
 * @default true
 * 
 * @param 推送文字设置
 * @type text
 * @desc 推送文字相关设置列表。
 * @default
 * 
 * @param 获得任务时的文字（禁用）
 * @parent 推送文字设置
 * @type text
 * @desc 获得任务时推送的文字，%1表示任务名字。【触发：重置或者注册一个非隐藏任务，或者任务解除隐藏时】
 * @default 获得任务：“%1”
 *
 * @param 完成任务时的文字
 * @parent 推送文字设置
 * @type text
 * @desc 完成任务时推送的文字，%1表示任务名字。【触发：任务完成】
 * @default 完成任务：“%1”
 *
 * @param 任务步骤改变时的文字(禁用)
 * @parent 推送文字设置
 * @type text
 * @desc 改变任务步骤时推送的文字，%1表示任务步骤名字，%2表示进度。【触发：任务步骤改变】
 * @default %1(%2)
 * 
 * @param 获得奖励时的文字
 * @parent 推送文字设置
 * @type text
 * @desc 获得任务奖励时推送的文字，%1表示奖励名字，%2表示数量。【触发：任务步骤改变】
 * @default 获得 %1 * %2
 *
 * @param 金币单位
 * @parent 推送文字设置
 * @type text
 * @desc 推送的金币单位
 * @default 金币
 *
 * @param 经验单位
 * @parent 推送文字设置
 * @type text
 * @desc 推送的经验单位
 * @default 经验
 *
 * @param 困难度文字列表
 * @type text[]
 * @desc 多种困难度的文字列表，与数据库中 difficulty 的数字对应。
 * @default ["简单","一般","中等","困难","超困难！"]
 * 
 * @param 任务菜单设置
 * @type text
 * @desc 任务菜单相关设置列表。
 * @default
 * 
 * @param 上边距
 * @parent 任务菜单设置
 * @type number
 * @min 0
 * @max 50
 * @desc 任务菜单的上边距，填写范围为0-50。
 * @default 20
 * 
 * @param 下边距
 * @parent 任务菜单设置
 * @type number
 * @min 0
 * @max 50
 * @desc 任务菜单的下边距，填写范围为0-50。
 * @default 20
 * 
 * @param 左边距
 * @parent 任务菜单设置
 * @type number
 * @min 0
 * @max 50
 * @desc 任务菜单的左边距，填写范围为0-50。
 * @default 50
 * 
 * @param 右边距
 * @parent 任务菜单设置
 * @type number
 * @min 0
 * @max 50
 * @desc 任务菜单的右边距，填写范围为0-50。
 * @default 50
 * 
 * @param 章节列表宽度
 * @parent 任务菜单设置
 * @type number
 * @min 200
 * @max 300
 * @desc 章节列表的宽度，填写范围为200-300。
 * @default 240
 * 
 * @param 菜单显示名称
 * @parent 任务菜单设置
 * @type text
 * @desc 在菜单中显示的名称
 * @default 任务
 * 
 * @param 地图任务窗口设置
 * @type text
 * @desc 地图任务窗口相关设置列表。
 * @default
 *
 * @param 左右位置初始状态
 * @parent 地图任务窗口设置
 * @type boolean
 * @off 靠右
 * @on 靠左
 * @desc 地图任务窗口左右位置初始状态，是紧靠窗口左侧还是右侧。该选项可以在游戏中由玩家设置。
 * @default true
 * 
 * @param 上下位置初始状态
 * @parent 地图任务窗口设置
 * @type number
 * @min 0
 * @max 10
 * @desc 地图任务窗口上下位置初始状态，将屏幕纵向分成10份,填写范围为0-10。该选项可以在游戏中由玩家设置。
 * @default 5
 *
 * @param 窗口宽度
 * @parent 地图任务窗口设置
 * @type number
 * @min 200
 * @max 300
 * @desc 地图任务窗口的宽度数值，填写范围为200-300。
 * @default 260
 * 
 * @param 窗口背景颜色
 * @parent 地图任务窗口设置
 * @type text
 * @desc 地图任务窗口的背景颜色，请以rgba(0-255,0-255,0-255,0-1)的格式填写。
 * @default rgba(0,0,0,0.4)
 * 
 * @param 系统皮肤透明度
 * @parent 地图任务窗口设置
 * @type number
 * @min 0
 * @max 255
 * @desc 决定任务窗口系统皮肤透明度，填写范围为0-255，如果为0，不会加载皮肤。
 * @default 0
 * 
 * @help 
 * ======================================================================
 * Lagomoro新版任务系统 功能最强大的任务系统！
 * https://github.com/Lagomoro/Lagomoro-Mission-MV
 * ----------------------------------------------------------------------
 * 帮助详情请参阅chm使用手册
 * ======================================================================
 * 本插件须遵守的规约：
 * ----------------------------------------------------------------------
 * 本插件的唯一作者为 Lagomoro。作者拥有著作权、及其他一切合法权益。您只拥有使用权。
 * 在遵守本使用规约的前提下，本插件允许用于商业发布和非商业用途的游戏。
 * 您不可以以任何形式将本插件、二次修改后的本插件以您的名义单独发布到任何平台上。
 * Lagomoro仅允许插件转载（需注明作者 Lagomoro，并将插件本体和该帮助文档一起转载）
 * 以及将二次修改后的插件用在您自己的游戏中。
 * 如果您的游戏中使用了此插件，该游戏必须包含感谢名单，
 * 且其中的醒目位置必须包含Lagomoro，或者注明使用了Lagomoro任务系统。
 * 该列表中未说明的其他使用条例，Lagomoro任务系统遵守 Apache 2.0 License 使用规约。
 * 有关于Apache 2.0 License，请参考http://www.apache.org/licenses/LICENSE-2.0.html。
 * ======================================================================
 * 外部库引用声明
 * ----------------------------------------------------------------------
 * Lagomoro_Mission.js 引用了外部库 js-xlsx。
 * 有关于该外部库的相关信息，请参考 Github 上的 js-xlsx。
 * 网页链接：http://github.com/SheetJS/js-xlsx
 * js-xlsx 遵守 Apache 2.0 License 使用规约。
 * 有关于Apache 2.0 License，请参考http://www.apache.org/licenses/LICENSE-2.0.html。
 * ======================================================================
 */

// ======================================================================
// * 注册变量
// ----------------------------------------------------------------------
var Lagomoro = Lagomoro || {};
Lagomoro.Mission = Lagomoro.Mission || {};
Lagomoro.Mission.Parameters = PluginManager.parameters('Lagomoro_Mission');
// ----------------------------------------------------------------------
Lagomoro.Mission.JSON               = "data/Mission.json";
Lagomoro.Mission.PATH               = String(Lagomoro.Mission.Parameters['数据库存储路径']        || 'data/Lagomoro_Mission.xlsx');
Lagomoro.Mission.CANTOAST           = Boolean(Lagomoro.Mission.Parameters['是否推送任务信息']     || true);
Lagomoro.Mission.TOAST              = Lagomoro.Mission.TOAST                                     || {};
Lagomoro.Mission.TOAST.GETMIS       = String(Lagomoro.Mission.Parameters['获得任务时的文字']        || '获得任务：“%1”');
Lagomoro.Mission.TOAST.COMPLETEMIS  = String(Lagomoro.Mission.Parameters['完成任务时的文字']        || '完成任务：“%1”');
Lagomoro.Mission.TOAST.CHANGEMIS    = String(Lagomoro.Mission.Parameters['任务步骤改变时的文字']    || '%1(%2)');
Lagomoro.Mission.TOAST.REWARDMIS    = String(Lagomoro.Mission.Parameters['获得奖励时的文字']       || '获得 %1 * %2');
Lagomoro.Mission.TOAST.GOLD         = String(Lagomoro.Mission.Parameters['金币单位']              || '金币');
Lagomoro.Mission.TOAST.EXP          = String(Lagomoro.Mission.Parameters['经验单位']              || '经验');
Lagomoro.Mission.DIFFICULTY         = JSON.parse(Lagomoro.Mission.Parameters['困难度文字列表']    || "[\"简单\",\"一般\",\"中等\",\"困难\",\"超困难！\"]");
Lagomoro.Mission.MENU               = Lagomoro.Mission.MENU                                     || {};
Lagomoro.Mission.MENU.MENUNAME      = String(Lagomoro.Mission.Parameters['菜单显示名称']         || '任务');
Lagomoro.Mission.MENU.MARGIN        = Lagomoro.Mission.MENU.MARGIN                              || {};
Lagomoro.Mission.MENU.MARGIN.TOP    = Number(Lagomoro.Mission.Parameters['上边距']               || 20);
Lagomoro.Mission.MENU.MARGIN.BOTTOM = Number(Lagomoro.Mission.Parameters['下边距']               || 20);
Lagomoro.Mission.MENU.MARGIN.LEFT   = Number(Lagomoro.Mission.Parameters['左边距']               || 50);
Lagomoro.Mission.MENU.MARGIN.RIGHT  = Number(Lagomoro.Mission.Parameters['右边距']               || 50);
Lagomoro.Mission.MENU.LISTWIDTH     = Number(Lagomoro.Mission.Parameters['章节列表宽度']          || 240);
Lagomoro.Mission.MAP                = Lagomoro.Mission.MAP                                      || {};
Lagomoro.Mission.MAP.LR             = Boolean((Lagomoro.Mission.Parameters['左右位置初始状态']    === 'true' ? true : false));
Lagomoro.Mission.MAP.UD             = Number(Lagomoro.Mission.Parameters['上下位置初始状态']      || 5);
Lagomoro.Mission.MAP.WIDTH          = Number(Lagomoro.Mission.Parameters['窗口宽度']             || 260);
Lagomoro.Mission.MAP.COLOR          = String(Lagomoro.Mission.Parameters['窗口背景颜色']         || 'rgba(0,0,0,0.4)');
Lagomoro.Mission.MAP.ALPHA          = Number(Lagomoro.Mission.Parameters['系统皮肤透明度']        || 0);
// ======================================================================
// ======================================================================
// * Lagomoro_Mission数据库：xlsx数据库管理器
// ======================================================================
function Lagomoro_Xlsx() {throw new Error('This is a static class');};
Lagomoro_Xlsx._category = [];
Lagomoro_Xlsx._chapter = [];
Lagomoro_Xlsx._listener = [];
Lagomoro_Xlsx._data = [];
Lagomoro_Xlsx.isLocalMode = function(){
    return StorageManager.isLocalMode();
};
Lagomoro_Xlsx.load = function(){
    var path = require('path');
    var fs = require('fs');
    var base = path.join(path.dirname(process.mainModule.filename), Lagomoro.Mission.JSON);
    var base2 = path.join(path.dirname(process.mainModule.filename), Lagomoro.Mission.PATH);
    if(fs.existsSync(base) && !fs.existsSync(base2)){
        this.loadExecuteJson();
        return;
    }
    var filetype = Lagomoro.Mission.PATH.split('.').pop();
    if(filetype === 'xlsx'||filetype === 'xls'||filetype === 'xlsm'||filetype === 'xlsb'){
        if(this.isLocalMode()){
            this.loadLocalXlsx();
            this.saveExecuteJson();
        }else{
            this.loadWebXlsx();
        }
    }else if(filetype === 'json'){
        this.loadJson();
    }
};
Lagomoro_Xlsx.loadLocalXlsx = function(){
	var path = require('path');
    var base = path.join(path.dirname(process.mainModule.filename), Lagomoro.Mission.PATH);
    if(!require('fs').existsSync(base)) return;
    
    var workbook = XLSX.readFile(base,{cellStyles:true});
    this.loadCategory(workbook.Sheets[workbook.SheetNames[0]]);
    this.loadChapter(workbook.Sheets[workbook.SheetNames[1]]);
    this.loadListener(workbook.Sheets[workbook.SheetNames[2]]);
    for(var i = 3;i < workbook.SheetNames.length;i++){
        this.loadData(workbook.Sheets[workbook.SheetNames[i]]);
    }
};
Lagomoro_Xlsx.loadWebXlsx = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', Lagomoro.Mission.PATH);
    xhr.overrideMimeType('application/vnd.ms-excel');
    xhr.onload = function() {
        if (xhr.status < 400) {
            var xhr2 = new XMLHttpRequest();
            xhr2.open('GET', xhr.responseURL, true);
            xhr2.responseType = 'arraybuffer';
            xhr2.onload = function() {
                if(xhr2.status < 400) {
                    console.log(new Uint8Array(xhr2.response))
                    var workbook = XLSX.read(new Uint8Array(xhr2.response),{type:'array',cellStyles:true});
                    Lagomoro_Xlsx.loadCategory(workbook.Sheets[workbook.SheetNames[0]]);
                    Lagomoro_Xlsx.loadChapter(workbook.Sheets[workbook.SheetNames[1]]);
                    Lagomoro_Xlsx.loadListener(workbook.Sheets[workbook.SheetNames[2]]);
                    for(var i = 3;i < workbook.SheetNames.length;i++){
                        Lagomoro_Xlsx.loadData(workbook.Sheets[workbook.SheetNames[i]]);
                    }
                }
            };
            xhr2.send();
        }
    };
    xhr.send();
};
Lagomoro_Xlsx.loadExecuteJson = function(){
    var path = require('path');
    var filePath = path.join(path.dirname(process.mainModule.filename), Lagomoro.Mission.JSON);
    var fs = require('fs');
    if (fs.existsSync(filePath)) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', Lagomoro.Mission.JSON);
        xhr.overrideMimeType('application/json');
        xhr.onload = function() {
            if (xhr.status < 400) {
                var data = JSON.parse(LZString.decompressFromBase64(xhr.responseText) || {"category":[],"chapter":[],"listener":[],"data":[]});
                Lagomoro_Xlsx._category = data.category["@a"];
                Lagomoro_Xlsx._chapter = data.chapter["@a"];
                Lagomoro_Xlsx._listener = data.listener["@a"];
                Lagomoro_Xlsx._data = data.data["@a"];
            }
        };
        xhr.send();
    }
};
Lagomoro_Xlsx.saveExecuteJson = function(){
    var json = {};
    json.category = this._category;
    json.chapter  = this._chapter;
    json.listener = this._listener;
    json.data     = this._data;
    var data = LZString.compressToBase64(JsonEx.stringify(json));
    var fs = require('fs');
    var path = require('path');
    var dirPath = path.join(path.dirname(process.mainModule.filename), "data/");
    var filePath = path.join(path.dirname(process.mainModule.filename), Lagomoro.Mission.JSON);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    fs.writeFileSync(filePath, data);
};
Lagomoro_Xlsx.loadJson = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', Lagomoro.Mission.PATH);
    xhr.overrideMimeType('application/json');
    xhr.onload = function() {
        if (xhr.status < 400) {
            var data = JSON.parse(xhr.responseText || {"category":[],"chapter":[],"listener":[],"data":[]});
            Lagomoro_Xlsx._category = data.category;
            Lagomoro_Xlsx._chapter = data.chapter;
            Lagomoro_Xlsx._listener = data.listener;
            Lagomoro_Xlsx._data = data.data;
        }
    };
    xhr.send();
};
Lagomoro_Xlsx.loadCategory = function(worksheet){
    var linenumber = 2;
    while(!this.isXlsxEnd(worksheet,linenumber)){
        this._category.push({
            "id":this.readXlsxCellValue(worksheet,'A'+linenumber,'string'),
            "name":this.readXlsxCellValue(worksheet,'B'+linenumber,'string'),
            "color":this.readXlsxCellColor(worksheet,'C'+linenumber),
            "display":this.readXlsxCellValue(worksheet,'D'+linenumber,'boolean')
        })
        linenumber ++;
    }
};
Lagomoro_Xlsx.loadChapter = function(worksheet){
    var linenumber = 2;
    while(!this.isXlsxEnd(worksheet,linenumber)){
        this._chapter.push({
            "id":this.readXlsxCellValue(worksheet,'A'+linenumber,'string'),
            "category":this.readXlsxCellValue(worksheet,'B'+linenumber,'string'),
            "name":this.readXlsxCellValue(worksheet,'C'+linenumber,'string'),
            "description":this.readXlsxCellValue(worksheet,'D'+linenumber,'string'),
            "color":this.readXlsxCellColor(worksheet,'E'+linenumber)
        })
        linenumber ++;
    }
};
Lagomoro_Xlsx.loadListener = function(worksheet){
    var linenumber = 2;
    while(!this.isXlsxEnd(worksheet,linenumber)){
        this._listener.push({
            "id":this.readXlsxCellValue(worksheet,'A'+linenumber,'string'),
            "formula":this.readXlsxCellValue(worksheet,'B'+linenumber,'string'),
            "value":this.readXlsxCellValue(worksheet,'C'+linenumber,'string'),
        })
        linenumber ++;
    }
};
Lagomoro_Xlsx.loadData = function(worksheet){
    var linenumber = 3;
    var temp = {};
    while(!this.isXlsxEnd(worksheet,linenumber)){
        if(this.haveXlsxCell(worksheet,'A'+linenumber)){
            if(temp.id) this._data.push(temp);
            temp = {
                "id":this.readXlsxCellValue(worksheet,'A'+linenumber,'string'),
                "chapter":this.readXlsxCellValue(worksheet,'B'+linenumber,'string'),
                "upfront":this.readXlsxCellValue(worksheet,'C'+linenumber,'string'),
                "name":this.readXlsxCellValue(worksheet,'D'+linenumber,'string'),
                "description":this.readXlsxCellValue(worksheet,'E'+linenumber,'string'),
                "reward":this.translateReward(worksheet,'F'+linenumber),
                "color":this.readXlsxCellColor(worksheet,'G'+linenumber),
                "difficulty":this.readXlsxCellValue(worksheet,'H'+linenumber,'number'),
                "auto":this.readXlsxCellValue(worksheet,'I'+linenumber,'boolean'),
                "hidden":this.readXlsxCellValue(worksheet,'J'+linenumber,'boolean'),
                "autoget":this.readXlsxCellValue(worksheet,'K'+linenumber,'boolean'),
                "childs":[]
            };
        }else{
            temp.childs.push({
                "upfront":this.readXlsxCellValue(worksheet,'C'+linenumber,'string'),
                "id":this.readXlsxCellValue(worksheet,'D'+linenumber,'string'),
                "name":this.readXlsxCellValue(worksheet,'E'+linenumber,'string'),
                "variable":this.readXlsxCellValue(worksheet,'F'+linenumber,'data'),
                "standard":this.readXlsxCellValue(worksheet,'G'+linenumber,'data'),
                "limit":this.readXlsxCellValue(worksheet,'H'+linenumber,'boolean'),
                "auto":this.readXlsxCellValue(worksheet,'I'+linenumber,'boolean'),
                "hidden":this.readXlsxCellValue(worksheet,'J'+linenumber,'boolean'),
                "event":this.readXlsxCellValue(worksheet,'K'+linenumber,'number'),
            });
        }
        linenumber ++;
    }
    if(temp.id) this._data.push(temp);
};
Lagomoro_Xlsx.translateReward = function(worksheet,address) {
    var value = this.readXlsxCellValue(worksheet,address,'string');
    if(!value) return [];
    if(value.contains('\r\n')){
        var temp = value.split('\r\n');
    }else if(value.contains('\n')){
        var temp = value.split('\n');
    }else{
        var temp = value.split('\r');
    }
    for(var i = 0;i < temp.length;i++){
        temp[i] = temp[i].split(' ');
        if(temp[i][0] !== 'EVAL' && temp[i][0] !== 'MISSION'){
            for(var a = 1;a < temp[i].length;a++){
                temp[i][a] = Number(temp[i][a]);
            }
        }
    }
    return temp;
};
Lagomoro_Xlsx.readXlsxCellColor = function(worksheet,address) {
    var cell = worksheet[address];
    if(cell && cell.s.fgColor.rgb){
        return '#' + cell.s.fgColor.rgb;
    }
    return '#FFFFFF';
}
Lagomoro_Xlsx.readXlsxCellValue = function(worksheet,address,type) {
    if(this.haveXlsxCell(worksheet,address)){
        var cell = worksheet[address];
        switch(type){
            case 'boolean':return !!cell.v;
            case 'number':return Number(cell.v);
            case 'string':return String(cell.v);
            case 'data':return cell.v;
            default: return '';
        }
    }else{
        switch(type){
            case 'boolean':return false;
            case 'number':return 0;
            case 'string':return '';
            case 'data':return null;
            default: return '';
        }
    }
};
Lagomoro_Xlsx.haveXlsxCell = function(worksheet,address) {
    var cell = worksheet[address];
    return cell && (cell.v !== null);
};
Lagomoro_Xlsx.isXlsxEnd = function(worksheet,linenumber) {
    var linename = ['A','B','C','D','E'];
    for(var i = 0;i < linename.length;i++){
        if(this.haveXlsxCell(worksheet,linename[i]+linenumber))return false;
    }
    return true;
};
// ======================================================================
// * 运行数据库
// ----------------------------------------------------------------------
Lagomoro_Xlsx.load();
// ======================================================================
//获取指定数据
Lagomoro_Xlsx.getData = function(dataclass) {
    var data = dataclass.split('.');
    var temparray = null;
    for(var i = 0;i < this._data.length;i++){
        if(data.length === 1 && this._data[i].chapter === data[0]){
            if(!temparray)temparray = [];
            temparray.push(this._data[i]);
        }
        if(data.length === 2 && this._data[i].chapter === data[0] && this._data[i].id === data[1]){
            return this._data[i];
        }
        if(data.length === 3 && this._data[i].chapter === data[0] && this._data[i].id === data[1]){
            for(var a = 0;a < this._data[i].childs.length;a++){
                if(this._data[i].childs[a].id === data[2]){
                    return this._data[i].childs[a];
                }
            }
        }
    }
    return temparray;
};
//获取任务类型
Lagomoro_Xlsx.getCategory = function() {
    var temparray = [];
    for(var i = 0;i < Lagomoro_Xlsx._category.length;i++){
        if(Lagomoro_Xlsx._category[i].display){
            temparray.push(Lagomoro_Xlsx._category[i]);
        }
    }
    return temparray;
};
// ======================================================================
// * Lagomoro_Mission核心：核心交互模块
// ======================================================================
// ======================================================================
// * Scene_Base
// ======================================================================
Scene_Base.prototype.Lagomoro_Mission_initialize = Scene_Base.prototype.initialize;
Scene_Base.prototype.initialize = function() {
    this.Lagomoro_Mission_initialize();
    //this._missiontime = 0;
};
Scene_Base.prototype.Lagomoro_Mission_updateChildren = Scene_Base.prototype.updateChildren;
Scene_Base.prototype.updateChildren = function() {
    this.Lagomoro_Mission_updateChildren();
    /*this._missiontime ++;
    if(this._missiontime === 30 && $gameSystem){
        $gameSystem.testmission();
        this._missiontime = 0;
    }*/
    if($gameSystem){
        $gameSystem.testmission();
    }
 };
// ======================================================================
// * Game_System
// ======================================================================
Game_System.prototype.Lagomoro_Mission_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    this.Lagomoro_Mission_initialize();
    this._Lagomoro_Mission_Data = {};
};
Game_System.prototype.registerMission = function(dataClass) {
    var data = dataClass.split('.');
    if(data.length > 2) return;
    var readData = Lagomoro_Xlsx.getData(dataClass);
    if(readData){
        if(!this._Lagomoro_Mission_Data[data[0]]){
            this._Lagomoro_Mission_Data[data[0]] = {};
        }
        if(data.length < 2) return;
        if(!this._Lagomoro_Mission_Data[data[0]][data[1]]){
            this._Lagomoro_Mission_Data[data[0]][data[1]] = {
                "hide" : readData.hidden,
                "completed" : false
            }
            for(var i = 0;i < readData.childs.length;i++){
                this._Lagomoro_Mission_Data[data[0]][data[1]][readData.childs[i].id] = {
                    "hide" : readData.childs[i].hidden,
                    "variable" : (parseFloat(readData.childs[i].variable).toString() !== "NaN" ? readData.childs[i].variable : 0),
                    "completed" : false
                }
            }
        }else{
            for(var i = 0;i < readData.childs.length;i++){
                if(!this._Lagomoro_Mission_Data[data[0]][data[1]][readData.childs[i].id]){
                    this._Lagomoro_Mission_Data[data[0]][data[1]][readData.childs[i].id] = {
                        "hide" : readData.childs[i].hidden,
                        "variable" : (parseFloat(readData.childs[i].variable).toString() !== "NaN" ? readData.childs[i].variable : 0),
                        "completed" : false
                    }
                }
            }
        }
    }
};
Game_System.prototype.resetMission = function(dataClass) {
    var data = dataClass.split('.');
    if(data.length !== 2) return;
    var readData = Lagomoro_Xlsx.getData(dataClass);
    if(readData){
        if(this._Lagomoro_Mission_Data[data[0]] && this._Lagomoro_Mission_Data[data[0]][data[1]]){
            this._Lagomoro_Mission_Data[data[0]][data[1]]["hide"] = readData.hidden;
            this._Lagomoro_Mission_Data[data[0]][data[1]]["completed"] = false;
            for(var i = 0;i < readData.childs.length;i++){
                if(this._Lagomoro_Mission_Data[data[0]][data[1]][readData.childs[i].id]){
                    this._Lagomoro_Mission_Data[data[0]][data[1]][readData.childs[i].id]["hide"] = readData.childs[i].hidden;
                    this._Lagomoro_Mission_Data[data[0]][data[1]][readData.childs[i].id]["variable"] = (parseFloat(readData.childs[i].variable).toString() !== "NaN" ? readData.childs[i].variable : 0);
                    this._Lagomoro_Mission_Data[data[0]][data[1]][readData.childs[i].id]["completed"] = false;
                }
            }
        }
    }
};
Game_System.prototype.registerChapter = function(dataClass) {
    var data = dataClass.split('.');
    if(data.length > 1) return;
    var readData = Lagomoro_Xlsx.getData(dataClass);
    if(readData){
        if(!this._Lagomoro_Mission_Data[data[0]]){
            this._Lagomoro_Mission_Data[data[0]] = {};
        }
        for(var i = 0;i < readData.length;i++){
            this.registerMission(dataClass + '.' + readData[i].id);
        }
    }
};
Game_System.prototype.missionExist = function(dataClass){
    var data = dataClass.split('.');
    if(data.length > 2 && (data[2] === 'hide' || data[2] === 'completed')) return false;
    var temp = this._Lagomoro_Mission_Data;
    if(temp === null || temp === undefined) return false;
    while(data.length > 0){
        temp = temp[data.shift()];
        if(temp === null || temp === undefined) return false;
    }
    return true;
};
Game_System.prototype.missionData = function(dataClass){
    if(this.missionExist(dataClass)){
        var data = dataClass.split('.')
        var temp = this._Lagomoro_Mission_Data;
        while(data.length > 0){
            temp = temp[data.shift()];
        }
        return temp;
    }else{
        return null;
    }
};
Game_System.prototype.missionIsVariable = function(dataClass){
    if(dataClass.split('.').length !== 3) return false;
    var data = this.missionExist(dataClass) ? Lagomoro_Xlsx.getData(dataClass) : null;
    return data ? (parseFloat(data.variable).toString() !== "NaN" ? true : false) : false;
};
Game_System.prototype.missionVariable = function(dataClass){
    var data = this.missionExist(dataClass) ? Lagomoro_Xlsx.getData(dataClass) : null;
    return data ? (this.missionIsVariable(dataClass) ? this.missionData(dataClass).variable : this.missionEvalParse(this.missionData(dataClass).variable, data.variable)) : 0;
};
Game_System.prototype.missionStandard = function(dataClass){
    var data = Lagomoro_Xlsx.getData(dataClass);
    return data ? (parseFloat(data.standard).toString() !== "NaN" ? data.standard : this.missionEvalParse(this.missionData(dataClass).variable, data.standard)) : 1;
};
Game_System.prototype.isMissionHide = function(dataClass){
    if(this.missionExist(dataClass) && (dataClass.split('.').length === 2 || dataClass.split('.').length === 3)){
        return this.missionData(dataClass).hide;
    }
};
Game_System.prototype.isMissionComplete = function(dataClass){
    if(this.missionExist(dataClass)){
        var data = dataClass.split('.');
        if(data.length === 1){
            var temp = Lagomoro_Xlsx.getData(dataClass);
            for(var i = 0;i < temp.length;i++){
                if(!this.isMissionComplete(dataClass + '.' + temp[i].id) && !this.isMissionCompleted(dataClass + '.' + temp[i].id)){
                    return false;
                }
            }
            return true;
        }else if(data.length === 2){
            var temp = Lagomoro_Xlsx.getData(dataClass);
            for(var i = 0;i < temp.childs.length;i++){
                if(!this.isMissionComplete(dataClass + '.' + temp.childs[i].id) && !this.isMissionCompleted(dataClass + '.' + temp.childs[i].id)){
                    return false;
                }
            }
            return true;
        }else if(data.length === 3){
            return (this.missionVariable(dataClass) >= this.missionStandard(dataClass) || this.isMissionCompleted(dataClass));
        }else{
            return false;
        }
    }
    return false;
};
Game_System.prototype.isMissionCompleted = function(dataClass){
    if(this.missionExist(dataClass)){
        var data = dataClass.split('.');
        if(data.length === 1){
            var temp = Lagomoro_Xlsx.getData(dataClass);
            for(var i = 0;i < temp.length;i++){
                if(!this.isMissionCompleted(dataClass + '.' + temp[i].id)){
                    return false;
                }
            }
            return true;
        }else if(data.length === 2){
            return this.missionData(dataClass).completed;
        }else if(data.length === 3){
            return this.missionData(dataClass).completed;
        }else{
            return false;
        }
    }
    return false;
};
Game_System.prototype.missionReward = function(dataClass){
    if(this.missionExist(dataClass) && (dataClass.split('.').length === 2)){
        var reward = Lagomoro_Xlsx.getData(dataClass).reward;
        for(var i = 0;i < reward.length;i++){
            if(reward[i][0] === 'EXP'){
                $gameParty.members().forEach(function(actor) {
                    actor.changeExp(actor.currentExp() + reward[i][1], true);
                    $gameTemp.toast(actor.name() + " " + Lagomoro.Mission.TOAST.REWARDMIS.format(Lagomoro.Mission.TOAST.EXP, reward[i][1]));
                }.bind(this));
            }else if(reward[i][0] === 'MONEY'){
                $gameParty.gainGold(reward[i][1]);
                $gameTemp.toast(Lagomoro.Mission.TOAST.REWARDMIS.format(Lagomoro.Mission.TOAST.GOLD, reward[i][1]));
            }else if(reward[i][0] === 'EVAL'){
                eval(reward[i][1]);
            }else if(reward[i][0] === 'MISSION'){
                this.missionHidden(reward[i][1],false);
            }else if(reward[i][0] === 'EVENT'){
                this.missionEvent(reward[i][1]);
            }else if(reward[i][0] === 'ITEM'){
                $gameParty.gainItem($dataItems[reward[i][1]], reward[i][2]);
                $gameTemp.toast(Lagomoro.Mission.TOAST.REWARDMIS.format($dataItems[reward[i][1]].name, reward[i][1]));
            }else if(reward[i][0] === 'WEAPON'){
                $gameParty.gainItem($dataWeapons[reward[i][1]], reward[i][2]);
                $gameTemp.toast(Lagomoro.Mission.TOAST.REWARDMIS.format($dataWeapons[reward[i][1]].name, reward[i][1]));
            }else if(reward[i][0] === 'ARMOR'){
                $gameParty.gainItem($dataArmors[reward[i][1]], reward[i][2]);
                $gameTemp.toast(Lagomoro.Mission.TOAST.REWARDMIS.format($dataArmors[reward[i][1]].name, reward[i][1]));
            }
        }
    }
};
Game_System.prototype.missionEvent = function(eventID){
    $gameTemp.reserveCommonEvent(eventID);
};
Game_System.prototype.missionComplete = function(dataClass){
    var data = dataClass.split('.')
    if(this.missionExist(dataClass)){
        if(dataClass.split('.').length === 2){
            if(!this.missionData(dataClass).completed){
                this.missionReward(dataClass);
                $gameTemp.toast(Lagomoro.Mission.TOAST.COMPLETEMIS.format(Lagomoro_Xlsx.getData(dataClass).name));
            }
            this._Lagomoro_Mission_Data[data[0]][data[1]].completed = true;
        }
        if(dataClass.split('.').length === 3){
            if(Lagomoro_Xlsx.getData(dataClass).event){
                this.missionEvent(Lagomoro_Xlsx.getData(dataClass).event);
                $gameTemp.toast(Lagomoro.Mission.TOAST.COMPLETEMIS.format(Lagomoro_Xlsx.getData(dataClass).name));
            }
            this._Lagomoro_Mission_Data[data[0]][data[1]][data[2]].completed = true;
        }
    }
};
Game_System.prototype.missionCompleteWithTest = function(dataClass) {
    if(this.isMissionComplete(dataClass)){
        this.missionComplete(dataClass);
    }
};
Game_System.prototype.missionHidden = function(dataClass,hidden){
    var data = dataClass.split('.')
    if(this.missionExist(dataClass)){
        if(dataClass.split('.').length === 2){
            this._Lagomoro_Mission_Data[data[0]][data[1]].hide = hidden;
        }
        if(dataClass.split('.').length === 3){
            this._Lagomoro_Mission_Data[data[0]][data[1]][data[2]].hide = hidden;
        }
    }
};
Game_System.prototype.missionRate = function(dataClass){
    if((Lagomoro_Xlsx.getData(dataClass).limit && this.isMissionComplete(dataClass)) || (this.isMissionCompleted(dataClass) && this.missionVariable(dataClass))){
        return this.missionStandard(dataClass) + '/' + this.missionStandard(dataClass);
    }
    return this.missionVariable(dataClass) + '/' + this.missionStandard(dataClass);
};
Game_System.prototype.isMissionUpfrontComplete = function(dataClass){
    if(this.missionExist(dataClass)){
        if(dataClass.split('.').length === 2){
            var front = Lagomoro_Xlsx.getData(dataClass).upfront;
            if(!front) return true;
            front = front.split(';');
            var setting = true;
            for(var i = 0;i < front.length;i++){
                if(!this.isMissionComplete(front[i])){
                    setting = false;
                }
            }
            return setting;
        }else if (dataClass.split('.').length === 3){
            var front = Lagomoro_Xlsx.getData(dataClass).upfront;
            if(!front) return true;
            front = front.split(';');
            var data = dataClass.split('.');
            var setting = true;
            for(var i = 0;i < front.length;i++){
                if(!this.isMissionComplete(data[0]+'.'+data[1]+'.'+front[i])){
                    setting = false;
                }
            }
            return setting;
        }
    }
    return false;
};
Game_System.prototype.isMissionUpfrontCompleted = function(dataClass){
    if(this.missionExist(dataClass)){
        if(dataClass.split('.').length === 2){
            var front = Lagomoro_Xlsx.getData(dataClass).upfront;
            if(!front) return true;
            front = front.split(';');
            var setting = true;
            for(var i = 0;i < front.length;i++){
                if(!this.isMissionCompleted(front[i])){
                    setting = false;
                }
            }
            return setting;
        }else if (dataClass.split('.').length === 3){
            var front = Lagomoro_Xlsx.getData(dataClass).upfront;
            if(!front) return true;
            front = front.split(';');
            var data = dataClass.split('.');
            var setting = true;
            for(var i = 0;i < front.length;i++){
                if(!this.isMissionCompleted(data[0]+'.'+data[1]+'.'+front[i])){
                    setting = false;
                }
            }
            return setting;
        }
    }
    return false;
};
Game_System.prototype.testAllChild = function() {
    for(var key_a in this._Lagomoro_Mission_Data){
        for(var key_b in this._Lagomoro_Mission_Data[key_a]){
            for(var key_c in this._Lagomoro_Mission_Data[key_a][key_b]){
                if(this.isMissionHide(key_a+'.'+key_b+'.'+key_c) && this.isMissionUpfrontCompleted(key_a+'.'+key_b+'.'+key_c)){
                    this.missionHidden(key_a+'.'+key_b+'.'+key_c,false);
                }
                if(!this.isMissionCompleted(key_a+'.'+key_b+'.'+key_c) && this.isMissionComplete(key_a+'.'+key_b+'.'+key_c)){
                    if(Lagomoro_Xlsx.getData(key_a+'.'+key_b+'.'+key_c).auto && !this.isMissionHide(key_a+'.'+key_b+'.'+key_c) && this.isMissionUpfrontCompleted(key_a+'.'+key_b+'.'+key_c)){
                        this.missionComplete(key_a+'.'+key_b+'.'+key_c);
                    }
                }
            }
        }
    }
};
Game_System.prototype.testAllMission = function() {
    var pass = true;
    for(var key_a in this._Lagomoro_Mission_Data){
        for(var key_b in this._Lagomoro_Mission_Data[key_a]){
            if(this.isMissionHide(key_a+'.'+key_b) && this.isMissionUpfrontCompleted(key_a+'.'+key_b) && Lagomoro_Xlsx.getData(key_a+'.'+key_b).autoget){
                this.missionHidden(key_a+'.'+key_b,false);
            }
            if(!this.isMissionCompleted(key_a+'.'+key_b)){
                pass = true;
                for(var key_c in this._Lagomoro_Mission_Data[key_a][key_b]){
                    if((key_c !== 'hide' && key_c !== 'completed') && !this.isMissionCompleted(key_a+'.'+key_b+'.'+key_c)){
                        pass = false;
                        break;
                    }
                }
                if(pass && !this.isMissionHide(key_a+'.'+key_b+'.'+key_c) && this.isMissionUpfrontCompleted(key_a+'.'+key_b+'.'+key_c)){
                    this.missionComplete(key_a+'.'+key_b);
                }
            }
        }
    }
};
Game_System.prototype.testmission = function() {
    this.testAllChild();
    this.testAllMission();
};
Game_System.prototype.getmissionStatus = function(dataClass) {
    var havmis = this.missionExist(dataClass);
    var misfro = this.isMissionUpfrontCompleted(dataClass);
    var miscod = this.isMissionCompleted(dataClass);

    var mishide = this.isMissionHide(dataClass);
    var miscop = this.isMissionComplete(dataClass);
    
    if(miscod){return 5;}//已完成
    if(miscop && !miscod){return 4;}//已达成
    
    if(!havmis){return 0;}//未注册
    if(havmis && !misfro){return 1;}//前置未完成
    if(havmis && misfro && mishide){return 2;}//隐藏中
    if(havmis && misfro && !miscop){return 3;}//进行中

    return 0
};
// ======================================================================
// * 任务监听处理
// ======================================================================
Game_System.prototype.appendListener = function(formula, count) {
    var listener;
    var status;
    count = count || 1;
    for(i = 0; i < Lagomoro_Xlsx._listener.length; i++){
        listener = Lagomoro_Xlsx._listener[i];
        status = this.getmissionStatus(listener.id);
        if((status === 3 || status === 4) && formula === listener.formula){
            this.mission_addrate(listener.id, (parseFloat(listener.value).toString() !== "NaN" ? this.missionEvalParse(this.missionData(listener.id).variable, listener.value) : listener.value) * count);
        }
    }
}
// ======================================================================
// * 任务公式处理
// ======================================================================
Game_System.prototype.missionEvalParse = function(value, formula) {
    var G = $gameParty.gold();
    var V = function(variableId){return $gameVariables.value(variableId)};
    var S = function(switchId){return $gameSwitches.value(switchId) ? 1 : 0};
    var Gold = G,Variable = V,Switch = S,GOLD = G,VARIABLE = V, SWITCH = S;
    var I = function(itemId){return $gameParty.numItems($dataItems[itemId])};
    var W = function(weaponId){return $gameParty.numItems($dataWeapons[weaponId])};
    var A = function(armorId){return $gameParty.numItems($dataArmors[armorId])};
    var Item = I,Weapon = W,Armor = A,ITEM = I,WEAPON = W,ARMOR = A;
    var LV = function(actorId){return $gameActors.actor(actorId)._level};
    var Level = LV,LEVEL = LV;
    var T = value;
    var Temp = T,TEMP = T;
    return eval(formula);
}
// ======================================================================
// * 任务相关接口
// ======================================================================
//增加任务完成度（仅对任务步骤有效）
Game_System.prototype.mission_addrate = function(dataClass,rate){
    if(this.missionExist(dataClass)){
        var data = dataClass.split('.');
        this._Lagomoro_Mission_Data[data[0]][data[1]][data[2]].variable += (rate ? rate : 1);
    }
};
//设置任务完成度（仅对任务步骤有效）
Game_System.prototype.mission_setrate = function(dataClass,rate){
    if(this.missionExist(dataClass)){
        var data = dataClass.split('.');
        this._Lagomoro_Mission_Data[data[0]][data[1]][data[2]].variable = rate;
    }
};
//检测完成任务（仅对任务、任务步骤有效）
Game_System.prototype.mission_complete = function(dataClass,without){
    if(without === 'true' || without === '强制' || without === 'without'){
        this.missionComplete(dataClass);
    }else{
        this.missionCompleteWithTest(dataClass);
    }
};
//设置隐藏性（仅对任务、任务步骤有效）
Game_System.prototype.mission_setHideen = function(dataClass,hidden){
    this.missionHidden(dataClass,hidden);
};
//注册任务
Game_System.prototype.mission_register = function(dataClass,all){
    if(dataClass.split('.').length === 1 && (all === 'true' || all === '全部' || all === 'all')){
        this.registerChapter(dataClass);
    }else{
        this.registerMission(dataClass);
    }
};
//重置任务
Game_System.prototype.mission_reset = function(dataClass){
    this.resetMission(dataClass);
};
//检测任务是否达成（包含完成）
Game_System.prototype.mission_iscomplete = function(dataClass){
    return this.isMissionCompleted(dataClass) || this.isMissionComplete(dataClass);
};
//检测任务是否完成
Game_System.prototype.mission_iscompleted = function(dataClass){
    return this.isMissionCompleted(dataClass);
};
//检测任务是否达成（包含完成）并且自动完成
Game_System.prototype.mission_isdone = function(dataClass){
    var temp = this.isMissionCompleted(dataClass) || this.isMissionComplete(dataClass);
    if(temp) this.missionComplete(dataClass);
    return temp;
};
//检测任务的前置任务是否全部达成
Game_System.prototype.mission_isfrontComplete = function(dataClass){
    return this.isMissionUpfrontComplete(dataClass);
};
//检测任务的前置任务是否全部完成
Game_System.prototype.mission_isfrontCompleted = function(dataClass){
    return this.isMissionUpfrontCompleted(dataClass);
};
//验证任务状态是否匹配
Game_System.prototype.mission_testStatus = function(dataClass,status) {
    var state = this.getmissionStatus(dataClass);
    switch(status){
        case '未注册':     case 'unregistered': case 0:return state === 0;
        case '前置未完成': case 'unupfront':    case 1:return state === 1;
        case '隐藏中':     case 'hidden':       case 2:return state === 2;
        case '进行中':     case 'underway':     case 3:return state === 3;
        case '已达成':     case 'complete':     case 4:return state === 4;
        case '已完成':     case 'completed':    case 5:return state === 5;
        default:return false;
    }
};
//追踪任务
Game_System.prototype.mission_trace = function(dataClass) {
    if(dataClass === "无" || dataClass === "null"){
        $gameSystem._Lagomoro_Mission_Mapshow = null;
        return;
    }
    if(this.missionExist(dataClass) && dataClass.split('.').length === 2){
        $gameSystem._Lagomoro_Mission_Mapshow = dataClass;
    }
};
// ======================================================================
// * Lagomoro_Toast核心：基础消息推送功能
// ======================================================================
// ======================================================================
// * Scene_Base
// ======================================================================
Scene_Base.prototype.Lagomoro_Toast_updateChildren = Scene_Base.prototype.updateChildren;
Scene_Base.prototype.updateChildren = function() {
    this.Lagomoro_Toast_updateChildren();
    if($gameTemp){
        $gameTemp.updatetoast();
    }
};
// ======================================================================
// * Game_Temp
// ======================================================================
Game_Temp.prototype.Lagomoro_Toast_initialize = Game_Temp.prototype.initialize;
Game_Temp.prototype.initialize = function() {
    this.Lagomoro_Toast_initialize();
    this._toastlist = [];
};
Game_Temp.prototype.toast = function(text, color) {
    if(!Lagomoro.Mission.CANTOAST) return;
	var sprite = new Sprite();
	sprite.bitmap = new Bitmap(Graphics.boxWidth, 36);
	sprite.bitmap.textColor = (color ? color : '#ffff00');
	sprite.bitmap.fontSize = 24;

	var width = sprite.bitmap.measureTextWidth(text) + 12;
	var colorm = (PluginManager.parameters('Lagomoro_Mission')['windowcolor']||'rgba(0, 0, 0, 0.4)');
	
    sprite.bitmap.fillRect(0, 3, width, 30, colorm);
    sprite.bitmap.fillRect(width, 5, 2, 26, colorm);
    sprite.bitmap.fillRect(width + 2, 7, 2, 22, colorm);
    sprite.bitmap.fillRect(width + 4, 9, 2, 18, colorm);
    sprite.bitmap.fillRect(width + 6, 11, 2, 14, colorm);
    sprite.bitmap.fillRect(width + 8, 13, 2, 10, colorm);
    sprite.bitmap.fillRect(width + 10, 15, 2, 6, colorm);
    sprite.bitmap.fillRect(width + 12, 17, 2, 2, colorm);

	sprite.bitmap.drawText(text, 6, 6, Graphics.boxWidth, 24, 'left');

	sprite._time = 0;
    sprite._tempy = 0;
    sprite.alpha = 0;
	this.alltoastmove(32);
	this._toastlist.push(sprite);
	SceneManager._scene.addChild(this._toastlist[this._toastlist.length - 1]);
};
Game_Temp.prototype.toastShow = function() {
    for(var i = 0;i < this._toastlist.length;i++){
        this._toastlist[i]._time = 0;
        SceneManager._scene.addChild(this._toastlist[i]);
    }
};
Game_Temp.prototype.alltoastmove = function(height) {
    for(var i = 0;i < this._toastlist.length;i++){
		this._toastlist[i]._tempy += height;
	}
};
Game_Temp.prototype.updatetoast = function() {
    for(var i = 0;i < this._toastlist.length;i++){
		if(this._toastlist[i]._time < 60){
			this._toastlist[i].alpha += 1/60;
		}else if(this._toastlist[i]._time < 660){
        }else if(this._toastlist[i]._time < 720){
            this._toastlist[i].alpha -= 1/60;
        }
        this._toastlist[i]._time ++;
        if(this._toastlist[i]._tempy > 0){
            this._toastlist[i].y ++;
            this._toastlist[i]._tempy --;
        }
        if(this._toastlist[i].y + this._toastlist[i].height > Graphics.boxHeight - 350 && this._toastlist.length > 1){
            if(this._toastlist[i]._time < 660){
                this._toastlist[i]._time = 660;
            }else if(this._toastlist[i]._time >= 720){
                SceneManager._scene.removeChild(this._toastlist.splice(i,1)[0]);
                i--;
			}
        }
	}
};

// ======================================================================
// * 定义插件指令
// ======================================================================
// ======================================================================
// * Game_Interpreter
// ======================================================================
Game_Interpreter.prototype.Lagomoro_Mission_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function(command, args) {
    this.Lagomoro_Mission_pluginCommand(command, args);
    if (command === 'Lagomoro_Mission' || command === 'LA任务系统') {
        switch (args[0]){
            case '增加进度':case 'addrate':$gameSystem.mission_addrate(args[1],Number(args[2]));break;
            case '设置进度':case 'setrate':$gameSystem.mission_setrate(args[1],Number(args[2]));break;
            case '完成任务':case 'complete':$gameSystem.mission_complete(args[1],args[2]);break;
            case '设置隐藏':case 'sethidden':$gameSystem.mission_setHideen(args[1],Boolean(args[2]));break;
            case '注册任务':case 'register':$gameSystem.mission_register(args[1],args[2]);break;
            case '重置任务':case 'reset':$gameSystem.mission_reset(args[1]);break;
            case '推送消息':case 'toast':$gameTemp.toast(args[1],args[2] || '#FFFFFF');break;
            case '追踪任务':case 'trace':$gameSystem.mission_trace(args[1]);break;
            case '打开菜单':case 'menu':SceneManager.push(Scene_Lagomoro_Mission);break;
            default:break;
        }
    }
};


// ======================================================================
// * 地图人物相关
// ======================================================================
// ======================================================================
// * Sprite_Character
// ======================================================================
Sprite_Character.prototype.Lagomoro_Mission_initialize = Sprite_Character.prototype.initialize;
Sprite_Character.prototype.initialize = function(character) {
    this.Lagomoro_Mission_initialize(character);
    if (character instanceof Game_Event) {
        var datas = character.event().note.match(/\<NPC:[^,]*,#[0-9a-f]{6},[-0-9]*,[-0-9]*\>/i);
        if (datas !== null) {
			datas = datas[0].slice(5,datas[0].length-1).split(',');
            this.drawNPC(datas[0].toString(),datas[1].toString(),parseInt(datas[2]),parseInt(datas[3]));
        };
        datas = character.event().note.match(/\<ICO:[0-9]*,[-0-9]*,[-0-9]*\>/i);
        if (datas !== null) {
			datas = datas[0].slice(5,datas[0].length-1).split(',');
            this.drawIco(parseInt(datas[0]),parseInt(datas[1]),parseInt(datas[2]));			    
        };
	    datas = character.event().note.match(/\<MIS:[^,]*,[^,]*,[-0-9]*,[-0-9]*\>/ig);
        if (datas !== null) {
			for(var i = 0;i < datas.length;i++){
			    var data = datas[i].slice(5,datas[i].length-1).split(',');
				var dataClass = data[0].toString();
                var havmis = $gameSystem.missionExist(dataClass);
                var misfro = $gameSystem.isMissionUpfrontCompleted(dataClass);
                var miscod = $gameSystem.isMissionCompleted(dataClass);
                if(havmis && misfro && !miscod){
                    this.drawMis(dataClass,data[1].toString(),parseInt(data[2]),parseInt(data[3]));
                }else if(i === datas.length - 1){
					this.drawMisempty(parseInt(data[2]),parseInt(data[3]));
					break;
				}
			}
        };
    };
};
Sprite_Character.prototype.drawNPC = function(name,color,xadd,yadd) {
    this._NPCname = new Sprite();
    this._NPCname.bitmap = new Bitmap(100, 20);
    this._NPCname.bitmap.fontSize = 18;
    this._NPCname.bitmap.textColor = color;
    this._NPCname.bitmap.drawText(name, 0, 0, 100, 20, 'center');
    this._NPCname.anchor.x = 0.5;
    this._NPCname.anchor.y = 1;
    this._NPCname.x = xadd;
    this._NPCname.y = yadd;
    this.addChild(this._NPCname);
}
Sprite_Character.prototype.drawIco = function(iconIndex,xadd,yadd) {
    this._NPCico = new Sprite();
    this._NPCico.bitmap = new Bitmap(32, 32);
    var icos = ImageManager.loadSystem('IconSet');
    var pw = Window_Base._iconWidth;
    var ph = Window_Base._iconHeight;
    var sx = iconIndex % 16 * pw;
    var sy = Math.floor(iconIndex / 16) * ph;
    this._NPCico.bitmap.blt(icos, sx, sy, pw, ph, 0, 0);
    this._NPCico.anchor.x = 0.5;
    this._NPCico.anchor.y = 1;
    this._NPCico.x = xadd;
    this._NPCico.y = yadd;
    this.addChild(this._NPCico);
}

Sprite_Character.prototype.drawMis = function(dataClass,color,xadd,yadd) {
	var mishide = $gameSystem.isMissionHide(dataClass);
    var miscop = $gameSystem.isMissionComplete(dataClass);
    var data = dataClass.split('.');
    var colour = color ? color : (Lagomoro_Xlsx.getData(data[0] + '.'+ data[1]).color || '#FFFFFF');
	this._NPCmis = new Sprite();
    this._NPCmis.bitmap = new Bitmap(32, 32);
    this._NPCmis.bitmap.fontSize = 32;
    this._NPCmis.bitmap.textColor = (mishide || (!mishide && miscop) ? colour : '#999999');
    this._NPCmis.bitmap.drawText((mishide ? '？' : '！'), 0, 0, 32, 32, 'center');
    this._NPCmis.anchor.x = 0.5;
    this._NPCmis.anchor.y = 1;
    this._NPCmis.x = xadd;
    this._NPCmis.y = yadd;
    this.addChild(this._NPCmis);
};
Sprite_Character.prototype.drawMisempty = function(xadd,yadd) {
	this._NPCmis = new Sprite();
    this._NPCmis.bitmap = new Bitmap(32, 32);
    this._NPCmis.bitmap.fontSize = 32;
    this._NPCmis.anchor.x = 0.5;
    this._NPCmis.anchor.y = 1;
    this._NPCmis.x = xadd;
    this._NPCmis.y = yadd;
    this.addChild(this._NPCmis);
};
Sprite_Character.prototype.Lagomoro_Mission_update = Sprite_Character.prototype.update;
Sprite_Character.prototype.update = function() {
    this.Lagomoro_Mission_update();
	if(this._NPCmis){
        this.updatemis();
	}
};
Sprite_Character.prototype.updatemis = function() {
	this._NPCmis.bitmap.clear();
    var datas = this._character.event().note.match(/\<MIS:[^,]*,[^,]*,[-0-9]*,[-0-9]*\>/ig);
    if (datas !== null) {
        for(var i = 0;i < datas.length;i++){
            var datai = datas[i].slice(5,datas[i].length-1).split(',');
            var dataClass = datai[0].toString();
            var havmis = $gameSystem.missionExist(dataClass);
            var misfro = $gameSystem.isMissionUpfrontCompleted(dataClass);
            var miscod = $gameSystem.isMissionCompleted(dataClass);
            if(havmis && misfro && !miscod){
                var mishide = $gameSystem.isMissionHide(dataClass);
                var miscop = $gameSystem.isMissionComplete(dataClass);
                var data = dataClass.split('.');
                var colour = datai[1].toString() ? datai[1].toString() : (Lagomoro_Xlsx.getData(data[0] + '.'+ data[1]).color || '#FFFFFF');
                this._NPCmis.bitmap.textColor = ((mishide || (!mishide && miscop)) ? colour : '#999999');
                this._NPCmis.bitmap.drawText((mishide ? '？' : '！'), 0, 0, 32, 32, 'center');
            }
        }
    };
};
// ======================================================================
// * 任务菜单显示
// ======================================================================
// ======================================================================
// * Scene_Menu
// ======================================================================
Scene_Menu.prototype.Lagomoro_old_createCommandWindow = Scene_Menu.prototype.createCommandWindow;
Scene_Menu.prototype.createCommandWindow = function() {
	this.Lagomoro_old_createCommandWindow();
    this._commandWindow.setHandler('Lagomoro_Mission',   this.command_Lagomoro_Mission.bind(this));
};
Scene_Menu.prototype.command_Lagomoro_Mission = function() {
    SceneManager.push(Scene_Lagomoro_Mission);
};
// ======================================================================
// * Window_MenuCommand
// ======================================================================
Window_MenuCommand.prototype.Lagomoro_Mission_addOriginalCommands = Window_MenuCommand.prototype.addOriginalCommands;
Window_MenuCommand.prototype.addOriginalCommands = function() {
	this.Lagomoro_Mission_addOriginalCommands();
	this.addCommand(Lagomoro.Mission.MENU.MENUNAME, 'Lagomoro_Mission', this.areMainCommandsEnabled());
};
// ======================================================================
// * Scene_Lagomoro_Mission
// ======================================================================
function Scene_Lagomoro_Mission() {this.initialize.apply(this, arguments);}
Scene_Lagomoro_Mission.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Lagomoro_Mission.prototype.constructor = Scene_Lagomoro_Mission;
Scene_Lagomoro_Mission.prototype.initialize = function() {
    Scene_MenuBase.prototype.initialize.call(this);
};
Scene_Lagomoro_Mission.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createCatecoryWindow();
    this.createListWindow();
	this.createContentWindow();
};
Scene_Lagomoro_Mission.prototype.createCatecoryWindow = function() {
    this._categoryWindow = new Lagomoro_Mission_Window_Category();
    this._categoryWindow.setHandler('cancel', this.popScene.bind(this));
    this._categoryWindow.setHandler('ok', this.onCategoryOk.bind(this));
    this.addWindow(this._categoryWindow);
};
Scene_Lagomoro_Mission.prototype.createListWindow = function() {
    this._listWindow = new Lagomoro_Mission_Window_List(Lagomoro.Mission.MENU.MARGIN.LEFT, this._categoryWindow.y + this._categoryWindow.height, Lagomoro.Mission.MENU.LISTWIDTH, Graphics.boxHeight - this._categoryWindow.height - this._categoryWindow.y - Lagomoro.Mission.MENU.MARGIN.BOTTOM);
    this._listWindow.setHandler('cancel', this.onListCancel.bind(this));
    //this._listWindow.setHandler('ok', this.onListOk.bind(this));
    this.addWindow(this._listWindow);
    this._categoryWindow.setItemWindow(this._listWindow);
};
Scene_Lagomoro_Mission.prototype.createContentWindow = function() {
    this._contentWindow = new Lagomoro_Mission_Window_Content(this._listWindow.x + this._listWindow.width, this._categoryWindow.y + this._categoryWindow.height, Graphics.boxWidth - this._listWindow.x - this._listWindow.width - Lagomoro.Mission.MENU.MARGIN.RIGHT, Graphics.boxHeight - this._categoryWindow.height - this._categoryWindow.y - Lagomoro.Mission.MENU.MARGIN.BOTTOM);
    this.addWindow(this._contentWindow);
    this._listWindow.setHelpWindow(this._contentWindow);
    this._contentWindow.setListWindow(this._listWindow);
};
Scene_Lagomoro_Mission.prototype.onCategoryOk = function() {
    this._listWindow.activate();
	this._listWindow.selectLast();
};
Scene_Lagomoro_Mission.prototype.onListOk = function() {

};
Scene_Lagomoro_Mission.prototype.onListCancel = function() {
    this._listWindow.deselect();
    this._categoryWindow.activate();
    this._listWindow.clearHelpWindow();
};
// ======================================================================
// * Lagomoro_Mission_Window_Category
// ======================================================================
function Lagomoro_Mission_Window_Category() {
    this.initialize.apply(this, arguments);
}
Lagomoro_Mission_Window_Category.prototype = Object.create(Window_HorzCommand.prototype);
Lagomoro_Mission_Window_Category.prototype.constructor = Lagomoro_Mission_Window_Category;
Lagomoro_Mission_Window_Category.prototype.initialize = function() {
    Window_HorzCommand.prototype.initialize.call(this, Lagomoro.Mission.MENU.MARGIN.LEFT, Lagomoro.Mission.MENU.MARGIN.TOP);
};
Lagomoro_Mission_Window_Category.prototype.windowWidth = function() {
    return Graphics.boxWidth - Lagomoro.Mission.MENU.MARGIN.LEFT - Lagomoro.Mission.MENU.MARGIN.RIGHT;
};
Lagomoro_Mission_Window_Category.prototype.maxCols = function() {
    return Lagomoro_Xlsx.getCategory().length;
};
Lagomoro_Mission_Window_Category.prototype.update = function() {
    Window_HorzCommand.prototype.update.call(this);
    if (this._itemWindow) {
        this._itemWindow.setCategory(this.currentSymbol());
    }
};
Lagomoro_Mission_Window_Category.prototype.makeCommandList = function() {
    var category = Lagomoro_Xlsx.getCategory();
    for(var i = 0;i < category.length;i++){
        this.addCommand(category[i].name, category[i].id, true, category[i].color);
    }
};
Lagomoro_Mission_Window_Category.prototype.drawItem = function(index) {
    var rect = this.itemRectForText(index);
    var align = this.itemTextAlign();
    this.changeTextColor(this._list[index].ext);
    this.changePaintOpacity(this.isCommandEnabled(index));
    this.drawText(this.commandName(index), rect.x, rect.y, rect.width, align);
};
Lagomoro_Mission_Window_Category.prototype.setItemWindow = function(itemWindow) {
    this._itemWindow = itemWindow;
};
// ======================================================================
// * Lagomoro_Mission_Window_List
// ======================================================================
function Lagomoro_Mission_Window_List() {
    this.initialize.apply(this, arguments);
}
Lagomoro_Mission_Window_List.prototype = Object.create(Window_Selectable.prototype);
Lagomoro_Mission_Window_List.prototype.constructor = Lagomoro_Mission_Window_List;
Lagomoro_Mission_Window_List.prototype.initialize = function(x, y, width, height) {
    Window_Selectable.prototype.initialize.call(this, x, y, width, height);
    this._category = 'none';
    this._data = [];
    this._page = 0;
};
Lagomoro_Mission_Window_List.prototype.setCategory = function(category) {
    if (this._category !== category) {
        this._category = category;
        this.refresh();
        this.resetScroll();
    }
};
Lagomoro_Mission_Window_List.prototype.standardFontSize = function() {return 18;};
Lagomoro_Mission_Window_List.prototype.maxItems = function() {
    return this._data ? this._data.length : 1;
};
Lagomoro_Mission_Window_List.prototype.item = function() {
    var index = this.index();
    return this._data && index >= 0 ? this._data[index] : null;
};
Lagomoro_Mission_Window_List.prototype.isCurrentItemEnabled = function() {
    return this.isEnabled(this.item());
};
Lagomoro_Mission_Window_List.prototype.includes = function(item) {
    if(!item) return false;
    return item.category === this._category && $gameSystem.missionExist(item.id);
};
Lagomoro_Mission_Window_List.prototype.isEnabled = function(item) {
    return !$gameSystem.isMissionCompleted(item.id);
};
Lagomoro_Mission_Window_List.prototype.makeItemList = function() {
    this._data = Lagomoro_Xlsx._chapter.filter(function(item) {
        return this.includes(item);
    }, this);
    if (this.includes(null)) {
        this._data.push(null);
    }
};
Lagomoro_Mission_Window_List.prototype.selectLast = function() {
    this.select(0);
};
Lagomoro_Mission_Window_List.prototype.drawItem = function(index) {
    var item = this._data[index];
    if (item) {
        var rect = this.itemRect(index);
        this.changeTextColor(item.color);
        this.changePaintOpacity(this.isEnabled(item));
        this.drawText(item.name, rect.x, rect.y, rect.width, 'left');
        this.changePaintOpacity(1);
    }
};
Lagomoro_Mission_Window_List.prototype.updateHelp = function() {
    this.setHelpWindowItem(this.item());
    this.setHelpWindowPage();
};
Lagomoro_Mission_Window_List.prototype.setHelpWindowItem = function(item) {
    if (this._helpWindow && item) {
        this._helpWindow.setWord(item.description);
    }
};
Lagomoro_Mission_Window_List.prototype.setHelpWindowPage = function() {
    if (this._helpWindow) {
        var list = this.pageList();
        if(list.length === 0){
            this._helpWindow.setPage(0,0);
            this._helpWindow.setItem(null);
            return;
        }
        if(this._page < 0){
            this._page = list.length - 1;
        }else if(this._page >= list.length){
            this._page = 0;
        }
        this._helpWindow.setPage(this._page + 1,list.length);
        this._helpWindow.setItem(list[this._page]);
    }
};
Lagomoro_Mission_Window_List.prototype.clearHelpWindow = function() {
    this._helpWindow.clearItem();
};
Lagomoro_Mission_Window_List.prototype.refresh = function() {
    this.makeItemList();
    this.createContents();
    this.drawAllItems();
};
Lagomoro_Mission_Window_List.prototype.pageList = function() {
    if(this.item()){
        return Lagomoro_Xlsx.getData(this.item().id).filter(function(item) {
            return this.includePages(item);
        }, this);
    }
    return [];
};
Lagomoro_Mission_Window_List.prototype.includePages = function(item) {
    return $gameSystem.missionExist(item.chapter+ '.' + item.id) && !$gameSystem.isMissionHide(item.chapter+ '.' + item.id)
};
Lagomoro_Mission_Window_List.prototype.Lagomoro_Mission_select = Lagomoro_Mission_Window_List.prototype.select;
Lagomoro_Mission_Window_List.prototype.select = function(index) {
    this.Lagomoro_Mission_select(index);
    this._page = 0;
    this.setHelpWindowPage();
};
Lagomoro_Mission_Window_List.prototype.isOkEnabled = function() {
    return true;
};
Lagomoro_Mission_Window_List.prototype.processOk = function() {
    if(this.pageList().length === 0) return;
    var id = this.pageList()[this._page].chapter + '.' + this.pageList()[this._page].id;
    if($gameSystem._Lagomoro_Mission_Mapshow === id){
        $gameSystem._Lagomoro_Mission_Mapshow = null;
        SoundManager.playBuzzer();
    }else{
        $gameSystem._Lagomoro_Mission_Mapshow = id;
        SoundManager.playOk();
    }
    this._helpWindow.refresh();
};
Lagomoro_Mission_Window_List.prototype.Lagomoro_Mission_cursorRight = Lagomoro_Mission_Window_List.prototype.cursorRight;
Lagomoro_Mission_Window_List.prototype.cursorRight = function(wrap) {
    this.Lagomoro_Mission_cursorRight(wrap);
    this._page ++;
    SoundManager.playCursor();
    this.setHelpWindowPage();
};
Lagomoro_Mission_Window_List.prototype.Lagomoro_Mission_cursorLeft = Lagomoro_Mission_Window_List.prototype.cursorLeft;
Lagomoro_Mission_Window_List.prototype.cursorLeft = function(wrap) {
    this.Lagomoro_Mission_cursorLeft(wrap);
    this._page --;
    SoundManager.playCursor();
    this.setHelpWindowPage();
};
// ======================================================================
// * Lagomoro_Mission_Window_Content
// ======================================================================
function Lagomoro_Mission_Window_Content() {this.initialize.apply(this, arguments);}
Lagomoro_Mission_Window_Content.prototype = Object.create(Window_Base.prototype);
Lagomoro_Mission_Window_Content.prototype.constructor = Lagomoro_Mission_Window_Content;
Lagomoro_Mission_Window_Content.prototype.initialize = function(x, y, width, height) {
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this._word = null;
    this._item = null;
    this._page = [0,0];
    this.createButtons();
    this._listWindow = null;
    this._standardFontSize = this.smallFontSize();
};
Lagomoro_Mission_Window_Content.prototype.textPadding = function() {return 6;};
Lagomoro_Mission_Window_Content.prototype.standardPadding = function() {return 12;};
Lagomoro_Mission_Window_Content.prototype.standardFontSize = function() {return this._standardFontSize;};
Lagomoro_Mission_Window_Content.prototype.MiniPadding = function() {return 6;};
Lagomoro_Mission_Window_Content.prototype.BigPadding = function() {return 20;};
Lagomoro_Mission_Window_Content.prototype.smallFontSize = function() {return 14;};
Lagomoro_Mission_Window_Content.prototype.mediumFontSize = function() {return 16;};
Lagomoro_Mission_Window_Content.prototype.bigFontSize = function() {return 18;};
Lagomoro_Mission_Window_Content.prototype.setListWindow = function(listWindow) {
    this._listWindow = listWindow;
};
Lagomoro_Mission_Window_Content.prototype.setWord = function(word) {
    if (this._word !== word) {
        this._word = word;
	    this.refresh();
	}
};
Lagomoro_Mission_Window_Content.prototype.setItem = function(item) {
    if (this._item !== item) {
	    this._item = item;
	    this.refresh();
	}
};
Lagomoro_Mission_Window_Content.prototype.setPage = function(page0,page1) {
    this._page = [page0,page1];
};
Lagomoro_Mission_Window_Content.prototype.clearItem = function() {
    this._word = null;
    this._item = null;
    this._page = [0,0];
	this.refresh();
};
Lagomoro_Mission_Window_Content.prototype.processNormalCharacter = function(textState) {
    var c = textState.text[textState.index];
    var w = this.textWidth(c);
	if (this.width - 2 * this.standardPadding() - textState.x >= w){
        this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
		textState.index++;
        textState.x += w;
    }else{
        this.processNewLine(textState);
		textState.index--;
        this.processNormalCharacter(textState);
	}
};
Lagomoro_Mission_Window_Content.prototype.refresh = function() {
    this.updateButtonsVisiblity();
    this.contents.clear();
    var word = this._word;
    var page = this._page;
    var item = this._item;

    var y = this.MiniPadding();
        
	if(word){
        this._standardFontSize = this.smallFontSize();
        this.drawTextEx('    ' + word, this.MiniPadding(), y);
        this.contents.clear();
        this._standardFontSize = this.smallFontSize();
        y = this.drawTextEx('    ' + word, this.MiniPadding(), y);
    }

    y += this.MiniPadding();

	if(item){
		this.contents.textColor = item.color;
        this.contents.fontSize = this.bigFontSize() + 2;
		this.contents.paintOpacity = $gameSystem.isMissionCompleted(item.chapter + '.' + item.id) ? this.translucentOpacity() : 255;
        var finish = $gameSystem.isMissionCompleted(item.chapter + '.' + item.id) ? '【已完成】' : '';
        var map = $gameSystem._Lagomoro_Mission_Mapshow === item.chapter + '.' + item.id ? '【正在追踪】' : '';
        this.drawText(map + item.name + finish, 0, y, this.width - 2*this.standardPadding(), 'center');

        this.contents.paintOpacity = 255;
        
        this.contents.textColor = ['#00FF00','#88FF00','#FFFF00','#FF8800','#FF0000'][item.difficulty - 1];
        var difficulty = Lagomoro.Mission.DIFFICULTY.length < item.difficulty ? '未定义' : Lagomoro.Mission.DIFFICULTY[item.difficulty - 1];
        this.drawText(difficulty, this.MiniPadding(), y, this.width - 2*this.standardPadding() - this.MiniPadding()*2, 'left');

		y += 36;
		this.contents.textColor = '#FFFFFF';
        
		this._standardFontSize = this.bigFontSize();
        y = this.drawTextEx('    '+item.description, this.MiniPadding(), y);
		
		y += this.MiniPadding();
        
        this.contents.fontSize = this.mediumFontSize();
        this._standardFontSize = this.mediumFontSize();
		for(var i = 0;i < item.childs.length;i++){
            if(!$gameSystem.isMissionHide(item.chapter + '.' + item.id+'.'+item.childs[i].id)){
                this.contents.textColor = ($gameSystem.isMissionCompleted(item.chapter + '.' + item.id+'.'+item.childs[i].id) ? '#999999' : '#FFFFFF');
                this.drawText('▪ ' + item.childs[i].name, this.BigPadding(), y, this.width - 2*this.standardPadding() - this.BigPadding()*2, 'left');
                this.drawText($gameSystem.missionRate(item.chapter +'.'+item.id+'.'+item.childs[i].id), this.BigPadding(), y, this.width - 2*this.standardPadding() - this.BigPadding()*2 - this.MiniPadding(), 'right');
                this.contents.textColor = '#FFFFFF';
                y += this.standardFontSize() + this.textPadding();
            }
	    }
        
        if(item.reward.length !== 0){
            y += this.height/20;
            this.contents.fontSize = this.bigFontSize();
            this._standardFontSize = this.bigFontSize();
            this.contents.paintOpacity = $gameSystem.isMissionCompleted(item.chapter + '.' + item.id) ? this.translucentOpacity() : 255;
            var get = $gameSystem.isMissionCompleted(item.chapter + '.' + item.id) ? '【已领取】' : '';
            this.drawText('任务奖励' + get + '：', this.MiniPadding()+10, y, this.width - 2*this.standardPadding() - this.MiniPadding(), 'left');
            y += this.standardFontSize() + this.textPadding() + 3;
            
            this.contents.fontSize = this.mediumFontSize();
            this._standardFontSize = this.mediumFontSize();
            
            var drawints = [0, 0];
            for(var i = 0;i < item.reward.length;i++){
                if(item.reward[i][0] === 'EXP'){
                    drawints[0] = parseInt(item.reward[i][1]);
                }else if(item.reward[i][0] === 'MONEY'){
                    drawints[1] = parseInt(item.reward[i][1]);
                }else if(item.reward[i][0] === 'ITEM'){
                    drawints.splice(2,0,$dataItems[item.reward[i][1]].name + '*' + item.reward[i][2]);
                }else if(item.reward[i][0] === 'WEAPON'){
                    drawints.splice(2,0,$dataWeapons[item.reward[i][1]].name + '*' + item.reward[i][2]);
                }else if(item.reward[i][0] === 'ARMOR'){
                    drawints.splice(2,0,$dataArmors[item.reward[i][1]].name + '*' + item.reward[i][2]);
                }
            }
            
            var ssl = '';
            if(drawints[0] !== 0){
                ssl += drawints[0] + ' ' + TextManager.expA;
                ssl += '   ';
            }
            if(drawints[1] !== 0){
                ssl += drawints[1] + ' ' + TextManager.currencyUnit;
                ssl += '   ';
            }
            this.drawText(ssl, this.MiniPadding()+14, y, this.width - 2*this.standardPadding() - 6, 'left');
            if(ssl !== ''){
                y += this.standardFontSize() + this.textPadding();
            }
           
            ssl = '';
            for(var i = 2;i < drawints.length;i++){
                ssl += drawints[i];
                if(i < drawints.length - 1){ssl += '   ';}
            }
            this.drawText(ssl, this.MiniPadding()+14, y, this.width - 2*this.standardPadding() - 6, 'left');
        }

        this.contents.fontSize = this.smallFontSize();
        this._standardFontSize = this.smallFontSize();
        this.contents.paintOpacity = 255;
    }
    if(page[1] > 0){
        this.contents.fontSize = this.mediumFontSize();
        this.drawText('Page ' + page[0] + '/' + page[1], 0, this.height - this.standardFontSize()*3 - this.standardPadding()*3 - this.MiniPadding()*2, this.width - this.standardPadding()*2, 'center');
        this.contents.fontSize = this.smallFontSize();
        this.drawText('按下Left/Right翻页  按下确定切换任务追踪模式', 0, this.height - this.standardFontSize() - this.standardPadding()*3 - this.MiniPadding()*2, this.width - this.standardPadding()*2, 'center');
    }else if(word){
        this.contents.fontSize = this.mediumFontSize();
        this.drawText('当前本章节无任务', 0, this.height - this.standardFontSize()*3 - this.standardPadding()*3 - this.MiniPadding()*2, this.width - this.standardPadding()*2, 'center');
        this.contents.fontSize = this.smallFontSize();
        this.drawText('按下Left/Right翻页  按下确定切换任务追踪模式', 0, this.height - this.standardFontSize() - this.standardPadding()*3 - this.MiniPadding()*2, this.width - this.standardPadding()*2, 'center');
    }
};
Lagomoro_Mission_Window_Content.prototype.createButtons = function() {
    var bitmap = ImageManager.loadSystem('ButtonSet');
    var buttonWidth = 48;
    var buttonHeight = 48;
    this._buttons = [];
    for (var i = 0; i < 2; i++) {
        var button = new Sprite_Button();
        var x = buttonWidth * [1, 2][i];
        var w = buttonWidth * (i === 2 ? 2 : 1);
        button.bitmap = bitmap;
        button.setColdFrame(x, 0, w, buttonHeight);
        button.setHotFrame(x, buttonHeight, w, buttonHeight);
        button.visible = false;
        this._buttons.push(button);
        this.addChild(button);

        button.isButtonTouched = function() {
            var x = this.canvasToLocalX(TouchInput.x);
            var y = this.canvasToLocalY(TouchInput.y);
            var sw = this.width * this.scale.x;
            var sh = this.height * this.scale.y;
            var dx = -sh/2;
            var dy = -sw/2;
            return x >= dx && y >= dy && x < sh/2 && y < sw/2;
        };

        button.anchor.x = 0.5;
        button.anchor.y = 0.5;
        button.rotation = Math.PI*0.5;
        button.x = [buttonWidth,this.width - buttonWidth][i];
        button.y = this.height - buttonHeight;
    }
    this._buttons[0].setClickHandler(this.onButtonLeft.bind(this));
    this._buttons[1].setClickHandler(this.onButtonRight.bind(this));
};
Lagomoro_Mission_Window_Content.prototype.onButtonLeft = function() {
    if(this._listWindow){
        this._listWindow._page --;
        SoundManager.playCursor();
        this._listWindow.setHelpWindowPage();
    }
};
Lagomoro_Mission_Window_Content.prototype.onButtonRight = function() {
    if(this._listWindow){
        this._listWindow._page ++;
        SoundManager.playCursor();
        this._listWindow.setHelpWindowPage();
    }
};
Lagomoro_Mission_Window_Content.prototype.updateButtonsVisiblity = function() {
    if (this._item && this._word) {
        this.showButtons();
    } else {
        this.hideButtons();
    }
};
Lagomoro_Mission_Window_Content.prototype.showButtons = function() {
    for (var i = 0; i < this._buttons.length; i++) {
        this._buttons[i].visible = true;
    }
};
Lagomoro_Mission_Window_Content.prototype.hideButtons = function() {
    for (var i = 0; i < this._buttons.length; i++) {
        this._buttons[i].visible = false;
    }
};
Lagomoro_Mission_Window_Content.prototype.drawTextEx = function(text, x, y) {
    if (text) {
        var textState = { index: 0, x: x, y: y, left: x };
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        this.resetFontSettings();
        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }
        return textState.y + textState.height;
    } else {
        return 0;
    }
};
// ======================================================================
// * 地图任务窗口
// ======================================================================
// ======================================================================
// * Game_System
// ======================================================================
Game_System.prototype.Lagomoro_Mission_Map_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
    this.Lagomoro_Mission_Map_initialize();
    this._Lagomoro_Mission_Mapshow = null;
};
// ======================================================================
// * Window_Lagomoro_Mission
// ======================================================================
function Window_Lagomoro_Mission() {this.initialize.apply(this, arguments);}
Window_Lagomoro_Mission.prototype = Object.create(Window_Base.prototype);
Window_Lagomoro_Mission.prototype.constructor = Window_Lagomoro_Mission;
Window_Lagomoro_Mission.prototype.initialize = function() {
    Window_Base.prototype.initialize.call(this, ConfigManager.Lagomoro_Mission_LR ? 0 : Graphics.boxWidth - this.windowWidth(), Graphics.boxHeight * (ConfigManager.Lagomoro_Mission_UD/100), this.windowWidth(), this.windowHeight());
    this.opacity = Lagomoro.Mission.MAP.ALPHA;
    this._updateTime = 0;
    if($gameSystem._Lagomoro_Mission_Mapshow){
        this.refresh();
    }
};
Window_Lagomoro_Mission.prototype.standardFontSize = function() {return 14;};
Window_Lagomoro_Mission.prototype.standardPadding = function() {return Lagomoro.Mission.MAP.ALPHA ? 12 : 0;};
Window_Lagomoro_Mission.prototype.textPadding = function() {return 5;};
Window_Lagomoro_Mission.prototype.miniPadding = function() {return 10;};
Window_Lagomoro_Mission.prototype.windowWidth = function() {return Lagomoro.Mission.MAP.WIDTH;};
Window_Lagomoro_Mission.prototype.windowHeight = function() {return Graphics.boxHeight};
Window_Lagomoro_Mission.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this._updateTime ++;
    if(this._updateTime === 15 && $gameSystem._Lagomoro_Mission_Mapshow){
        this.refresh();
        this._updateTime = 0;
    }
};
Window_Lagomoro_Mission.prototype.refresh = function() {
    var item = Lagomoro_Xlsx.getData($gameSystem._Lagomoro_Mission_Mapshow);
    var width = this.contentsWidth();
    var height = this.standardPadding();
    height += this.standardFontSize()*2 + this.textPadding();
    height = this.drawTextEx(item.description, this.miniPadding(), height);
    for(var i = 0;i < item.childs.length;i++){
        if(!$gameSystem.isMissionHide($gameSystem._Lagomoro_Mission_Mapshow+'.'+item.childs[i].id)){
            height += this.standardFontSize() + this.textPadding();
        }
    }
    height += this.miniPadding()*1.8;
    height += this.standardPadding();
    
    this.height = height;

    this.contents.clear();
    this.drawBackground(width, height);

    var y = 0;

    this.contents.fontSize += 2;
    this.contents.textColor = item.color;
    this.contents.paintOpacity = $gameSystem.isMissionCompleted($gameSystem._Lagomoro_Mission_Mapshow) ? this.translucentOpacity() : 255;
    var finish = $gameSystem.isMissionCompleted($gameSystem._Lagomoro_Mission_Mapshow) ? '【已完成】' : '';
    this.drawText(item.name + finish, 0, y, this.width - 2*this.standardPadding(), 'center');
    this.contents.fontSize = this.standardFontSize();
    
    y += this.standardFontSize()*2 + this.textPadding();

    this.contents.paintOpacity = 255;
    this.contents.textColor = '#FFFFFF';
    
    y = this.drawTextEx(item.description, this.miniPadding(), y);
    
    for(var i = 0;i < item.childs.length;i++){
        if(!$gameSystem.isMissionHide($gameSystem._Lagomoro_Mission_Mapshow+'.'+item.childs[i].id)){
            this.contents.textColor = ($gameSystem.isMissionCompleted($gameSystem._Lagomoro_Mission_Mapshow+'.'+item.childs[i].id) ? '#999999' : '#FFFFFF');
            this.drawText('▪ ' + item.childs[i].name, this.miniPadding(), y, this.width - 2*this.standardPadding() - this.miniPadding()*2, 'left');
            this.drawText($gameSystem.missionRate($gameSystem._Lagomoro_Mission_Mapshow+'.'+item.childs[i].id), this.miniPadding(), y, this.width - 2*this.standardPadding() - this.miniPadding()*2, 'right');
            this.contents.textColor = '#FFFFFF';
            y += this.standardFontSize() + this.textPadding();
        }
    }
};
Window_Lagomoro_Mission.prototype.drawBackground = function(width, height) {
	this.contents.context.fillStyle = Lagomoro.Mission.MAP.COLOR;
    this.contents.context.fillRect(0, 0, width, height);
};
Window_Lagomoro_Mission.prototype.processNormalCharacter = function(textState) {
    var c = textState.text[textState.index];
    var w = this.textWidth(c);
	if (this.width - 2 * this.standardPadding() - textState.x >= w){
        this.contents.drawText(c, textState.x, textState.y, w * 2, textState.height);
		textState.index++;
        textState.x += w;
    }else{
        this.processNewLine(textState);
		textState.index--;
        this.processNormalCharacter(textState);
	}
};
Window_Lagomoro_Mission.prototype.drawTextEx = function(text, x, y) {
    if (text) {
        var textState = { index: 0, x: x, y: y, left: x };
        textState.text = this.convertEscapeCharacters(text);
        textState.height = this.calcTextHeight(textState, false);
        this.resetFontSettings();
        while (textState.index < textState.text.length) {
            this.processCharacter(textState);
        }
        return textState.y + textState.height;
    } else {
        return 0;
    }
};
// ======================================================================
// * Scene_Map
// ======================================================================
Scene_Map.prototype.Lagomoro_Mission_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
Scene_Map.prototype.createDisplayObjects = function() {
	this.Lagomoro_Mission_createDisplayObjects();
	this.Lagomoro_createMissionWindow();
};
Scene_Map.prototype.Lagomoro_createMissionWindow = function() {
    this._Lagomoro_MissionWindow = new Window_Lagomoro_Mission();
    this._windowLayer.addChildAt(this._Lagomoro_MissionWindow,0);
};
Scene_Map.prototype.Lagomoro_Mission_update = Scene_Map.prototype.update;
Scene_Map.prototype.update = function() {
    this.Lagomoro_Mission_update();
    this._Lagomoro_MissionWindow.move(ConfigManager.Lagomoro_Mission_LR ? 0 : Graphics.boxWidth - this._Lagomoro_MissionWindow.windowWidth(), Graphics.boxHeight * (ConfigManager.Lagomoro_Mission_UD/100), this._Lagomoro_MissionWindow.width,this._Lagomoro_MissionWindow.height);
    if($gameMap._interpreter.isRunning()||!$gameSystem._Lagomoro_Mission_Mapshow){
        this._Lagomoro_MissionWindow.close();
    }else{
        this._Lagomoro_MissionWindow.open();  
    }
};

// ======================================================================
// * 玩家设置模块
// ======================================================================
// ======================================================================
// * ConfigManager
// ======================================================================
ConfigManager.Lagomoro_Mission_LR = Lagomoro.Mission.MAP.LR;
ConfigManager.Lagomoro_Mission_UD = Lagomoro.Mission.MAP.UD*10;
ConfigManager.makeData = function() {
    var config = {};
    config.alwaysDash = this.alwaysDash;
    config.commandRemember = this.commandRemember;
    config.bgmVolume = this.bgmVolume;
    config.bgsVolume = this.bgsVolume;
    config.meVolume = this.meVolume;
    config.seVolume = this.seVolume;
    config.Lagomoro_Mission_LR = this.Lagomoro_Mission_LR;
    config.Lagomoro_Mission_UD = this.Lagomoro_Mission_UD;
    return config;
};
ConfigManager.Lagomoro_Mission_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    this.Lagomoro_Mission_applyData(config);
    this.Lagomoro_Mission_LR = this.readLagomoro_Mission_LR(config, 'Lagomoro_Mission_LR');
    this.Lagomoro_Mission_UD = this.readLagomoro_Mission_UD(config, 'Lagomoro_Mission_UD');
};
ConfigManager.readLagomoro_Mission_LR = function(config, name) {
    var value = config[name];
    if (value !== undefined) {
        return value;
    } else {
        return Lagomoro.Mission.MAP.LR;
    }
};
ConfigManager.readLagomoro_Mission_UD = function(config, name) {
    var value = config[name];
    if (value !== undefined) {
        return Number(value).clamp(0, 100);
    } else {
        return Lagomoro.Mission.MAP.UD*10;
    }
};
// ======================================================================
// * Window_Options
// ======================================================================
Window_Options.prototype.Lagomoro_Mission_makeCommandList = Window_Options.prototype.makeCommandList
Window_Options.prototype.makeCommandList = function() {
    this.Lagomoro_Mission_makeCommandList();
    this.addMissionOptions();
};
Window_Options.prototype.addMissionOptions = function() {
    this.addCommand('地图任务窗口位置', 'Lagomoro_Mission_LR');
    this.addCommand('地图任务窗口高度', 'Lagomoro_Mission_UD');
};
Window_Options.prototype.Lagomoro_Mission_statusText = Window_Options.prototype.statusText;
Window_Options.prototype.statusText = function(index) {
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol === 'Lagomoro_Mission_LR') {
        return value ? '左' : '右';
    }
    if (symbol === 'Lagomoro_Mission_UD') {
        return this.volumeStatusText(value);
    }
    return this.Lagomoro_Mission_statusText(index);
};
Window_Options.prototype.Lagomoro_Mission_processOk = Window_Options.prototype.processOk;
Window_Options.prototype.processOk = function() {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol === 'Lagomoro_Mission_LR') {
        this.changeValue(symbol, !value);
        return;
    }
    if (symbol === 'Lagomoro_Mission_UD') {
        value += 5;
        if (value > 100) {
            value = 0;
        }
        value = value.clamp(0, 100);
        this.changeValue(symbol, value);
        return;
    }
    this.Lagomoro_Mission_processOk();
};
Window_Options.prototype.Lagomoro_Mission_cursorRight = Window_Options.prototype.cursorRight;
Window_Options.prototype.cursorRight = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol === 'Lagomoro_Mission_LR') {
        this.changeValue(symbol, true);
        return;
    }
    if (symbol === 'Lagomoro_Mission_UD') {
        value += 5;
        value = value.clamp(0, 100);
        this.changeValue(symbol, value);
        return;
    }
    this.Lagomoro_Mission_cursorRight(wrap);
};
Window_Options.prototype.Lagomoro_Mission_cursorLeft = Window_Options.prototype.cursorLeft;
Window_Options.prototype.cursorLeft = function(wrap) {
    var index = this.index();
    var symbol = this.commandSymbol(index);
    var value = this.getConfigValue(symbol);
    if (symbol === 'Lagomoro_Mission_LR') {
        this.changeValue(symbol, false);
        return;
    }
    if (symbol === 'Lagomoro_Mission_UD') {
        value -= 5;
        value = value.clamp(0, 100);
        this.changeValue(symbol, value);
        return;
    }
    this.Lagomoro_Mission_cursorLeft(wrap);
};