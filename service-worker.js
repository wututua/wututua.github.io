if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let f={};const s=e=>d(e,c),n={module:{uri:c},exports:f,require:s};i[c]=Promise.all(a.map((e=>n[e]||s(e)))).then((e=>(r(...e),f)))}}define(["./workbox-bd9393cf"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2020/12/15/dzs-hj/index.html",revision:"6fe58ac60860945282e91b984e088a0b"},{url:"2020/12/15/googlepan-hj/index.html",revision:"a8fca404a26e91be49a6009fbf8f8119"},{url:"2020/12/15/jiema-hj/index.html",revision:"bf26e1524a79f02922dcb44e5aa1a3e1"},{url:"2020/12/15/lanzoucloud-app-hj/index.html",revision:"468cdd3c163ba86ec436829ba7c28c27"},{url:"2020/12/15/manghua-hj/index.html",revision:"5ff32179947ffec441c3066482cbe79f"},{url:"2020/12/15/qcbz-pan-hj/index.html",revision:"947006795ff46408373de678cf9c1d29"},{url:"2020/12/15/spxz-hj/index.html",revision:"bc4fdde20cab385f8c7b9e9f2fb8925c"},{url:"2020/12/15/ssxz-hj/index.html",revision:"58cfcac9f1dfae7d531d0e2c8ae492cd"},{url:"2020/12/15/telegram-bot/index.html",revision:"b5fc0deb887becbae4ef82f7a24a2656"},{url:"2020/12/15/waiguosfz-hj/index.html",revision:"b5417e584a975b991a9b443011b9cca1"},{url:"2020/12/15/wpzy-hj/index.html",revision:"623c4bbb48420ac2d1113990bd5cac88"},{url:"2020/12/15/xzgj-hj/index.html",revision:"7a44aa413f145536f5c43cc14f330b5c"},{url:"2020/12/15/zxspwz-hj/index.html",revision:"5dccd236c0fa73139359c0fefa1056bb"},{url:"2022/04/09/IDM/index.html",revision:"00ada5910ec204317583a9d0c9046606"},{url:"2022/04/09/PreSonus-Studio-One/index.html",revision:"3a3ec8a8ff2c7f326fb5368880bdd9e1"},{url:"2022/04/10/cloudreve/index.html",revision:"39457c07d18f8334c0baf7c4059bd7d6"},{url:"2022/04/14/gcp-ssh-password/index.html",revision:"2e10aa86421710f37a83e46b8c4763e2"},{url:"2022/04/16/frp/index.html",revision:"14086f881321e5bc4ee3d97c105328b2"},{url:"2022/04/23/hax/index.html",revision:"db4c0699928b0c3720b8331399863c63"},{url:"2022/04/23/parsec/index.html",revision:"5d9fa5200288705863bafebcd707a585"},{url:"2022/04/25/lsky-pro/index.html",revision:"b574bcd4a24f6ae6b34615fba80fe0af"},{url:"2022/04/25/windows/index.html",revision:"3511facc05953ad4ecb7661a2660d39f"},{url:"2022/04/28/musicdl/index.html",revision:"c05fb78dab5335d01477b4bf22ce0ab5"},{url:"2022/05/03/Alist-add-account/index.html",revision:"45c8e523aa544700eabf4eae6f9a72e5"},{url:"2022/05/03/Alist-Features/index.html",revision:"f3f76171c637ea92ff1cffa5046cc79e"},{url:"2022/05/03/Alist-ht/index.html",revision:"69eb7b31727f71a5f026ee1b774f5496"},{url:"2022/05/03/Alist-webdav/index.html",revision:"cec7def08fa807ff2d1d87add526f6fa"},{url:"2022/05/03/Alist/index.html",revision:"34097382731b98979ea706a7291da46e"},{url:"2022/05/04/frp-webtest/index.html",revision:"aa51a4e5c9d0966dda15517b6c03520f"},{url:"2022/05/07/iptables/index.html",revision:"7c848a8fc4b517091bf0ed3303dd867d"},{url:"2022/05/07/Navicat-Premium-12-pj/index.html",revision:"23a47f01028ac2a800723dec73ad74b1"},{url:"2022/05/07/Navicat-Premium-15-pj/index.html",revision:"0e3617c77b7c9a10753150ecfa087f0c"},{url:"2022/05/07/sjkkshtj/index.html",revision:"486ead7c3766279e79183ff456b6ecf5"},{url:"2022/05/07/sqlsjktj/index.html",revision:"e3d6b20c1d1638841d84fa5e81c0b69c"},{url:"2022/05/08/Markdown-bjq/index.html",revision:"530d7907027ed7a220eb27a3a74161c4"},{url:"2022/05/10/frps-webui-admin/index.html",revision:"15ed1b378bdd892547f386c2c8ae9f65"},{url:"2022/05/10/Linux-vps-add-Virtual-Memory/index.html",revision:"67e9ef662c3ea0d47c5506410c886d89"},{url:"2022/05/11/frps-install/index.html",revision:"05f99eca217e66d46dcab2c56b700958"},{url:"2022/05/11/Github-Hosts/index.html",revision:"8d789fa472399fed09def98243c266ef"},{url:"2022/05/11/java-install/index.html",revision:"a162082e10eb8ac75d83023483f6ec33"},{url:"2022/05/11/lanproxy/index.html",revision:"ff5bbb35ddeaeef8098c91404c68bd30"},{url:"2022/05/15/hugo-blog/index.html",revision:"a56758381445dc8176dda122aa81eaa0"},{url:"2022/06/01/Rhythm-Doctor-GOODRAGE/index.html",revision:"cebd896abf1aa10370e1aa6f63e415ff"},{url:"2022/06/22/openfrp-frpc/index.html",revision:"835ce07cbb9b93ea70d9db639fee1452"},{url:"404.html",revision:"c47e678587076e9d83a7435b87667c68"},{url:"archives/2020/12/index.html",revision:"61fc8e622397e35f40a7428d5b37875f"},{url:"archives/2020/12/page/2/index.html",revision:"e247b5bacec6a9ec1fd9eb2f365de85a"},{url:"archives/2020/index.html",revision:"0fc1cc255071d681f0042f9c8eb305a6"},{url:"archives/2020/page/2/index.html",revision:"28f8af59ce0cbf88edb8fba711608cd1"},{url:"archives/2022/04/index.html",revision:"55394195cb79b4e9019f49bc45869a7c"},{url:"archives/2022/05/index.html",revision:"a99a6ed9cdea8869f9d068a8229f2ea4"},{url:"archives/2022/05/page/2/index.html",revision:"194277b1b803fd7366072e671633c0d1"},{url:"archives/2022/06/index.html",revision:"b40446f41b8fd3661f1b889b8c26fafa"},{url:"archives/2022/index.html",revision:"5c5f72e344bd7da81e8be94d355d4a77"},{url:"archives/2022/page/2/index.html",revision:"65b795554356f42e0fab109769312cc5"},{url:"archives/2022/page/3/index.html",revision:"eeb073740d18183ddf3cbd8a662e6751"},{url:"archives/2022/page/4/index.html",revision:"fd0755f747d163894f2e394553138392"},{url:"archives/index.html",revision:"1d740ee0e667361f88da20825992b76f"},{url:"archives/page/2/index.html",revision:"558887074d837d3cad36f97762eec02b"},{url:"archives/page/3/index.html",revision:"ba0af2fe89bd35c6978a0356b9570a6a"},{url:"archives/page/4/index.html",revision:"17e9b7242448c0495322ee7cd9f5f109"},{url:"archives/page/5/index.html",revision:"70756d9fe424c49cbc4efcb5ff8c2337"},{url:"bangumis/index.html",revision:"6515b661666743d09459a9ff2360df32"},{url:"categories/blog分支/index.html",revision:"f5ebe71ebc9ba1850b468871fabb867f"},{url:"categories/index.html",revision:"6c2f3c93b4bd6d0c8705f83962416e42"},{url:"categories/vps/index.html",revision:"d8ba44bb163ff22227e72342d0d10a31"},{url:"categories/vps/白嫖/hax/index.html",revision:"1be6aea0c7f80e0f0bbfc4a19ff302af"},{url:"categories/vps/白嫖/index.html",revision:"3891a2249b10d7104f8bb10a7244b1cc"},{url:"categories/vps/谷歌云/index.html",revision:"a64b96e2ac8e3f85f993a4281a3318c7"},{url:"categories/内网穿透-frp/index.html",revision:"0fec4b9b74cf961a0ae2eaca6ebb91c8"},{url:"categories/内网穿透-frp/openfrp/index.html",revision:"26c2f43619b181431f4ed56920bcc2fb"},{url:"categories/内网穿透-frp/openfrp/速通/index.html",revision:"0304b1d936c86edca873412120f66f9f"},{url:"categories/内网穿透-frp/教程/index.html",revision:"5bf3210f88b702ac7d9bc0e46513a81a"},{url:"categories/内网穿透-frp/测试/index.html",revision:"508350c283ee13e4fdf2bed4105ce35d"},{url:"categories/合集/index.html",revision:"6cd578310216fcc4945dfcd981cdf89d"},{url:"categories/合集/page/2/index.html",revision:"2a34cf08a1cc07ea9d08a6548a6d4d56"},{url:"categories/源码/index.html",revision:"cb4868d44b2fef33e1d4885ed5e2fa9d"},{url:"categories/源码/源码推荐/index.html",revision:"1a692e5732e3ea1d78454fa07bace64d"},{url:"categories/源码/源码推荐/安装教程/index.html",revision:"39942b11a403ca7762b87c6eddb672e0"},{url:"categories/源码/源码教程/hosts/index.html",revision:"75c5c2ce17c95d131cf012a918b036d1"},{url:"categories/源码/源码教程/index.html",revision:"a36883088164871b02ee1c2c11ff3abf"},{url:"categories/源码推荐/index.html",revision:"bf6ce766b6c27ddb08ba8a7f906b86c6"},{url:"categories/源码推荐/安装教程/index.html",revision:"9854dd74a94a1a25859586651dcac201"},{url:"categories/软件/index.html",revision:"04baa4fdfc02d64ba34f96d9546d3c74"},{url:"categories/软件/安装/index.html",revision:"b40db2f6c7c0bb11ca26a0178542af20"},{url:"categories/软件/安装/教程/index.html",revision:"18c4db9422b651d57bb69d23d5ff630e"},{url:"categories/软件/软件分享/index.html",revision:"859903273d1e4c1899bfd9cea6b4e3a5"},{url:"categories/软件/软件分享/实用软件/index.html",revision:"9dc0548211d2c09f503accfe3474dc4e"},{url:"categories/软件/软件推荐/index.html",revision:"20344ee92f1b82cc989808db367f3b92"},{url:"categories/软件/软件推荐/软件分享/index.html",revision:"a91c9fcb30dae58b4c6e69f017ac2fd3"},{url:"categories/软件/软件推荐/软件分享/破解/index.html",revision:"2704d358f7a797730640c1ca5d904d42"},{url:"categories/软件/软件推荐/软件分享/破解/编曲宿主/index.html",revision:"647ea6740418fd78c9a323432bb5c2b5"},{url:"categories/软件/软件推荐/软件分享/软件测评/index.html",revision:"a581b6108bf0bc6778862e2090321d46"},{url:"categories/音乐/index.html",revision:"bbad0c5a4d7f267c3ab51d9bbb8076b0"},{url:"categories/音乐/推荐/index.html",revision:"6b8ba9149d573cc1387de5ddac1a8d2e"},{url:"categories/音乐/推荐/下载/index.html",revision:"082d5df912968d1e302fb5ba77a80eac"},{url:"categories/音游/index.html",revision:"644e6fea89e4875b0f0faf660ef54539"},{url:"categories/音游/节奏医生/index.html",revision:"fdd4de871bf3dd23b89eb5f4ba01fd7d"},{url:"categories/音游/节奏医生/自制谱/index.html",revision:"6875d4bd022273b64b9359930f14a803"},{url:"css/index.css",revision:"a39eb63d4d88a7c3fae47aac6e81f714"},{url:"css/runtime.css",revision:"a96df2424b5918e60b3362a2a4e7bc3a"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"38af396fc68dfaa1275a6a8b022bc270"},{url:"js/crash_cheat.js",revision:"f8e9d4593921576fde38caca160c30bc"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/runtime.js",revision:"d2b8cbf57cca54cd83245d934cb79369"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"js/weather.js",revision:"7b2e62ae86427b2ba48d77c8d3e346dd"},{url:"link/index.html",revision:"94909a3b68e92376b22e8f6ca978137e"},{url:"page/2/index.html",revision:"e46e6271de90d0087f0eb9d8c3127a60"},{url:"page/3/index.html",revision:"50418f888a999a934081bd2409deaa7c"},{url:"page/4/index.html",revision:"ee8f2786f12339b73634899d331a9333"},{url:"page/5/index.html",revision:"056948e3a730c8df590490aaabd7cae8"},{url:"sponsor/index.html",revision:"52bdbedff7581a19566dfd51a83ee61a"},{url:"tags/Alist/index.html",revision:"0e1ab8f2f421427ffdfab8d4f1e57116"},{url:"tags/bot/index.html",revision:"e2949cef8fc10a8c6023997b93f56671"},{url:"tags/frp/index.html",revision:"11dd90d8953b8618f506800145ffd5f6"},{url:"tags/gcp/index.html",revision:"b990e6c683d81b0cc63299bc6ac2d03a"},{url:"tags/Google/index.html",revision:"83dc183da94255f14a03c8892644d27b"},{url:"tags/hosts/index.html",revision:"7098eac7f85e39e53edee75516542f74"},{url:"tags/hugo-blog/index.html",revision:"fbf8c8dfe63f5a51fc1e68c958ab091f"},{url:"tags/index.html",revision:"bae4bbe990d3b85da9c10e372de795d9"},{url:"tags/Markdown/index.html",revision:"e178d37799835a0baa0502da55ddbaec"},{url:"tags/Rhythm-Doctor/index.html",revision:"742d4a5973c42eac9e2f8c9cff1cf17a"},{url:"tags/ssh/index.html",revision:"f7c595314e8fffed40c687d2789adc78"},{url:"tags/telegram/index.html",revision:"d9c105453c883fc87fb692eba32167cd"},{url:"tags/vps/index.html",revision:"b2b69d488b0a5c2be5be54835db0a14f"},{url:"tags/windows/index.html",revision:"867bd6cd6ac32900a2e4f0d07579eb77"},{url:"tags/下载/index.html",revision:"1605cc9875008f4cd95ed329f8abebf1"},{url:"tags/下载工具/index.html",revision:"c2435b7809aec4d0c07a7ecd1573ca96"},{url:"tags/内网穿透/index.html",revision:"cd1f0f79f90374400de8fb6e2143a981"},{url:"tags/合集/index.html",revision:"48a1fce5adef57c8cbd85d3f93d0b9a6"},{url:"tags/合集/page/2/index.html",revision:"75fd69e30cc2725d2893fee7ebaa0a01"},{url:"tags/图床/index.html",revision:"14afcd7762c4f3525b62923787114705"},{url:"tags/安装/index.html",revision:"890f7af802873160d9944dbdfdbf277d"},{url:"tags/安装/page/2/index.html",revision:"6db9a19d8d94c186d6edb321c7d06bbf"},{url:"tags/工具/index.html",revision:"6df16fe55ec53ff04f6c10f2ce454d0c"},{url:"tags/接码/index.html",revision:"7f2c39442a3ba0c3db66fa09b60bb136"},{url:"tags/推荐/index.html",revision:"fb9a22e0cd5d5cb792332384b2220e4e"},{url:"tags/教程/index.html",revision:"b0619a7e4fc9a17cbc6cf52ca864177e"},{url:"tags/教程/page/2/index.html",revision:"b74de37f0a433a855bc08ebcaef9ed95"},{url:"tags/数据库/index.html",revision:"cc66adfe139e9d9182aa00a9feeb50f9"},{url:"tags/测评/index.html",revision:"7cf54d321530e08e90ab1f8ee0d4bc3f"},{url:"tags/测试/index.html",revision:"449f4d2f596b88159fddd6c824b80d98"},{url:"tags/游戏/index.html",revision:"9a3bfad7ffa2b42b99682c546c2490fa"},{url:"tags/源码/index.html",revision:"3de47f0ccdb10c8949b7711f695da03f"},{url:"tags/源码/page/2/index.html",revision:"3d65870818beba3cd17263562ab66a57"},{url:"tags/漫画/index.html",revision:"850ecc906abfc79987dadd8451b26095"},{url:"tags/生成/index.html",revision:"afe936d66322fcc3c2145c9837462888"},{url:"tags/电子书/index.html",revision:"92bd6065319597f5c4a9fce6b854065b"},{url:"tags/白嫖/index.html",revision:"51c3f13604f288d2860f16429d7f25da"},{url:"tags/破解/index.html",revision:"d68475f6a85ccf266fa26e34e097fa20"},{url:"tags/视频/index.html",revision:"ce88bf5fdea9579ce66993ae0594f0ee"},{url:"tags/端口转发/index.html",revision:"731af56fa5250754fb93346307bea567"},{url:"tags/管理/index.html",revision:"6b2c1684b30194921d813c5c40b198ed"},{url:"tags/编曲/index.html",revision:"0bc3c61bd7f4fb5681cea603d5ed3d6f"},{url:"tags/编辑器/index.html",revision:"5639f23e2b2a8828b53e6a134faef53a"},{url:"tags/网盘/index.html",revision:"fae7f2609d92474183cd1a80a25f8fc0"},{url:"tags/网站/index.html",revision:"6b484c0e5f5356913ec688c98a09d6f8"},{url:"tags/网络/index.html",revision:"bd454f5729d9e9b88d69f62fe860eeb9"},{url:"tags/自制谱/index.html",revision:"4bddd0b952441fd17d8f01d4e36555a4"},{url:"tags/节奏医生/index.html",revision:"79b7ace6930f6ac7f5924b4bbf898639"},{url:"tags/蓝奏云/index.html",revision:"99c06ed860977264b95b2efcb30394fd"},{url:"tags/虚拟身份证/index.html",revision:"839830fb969cd2e96abd75a9da385103"},{url:"tags/谷歌/index.html",revision:"97839aed6a6ab48427a9899f8103880e"},{url:"tags/资源/index.html",revision:"a692c63cf91d652c16a7fef84d6d3db0"},{url:"tags/软件/index.html",revision:"1a5b0b620ae34ad019471bf20889a8a0"},{url:"tags/软件/page/2/index.html",revision:"0bb9242ff04bc4118faa4421ac48859d"},{url:"tags/远程桌面/index.html",revision:"40ac40733c7b101a3cc5c89dff568ab8"},{url:"tags/面板/index.html",revision:"01e6fe41f6470f0b7208f9106f6e0a3f"},{url:"tags/音乐/index.html",revision:"60a230cae77a2afc3706468a65257aee"},{url:"video/index.html",revision:"fc4e43300a1509fae3c55623750543c7"}],{})}));
//# sourceMappingURL=service-worker.js.map
