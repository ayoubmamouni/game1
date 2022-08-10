gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1_1final = [];

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDSpikesObjects1= [];
gdjs.Untitled_32sceneCode.GDSpikesObjects2= [];
gdjs.Untitled_32sceneCode.GDexitDialogObjects1= [];
gdjs.Untitled_32sceneCode.GDexitDialogObjects2= [];
gdjs.Untitled_32sceneCode.GDTryAgaintxtObjects1= [];
gdjs.Untitled_32sceneCode.GDTryAgaintxtObjects2= [];
gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1= [];
gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects2= [];
gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1= [];
gdjs.Untitled_32sceneCode.GDRepeatArrowObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), (( gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length === 0 ) ? 0 :gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[0].getPointX("")), 0.05), "", 0);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.Untitled_32sceneCode.GDNewSpriteObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.Untitled_32sceneCode.GDSpikesObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.Untitled_32sceneCode.GDSpikesObjects1});
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Untitled_32sceneCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Untitled_32sceneCode.GDSpikesObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDNewSpriteObjects1Objects, gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSpikesObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition1IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7573844);
}
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Untitled_32sceneCode.GDNewSpriteObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDSpikesObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].separateFromObjectsList(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDSpikesObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNewSpriteObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "LoseLayer");
}{gdjs.evtTools.sound.playSound(runtimeScene, "NewFile.wav", false, 30, 1);
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRepeatArrowObjects2Objects = Hashtable.newFrom({"RepeatArrow": gdjs.Untitled_32sceneCode.GDRepeatArrowObjects2});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTryAgainBtnObjects2Objects = Hashtable.newFrom({"TryAgainBtn": gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects2});
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1.length = 0;

gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1.length = 0;


gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition0IsTrue_0;
gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1_1final.length = 0;gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1_1final.length = 0;gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("RepeatArrow"), gdjs.Untitled_32sceneCode.GDRepeatArrowObjects2);
gdjs.Untitled_32sceneCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDRepeatArrowObjects2Objects, runtimeScene, true, false);
if( gdjs.Untitled_32sceneCode.condition0IsTrue_1.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDRepeatArrowObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDRepeatArrowObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1_1final.push(gdjs.Untitled_32sceneCode.GDRepeatArrowObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("TryAgainBtn"), gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects2);
gdjs.Untitled_32sceneCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDTryAgainBtnObjects2Objects, runtimeScene, true, false);
if( gdjs.Untitled_32sceneCode.condition1IsTrue_1.val ) {
    gdjs.Untitled_32sceneCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects2.length;j<jLen;++j) {
        if ( gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1_1final.indexOf(gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1_1final.push(gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1_1final, gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1);
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1_1final, gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1);
}
}
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene", false);
}}

}


};gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);
}


{


gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);
}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDSpikesObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDSpikesObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDexitDialogObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDexitDialogObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTryAgaintxtObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTryAgaintxtObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTryAgainBtnObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRepeatArrowObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRepeatArrowObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
