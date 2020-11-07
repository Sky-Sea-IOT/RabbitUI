[33mcommit 209995c890d35585ae18428e7633c884e4485cec[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m, [m[1;31morigin/master[m[33m)[m
Author: niu-grandpa <2864103063@qq.com>
Date:   Sat Nov 7 20:48:44 2020 +0800

    目前制作了20余个组件

 LICENSE | 21 [32m+++++++++++++++++++++[m
 1 file changed, 21 insertions(+)

[33mcommit 3c27c853a7a431572f35910c5004049116fec4b1[m
Author: niu-grandpa <2864103063@qq.com>
Date:   Sat Nov 7 20:30:05 2020 +0800

    已更新20余个组件

 README.md                                      |    1 [32m+[m
 package.json                                   |   35 [32m+[m
 src/assets/avatar.jpg                          |  Bin [31m0[m -> [32m5221[m bytes
 src/assets/card.jpg                            |  Bin [31m0[m -> [32m58833[m bytes
 src/common/expand.js                           |  136 [32m++[m
 src/common/getComps.js                         |   89 [32m+[m
 src/common/getCompsSlot.js                     |   51 [32m+[m
 src/common/index.js                            |    0
 src/common/main.js                             |   65 [32m+[m
 src/components/alert/README.md                 |   18 [32m+[m
 src/components/alert/alert.js                  |  106 [32m+[m
 src/components/alert/index.html                |  201 [32m++[m
 src/components/alert/index.js                  |    0
 src/components/avatar/README.md                |   13 [32m+[m
 src/components/avatar/avatar.js                |   70 [32m+[m
 src/components/avatar/index.html               |  120 [32m+[m
 src/components/avatar/index.js                 |    0
 src/components/back-top/README.md              |   17 [32m+[m
 src/components/back-top/back-top.js            |  116 [32m+[m
 src/components/back-top/index.html             |   57 [32m+[m
 src/components/back-top/index.js               |    0
 src/components/badge/README.md                 |   48 [32m+[m
 src/components/badge/badge.js                  |   42 [32m+[m
 src/components/badge/index.html                |  265 [32m+++[m
 src/components/badge/index.js                  |    0
 src/components/breadcrumb/README.md            |   13 [32m+[m
 src/components/breadcrumb/breadcrumb.js        |   32 [32m+[m
 src/components/breadcrumb/index.html           |  102 [32m+[m
 src/components/breadcrumb/index.js             |    0
 src/components/button/index.html               |  267 [32m+++[m
 src/components/button/index.js                 |    7 [32m+[m
 src/components/card/README.md                  |   21 [32m+[m
 src/components/card/card.js                    |   63 [32m+[m
 src/components/card/index.html                 |  107 [32m+[m
 src/components/card/index.js                   |    0
 src/components/collapse/README.md              |   21 [32m+[m
 src/components/collapse/collapse.js            |  167 [32m++[m
 src/components/collapse/index.html             |  103 [32m+[m
 src/components/collapse/index.js               |    0
 src/components/divider/index.html              |   94 [32m+[m
 src/components/divider/index.js                |    0
 src/components/drawer/README.md                |  167 [32m++[m
 src/components/drawer/drawer.js                |  210 [32m++[m
 src/components/drawer/index.html               |  170 [32m++[m
 src/components/drawer/index.js                 |    0
 src/components/drop-down/README.md             |   23 [32m+[m
 src/components/drop-down/drop-down.js          |  200 [32m++[m
 src/components/drop-down/index.html            |  243 [32m+++[m
 src/components/drop-down/index.js              |    0
 src/components/empty/README.md                 |   15 [32m+[m
 src/components/empty/empty.js                  |   56 [32m+[m
 src/components/empty/index.html                |   77 [32m+[m
 src/components/empty/index.js                  |    0
 src/components/empty/svg.js                    |   13 [32m+[m
 src/components/input@/index.html               |   39 [32m+[m
 src/components/input@/index.js                 |    0
 src/components/input@/input.js                 |    0
 src/components/list/README.md                  |   20 [32m+[m
 src/components/list/index.html                 |  146 [32m++[m
 src/components/list/index.js                   |    0
 src/components/list/list.js                    |   99 [32m+[m
 src/components/message-box/index.html          |   90 [32m+[m
 src/components/message-box/index.js            |    0
 src/components/message-box/message-box.js      |   64 [32m+[m
 src/components/message/README.md               |  104 [32m+[m
 src/components/message/index.html              |   66 [32m+[m
 src/components/message/index.js                |    0
 src/components/message/message.js              |  136 [32m++[m
 src/components/modal/README.md                 |   54 [32m+[m
 src/components/modal/getConfigs.js             |   53 [32m+[m
 src/components/modal/index.html                |   80 [32m+[m
 src/components/modal/index.js                  |    0
 src/components/modal/modal.js                  |  126 [32m++[m
 src/components/notice/README.md                |  151 [32m++[m
 src/components/notice/index.html               |  145 [32m++[m
 src/components/notice/index.js                 |    0
 src/components/notice/notice.js                |  171 [32m++[m
 src/components/page-header/index.html          |   48 [32m+[m
 src/components/page-header/index.js            |    0
 src/components/page-header/page-header.js      |   34 [32m+[m
 src/components/popover/README.md               |   14 [32m+[m
 src/components/popover/_popover.js             |  155 [32m++[m
 src/components/popover/index.html              |  267 [32m+++[m
 src/components/popover/index.js                |    0
 src/components/progress/index.html             |   99 [32m+[m
 src/components/progress/index.js               |    0
 src/components/result/README.md                |   17 [32m+[m
 src/components/result/index.html               |  155 [32m++[m
 src/components/result/index.js                 |    0
 src/components/result/result.js                |   70 [32m+[m
 src/components/result/svg.js                   |   27 [32m+[m
 src/components/select/index.html               |    0
 src/components/select/index.js                 |    0
 src/components/select/select.js                |    0
 src/components/skeleton/README.md              |   15 [32m+[m
 src/components/skeleton/index.html             |  115 [32m+[m
 src/components/skeleton/index.js               |    0
 src/components/skeleton/skeleton.js            |   82 [32m+[m
 src/components/switch/README.md                |   20 [32m+[m
 src/components/switch/index.html               |  132 [32m++[m
 src/components/switch/index.js                 |    0
 src/components/switch/switch.js                |  103 [32m+[m
 src/components/table@/index.html               |  109 [32m+[m
 src/components/table@/index.js                 |  119 [32m+[m
 src/components/timeline/README.md              |   14 [32m+[m
 src/components/timeline/index.html             |  103 [32m+[m
 src/components/timeline/index.js               |    0
 src/components/timeline/timeline.js            |   72 [32m+[m
 src/components/tooltip/README.md               |   15 [32m+[m
 src/components/tooltip/index.html              |  327 [32m+++[m
 src/components/tooltip/index.js                |    0
 src/components/tooltip/tooltip.js              |  104 [32m+[m
 src/index.js                                   |    0
 src/mixins/_popover.js                         |   15 [32m+[m
 src/mixins/index.js                            |    0
 src/mixins/message.js                          |   84 [32m+[m
 src/mixins/messageBox.js                       |  116 [32m+[m
 src/mixins/modal.js                            |   45 [32m+[m
 src/mixins/notice.js                           |  176 [32m++[m
 src/plugins/popper.js                          | 2318 [32m++++++++++++++++++++[m
 src/style/animation/bounces.less               |   52 [32m+[m
 src/style/animation/fade.less                  |   44 [32m+[m
 src/style/animation/index.less                 |    3 [32m+[m
 src/style/animation/move.less                  |  210 [32m++[m
 src/style/animation/slide.less                 |   96 [32m+[m
 src/style/animation/spin.less                  |   50 [32m+[m
 src/style/common/base.css                      |  145 [32m++[m
 src/style/common/base.less                     |  157 [32m++[m
 src/style/common/iconfont/fonts/iconfont.eot   |  Bin [31m0[m -> [32m142492[m bytes
 src/style/common/iconfont/fonts/iconfont.svg   | 2105 [32m++++++++++++++++++[m
 src/style/common/iconfont/fonts/iconfont.ttf   |  Bin [31m0[m -> [32m142324[m bytes
 src/style/common/iconfont/fonts/iconfont.woff  |  Bin [31m0[m -> [32m81836[m bytes
 src/style/common/iconfont/fonts/iconfont.woff2 |  Bin [31m0[m -> [32m66776[m bytes
 src/style/common/iconfont/icons-font.less      |   30 [32m+[m
 src/style/common/iconfont/icons-icons.less     | 2770 [32m++++++++++++++++++++++++[m
 src/style/common/iconfont/icons-variables.less |    3 [32m+[m
 src/style/common/iconfont/icons.css            | 2100 [32m++++++++++++++++++[m
 src/style/common/iconfont/icons.less           |    3 [32m+[m
 src/style/common/index.css                     |  550 [32m+++++[m
 src/style/common/index.less                    |    2 [32m+[m
 src/style/common/normalize.less                |  463 [32m++++[m
 src/style/components/alert.css                 |  374 [32m++++[m
 src/style/components/alert.less                |  164 [32m++[m
 src/style/components/avatar.css                |   53 [32m+[m
 src/style/components/avatar.less               |   73 [32m+[m
 src/style/components/back-top.css              |   32 [32m+[m
 src/style/components/back-top.less             |   40 [32m+[m
 src/style/components/badge.css                 |  190 [32m++[m
 src/style/components/badge.less                |  235 [32m++[m
 src/style/components/breadcrumb.css            |   33 [32m+[m
 src/style/components/breadcrumb.less           |   47 [32m+[m
 src/style/components/button.css                |  358 [32m+++[m
 src/style/components/button.less               |  352 [32m+++[m
 src/style/components/card.css                  |   50 [32m+[m
 src/style/components/card.less                 |   63 [32m+[m
 src/style/components/collapse.css              |   83 [32m+[m
 src/style/components/collapse.less             |  114 [32m+[m
 src/style/components/divider.css               |   78 [32m+[m
 src/style/components/divider.less              |   92 [32m+[m
 src/style/components/drawer.css                |  204 [32m++[m
 src/style/components/drawer.less               |  221 [32m++[m
 src/style/components/drop-down.css             |  169 [32m++[m
 src/style/components/drop-down.less            |  105 [32m+[m
 src/style/components/empty.css                 |   25 [32m+[m
 src/style/components/empty.less                |   36 [32m+[m
 src/style/components/index.css                 |    0
 src/style/components/index.less                |    0
 src/style/components/input.css                 |   50 [32m+[m
 src/style/components/input.less                |   61 [32m+[m
 src/style/components/list.css                  |  122 [32m++[m
 src/style/components/list.less                 |  162 [32m++[m
 src/style/components/message.css               |  315 [32m+++[m
 src/style/components/message.less              |  144 [32m++[m
 src/style/components/messageBox.css            |  126 [32m++[m
 src/style/components/messageBox.less           |   80 [32m+[m
 src/style/components/modal.css                 |  224 [32m++[m
 src/style/components/modal.less                |  176 [32m++[m
 src/style/components/notice.css                |  260 [32m+++[m
 src/style/components/notice.less               |  157 [32m++[m
 src/style/components/pageHeader.css            |   39 [32m+[m
 src/style/components/pageHeader.less           |   51 [32m+[m
 src/style/components/popover.css               |  135 [32m++[m
 src/style/components/popover.less              |   86 [32m+[m
 src/style/components/progress.css              |   69 [32m+[m
 src/style/components/progress.less             |   86 [32m+[m
 src/style/components/result.css                |   68 [32m+[m
 src/style/components/result.less               |   85 [32m+[m
 src/style/components/select.less               |    0
 src/style/components/skeleton.css              |   86 [32m+[m
 src/style/components/skeleton.less             |  109 [32m+[m
 src/style/components/switch.css                |  107 [32m+[m
 src/style/components/switch.less               |  160 [32m++[m
 src/style/components/table.css                 |   72 [32m+[m
 src/style/components/table.less                |  106 [32m+[m
 src/style/components/timeline.css              |   70 [32m+[m
 src/style/components/timeline.less             |   90 [32m+[m
 src/style/components/tooltip.css               |  195 [32m++[m
 src/style/components/tooltip.less              |  144 [32m++[m
 src/style/custom.less                          |  156 [32m++[m
 src/style/index.less                           |    2 [32m+[m
 src/style/mixins/arrow.less                    |    9 [32m+[m
 src/style/mixins/button.less                   |   23 [32m+[m
 src/style/mixins/clearfix.less                 |   14 [32m+[m
 src/style/mixins/close.less                    |   32 [32m+[m
 src/style/mixins/index.less                    |    0
 src/style/mixins/mask.less                     |   11 [32m+[m
 src/style/mixins/popover.less                  |   87 [32m+[m
 src/style/mixins/shadow.less                   |    5 [32m+[m
 src/style/mixins/size.less                     |    4 [32m+[m
 src/style/mixins/tooltip.less                  |  127 [32m++[m
 src/utils/addDom.js                            |   14 [32m+[m
 src/utils/clickAction.js                       |   59 [32m+[m
 src/utils/css-transition.js                    |   30 [32m+[m
 src/utils/destory.js                           |  126 [32m++[m
 src/utils/detect-direction.js                  |    9 [32m+[m
 src/utils/dropdown.js                          |   93 [32m+[m
 src/utils/getIconTypes.js                      |   47 [32m+[m
 src/utils/hasClass.js                          |   10 [32m+[m
 src/utils/isSlotUserd.js                       |   21 [32m+[m
 src/utils/objtoString.js                       |   21 [32m+[m
 src/utils/typeof.js                            |   17 [32m+[m
 221 files changed, 26661 insertions(+)
