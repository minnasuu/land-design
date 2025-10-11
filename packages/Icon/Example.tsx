import  { useState, useEffect } from "react";

import Title from "../Title";
import AffixContainer from "../AffixContainer";
import { ICON_EXAMPLE_DATA } from "../../example/mock";
import Icon from ".";
import Button from "../Button";
import ColorPicker from "../ColorPicker";
import NumberInput from "../NumberInput";
import Anchor from "../Anchor";
import { message } from "../Message/MessagePlugin";
import ComponentContentLayout from "../../example/components/ComponentContentLayout";
import Flex from "../Flex";
import ComponentPropsTable from "../../example/components/ComponentPropsTable";

const IconProps = [
  { name: 'name', type: 'string', desc: '图标名称', default: 'arrow', required: true },
  { name: 'size', type: 'number', desc: '图标大小', default: '16' },
  { name: 'color', type: 'string', desc: '图标颜色', default: '#000000' },
  { name: 'strokeWidth', type: 'number', desc: '图标描边粗细', default: '3' },
  { name: 'style', type: 'string', desc: '图标样式' },
  { name: 'className', type: 'string', desc: '图标类名' },
  { name: 'onClick', type: 'function', desc: '图标点击事件', default: '(e: React.MouseEvent<HTMLSvgElement>) => void' },
]

export default function IconExample() {
  const [color, setColor] = useState<string>("#000000");
  const [size, setSize] = useState<number>(20);
  const [stroke, setStroke] = useState<number>(3);

  // 监听主题变化，只在颜色为初始值时生效
  useEffect(() => {
    // 检查颜色是否为初始值（#000000 或 #FFFFFF）
    const isInitialColor =
      color === "#000000" || color === "#FFFFFF" || color === "#ffffff";

    if (!isInitialColor) {
      return; // 如果颜色已被用户改变，不再监听主题切换
    }

    const handleThemeChange = () => {
      const isDarkMode =
        document.documentElement.getAttribute("data-theme") === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches;

      // 根据主题设置对应的初始颜色
      setColor(isDarkMode ? "#FFFFFF" : "#000000");
    };

    // 监听系统主题变化
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", handleThemeChange);

    // 监听手动主题切换
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          handleThemeChange();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // 初始化时设置正确的颜色
    handleThemeChange();

    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
      observer.disconnect();
    };
  }, [color]); // 依赖color，当color改变时重新评估是否需要监听

  const handleIconCopyClick = async (name?: string) => {
    try {
      await navigator.clipboard.writeText(
        `<Icon name='${name}' size={${size}}/>`
      );
      message.success("复制成功");
    } catch (error) {
      message.error("复制失败");
    }
  };
  const anchorData = ICON_EXAMPLE_DATA?.map((i) => ({
    key: i.id,
    href: `#${i.id}`,
    title: i.title,
  }));
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh="图标"
      en="Icon"
      desc="图标组件，提供丰富的图标库，支持自定义大小、颜色、描边等属性。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <div
        className="fixed bg-bg-primary z-[101]"
        style={{ right: 0, top: 48 }}
      >
        <Anchor data={anchorData} />
      </div>
      {activeTab === 'examples' && <Flex gap={24} column className="w-full">
        <Flex gap={12} align="center">
          <NumberInput
            prefix="图标大小"
            suffix="px"
            width={172}
            min={12}
            max={96}
            value={size}
            step={2}
            onChange={(val) => setSize(val)}
          />
          <NumberInput
            prefix="描边粗细"
            suffix="px"
            width={172}
            min={1}
            max={8}
            value={stroke}
            onChange={(val) => setStroke(val)}
          />
          <ColorPicker
            color={color}
            onChange={(currentColor) => setColor(currentColor)}
          />
        </Flex>
        <Flex gap={24} column className="w-full">
          {ICON_EXAMPLE_DATA.map((item1, index1) => (
            <div id={item1.id} key={index1} className="flex flex-col gap-12 w-full">
              <Title title={item1.title} type="h3" />
              <div
                className="grid gap-24"
                style={{
                  gridTemplateColumns: "repeat(auto-fill, minmax(100px,1fr))",
                }}
              >
                {item1.data?.map((item2) => (
                  <AffixContainer
                    className="flex flex-col items-center p-12 color-gray-4 border border-transparent hover:border-gray-2 rounded-xl hover:bg-gray transition-all cursor-pointer aspect-square"
                    key={item2.name}
                    onClick={() => handleIconCopyClick?.(item2.name)}
                    rtOption={{
                      content: (
                        <Button
                          onClick={() => handleIconCopyClick?.(item2.name)}
                          icon={<Icon name="copy" />}
                          className="relative hover-pop"
                          type="text"
                        ></Button>
                      ),
                      hoverShow: true,
                      gap:4
                    }}
                    bcOption={{
                      content: (
                        <div className="text-xs pt-8 transition-all no-wrap text-gray-secondary">
                          {item2.name}
                        </div>
                      ),
                      gap: 12,
                      hoverShow: true,
                      showAnimation: "icon-text-slide-in-bottom 0.2s ease-in-out forwards",
                    }}
                  >
                    <Icon
                      name={item2.name}
                      size={size}
                      color={color}
                      strokeWidth={stroke}
                    />
                  </AffixContainer>
                ))}
              </div>
            </div>
          ))}
        </Flex>
      </Flex>}
      {
        activeTab === 'props' && (
          <div className='flex flex-col gap-12'>
            <ComponentPropsTable props={IconProps} />
          </div>
        )
      }
    </ComponentContentLayout>
  );
}
