# 已废弃：ZLDialog

**注意：本项目不再维护！**

---

## 我是什么？

大家好，我叫ZLDialog，是一款基于JQuery的轻量级弹框插件！别看我体积小，功能可是很丰富的哦！\\(^o^)/~

嘛，不过相信大家也都看出来了，我长得有点过于草率，至于为什么这么草率....当然要怪让我诞生的那坑货[@LangZhai(智能小菜菜)](https://github.com/LangZhai "LangZhai(智能小菜菜)")！！！

咳咳，说点正经的，从内部（JS代码）来说，我是兼容IE7+的，不过由于皮肤使用了CSS3的样式，这个都懂的，因此还是不建议各位看官老爷们坚守IE10以下浏览器，为了让我正常一些，还是使用更现代的浏览器吧！

啊对了，顺便提一嘴，欢迎大家为我设计新的皮肤哦O(∩_∩)O~~

## 我的诞生

其实，根本没有想到我会降生于这个世界......

据说是为了满足某人的项目开发以及学习研究需要才诞生的。【所以不得不吐槽一下这皮肤真的让人家很不舒服呢！(╯﹏╰）】

## 我的成长

-2016-03-25    1.4.5-  
  1.【Update】重构部分代码。

-2016-03-23    1.4.4-  
  1.【Debug】修复IE8中遮罩层样式异常的BUG；  
  2.【Debug】修复预览面板鼠标事件异常的BUG；  
  3.【Update】重构部分代码。

-2016-03-17    1.4.1-  
  1.【Add】加入国际化功能；  
  2.【Update】重新梳理目录结构。

-2015-12-04    1.3.9-  
  1.【Debug】修复显示对话框位置异常的BUG；  
  2.【Debug】修复关闭对话框时未删除遮罩层的BUG；  
  3.【Debug】修复size参数的'full'值在firefox中高度异常的BUG；  
  4.【Debug】修复多对话框实例下resize冲突的BUG；  
  5.【Debug】修复resize导致timeout/interval失效的BUG。

-2015-11-26    1.3.4-  
  1.【Debug】修复加载外部链接size参数设置失效的BUG；  
  2.【Update】为size参数增加'full'值，修改padding参数'iframe'值功能；  
  3.【Update】清理冗余代码。

-2014-02-28    1.3.1-  
  1.【Debug】修复IE11中外部链接加载崩溃BUG。（解决方法为换用1.11.0版jQuery，如在其他jQuery版本中发现加载BUG请设置inFrame:true）

-2013-12-13    1.3.0-  
  1.【Update】优化滚动条用户体验。

-2013-12-09    1.2.9-  
  1.【Debug】修复页面滚动后预览面板定位BUG；  
  2.【Update】为对话框按钮设置默认回调函数。

-2013-12-05    1.2.7-  
  1.【Debug】修复IE7中预览面板加载图片大小BUG。

-2013-12-04    1.2.6-  
  1.【Debug】修复按钮无法自动适配宽度的BUG；  
  2.【Debug】修复页面滚动后对话框拖动时的定位BUG；  
  3.【Debug】修复页面滚动后对话框关闭时的定位BUG。

-2013-10-15    1.2.3-  
  1.【Add】扩充加载链接方法使其可自定义加载模式。

-2013-10-08    1.2.2-  
  1.【Update】定义私有作用域避免代码污染。

-2013-09-11    1.2.1-  
  1.【Remove】废弃realWidth和realHeight方法，使用jQuery的outerWidth和outerHeight代替。

-2013-08-28    1.2.0-  
  1.【Debug】修复对话框关闭时位置闪跳的BUG。

-2013-08-19    1.1.9-  
  1.【Debug】修复预览面板图片大小BUG；  
  2.【Update】动态限制对话框大小。 

-2013-08-14    1.1.7-  
  1.【Add】加入预览面板direction属性；  
  2.【Update】去掉预览面板图片最大宽度限制；  
  3.【Update】为预览面板设置默认padding值。

-2013-08-12    1.1.4-  
  1.【Update】修改对话框内容区域的overflow为auto。

-2013-08-08    1.1.3-  
  1.【Debug】修复浏览器窗口resize导致对话框自动关闭失效的BUG。 

-2013-08-01    1.1.2-  
  1.【Debug】修复IE下预览面板大小无法自适应的BUG；  
  2.【Update】优化浏览器窗口resize事件；  
  3.【Update】修改ZLDialog出现/隐藏动画为从屏幕中间垂直展开/收缩；  
  4.【Debug】修复IE8及以下浏览器预览面板位置BUG；  
  5.【Update】调整预览面板对齐方式为中线对齐。

-2013-07-26    1.0.7-  
  1.【Debug】修复ZLDialog样式被覆盖的BUG；  
  2.【Add】加入显示预览面板功能。

-2013-07-23    1.0.5-  
  1.【Update】将“消息框”更名为“警告框”；  
  2.【Add】加入消息框功能。

-2013-07-10    1.0.3-  
  1.【Add】加入确认警告框功能；  
  2.【Add】加入加载外部链接功能；  
  3.【Update】代码优化。

-2013-07-02    1.0.0-  
  1.【Add】ZLDialog诞生。

## 关于作者

咳咳，终于该我登场了，妖怪速速退散！！！【散你妹，傻X】【左边泥垢！！！】

好了好了我们正常点。其实本人是2010级~~CAVTC毕业生~~[CAP](https://cap.edu.cn)毕业生一枚，目前干着苦逼的开发工作，主要做前端开发。籍贯四川成都，92年产，身高不超过170cm，体重大概在~~55kg60kg~~65kg，巨蟹座，好像是B型血，姑且算犬系，~~未婚，直男，但并不是直男癌【讲这么多废话是要闹甚！！！不会有妹子看上你的魂淡！！！】~~，已婚。因为看到某篇文章说[“不定义JQuery插件，不要说会JQuery”](https://www.cnblogs.com/xcj26/p/3345556.html)，再加上确实也是项目需要因此就诞生了这货嗯。嘛，其实我也知道这皮肤真心丑爆，但是确实是没什么时间，并且我们看人不应该只看外表，看待一款插件也应该是这样嗯【分明是在找借口啊喂！】。于是觉得这货还算好用的老爷们，不妨为这货设计几款看得过去的皮肤，在这里替这货谢谢各位了！！！

啊，对了，通常来讲这里应该留下联系方式对吧，于是我也勇敢地来一发！！！

Email:  
<zl2012xyz@hotmail.com>  
<zl2005xyz@126.com>