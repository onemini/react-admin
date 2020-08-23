const menuList = [
  {
    title: '首页',
    key: '/home',
    icon: 'home',
    isPublic: true,
  },
  {
    title: '查找矿工',
    key: '/products',
    icon: 'appstore',
    children: [
      {
        title: '查找IP',
        key: '/category',
        icon: 'bars'
      },
      {
        title: '矿工详情',
        key: '/product',
        icon: 'tool'
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: 'user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon: 'safety',
  },

  {
    title: '图形图表',
    key: '/charts',
    icon: 'area-chart',
    children: [
      {
        title: '柱形图',
        key: '/charts/bar',
        icon: 'bar-chart'
      },
      {
        title: '折线图',
        key: '/charts/line',
        icon: 'line-chart'
      },
      {
        title: '饼图',
        key: '/charts/pie',
        icon: 'pie-chart'
      },
    ]
  },

  {
    title: '安装矿工',
    key: '/order',
    icon: 'windows',
  },
]

export default menuList