$(function () {
    var $contentDIV = $('#contentDIV');

    $.ajax({
        url: 'attr.json',
        dataType: 'json'
    }).done(function (data) {
        $('#attrTable').html($('#template').template(data, {nested: '#template-attr,#template-sub'}));
    });
    $.ajax({
        url: 'README.md'
    }).done(function (data) {
        $('#readme').html(data.substring(data.indexOf('###我的成长') + 9, data.indexOf('###关于作者') - 2));
    });
    $('#menuUL').on('click', 'li', function () {
        var $this = $(this).addClass('current'), index = $this.index();
        $this.siblings().removeClass('current');
        $contentDIV.children(':eq(' + index + ')').show(500).siblings().hide(500);
    });
    $('#firstA').on('click', function () {
        $.dialog.message({
            content: '哼(ˉ(∞)ˉ)唧！'
        });
    });
    $('#demoA').on('click', function () {
        var closeDialog = $.dialog({
            title: '泥垢！！！',
            content: '再说我坏话就把你删掉！',
            hideX: true,
            buttons: [
                {
                    text: '怪我咯？',
                    callback: function () {
                        closeDialog();
                        $.dialog.message({
                            content: '......'
                        });
                    }
                },
                {
                    text: '主人我错了！',
                    callback: function () {
                        closeDialog();
                        $.dialog.message({
                            content: '哼~~【偷笑】'
                        });
                    }
                }
            ]
        });
    });
    $('#browserA').on('click', function () {
        $.dialog({
            title: '建议使用它们',
            content: '<ul><li>Firefox</li><li>Chrome</li><li>Opera</li><li>Edge</li><li>Internet Explorer(10+)</li></ul>',
            padding: '0px 25px 0 0'
        });
    });
    $('#licenseA').on('click', function () {
        $.ajax({
            url: 'LICENSE'
        }).done(function (data) {
            $.dialog({
                title: 'GNU LESSER GENERAL PUBLIC LICENSE',
                content: '<div class="pre">' + data + '</div>'
            });
        });
    });
    $('#linkA').on('click', function () {
        $.dialog.open({
            title: '不定义JQuery插件，不要说会JQuery',
            url: 'http://www.cnblogs.com/xcj26/p/3345556.html',
            inFrame: true,
            size: 'full'
        });
    });
    $('#lastA').on('click', function () {
        $.dialog({
            title: '联系作者',
            content: '【E-Mail】<br>　　zl2005xyz@126.com<br>　　zl2012xyz@hotmail.com'
        });
    });
    $('.doJS').on('click', function () {
        var $prev = $(this).prev();
        eval($prev.val() || $prev.text());
    });
    $('#previewButton1').preview({
        content: 'resource/preview.jpg',
        type: 'img',
        direction: 'top'
    });
    $('#previewButton2').preview({
        content: '这是一首简单的小情歌 唱着我们心头的曲折'
    });
});