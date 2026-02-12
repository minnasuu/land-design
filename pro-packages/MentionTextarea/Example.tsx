import { useState, useCallback } from 'react';
import MentionTextarea from '.';
import type { MentionItem, TriggerParams } from './props';
import { useMentionInsert, MentionDataItem } from './useMentionInsert';
import { mockProducts, mockUsers } from './mockData';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr } from './codes';

export default function MentionTextareaExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  // ---- 基础示例 ----
  const [basicValue, setBasicValue] = useState('');
  const [basicMentions, setBasicMentions] = useState<MentionItem[]>([]);
  const [basicShowList, setBasicShowList] = useState(false);
  const [basicAtPos, setBasicAtPos] = useState({ left: 0, top: 0, startIndex: -1 });
  const [basicEditIdx, setBasicEditIdx] = useState(-1);

  const { insertMention: basicInsert } = useMentionInsert({
    textValue: basicValue,
    mentions: basicMentions,
    editingMentionIndex: basicEditIdx,
    type: 'product',
  });

  const handleBasicChange = useCallback(
    (displayValue: string, _realValue: string, mentions: MentionItem[]) => {
      setBasicValue(displayValue);
      setBasicMentions(mentions);
    },
    [],
  );

  const handleBasicTrigger = useCallback(
    (params: TriggerParams) => {
      if (params.trigger === 'close') {
        setBasicShowList(false);
        setBasicEditIdx(-1);
      } else {
        setBasicShowList(true);
        setBasicAtPos({ left: params.left, top: params.top + 44, startIndex: params.startIndex });
        if (params.trigger === 'click' && params.mention) {
          setBasicEditIdx(basicMentions.findIndex((m) => m.id === params.mention!.id));
        } else {
          setBasicEditIdx(-1);
        }
      }
    },
    [basicMentions],
  );

  const handleBasicSelect = useCallback(
    (item: MentionDataItem) => {
      const result = basicInsert(item);
      if (result) {
        setBasicValue(result.newTextValue);
        setBasicMentions(result.newMentions);
      }
      setBasicShowList(false);
      setBasicEditIdx(-1);
    },
    [basicInsert],
  );

  // ---- 自定义触发符 + 自定义渲染 ----
  const [customValue, setCustomValue] = useState('');
  const [customMentions, setCustomMentions] = useState<MentionItem[]>([]);
  const [customShowList, setCustomShowList] = useState(false);
  const [customAtPos, setCustomAtPos] = useState({ left: 0, top: 0, startIndex: -1 });

  const { insertMention: insertUser } = useMentionInsert({
    textValue: customValue,
    mentions: customMentions,
    editingMentionIndex: -1,
    triggerChar: '@',
    type: 'user',
  });

  const { insertMention: insertProduct } = useMentionInsert({
    textValue: customValue,
    mentions: customMentions,
    editingMentionIndex: -1,
    triggerChar: '#',
    type: 'product',
  });

  const handleCustomChange = useCallback(
    (displayValue: string, _realValue: string, mentions: MentionItem[]) => {
      setCustomValue(displayValue);
      setCustomMentions(mentions);
    },
    [],
  );

  const handleCustomTrigger = useCallback((params: TriggerParams) => {
    if (params.trigger === 'close') {
      setCustomShowList(false);
    } else {
      setCustomShowList(true);
      setCustomAtPos({ left: params.left, top: params.top + 44, startIndex: params.startIndex });
    }
  }, []);

  // 根据触发位置的字符判断当前数据源
  const getCustomDataSource = useCallback(() => {
    const charAtTrigger = customValue[customAtPos.startIndex];
    if (charAtTrigger === '#') return mockProducts.slice(0, 5);
    return mockUsers.slice(0, 5);
  }, [customValue, customAtPos.startIndex]);

  const handleCustomSelect = useCallback(
    (item: MentionDataItem) => {
      const charAtTrigger = customValue[customAtPos.startIndex];
      const result = charAtTrigger === '#' ? insertProduct(item) : insertUser(item);
      if (result) {
        setCustomValue(result.newTextValue);
        setCustomMentions(result.newMentions);
      }
      setCustomShowList(false);
    },
    [customValue, customAtPos.startIndex, insertUser, insertProduct],
  );

  // 自定义 mention 渲染
  const customRenderMention = useCallback((mention: MentionItem, triggerChar: string) => {
    const isUser = mention.type === 'user';
    return (
      <span
        className="land-mention-textarea__mention"
        style={{
          color: isUser ? 'var(--color-success)' : 'var(--color-warning)',
        }}
      >
        {triggerChar}
        {mention.displayName}
      </span>
    );
  }, []);

  // ---- Props 表 ----
  const mentionTextareaProps = [
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'value', type: 'string', desc: '文本框的值（受控）' },
    { name: 'mentions', type: 'MentionItem[]', desc: '提及项列表（受控）' },
    { name: 'autoFocus', type: 'boolean', desc: '是否自动聚焦，默认 false' },
    { name: 'onChange', type: '(displayValue, realValue, mentions, detail?) => void', desc: '值变化回调' },
    { name: 'onFocus', type: '(e) => void', desc: '聚焦回调' },
    { name: 'onBlur', type: '(e) => void', desc: '失焦回调' },
    { name: 'onKeyDown', type: '(e) => void', desc: '键盘事件回调' },
    { name: 'onTrigger', type: '(params: TriggerParams) => void', desc: '触发符号回调（输入/点击/关闭）' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用，默认 false' },
    { name: 'readOnly', type: 'boolean', desc: '是否只读，默认 false' },
    { name: 'maxMentions', type: 'number', desc: '最多允许的 mention 数量，默认 10' },
    { name: 'trigger', type: "string | string[]", desc: "触发符号，默认 '@'，支持数组（多触发符）" },
    { name: 'mentionSpace', type: '{ left: string; right: string }', desc: 'mention 两侧填充空白字符' },
    { name: 'renderMention', type: '(mention, triggerChar) => ReactNode', desc: '自定义 mention 渲染' },
    { name: 'children', type: 'ReactNode', desc: '子元素（通常放弹窗）' },
  ];

  return (
    <ComponentContentLayout
      zh="提及文本框"
      en="Mention Textarea"
      desc="支持 @提及功能的文本输入框组件，可在文本中插入和管理提及项。支持自定义触发符号和自定义 mention 渲染。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <CodeOperationBar label="关键代码" reactTsxCodeStr={reactTsxCodeStr} />

      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="basic-usage"
            description="输入 @ 触发提及，选择后插入 mention，点击已有 mention 可替换编辑。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16 relative">
                <div style={{ maxWidth: 600 }}>
                  <MentionTextarea
                    value={basicValue}
                    mentions={basicMentions}
                    placeholder="输入 @ 选择商品..."
                    onChange={handleBasicChange}
                    onTrigger={handleBasicTrigger}
                    maxMentions={5}
                    style={{ minHeight: 80, width: '100%' }}
                  />
                </div>
                {basicShowList && (
                  <div
                    className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg min-w-80 max-h-64 overflow-y-auto"
                    style={{ left: Math.min(basicAtPos.left, 400), top: basicAtPos.top }}
                  >
                    {mockProducts.slice(0, 6).map((item) => (
                      <div
                        key={item.id}
                        className="p-12 hover:bg-blue-50 cursor-pointer text-sm transition-colors"
                        onClick={() => handleBasicSelect(item)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义触发符 + 自定义渲染 */}
          <ComponentSectionLayout
            title="自定义触发符与渲染"
            id="custom-trigger"
            description="使用 trigger={['@', '#']} 支持多触发符，renderMention 自定义 mention 样式。@ 提及用户（绿色），# 提及商品（橙色）。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16 relative">
                <div style={{ maxWidth: 600 }}>
                  <MentionTextarea
                    value={customValue}
                    mentions={customMentions}
                    trigger={['@', '#']}
                    placeholder="输入 @ 提及用户，# 提及商品..."
                    onChange={handleCustomChange}
                    onTrigger={handleCustomTrigger}
                    renderMention={customRenderMention}
                    maxMentions={10}
                    style={{ minHeight: 80, width: '100%' }}
                  />
                </div>
                {customShowList && (
                  <div
                    className="absolute z-10 bg-white border border-gray-200 rounded-lg shadow-lg min-w-64 max-h-64 overflow-y-auto"
                    style={{ left: Math.min(customAtPos.left, 400), top: customAtPos.top }}
                  >
                    {getCustomDataSource().map((item) => (
                      <div
                        key={item.id}
                        className="p-12 hover:bg-blue-50 cursor-pointer text-sm transition-colors"
                        onClick={() => handleCustomSelect(item)}
                      >
                        {item.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用 / 只读 */}
          <ComponentSectionLayout title="禁用与只读" id="disabled-readonly" description="disabled 和 readOnly 状态。">
            <CodeOperationContainer>
              <div className="flex flex-col gap-16" style={{ maxWidth: 600 }}>
                <MentionTextarea
                  value="禁用状态"
                  disabled
                  placeholder="禁用"
                  style={{ minHeight: 60, width: '100%' }}
                />
                <MentionTextarea
                  value="只读状态"
                  readOnly
                  placeholder="只读"
                  style={{ minHeight: 60, width: '100%' }}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={mentionTextareaProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
