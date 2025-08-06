import { MessagePluginOptions, MessageInstance } from './props';
declare class MessagePlugin {
    private static instance;
    private container;
    private messageQueue;
    private messageId;
    private isDestroyed;
    private constructor();
    static getInstance(): MessagePlugin;
    /**
     * 检查是否在浏览器环境中
     */
    private isBrowser;
    /**
     * 安全地执行 DOM 操作
     */
    private safeDOMOperation;
    /**
     * 验证消息选项
     */
    private validateOptions;
    /**
     * 初始化消息容器
     */
    private initContainer;
    /**
     * 创建消息元素
     */
    private createMessageElement;
    /**
     * 显示消息
     */
    show(options: MessagePluginOptions): MessageInstance;
    /**
     * 创建虚拟实例（用于错误情况）
     */
    private createDummyInstance;
    /**
     * 关闭指定消息
     */
    private close;
    /**
     * 更新消息内容
     */
    private update;
    /**
     * 关闭所有消息
     */
    closeAll(): void;
    /**
     * 成功消息
     */
    success(content: string, options?: Partial<MessagePluginOptions>): MessageInstance;
    /**
     * 错误消息
     */
    error(content: string, options?: Partial<MessagePluginOptions>): MessageInstance;
    /**
     * 失败消息
     */
    fail(content: string, options?: Partial<MessagePluginOptions>): MessageInstance;
    /**
     * 警告消息
     */
    warning(content: string, options?: Partial<MessagePluginOptions>): MessageInstance;
    /**
     * 信息消息
     */
    info(content: string, options?: Partial<MessagePluginOptions>): MessageInstance;
    /**
     * 销毁插件
     */
    destroy(): void;
}
export declare const messagePlugin: MessagePlugin;
export declare const message: {
    show: (options: MessagePluginOptions) => MessageInstance;
    success: (content: string, options?: Partial<MessagePluginOptions>) => MessageInstance;
    error: (content: string, options?: Partial<MessagePluginOptions>) => MessageInstance;
    fail: (content: string, options?: Partial<MessagePluginOptions>) => MessageInstance;
    warning: (content: string, options?: Partial<MessagePluginOptions>) => MessageInstance;
    info: (content: string, options?: Partial<MessagePluginOptions>) => MessageInstance;
    closeAll: () => void;
    destroy: () => void;
};
export default messagePlugin;
/**
 * 使用示例：
 *
 * // 基础使用
 * import { message } from '@/comp/hooks/MessagePlugin';
 *
 * // 显示不同类型的消息
 * message.success('操作成功！');
 * message.error('操作失败！');
 * message.warning('警告信息');
 * message.info('提示信息');
 *
 * // 自定义配置
 * const msg = message.show({
 *   content: '自定义消息',
 *   type: 'success',
 *   duration: 5000, // 5秒后自动关闭
 *   showClose: true,
 *   onClose: () => console.log('消息已关闭')
 * });
 *
 * // 手动关闭消息
 * msg.close();
 *
 * // 更新消息内容
 * msg.update({ content: '更新后的内容' });
 *
 * // 关闭所有消息
 * message.closeAll();
 *
 * // 销毁插件（通常在组件卸载时调用）
 * message.destroy();
 */
