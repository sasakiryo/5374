/*
 * 5374 setting
 *
*/

var SVGLabel = false; // SVGイメージを使用するときは、true。用意できない場合はfalse。

var MaxDescription = 9; // ごみの最大種類、９を超えない場合は変更の必要はありません。

var MaxMonth = 4;

var WeekShift = false; // 休止期間なら週をずらすときは、true。金沢の仕様は、true。

var SkipSuspend = true; // 休止期間を除去するときは、true。奈良の仕様は、true。

// テストのために日を指定して実行
//var TestDate = new Date(2016 ,1 - 1 , 1);
var TestDate = null;