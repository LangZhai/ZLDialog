/**
 * ZLDialog 1.3.1
 * Date: 2014-02-28
 * © 2013-2014 智能小菜菜
 * This is licensed under the GNU LGPL, version 3 or later.
 * For details, see: http://www.gnu.org/licenses/lgpl.html
 *
 * ==========更新历史==========
 * -2014-02-28    1.3.1-
 *   1.【Debug】修复IE11中外部链接加载崩溃BUG。（解决方法为换用1.11.0版jQuery，如在其他jQuery版本中发现加载BUG请设置inFrame:true）
 *
 * -2013-12-13    1.3.0-
 *   1.【Update】优化滚动条用户体验。
 *
 * -2013-12-09    1.2.9-
 *   1.【Debug】修复页面滚动后预览面板定位BUG；
 *   2.【Update】为对话框按钮设置默认回调函数。
 *
 * -2013-12-05    1.2.7-
 *   1.【Debug】修复IE7中预览面板加载图片大小BUG。
 *
 * -2013-12-04    1.2.6-
 *   1.【Debug】修复按钮无法自动适配宽度的BUG；
 *   2.【Debug】修复页面滚动后对话框拖动时的定位BUG；
 *   3.【Debug】修复页面滚动后对话框关闭时的定位BUG。
 *
 * -2013-10-15    1.2.3-
 *   1.【Add】扩充加载链接方法使其可自定义加载模式。
 *
 * -2013-10-08    1.2.2-
 *   1.【Update】定义私有作用域避免代码污染。
 *
 * -2013-09-11    1.2.1-
 *   1.【Remove】废弃realWidth和realHeight方法，使用jQuery的outerWidth和outerHeight代替。
 *
 * -2013-08-28    1.2.0-
 *   1.【Debug】修复对话框关闭时位置闪跳的BUG。
 *
 * -2013-08-19    1.1.9-
 *   1.【Debug】修复预览面板图片大小BUG；
 *   2.【Update】动态限制对话框大小。
 *
 * -2013-08-14    1.1.7-
 *   1.【Add】加入预览面板direction属性；
 *   2.【Update】去掉预览面板图片最大宽度限制；
 *   3.【Update】为预览面板设置默认padding值。
 *
 * -2013-08-12    1.1.4-
 *   1.【Update】修改对话框内容区域的overflow为auto。
 *
 * -2013-08-08    1.1.3-
 *   1.【Debug】修复浏览器窗口resize导致对话框自动关闭失效的BUG。
 *
 * -2013-08-01    1.1.2-
 *   1.【Debug】修复IE下预览面板大小无法自适应的BUG；
 *   2.【Update】优化浏览器窗口resize事件；
 *   3.【Update】修改ZLDialog出现/隐藏动画为从屏幕中间垂直展开/收缩；
 *   4.【Debug】修复IE8及以下浏览器预览面板位置BUG；
 *   5.【Update】调整预览面板对齐方式为中线对齐。
 *
 * -2013-07-26    1.0.7-
 *   1.【Debug】修复ZLDialog样式被覆盖的BUG；
 *   2.【Add】加入显示预览面板功能。
 *
 * -2013-07-23    1.0.5-
 *   1.【Update】将“消息框”更名为“警告框”；
 *   2.【Add】加入消息框功能。
 *
 * -2013-07-10    1.0.3-
 *   1.【Add】加入确认警告框功能；
 *   2.【Add】加入加载外部链接功能；
 *   3.【Update】代码优化。
 *
 * -2013-07-02    1.0.0-
 *   1.【Add】ZLDialog诞生。
 */

(function ($) {

    $(function () {
        $(document).mouseup(function () {
            $(this).unbind('mousemove');
        });
    });

    /**
     * 显示对话框
     * @param  option  {Object}    对话框参数列表
     * @example
     * $.dialog({
	 *     title:对话框标题,
	 *     content:对话框内容,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     buttons:对话框按钮数组,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:对话框大小,
	 *     drag:是否允许拖动对话框,
	 *     lock:是否添加背景锁定,
	 *     showBack:对话框显示回调函数,
	 *     closeBack:对话框关闭回调函数,
	 *     padding:对话框内容padding
	 * });
     */
    $.dialog = function (option) {
        var $body = $('body'),
            $ZLDialog,
            $dialogLock,
            $dialogTitleDIV,
            $dialogBody,
            $dialogFoot,
            close,
            closeDialog,
            $btn,
            offsetInterval = setInterval(function () {
                $ZLDialog.css({
                    left: $(window).width() / 2 - $ZLDialog.width() / 2,
                    top: $(window).height() / 2 - $ZLDialog.height() / 2
                });
            }, 10);
        if (option.message) {
            $ZLDialog = $('<div class=\'ZLDialog\'><div class=\'dialogBody\'></div></div>');
            $dialogBody = $ZLDialog.children('.dialogBody:first');
        } else {
            $ZLDialog = $('<div class=\'ZLDialog\'><div class=\'dialogTitleDIV\'><div class=\'dialogTitleSpan\'>对话框</div><a class=\'dialogTitleClose\' title=\'关闭\'>x</a></div><div class=\'dialogBody\'></div><div class=\'dialogFoot\'></div></div>');
            $dialogTitleDIV = $ZLDialog.children('.dialogTitleDIV:first');
            $dialogBody = $ZLDialog.children('.dialogBody:first');
            $dialogFoot = $ZLDialog.children('.dialogFoot:first');
            if (option.title)
                $dialogTitleDIV.children('.dialogTitleSpan:first').html(option.title);
            if (option.hideX)
                $dialogTitleDIV.children('.dialogTitleClose:first').remove();
            if (option.size)
                $dialogBody.width(option.size.width).height(option.size.height);
            if (option.drag == undefined || option.drag) {
                $dialogTitleDIV.mousedown(function (e) {
                    var width = $(window).width() - $ZLDialog.width(),
                        height = $(window).height() - $ZLDialog.height(),
                        offset = $ZLDialog.offset(),
                        pageXY = {
                            left: e.pageX,
                            top: e.pageY
                        }, scrollXY = {
                            left: $(window).scrollLeft(),
                            top: $(window).scrollTop()
                        };
                    $(document).mousemove(function (e) {
                        var left = e.pageX - pageXY.left + offset.left,
                            top = e.pageY - pageXY.top + offset.top;
                        left = left - scrollXY.left < 0 ? scrollXY.left : left - scrollXY.left > width ? width + scrollXY.left : left;
                        top = top - scrollXY.top < 0 ? scrollXY.top : top - scrollXY.top > height ? height + scrollXY.top : top;
                        $ZLDialog.offset({
                            left: left,
                            top: top
                        });
                    });
                });
            }
        }
        closeDialog = function () {
            var deviation = $ZLDialog.offset().top - $(window).scrollTop() - ($(window).height() / 2 - $ZLDialog.height() / 2);
            $('body').css('overflow', 'auto');
            offsetInterval = setInterval(function () {
                $ZLDialog.css({
                    top: $(window).height() / 2 - $ZLDialog.height() / 2 + deviation
                });
            }, 10);
            $ZLDialog.slideUp(200, function () {
                if (option.closeBack)
                    option.closeBack();
                $(this).remove();
                clearInterval(offsetInterval);
                $(window).unbind('resize');
            });
            if ($dialogLock) {
                $dialogLock.fadeOut(200, function () {
                    $(this).remove();
                });
            }
        };
        if (option.content) {
            $dialogBody.html(option.content);
            $('img', $dialogBody).each(function () {
                $(this).load(function () {
                    $(window).resize();
                });
            });
        }
        if (option.timeout)
            close = setTimeout(closeDialog, option.timeout);
        if (option.lock == undefined || option.lock) {
            $dialogLock = $('<div class=\'dialogLock\'></div>').appendTo($body);
            $body.css('overflow', 'hidden');
        }
        if (option.padding) {
            if (option.padding == 'iframe') {
                $ZLDialog.width($(window).width() - 50);
                $dialogBody.height($(window).height() - $dialogTitleDIV.height() - $dialogFoot.height() - 50).css('overflow', 'hidden');
            }
            $dialogBody.css({
                'padding': option.padding == 'iframe' ? 0 : option.padding
            });
        }
        if ($dialogLock)
            $dialogLock.fadeTo(200, 0.3);
        if (option.buttons) {
            $.each(option.buttons, function (i, btn) {
                $btn = $('<a>' + btn.text + '</a>');
                $dialogFoot.append($btn);
                if (typeof (btn.callback) == Function)
                    $btn.click(btn.callback);
                else if (!btn.callback)
                    $btn.click(closeDialog);
                else
                    $btn.click(eval(btn.callback));
            });
        }
        $ZLDialog.appendTo($body).css({
            width: $ZLDialog.width(),
            left: -10000,
            top: -10000
        }).slideDown(200, function () {
            if (option.message)
                $dialogBody.css('max-height', $(window).height() - 50 - parseFloat($dialogBody.css('padding-top') == 'auto' ? 0 : $dialogBody.css('padding-top')) - parseFloat($dialogBody.css('padding-bottom') == 'auto' ? 0 : $dialogBody.css('padding-bottom')));
            else
                $dialogBody.css('max-height', $(window).height() - $dialogTitleDIV.height() - $dialogFoot.height() - 50 - parseFloat($dialogBody.css('padding-top') == 'auto' ? 0 : $dialogBody.css('padding-top')) - parseFloat($dialogBody.css('padding-bottom') == 'auto' ? 0 : $dialogBody.css('padding-bottom')));
            $ZLDialog.css('max-width', $(window).width() - 50);
            if (option.showBack)
                option.showBack();
            setTimeout(function () {
                clearInterval(offsetInterval);
            }, 50);
            if (option.padding == 'iframe') {
                $(window).resize(function () {
                    var width = $(window).width() - 50;
                    $dialogBody.stop(true).animate({
                        height: $(window).height() - $dialogTitleDIV.height() - $dialogFoot.height() - 50 - parseFloat($dialogBody.css('padding-top') == 'auto' ? 0 : $dialogBody.css('padding-top')) - parseFloat($dialogBody.css('padding-bottom') == 'auto' ? 0 : $dialogBody.css('padding-bottom'))
                    }, 200);
                    $ZLDialog.stop(true).animate({
                        width: width,
                        left: $(window).width() / 2 - width / 2,
                        top: $(window).height() / 2 - ($(window).height() - 35) / 2
                    }, 200);
                });
            } else {
                $(window).resize(function () {
                    clearTimeout(close);
                    if (option.message)
                        $dialogBody.css('max-height', $(window).height() - 50 - parseFloat($dialogBody.css('padding-top') == 'auto' ? 0 : $dialogBody.css('padding-top')) - parseFloat($dialogBody.css('padding-bottom') == 'auto' ? 0 : $dialogBody.css('padding-bottom')));
                    else
                        $dialogBody.css('max-height', $(window).height() - $dialogTitleDIV.height() - $dialogFoot.height() - 50 - parseFloat($dialogBody.css('padding-top') == 'auto' ? 0 : $dialogBody.css('padding-top')) - parseFloat($dialogBody.css('padding-bottom') == 'auto' ? 0 : $dialogBody.css('padding-bottom')));
                    $ZLDialog.css('max-width', $(window).width() - 50);
                    $ZLDialog.stop(true).animate({
                        left: $(window).width() / 2 - $ZLDialog.width() / 2,
                        top: $(window).height() / 2 - $ZLDialog.height() / 2
                    }, 200);
                    if (option.timeout)
                        close = setTimeout(closeDialog, option.timeout);
                });
            }
        }).focus();
        if (!option.message)
            $dialogTitleDIV.children('.dialogTitleClose:first').click(closeDialog);
        return closeDialog;
    };

    /**
     * 显示消息框
     * @param  option  {Object}    消息框参数列表
     * @example
     * $.dialog.message({
	 *     content:消息框内容,
	 *     timeout:自动关闭延时（毫秒）,
	 *     lock:是否添加背景锁定,
	 *     showBack:消息框显示回调函数,
	 *     closeBack:消息框关闭回调函数
	 * });
     */
    $.dialog.message = function (option) {
        option.message = true;
        option.title = null;
        option.hideX = null;
        option.buttons = null;
        option.size = null;
        option.drag = null;
        option.padding = null;
        if (option.timeout == null)
            option.timeout = 2000;
        if (option.lock == null)
            option.lock = false;
        option.content = '<span class=\'dialogMsgSpan\'>' + option.content + '<span/>';
        return $.dialog(option);
    };

    /**
     * 显示警告框
     * @param  option  {Object}    警告框参数列表
     * @example
     * $.dialog.alert({
	 *     title:警告框标题,
	 *     content:警告框内容,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:警告框大小,
	 *     drag:是否允许拖动警告框,
	 *     lock:是否添加背景锁定,
	 *     showBack:警告框显示回调函数,
	 *     closeBack:警告框关闭回调函数,
	 *     padding:警告框内容padding
	 * });
     */
    $.dialog.alert = function (option) {
        option.message = null;
        if (option.title == null)
            option.title = '提示';
        if (option.hideX == null)
            option.hideX = true;
        option.buttons = [
            {
                text: '确定'
            }
        ];
        option.content = '<span class=\'dialogMsgSpan\'>' + option.content + '<span/>';
        return $.dialog(option);
    };

    /**
     * 显示确认警告框
     * @param  option  {Object}    警告框参数列表
     * @param  yes  {Function}    确认按钮回调函数
     * @param  no  {Function}    取消按钮回调函数
     * @example
     * $.dialog.confirm({
	 *     title:警告框标题,
	 *     content:警告框内容,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:警告框大小,
	 *     drag:是否允许拖动警告框,
	 *     lock:是否添加背景锁定,
	 *     showBack:警告框显示回调函数,
	 *     closeBack:警告框关闭回调函数,
	 *     padding:警告框内容padding
	 * },function(){},function(){});
     */
    $.dialog.confirm = function (option, yes, no) {
        option.message = null;
        if (option.title == null)
            option.title = '提示';
        if (option.content == null)
            option.content = '确认操作吗？';
        if (option.hideX == null)
            option.hideX = true;
        option.buttons = [
            {
                text: '确定',
                callback: yes
            },
            {
                text: '取消',
                callback: no
            }
        ];
        option.content = '<span class=\'dialogMsgSpan\'>' + option.content + '<span/>';
        return $.dialog(option);
    };

    /**
     * 加载外部链接
     * @param  option  {Object}    对话框参数列表
     * @example
     * $.dialog.open({
	 *	   url:链接地址,
	 *     title:对话框标题,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     buttons:对话框按钮数组,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:对话框大小,
	 *     drag:是否允许拖动对话框,
	 *     lock:是否添加背景锁定,
	 *     showBack:对话框显示回调函数,
	 *     closeBack:对话框关闭回调函数,
	 *     padding:对话框内容padding,
	 *     inFrame:是否在Iframe中加载
	 * });
     */
    $.dialog.open = function (option) {
        option.message = null;
        if (option.inFrame == null)
            option.inFrame = false;
        if (option.inFrame) {
            option.content = '<iframe frameborder=\'no\' src=\'' + option.url + '\' style=\'border:none;width:100%;height:100%\'></iframe>';
            option.padding = 'iframe';
        } else {
            $.ajax({
                url: option.url,
                async: false,
                dataType: 'html',
                success: function (data) {
                    option.content = data;
                },
                error: function () {
                    option.content = '<iframe frameborder=\'no\' src=\'' + option.url + '\' style=\'border:none;width:100%;height:100%\'></iframe>';
                    option.padding = 'iframe';
                }
            });
        }
        return $.dialog(option);
    };

    /**
     * 加载元素内容
     * @param  option  {Object}    对话框参数列表
     * @example
     * $('#loginDIV').dialog({
	 *     title:对话框标题,
	 *     hideX:是否隐藏右上角关闭按钮,
	 *     buttons:对话框按钮数组,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:对话框大小,
	 *     drag:是否允许拖动对话框,
	 *     lock:是否添加背景锁定,
	 *     showBack:对话框显示回调函数,
	 *     closeBack:对话框关闭回调函数,
	 *     padding:对话框内容padding
	 * });
     */
    $.fn.dialog = function (option) {
        option.message = null;
        option.content = $(this).html();
        return $.dialog(option);
    };

    /**
     * 显示预览面板
     * @param  option  {Object}    预览面板参数列表
     * @example
     * $('#loginDIV').preview({
	 * 	   content:预览内容,
	 *     type:预览类型,
	 *     timeout:自动关闭延时（毫秒）,
	 *     size:预览面板大小,
	 *     showBack:预览面板显示回调函数,
	 *     closeBack:预览面板关闭回调函数,
	 *     padding:预览面板内容padding,
	 *     direction:预览面板依附位置
	 * });
     */
    $.fn.preview = function (option) {
        $(this).each(function () {
            var $this = $(this),
                $panel = $('<div class=\'ZLDialog_panel\'></div>'),
                timeout;
            if (option.direction == undefined)
                option.direction = 'right';
            if (option.padding == undefined)
                option.padding = 10;
            if (option.content) {
                if (option.type) {
                    if (option.type == 'img') {
                        if (option.size)
                            $panel.html('<img style=\'' + (option.size.width ? 'max-width:' + option.size.width + 'px;' : '') + (option.size.height ? 'max-height:' + option.size.height + 'px;' : '') + '\' src=\'' + option.content + '\' />');
                        else
                            $panel.html('<img src=\'' + option.content + '\' />');
                        option.padding = 0;
                    } else
                        $panel.html(option.content);
                } else
                    $panel.html(option.content);
            }
            if (option.timeout) {
                setTimeout(function () {
                    $panel.fadeOut(function () {
                        if (option.closeBack)
                            option.closeBack();
                        $(this).remove();
                    });
                }, option.timeout);
            }
            if (option.type != 'img' && option.size)
                $panel.width(option.size.width).height(option.size.height);
            $panel.css({
                'padding': option.padding
            });
            $this.hover(function () {
                clearTimeout(timeout);
                $panel.appendTo($('body')).css({
                    position: 'absolute'
                }).fadeIn(function () {
                    if (option.showBack)
                        option.showBack();
                });
                if (option.direction == 'top' || option.direction == 'bottom') {
                    $panel.offset({
                        left: $this.offset().left + ($this.outerWidth() - $panel.outerWidth()) / 2
                    });
                    if (option.direction == 'top') {
                        $panel.offset({
                            top: $this.offset().top - $panel.outerHeight() - 5
                        });
                    } else {
                        $panel.offset({
                            top: $this.offset().top + $this.outerHeight() + 5
                        });
                    }
                } else {
                    $panel.offset({
                        top: $this.offset().top + ($this.outerHeight() - $panel.outerHeight()) / 2
                    });
                    if (option.direction == 'left') {
                        $panel.offset({
                            left: $this.offset().left - $panel.outerWidth() - 5
                        });
                    } else {
                        $panel.offset({
                            left: $this.offset().left + $this.outerWidth() + 5
                        });
                    }
                }
                if (option.type == 'img')
                    $panel.height($panel.children().height());
            }, function () {
                timeout = setTimeout(function () {
                    $panel.fadeOut(function () {
                        if (option.closeBack)
                            option.closeBack();
                        $(this).remove();
                    });
                }, option.timeout);
                $panel.hover(function () {
                    clearTimeout(timeout);
                }, function () {
                    timeout = setTimeout(function () {
                        $panel.fadeOut(function () {
                            if (option.closeBack)
                                option.closeBack();
                            $(this).remove();
                        });
                    }, option.timeout);
                });
            });
        });
    };

})($);