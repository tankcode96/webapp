// 使用mock模拟首页数据
const Mock = require('mockjs')

let homeData = {
  status: 0,
  data: {
    headList: [
      {
        imgUrl: '//m.360buyimg.com/mobilecms/s1125x690_jfs/t29188/301/133996293/200131/61f42a01/5be8eed6Nda6a18a5.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        categoryId: 100008
      },
      {
        imgUrl: '//m.360buyimg.com/mobilecms/s1125x690_jfs/t30757/316/208746402/123953/9fa18794/5beb7d13Ne77e9f29.jpg!cr_1125x549_0_72!q70.jpg.dpg',
        categoryId: 100016
      },
      {
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t1/3926/29/4138/254748/5b9b646dE45cbeb7f/f80c8f7c24273bc1.jpg!cr_1125x549_0_72',
        categoryId: 100035
      }
    ],
    categoryList: [
      {
        name: 'MMall超市',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t25534/207/1767774998/8085/523157d6/5bbc800fN502129b8.png',
        categoryId: 100002
      }, {
        name: '全球购',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png',
        categoryId: 100002
      }, {
        name: 'MMall时尚',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t1/8385/17/3537/17895/5bd6ca67E09d23550/32d965fe9a9087a2.png',
        categoryId: 100002
      }, {
        name: 'MMall生鲜',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png',
        categoryId: 100002
      }, {
        name: 'MMall到家',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png',
        categoryId: 100002
      }, {
        name: '充值缴费',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
        categoryId: 100002
      }, {
        name: '9.9元拼',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png',
        categoryId: 100002
      }, {
        name: '领劵',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t25258/200/2527038521/14019/3d7a8470/5be92494N557a0c5b.png',
        categoryId: 100002
      }, {
        name: '省钱',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t22120/183/200496447/5553/91ed22e0/5b03b7b8Ncea08c5b.png',
        categoryId: 100002
      }, {
        name: '全部',
        imgUrl: '//m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png',
        categoryId: 100002
      }

    ],
    floorList: [
      {
        headUrl: '//m.360buyimg.com/mobilecms/jfs/t15526/56/2344102455/23273/d8e15d5a/5aa0dbc1Nefd2bd2a.png!q70.jpg.dpg',
        list: [
          {
            title: '玩3C',
            desc: '黑鲨新品大爆炸',
            products: [
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t25144/2/1278469398/101844/cb66b21/5b90f5bfNcd58f18b.png!q70.jpg.dpg',
                categoryId: 100001
              },
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t22792/274/2587775944/59292/3666f607/5b87bf15N9409ba0e.png!q70.jpg.dpg',
                categoryId: 100001
              }
            ]
          },
          {
            title: 'MMall家电',
            desc: '家电狂欢 京彩有你',
            products: [
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t22363/318/1484948466/11138/8317fc9b/5b2a528eN7c6bde83.jpg!q70.jpg.dpg',
                categoryId: 100001
              },
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t22666/293/257815171/29274/6b5605b1/5b2a5295N5a81ad96.jpg!q70.jpg.dpg',
                categoryId: 100001
              }
            ]
          },
          {
            title: 'MMall超市',
            desc: '超市大放价 抢超值好货',
            products: [
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t16852/170/2693122660/56143/28da8c2a/5b063c63N5746e4e4.jpg!q70.jpg.dpg',
                categoryId: 100004
              },
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t18877/293/2631103430/85245/f220b40d/5b063c6fN7820b399.jpg!q70.jpg.dpg',
                categoryId: 100004
              }
            ]
          },
          {
            title: '爱家',
            desc: '家纺热卖 部分低至9.9元',
            products: [
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t15244/283/356547262/47743/b6607b0f/5a2a6d51N8830e8b8.jpg!q70.jpg.dpg',
                categoryId: 100005
              },
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t16057/38/102057973/36179/b957e4ec/5a2a6d55N83655f7f.jpg!q70.jpg.dpg',
                categoryId: 100005
              }
            ]
          },
          {
            title: '家有萌宝',
            desc: '低至五折',
            products: [
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t17929/299/899794385/17291/d90318f9/5ab4c680N7d291625.jpg!q70.jpg.dpg',
                categoryId: 100006
              },
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t18802/262/2452746578/333259/5dcdfb06/5af3ffb4N0c700b57.jpg!q70.jpg.dpg',
                categoryId: 100006
              }
            ]
          },
          {
            title: '爱吃',
            desc: '9.9包邮，夏日也生动',
            products: [
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t14473/103/2042876100/41836/766c1953/5a697f47Nc952ed7f.jpg!q70.jpg.dpg',
                categoryId: 100007
              },
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t17155/227/2678303408/52223/f7a950c/5b0535d6Ne4073be7.jpg!q70.jpg.dpg',
                categoryId: 100007
              }
            ]
          }
        ]
      },
      {
        headUrl: '//m.360buyimg.com/mobilecms/jfs/t19381/275/717008577/26686/e58b7ef4/5aa23f27Nfa6d6be3.png!q70.jpg.dpg',
        list: [
          {
            title: '智能家电馆',
            desc: '满减狂欢',
            products: [
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t25183/247/391394027/33684/8e1af9dc/5b6d048aNd7dae520.jpg!q70.jpg.dpg',
                categoryId: 100008
              },
              {
                imgUrl: '//m.360buyimg.com/mobilecms/s240x240_jfs/t1/839/25/11121/19615/5bccb3a0E4b504f77/e55c2fb826efe911.jpg!q70.jpg.dpg',
                categoryId: 100008
              }
            ]
          },
          {
            title: '珠宝馆',
            desc: '满减优惠',
            products: [
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t19009/357/347377157/13661/d0d9e5fb/5a6e8bb3Nd6182f9f.jpg!q70.jpg.dpg',
                categoryId: 100009
              },
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t27889/231/477152414/149859/7a5fb585/5baf1f58N45c2ca6c.jpg!q70.jpg.dpg',
                categoryId: 100009
              }
            ]
          },
          {
            title: '鞋靴箱包',
            desc: '低至五折',
            products: [
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t21469/359/769885083/29352/68865ed/5b178e49Nc5db7341.jpg!q70.jpg.dpg',
                categoryId: 100010
              },
              {
                imgUrl: '//m.360buyimg.com/mobilecms/jfs/t1/7091/11/2919/441267/5bd578bfE03e7166a/c5d5222c1802fd21.jpg!q70.jpg.dpg',
                categoryId: 100010
              }
            ]
          },
          {
            title: '童装馆',
            desc: '春夏小萌娃',
            products: [
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t20614/194/808562651/89118/894d41a5/5b18ba8dN855ebe44.png!q70.jpg.dpg',
                categoryId: 100011
              },
              {
                imgUrl: '//m.360buyimg.com/n1/jfs/t12460/183/2350810548/47292/f4c5485/5a914202Nfc1b8a12.png!q70.jpg.dpg',
                categoryId: 100011
              }
            ]
          }
        ]
      }
    ]
  }
}

Mock.mock('/home/data', 'post', homeData)
