import { Product } from './useMentionInsert';

// 商品mock数据
export const mockProducts: Product[] = [
  { id: 'prod_1', name: 'iPhone 15 Pro Max 256GB 深空黑色' },
  { id: 'prod_2', name: 'MacBook Pro 14英寸 M3芯片 512GB 银色' },
  { id: 'prod_3', name: 'AirPods Pro 第二代 USB-C充电盒' },
  { id: 'prod_4', name: 'Apple Watch Series 9 GPS 45mm 午夜色铝金属表壳' },
  { id: 'prod_5', name: 'iPad Air 第五代 64GB WiFi版 星光色' },
  { id: 'prod_6', name: 'Magic Keyboard 妙控键盘 中文（拼音）' },
  { id: 'prod_7', name: 'Magic Mouse 妙控鼠标 白色' },
  { id: 'prod_8', name: 'Studio Display 27英寸 5K Retina显示器' },
  { id: 'prod_9', name: 'Mac Studio M2 Ultra芯片 64GB统一内存 1TB SSD存储' },
  { id: 'prod_10', name: 'HomePod mini 智能音响 深空灰色' },
  { id: 'prod_11', name: 'iPhone 14 128GB 蓝色' },
  { id: 'prod_12', name: 'iPad Pro 11英寸 M2芯片 128GB WiFi版' },
  { id: 'prod_13', name: 'Apple TV 4K 128GB Wi-Fi + 以太网' },
  { id: 'prod_14', name: 'AirTag 精密查找器 单个装' },
  { id: 'prod_15', name: 'MagSafe 充电器' },
];

// 用户mock数据
export const mockUsers: Product[] = [
  { id: 'user_1', name: '张三' },
  { id: 'user_2', name: '李四' },
  { id: 'user_3', name: '王五' },
  { id: 'user_4', name: '赵六' },
  { id: 'user_5', name: '钱七' },
  { id: 'user_6', name: '孙八' },
  { id: 'user_7', name: '周九' },
  { id: 'user_8', name: '吴十' },
  { id: 'user_9', name: '郑十一' },
  { id: 'user_10', name: '王十二' },
];

// 标签mock数据
export const mockTags: Product[] = [
  { id: 'tag_1', name: '重要' },
  { id: 'tag_2', name: '紧急' },
  { id: 'tag_3', name: '待办' },
  { id: 'tag_4', name: '已完成' },
  { id: 'tag_5', name: '需讨论' },
  { id: 'tag_6', name: '低优先级' },
  { id: 'tag_7', name: '高优先级' },
  { id: 'tag_8', name: '进行中' },
  { id: 'tag_9', name: '已取消' },
  { id: 'tag_10', name: '需要帮助' },
];

// 分类mock数据
export const mockCategories: Product[] = [
  { id: 'cat_1', name: '电子产品' },
  { id: 'cat_2', name: '服装鞋帽' },
  { id: 'cat_3', name: '家居用品' },
  { id: 'cat_4', name: '图书音像' },
  { id: 'cat_5', name: '运动户外' },
  { id: 'cat_6', name: '美妆护肤' },
  { id: 'cat_7', name: '食品饮料' },
  { id: 'cat_8', name: '母婴用品' },
];

// 根据类型获取对应的mock数据
export const getMockDataByType = (type: string): Product[] => {
  switch (type) {
    case 'product':
      return mockProducts;
    case 'user':
      return mockUsers;
    case 'tag':
      return mockTags;
    case 'category':
      return mockCategories;
    default:
      return mockProducts;
  }
};

// 搜索mock数据
export const searchMockData = (type: string, keyword: string): Product[] => {
  const data = getMockDataByType(type);
  if (!keyword.trim()) {
    return data.slice(0, 8); // 返回前8个
  }
  
  return data
    .filter(item => item.name.toLowerCase().includes(keyword.toLowerCase()))
    .slice(0, 8);
};

// 预设的示例数据
export const presetExamples = {
  basic: {
    text: '今天推荐',
    mentions: []
  },
  product: {
    text: '今天推荐    @iPhone 15 Pro Max 256GB 深空黑色    和    @AirPods Pro 第二代 USB-C充电盒    给大家！',
    mentions: [
      {
        id: 'prod_1',
        name: 'iPhone 15 Pro Max 256GB 深空黑色',
        displayName: 'iPhone 15 Pro Max 256GB...',
        type: 'product' as const,
        startIndex: 4,
        endIndex: 36
      },
      {
        id: 'prod_3',
        name: 'AirPods Pro 第二代 USB-C充电盒',
        displayName: 'AirPods Pro 第二代 USB-C...',
        type: 'product' as const,
        startIndex: 39,
        endIndex: 71
      }
    ]
  },
  multiType: {
    text: '请    @张三    关注    #重要    标签的    @iPhone 15 Pro Max 256GB 深空黑色    商品。',
    mentions: [
      {
        id: 'user_1',
        name: '张三',
        displayName: '张三',
        type: 'product' as const,  // 注意：这里统一使用product类型，实际使用时可以扩展MentionItem类型
        startIndex: 1,
        endIndex: 9
      },
      {
        id: 'tag_1',
        name: '重要',
        displayName: '重要',
        type: 'product' as const,
        startIndex: 13,
        endIndex: 21
      },
      {
        id: 'prod_1',
        name: 'iPhone 15 Pro Max 256GB 深空黑色',
        displayName: 'iPhone 15 Pro Max 256GB...',
        type: 'product' as const,
        startIndex: 25,
        endIndex: 57
      }
    ]
  }
};