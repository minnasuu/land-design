import { useState, useCallback } from 'react';
import MentionTextarea from '.';
import { MentionItem, MentionChangeDetail } from './props';
import { useMentionInsert, Product } from './useMentionInsert';
import { mockProducts,  searchMockData, presetExamples } from './mockData';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function MentionTextareaExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  
  // 基础示例状态
  const [basicValue, setBasicValue] = useState('');
  const [basicMentions, setBasicMentions] = useState<MentionItem[]>([]);
  
  // 带产品选择的示例状态
  const [advancedValue, setAdvancedValue] = useState('');
  const [advancedMentions, setAdvancedMentions] = useState<MentionItem[]>([]);
  const [showProductList, setShowProductList] = useState(false);
  const [atPosition, setAtPosition] = useState({ left: 0, top: 0, startIndex: -1 });
  const [editingMentionIndex, setEditingMentionIndex] = useState(-1);
  
  // 预设内容示例状态
  const [presetValue, setPresetValue] = useState(presetExamples.product.text);
  const [presetMentions, setPresetMentions] = useState<MentionItem[]>(presetExamples.product.mentions);
  
  // 多种类型示例状态
  const [multiTypeValue, setMultiTypeValue] = useState('');
  const [multiTypeMentions, setMultiTypeMentions] = useState<MentionItem[]>([]);
  const [showMultiTypeList, setShowMultiTypeList] = useState(false);
  const [multiTypePosition, setMultiTypePosition] = useState({ left: 0, top: 0, startIndex: -1 });
  const [currentMentionType, setCurrentMentionType] = useState<'product' | 'user' | 'tag'>('product');
  
  // 限制大小示例状态
  const [limitValue, setLimitValue] = useState('');
  const [limitMentions, setLimitMentions] = useState<MentionItem[]>([]);
  const [showLimitList, setShowLimitList] = useState(false);
  const [limitPosition, setLimitPosition] = useState({ left: 0, top: 0, startIndex: -1 });

  const { insertProduct } = useMentionInsert({
    textValue: advancedValue,
    mentions: advancedMentions,
    editingMentionIndex: editingMentionIndex
  });

  const { insertProduct: insertMultiType } = useMentionInsert({
    textValue: multiTypeValue,
    mentions: multiTypeMentions,
    editingMentionIndex: -1
  });

  const { insertProduct: insertLimit } = useMentionInsert({
    textValue: limitValue,
    mentions: limitMentions,
    editingMentionIndex: -1
  });

  // 处理基础示例的变化
  const handleBasicChange = useCallback((displayValue: string, realValue: string, mentions: MentionItem[], detail?: MentionChangeDetail) => {
    setBasicValue(displayValue);
    setBasicMentions(mentions);
    console.log('Basic change:', { displayValue, realValue, mentions, detail });
  }, []);

  // 处理高级示例的变化
  const handleAdvancedChange = useCallback((displayValue: string, realValue: string, mentions: MentionItem[], detail?: MentionChangeDetail) => {
    setAdvancedValue(displayValue);
    setAdvancedMentions(mentions);
    console.log('Advanced change:', { displayValue, realValue, mentions, detail });
  }, []);

  // 处理预设内容示例的变化
  const handlePresetChange = useCallback((displayValue: string, realValue: string, mentions: MentionItem[], detail?: MentionChangeDetail) => {
    setPresetValue(displayValue);
    setPresetMentions(mentions);
    console.log('Preset change:', { displayValue, realValue, mentions, detail });
  }, []);

  // 处理多类型示例的变化
  const handleMultiTypeChange = useCallback((displayValue: string, realValue: string, mentions: MentionItem[], detail?: MentionChangeDetail) => {
    setMultiTypeValue(displayValue);
    setMultiTypeMentions(mentions);
    console.log('MultiType change:', { displayValue, realValue, mentions, detail });
  }, []);

  // 处理限制示例的变化
  const handleLimitChange = useCallback((displayValue: string, realValue: string, mentions: MentionItem[], detail?: MentionChangeDetail) => {
    setLimitValue(displayValue);
    setLimitMentions(mentions);
    console.log('Limit change:', { displayValue, realValue, mentions, detail });
  }, []);

  // 处理@触发事件
  const handleAtTrigger = useCallback((params: {
    left: number;
    top: number;
    textareaWidth: number;
    startIndex: number;
    trigger: 'click' | 'input' | 'close';
    mention?: MentionItem;
  }) => {
    console.log('At trigger:', params);
    
    if (params.trigger === 'close') {
      setShowProductList(false);
      setEditingMentionIndex(-1);
    } else {
      setShowProductList(true);
      setAtPosition({
        left: params.left,
        top: params.top + 44,
        startIndex: params.startIndex
      });
      
      if (params.trigger === 'click' && params.mention) {
        // 找到被点击的mention的索引
        const mentionIndex = advancedMentions.findIndex(m => m.id === params.mention!.id);
        setEditingMentionIndex(mentionIndex);
      } else {
        setEditingMentionIndex(-1);
      }
    }
  }, [advancedMentions]);

  // 处理多类型@触发事件
  const handleMultiTypeAtTrigger = useCallback((params: {
    left: number;
    top: number;
    textareaWidth: number;
    startIndex: number;
    trigger: 'click' | 'input' | 'close';
    mention?: MentionItem;
  }) => {
    if (params.trigger === 'close') {
      setShowMultiTypeList(false);
    } else {
      // 根据输入的字符判断类型
      const textBeforeAt = multiTypeValue.slice(0, params.startIndex + 1);
      const lastChar = textBeforeAt.slice(-2, -1); // @符号前的字符
      
      if (lastChar === '#') {
        setCurrentMentionType('tag');
      } else if (lastChar === '@') {
        setCurrentMentionType('user');
      } else {
        setCurrentMentionType('product');
      }
      
      setShowMultiTypeList(true);
      setMultiTypePosition({
        left: params.left,
        top: params.top + 44,
        startIndex: params.startIndex
      });
    }
  }, [multiTypeValue]);

  // 处理限制@触发事件
  const handleLimitAtTrigger = useCallback((params: {
    left: number;
    top: number;
    textareaWidth: number;
    startIndex: number;
    trigger: 'click' | 'input' | 'close';
    mention?: MentionItem;
  }) => {
    if (params.trigger === 'close') {
      setShowLimitList(false);
    } else {
      setShowLimitList(true);
      setLimitPosition({
        left: params.left,
        top: params.top + 44,
        startIndex: params.startIndex
      });
    }
  }, []);

  // 选择商品
  const handleProductSelect = useCallback((product: Product) => {
    const result = insertProduct(product);
    if (result) {
      setAdvancedValue(result.newTextValue);
      setAdvancedMentions(result.newMentions);
    }
    setShowProductList(false);
    setEditingMentionIndex(-1);
  }, [insertProduct]);

  // 选择多类型项目
  const handleMultiTypeSelect = useCallback((item: Product) => {
    const result = insertMultiType(item);
    if (result) {
      setMultiTypeValue(result.newTextValue);
      setMultiTypeMentions(result.newMentions);
    }
    setShowMultiTypeList(false);
  }, [insertMultiType]);

  // 选择限制项目
  const handleLimitSelect = useCallback((item: Product) => {
    const result = insertLimit(item);
    if (result) {
      setLimitValue(result.newTextValue);
      setLimitMentions(result.newMentions);
    }
    setShowLimitList(false);
  }, [insertLimit]);

  // 获取当前显示的数据源
  const getCurrentDataSource = useCallback(() => {
    const typeMap = {
      'user': 'user',
      'tag': 'tag',
      'product': 'product'
    };
    return searchMockData(typeMap[currentMentionType], '').slice(0, 6);
  }, [currentMentionType]);

  // 重置示例
  const resetBasicExample = useCallback(() => {
    setBasicValue('');
    setBasicMentions([]);
  }, []);

  const resetAdvancedExample = useCallback(() => {
    setAdvancedValue('');
    setAdvancedMentions([]);
    setShowProductList(false);
    setEditingMentionIndex(-1);
  }, []);

  const resetPresetExample = useCallback(() => {
    setPresetValue(presetExamples.product.text);
    setPresetMentions(presetExamples.product.mentions);
  }, []);

  const MentionTextareaProps = [
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'value', type: 'string', desc: '文本框的值' },
    { name: 'mentions', type: 'MentionItem[]', desc: '提及项列表' },
    { name: 'autoFocus', type: 'boolean', desc: '是否自动聚焦，默认false' },
    { name: 'onChange', type: 'function', desc: '值变化时的回调函数' },
    { name: 'onFocus', type: 'function', desc: '聚焦时的回调函数' },
    { name: 'onBlur', type: 'function', desc: '失焦时的回调函数' },
    { name: 'onAtTrigger', type: 'function', desc: '@符号触发时的回调函数' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用，默认false' },
    { name: 'maxLength', type: 'number', desc: '最大字符长度' },
    { name: 'maxMentions', type: 'number', desc: '最多允许的mention数量，默认10' },
    { name: 'children', type: 'ReactNode', desc: '子元素' },
  ];

  return (
    <ComponentContentLayout
      zh='MentionTextarea'
      en='MentionTextarea'
      desc='支持@提及功能的文本输入框组件，可以在文本中插入和管理提及项。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='MentionTextarea 组件的基础用法，支持输入@符号触发提及功能。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div className="flex gap-8 items-start">
                  <div className="flex-1" style={{ minWidth: '400px', maxWidth: '600px' }}>
                    <MentionTextarea
                      value={basicValue}
                      mentions={basicMentions}
                      placeholder="输入@符号尝试提及功能..."
                      onChange={handleBasicChange}
                      style={{ minHeight: '80px', width: '100%' }}
                    />
                  </div>
                  <button 
                    onClick={resetBasicExample}
                    className="px-12 py-6 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                  >
                    重置
                  </button>
                </div>
                <div className="text-sm text-gray-600 bg-gray-50 p-12 rounded">
                  <div><strong>显示值:</strong> {basicValue || '(空)'}</div>
                  <div><strong>提及项数量:</strong> {basicMentions.length}</div>
                  {basicMentions.length > 0 && (
                    <div><strong>提及项:</strong> {basicMentions.map(m => m.displayName).join(', ')}</div>
                  )}
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 预设内容示例 */}
          <ComponentSectionLayout
            title='预设内容示例'
            id='preset-usage'
            description='展示如何使用预设的文本内容和mention项。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div className="flex gap-8 items-start">
                  <div className="flex-1" style={{ minWidth: '400px', maxWidth: '600px' }}>
                    <MentionTextarea
                      value={presetValue}
                      mentions={presetMentions}
                      placeholder="预设内容示例..."
                      onChange={handlePresetChange}
                      style={{ minHeight: '80px', width: '100%' }}
                    />
                  </div>
                  <button 
                    onClick={resetPresetExample}
                    className="px-12 py-6 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                  >
                    重置
                  </button>
                </div>
                <div className="text-sm text-gray-600 bg-gray-50 p-12 rounded">
                  <div><strong>显示值:</strong> {presetValue}</div>
                  <div><strong>真实值:</strong> {presetMentions.reduce((acc, mention, index) => {
                    if (index === 0) {
                      return presetValue.slice(0, mention.startIndex) + `@${mention.name}`;
                    }
                    const prevMention = presetMentions[index - 1];
                    return acc + presetValue.slice(prevMention.endIndex, mention.startIndex) + `@${mention.name}`;
                  }, '') + (presetMentions.length > 0 ? presetValue.slice(presetMentions[presetMentions.length - 1].endIndex) : presetValue)}</div>
                  <div><strong>提及项数量:</strong> {presetMentions.length}</div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带商品选择的高级用法 */}
          <ComponentSectionLayout
            title='带商品选择的高级用法'
            id='advanced-usage'
            description='结合商品选择功能的高级用法示例，支持点击已有mention进行编辑。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16 relative">
                <div className="flex gap-8 items-start">
                  <div className="flex-1" style={{ minWidth: '400px', maxWidth: '600px' }}>
                    <MentionTextarea
                      value={advancedValue}
                      mentions={advancedMentions}
                      placeholder="输入@符号选择商品进行提及..."
                      onChange={handleAdvancedChange}
                      onAtTrigger={handleAtTrigger}
                      maxMentions={3}
                      style={{ minHeight: '80px', width: '100%' }}
                    />
                  </div>
                  <button 
                    onClick={resetAdvancedExample}
                    className="px-12 py-6 text-sm bg-gray-100 hover:bg-gray-200 rounded transition-colors flex-shrink-0"
                  >
                    重置
                  </button>
                </div>
                
                {/* 商品选择弹窗 */}
                {showProductList && (
                  <div 
                    className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg min-w-80 max-h-64 overflow-y-auto"
                    style={{
                      left: Math.min(atPosition.left, 400),
                      top: atPosition.top
                    }}
                  >
                    <div className="text-sm text-gray-600 p-12 border-b bg-gray-50">
                      {editingMentionIndex >= 0 ? '编辑商品:' : '选择商品:'}
                    </div>
                    {mockProducts.slice(0, 8).map(product => (
                      <div
                        key={product.id}
                        className="p-12 hover:bg-blue-50 cursor-pointer text-sm rounded transition-colors border-b border-gray-100 last:border-b-0"
                        onClick={() => handleProductSelect(product)}
                      >
                        <div className="font-medium text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-500 mt-4">ID: {product.id}</div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="text-sm text-gray-600 bg-blue-50 p-12 rounded">
                  <div><strong>显示值:</strong> {advancedValue || '(空)'}</div>
                  <div><strong>提及项数量:</strong> {advancedMentions.length} / 3</div>
                  {advancedMentions.length > 0 && (
                    <div><strong>提及的商品:</strong> {advancedMentions.map(m => m.displayName).join(', ')}</div>
                  )}
                  <div className="mt-8 text-xs text-blue-600">
                    💡 提示：点击已有的mention可以重新选择商品
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多类型提及 */}
          <ComponentSectionLayout
            title='多类型提及示例'
            id='multi-type-usage'
            description='支持不同类型的提及项，如商品、用户、标签等。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16 relative">
                <div style={{ minWidth: '400px', maxWidth: '600px' }}>
                  <MentionTextarea
                    value={multiTypeValue}
                    mentions={multiTypeMentions}
                    placeholder="输入@提及商品，@@提及用户，#@提及标签..."
                    onChange={handleMultiTypeChange}
                    onAtTrigger={handleMultiTypeAtTrigger}
                    maxMentions={5}
                    style={{ minHeight: '80px', width: '100%' }}
                  />
                </div>
                
                {/* 多类型选择弹窗 */}
                {showMultiTypeList && (
                  <div 
                    className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg min-w-64 max-h-48 overflow-y-auto"
                    style={{
                      left: Math.min(multiTypePosition.left, 300),
                      top: multiTypePosition.top
                    }}
                  >
                    <div className="text-sm text-gray-600 p-12 border-b bg-gray-50">
                      选择{currentMentionType === 'product' ? '商品' : currentMentionType === 'user' ? '用户' : '标签'}:
                    </div>
                    {getCurrentDataSource().map(item => (
                      <div
                        key={item.id}
                        className="p-12 hover:bg-gray-50 cursor-pointer text-sm rounded transition-colors"
                        onClick={() => handleMultiTypeSelect(item)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="text-sm text-gray-600 bg-green-50 p-12 rounded">
                  <div><strong>显示值:</strong> {multiTypeValue || '(空)'}</div>
                  <div><strong>提及项数量:</strong> {multiTypeMentions.length} / 5</div>
                  {multiTypeMentions.length > 0 && (
                    <div><strong>提及项:</strong> {multiTypeMentions.map(m => `${m.displayName}(${m.type})`).join(', ')}</div>
                  )}
                  <div className="mt-8 text-xs text-green-600">
                    💡 使用说明：@ = 商品，@@ = 用户，#@ = 标签
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 限制数量示例 */}
          <ComponentSectionLayout
            title='限制数量示例'
            id='limit-usage'
            description='限制最多只能添加1个mention的示例。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16 relative">
                <div style={{ minWidth: '400px', maxWidth: '600px' }}>
                  <MentionTextarea
                    value={limitValue}
                    mentions={limitMentions}
                    placeholder="最多只能添加1个mention..."
                    onChange={handleLimitChange}
                    onAtTrigger={handleLimitAtTrigger}
                    maxMentions={1}
                    style={{ minHeight: '80px', width: '100%' }}
                  />
                </div>
                
                {/* 限制选择弹窗 */}
                {showLimitList && (
                  <div 
                    className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg min-w-64 max-h-32 overflow-y-auto"
                    style={{
                      left: Math.min(limitPosition.left, 300),
                      top: limitPosition.top
                    }}
                  >
                    <div className="text-sm text-gray-600 p-12 border-b bg-gray-50">
                      选择商品 (限制1个):
                    </div>
                    {mockProducts.slice(0, 3).map(product => (
                      <div
                        key={product.id}
                        className="p-12 hover:bg-gray-50 cursor-pointer text-sm rounded transition-colors"
                        onClick={() => handleLimitSelect(product)}
                      >
                        {product.name}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="text-sm text-gray-600 bg-orange-50 p-12 rounded">
                  <div><strong>显示值:</strong> {limitValue || '(空)'}</div>
                  <div><strong>提及项数量:</strong> {limitMentions.length} / 1</div>
                  {limitMentions.length >= 1 && (
                    <div className="text-orange-600">⚠️ 已达到最大限制，无法添加更多mention</div>
                  )}
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='disabled-usage'
            description='禁用状态下的MentionTextarea组件。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div style={{ minWidth: '400px', maxWidth: '600px' }}>
                  <MentionTextarea
                    value="这是一个禁用的文本框，无法编辑    @iPhone 15 Pro Max 256GB 深空黑色    "
                    mentions={[{
                      id: 'prod_1',
                      name: 'iPhone 15 Pro Max 256GB 深空黑色',
                      displayName: 'iPhone 15 Pro Max 256GB...',
                      type: 'product',
                      startIndex: 17,
                      endIndex: 49
                    }]}
                    disabled
                    placeholder="禁用状态的占位符"
                    style={{ minHeight: '80px', width: '100%' }}
                  />
                </div>
                <div className="text-sm text-gray-500 bg-gray-50 p-12 rounded">
                  禁用状态下，用户无法编辑文本内容或与mention进行交互。
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 键盘快捷键说明 */}
          <ComponentSectionLayout
            title='键盘快捷键'
            id='keyboard-shortcuts'
            description='MentionTextarea组件支持的键盘快捷键。'
          >
            <div className="bg-gray-50 p-16 rounded">
                <div className="text-sm text-gray-700">
                  <div className="font-medium mb-8">支持的键盘操作：</div>
                  <ul className="space-y-4 text-sm">
                    <li><kbd className="bg-gray-200 px-6 py-2 rounded text-xs">@</kbd> - 触发mention选择</li>
                    <li><kbd className="bg-gray-200 px-6 py-2 rounded text-xs">Backspace</kbd> - 删除光标前的mention（整个删除）</li>
                    <li><kbd className="bg-gray-200 px-6 py-2 rounded text-xs">Delete</kbd> - 删除光标后的mention（整个删除）</li>
                    <li><kbd className="bg-gray-200 px-6 py-2 rounded text-xs">点击mention</kbd> - 进入编辑模式，可重新选择</li>
                    <li><kbd className="bg-gray-200 px-6 py-2 rounded text-xs">Esc</kbd> - 关闭mention选择弹窗</li>
                  </ul>
                </div>
              </div>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={MentionTextareaProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
