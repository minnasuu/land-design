import AnchorExample from "../packages/Anchor/Example";
import ButtonExample from "../packages/Button/Example"
import DividerExample from "../packages/Divider/Example";
import FlexExample from "../packages/Flex/Example";
import GridExample from "../packages/Grid/Example";
import IconExample from "../packages/Icon/Example";
import LinkExample from "../packages/Link/Example";
import MenuExample from "../packages/Menu/Example";
import Link from "../packages/Link";
import Button from "../packages/Button";
import AffixContainerExample from "../packages/AffixContainer/Example";
import BreadCrumbExample from "../packages/BreadCrumb/Example";
import PaginationExample from "../packages/Pagination/Example";
import StepsExample from "../packages/Steps/Example";
import Icon from "../packages/Icon";
import Divider from "../packages/Divider";
import Flex from "../packages/Flex";
import Grid from "../packages/Grid";
import { GridType } from "../packages/Grid/props";
import AffixContainer from "../packages/AffixContainer";
import Anchor from "../packages/Anchor";
import Pagination from "../packages/Pagination";
import Steps from "../packages/Steps";
import Input from "../packages/Input";
import TagInput from "../packages/TagInput";
import Select from '../packages/Select';
import SelectTree from '../packages/SelectTree';
import Radio from '../packages/Radio';
import ColorPicker from '../packages/ColorPicker';
import DatePicker from '../packages/DatePicker';
import NumberInput from '../packages/NumberInput';
import Switch from '../packages/Switch';
import Uploader from '../packages/Uploader';
import Rate from '../packages/Rate';

import Table from "../packages/Table";

import Title from '../packages/Title';
import Loading from "../packages/Loading";
import InputExample from "../packages/Input/Example";
import TagInputExample from "../packages/TagInput/Example";
import SelectExample from "../packages/Select/Example";
import SelectTreeExample from "../packages/SelectTree/Example";
import ImageExample from "../packages/Image/Example";
import RadioExample from "../packages/Radio/Example";
import Checkbox from "../packages/Checkbox";
import CheckboxExample from "../packages/Checkbox/Example";
import ColorPickerExample from "../packages/ColorPicker/Example";
import DatePickerExample from "../packages/DatePicker/Example";
import NumberInputExample from "../packages/NumberInput/Example";
import UploaderExample from "../packages/Uploader/Example";
import SwitchExample from "../packages/Switch/Example";
import AutoContainerExample from "../packages/AutoContainer/Example";
import VideoExample from "../packages/Video/Example";
import RateExample from "../packages/Rate/Example";
import BadgeExample from "../packages/Badge/Example";
import Badge from '../packages/Badge';
import CalendarExample from "../packages/Calendar/Example";
import Calendar from "../packages/Calendar";
import PopExample from "../packages/PopOver/Example";
import TitleExample from "../packages/Title/Example";
import Skeleton from "../packages/Skeleton";
import SkeletonExample from "../packages/Skeleton/Example";
import LoadingExample from "../packages/Loading/Example";
import Watermark from "../packages/Watermark";
import WatermarkExample from "../packages/Watermark/Example";
import Collapse from "../packages/Collapse";
import CollapseExample from "../packages/Collapse/Example";
import StateExample from "../packages/State/Example";
import State from "../packages/State";
import AlertExample from "../packages/Alert/Example";
import Alert from "../packages/Alert";
import AudioExample from "../packages/Audio/Example";
import Audio from "../packages/Audio";
import StatisticExample from "../packages/Statistic/Example";
import Statistic from "../packages/Statistic";
import TableExample from "../packages/Table/Example";
import TagExample from "../packages/Tag/Example";
import TimelineExample from "../packages/Timeline/Example";
import MessageExample from "../packages/Message/Example";
import DialogExample from "../packages/Dialog/Example";
import DrawerExample from "../packages/Drawer/Example";
import PopConfirmExample from "../packages/PopConfirm/Example";
import ProgressExample from "../packages/Progress/Example";
import Progress from "../packages/Progress";
import EllipsisExample from "../packages/Ellipsis/Example";
import Ellipsis from "../packages/Ellipsis";
import Image from "../packages/Image";
import Video from "../packages/Video";
import Tag from "../packages/Tag";
import Timeline from "../packages/Timeline";
import Message from "../packages/Message";
import HighlightTextareaExample from "../pro-packages/HighlightTextarea/Example";
import HighlightTextarea from "../pro-packages/HighlightTextarea";
import GridTemplateExample from "../pro-packages/GridTemplate/Example";
import GridTemplate from "../pro-packages/GridTemplate";
import Dropdown from "../packages/Dropdown";
import PopOver from "../packages/PopOver";
import DropdownExample from "../packages/Dropdown/Example";
import PopConfirm from "../packages/PopConfirm";
import HighlightInput from "../pro-packages/HighlightInput";
import HighlightInputExample from "../pro-packages/HighlightInput/Example";
import SwiperMediaPreviewExample from "../pro-packages/SwiperMediaPreview/Example";
import DoubleClickInput from "../pro-packages/DoubleClickInput";
import DoubleClickInputExample from "../pro-packages/DoubleClickInput/Example";
import PrefixValueInputExample from "../pro-packages/PrefixValueInput/Example";
import Tabs from "../packages/Tabs";
import TabsExample from "../packages/Tabs/Example";
import AutoContainer from "../packages/AutoContainer";
import ButtonVariants from "../packages/Button/Variants";
import LinkVariants from "../packages/Link/Variants";
import AutoWidthHeightTextareaExample from "../pro-packages/AutoWidthHeightTextarea/Example";
import BackToTopExample from "../packages/BackToTop/Example";
import BackToTop from "../packages/BackToTop";
import Slider from "../packages/Slider";
import MentionTextarea from "../pro-packages/MentionTextarea";
import Textarea from "../packages/Textarea";
import SortableContainer from "../pro-packages/SortableContainer";
import SliderExample from "../packages/Slider/Example";
import MentionTextareaExample from "../pro-packages/MentionTextarea/Example";
import TextareaExample from "../packages/Textarea/Example";
import SortableContainerExample from "../pro-packages/SortableContainer/Example";

export const COMMON_COMPONENTS_DATA = [
  {
    id: "icon",
    en: "Icon",
    zh: "图标",
    example: <IconExample />,
    demo: <Icon name="info-fill" size={24} color="var(--color-text-primary)" />,
  },
  {
    id: "button",
    en: "Button",
    zh: "按钮",
    desc: "按钮用于触发操作。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "button-type", title: "按钮类型" },
      { key: "button-status", title: "按钮状态" },
      { key: "button-size", title: "按钮尺寸" },
      { key: "button-icon", title: "图标按钮" },
      { key: "button-disabled", title: "禁用状态" },
      { key: "button-loading", title: "加载状态按钮" },
      { key: "button-block", title: "块级按钮" },
      { key: "button-text-style", title: "文字样式" },
      { key: "button-capsule", title: "胶囊按钮" },
      { key: "button-tip", title: "按钮提示" },
      { key: "button-animation", title: "按钮动画" },
    ],
    example: <ButtonExample />,
    demo: <Button text="按钮" variant="background" status="default"></Button>,
    variants: <ButtonVariants />,
    especial: true,
  },
  {
    id: "link",
    en: "Link",
    zh: "链接",
    desc: "链接用于跳转页面。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "link-status", title: "链接状态" },
      { key: "link-size", title: "链接尺寸" },
      { key: "link-underline", title: "链接下划线" },
      { key: "link-icon", title: "链接图标" },
      { key: "link-disabled", title: "禁用链接" },
      { key: "link-tip", title: "链接提示" },
    ],
    example: <LinkExample />,
    demo: <Link>链接</Link>,
    variants: <LinkVariants />,
  },
  {
    id: "divider",
    en: "Divider",
    zh: "分割线",
    desc: "分割线用于分割内容。",
    anchors: [
      { key: "divider-direction", title: "分割线方向" },
      { key: "divider-type", title: "分割线类型" },
      { key: "divider-gap", title: "分割线间距" },
      { key: "divider-content", title: "分割线内容" },
    ],
    example: <DividerExample />,
    demo: (
      <Flex column gap={8} style={{ width: "50%", height: "50%" }}>
        <div className="flex-1 w-full rounded-[8px] bg-bg-secondary"></div>
        <Divider spacing={8} />
        <div className="flex-1 w-full rounded-[8px] bg-bg-secondary"></div>
      </Flex>
    ),
  },
];

export const LAYOUT_COMPONENTS_DATA = [
  {
    id: "divider",
    en: "Divider",
    zh: "分割线",
    desc: "分割线用于分割内容。",
    anchors: [
      { key: "divider-direction", title: "分割线方向" },
      { key: "divider-type", title: "分割线类型" },
      { key: "divider-gap", title: "分割线间距" },
      { key: "divider-content", title: "分割线内容" },
    ],
    example: <DividerExample />,
    demo: (
      <Flex column gap={8} style={{ width: "50%", height: "50%" }}>
        <div className="flex-1 w-full rounded-[8px] bg-bg-secondary"></div>
        <Divider spacing={8} />
        <div className="flex-1 w-full rounded-[8px] bg-bg-secondary"></div>
      </Flex>
    ),
  },
  {
    id: "flex",
    en: "Flex",
    zh: "弹性布局",
    desc: "弹性布局用于 Flex 布局内容。",
    example: <FlexExample />,
    demo: (
      <Flex gap={8} style={{ width: "50%", height: "50%" }}>
        {Array.from({ length: 3 }).map((_i, index) => (
          <div
            key={index}
            className="flex-1 rounded-[8px] height-100"
            style={{ backgroundColor: "var(--color-gray-3)" }}
          ></div>
        ))}
      </Flex>
    ),
  },
  {
    id: "grid",
    en: "Grid",
    zh: "栅格",
    desc: "栅格内置常见 Grid 布局方式。",
    props: [
      {
        name: "type",
        type: "'column-fit' | 'column-fill' | 'row-fit' | 'row-fill' | 'column-repeat' | 'row-repeat' | 'default'",
        desc: "常见的几种 grid 布局",
        default: "default",
      },
      {
        name: "autoSize",
        type: "number",
        desc: "自动填充模式下的最小宽度/高度",
        default: "100",
      },
      {
        name: "repeatNum",
        type: "number",
        desc: "按行或按列重复时的重复数量",
        default: "1",
      },
      { name: "gap", type: "number", desc: "行列间隙", default: "8" },
      { name: "columnGap", type: "number", desc: "列间隙" },
      { name: "rowGap", type: "number", desc: "行间隙" },
      { name: "children", type: "element", desc: "自定义元素" },
      { name: "style", type: "CSSProperties", desc: "自定义Grid布局样式" },
      { name: "className", type: "string", desc: "自定义Grid布局类名" },
    ],
    example: <GridExample />,
    demo: (
      <Grid
        className="px-16"
        gap={8}
        type={GridType.ColumnRepeat}
        repeatNum={2}
        style={{ width: "50%", height: "50%" }}
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[8px]"
            style={{ backgroundColor: "var(--color-gray-3)" }}
          ></div>
        ))}
      </Grid>
    ),
  },
  // {
  //   id: "layout",
  //   en: "Layout",
  //   zh: "布局",
  //   desc: "布局用于网页常规布局结构。",
  //   props: [{ name: "children", type: "element", desc: "内容" }, { name: "style", type: "CSSProperties", desc: "自定义Layout样式" },
  //   { name: "className", type: "string", desc: "自定义Layout类名" },],
  //   example: <LayoutExample />,
  //   demo: (
  //     <div
  //       className="flex column radius-8 overflow-hidden"
  //       style={{ width: '50%', height: '50%', backgroundColor: 'var(--color-gray-4)' }}
  //     >
  //       <div className="width-100" style={{ height: '20px', backgroundColor: 'var(--color-gray-3)' }}></div>
  //       <div className="flex-1 height-1 width-100 flex">
  //         <div style={{ width: '20%', height: '100%', backgroundColor: 'var(--color-gray-6)' }}></div>
  //         <div className="py-8 pl-8 flex-1 height-100 border-box">
  //           <div className="width-100 height-100" style={{ backgroundColor: 'var(--color-gray-3)' }}></div>
  //         </div>
  //       </div>
  //       <div className="width-100" style={{ height: '20px', backgroundColor: 'var(--color-gray-3)' }}></div>
  //     </div>
  //   ),
  // },
];

export const NAV_COMPONENTS_DATA = [
  {
    id: "affixContainer",
    en: "affixContainer",
    zh: "图钉",
    desc: "图钉用于在容器内部指定位置展示内容",
    anchors: [
      { key: "affixContainer-position", title: "图钉位置" },
      { key: "affixContainer-custom-position", title: "自定义图钉位置" },
      { key: "affixContainer-show-mode", title: "图钉显示方式" },
      { key: "affixContainer-gap", title: "图钉间距" },
    ],
    example: <AffixContainerExample />,
    demo: (
      <AffixContainer
        className="aspect-square border border-border-primary rounded-[8px]"
        style={{ width: "60%" }}
        items={[
          {
            placement: 'topEnd',
            content: (
              <div
                className="rounded-[4px] bg-bg-secondary"
                style={{ width: "20px", height: "20px" }}
              ></div>
            ),
          },
          {
            placement: 'topStart',
            content: (
              <div
                className="rounded-[4px] bg-bg-secondary"
                style={{ width: "20px", height: "20px" }}
              ></div>
            ),
          },
          {
            placement: 'bottomEnd',
            content: (
              <div
                className="rounded-[4px] bg-bg-secondary"
                style={{ width: "20px", height: "20px" }}
              ></div>
            ),
          },
          {
            placement: 'bottomStart',
            content: (
              <div
                className="rounded-[4px] bg-bg-secondary"
                style={{ width: "20px", height: "20px" }}
              ></div>
            ),
          },
        ]}
      />
    ),
    especial: true,
  },
  {
    id: "anchor",
    en: "anchor",
    zh: "锚点",
    desc: "锚点用于跳转至页面指定位置。",
    anchors: [
      { key: "anchor-basic", title: "基础用法" },
      { key: "anchor-offset", title: "偏移设置" },
      { key: "anchor-indicator", title: "指示器" },
    ],
    example: <AnchorExample />,
    demo: (
      <Anchor
        data={[
          { key: "组件预览", title: "组件预览" },
          { key: "API", title: "API" },
          { key: "Type", title: "Type" },
        ]}
      />
    ),
  },
  {
    id: "breadCrumb",
    en: "Breadcrumb",
    zh: "面包屑",
    desc: "面包屑用于展示当前页面在系统层级结构中的位置。",
    anchors: [
      { key: "breadCrumb-normal", title: "常规面包屑" },
      { key: "breadCrumb-mask", title: "滚动蒙层" },
      { key: "breadCrumb-maxWidth", title: "设置省略项的最大宽度" },
      { key: "breadCrumb-hover", title: "hover 显示全部内容" },
      { key: "breadCrumb-tip", title: "设置选项提示内容" },
    ],
    example: <BreadCrumbExample />,
    demo: (
      <div className="flex gap-8" style={{ width: "90%", height: "20px" }}>
        <div className="flex-1 height-100 bg-bg-secondary"></div>
        <Divider direction="vertical" style={{ transform: "skew(-20deg)" }} />
        <div className="flex-1 height-100 bg-bg-secondary"></div>
        <Divider direction="vertical" style={{ transform: "skew(-20deg)" }} />
        <div
          className="flex-1 height-100"
          style={{ backgroundColor: "var(--color-primary)" }}
        ></div>
      </div>
    ),
  },
  {
    id: "menu",
    en: "Menu",
    zh: "导航菜单",
    desc: "导航菜单用于展示系统层级结构，并支持点击跳转。",
    anchors: [
      { key: "menu-normal", title: "常规导航" },
      { key: "menu-tag", title: "角标" },
      { key: "menu-disabled", title: "不可点击 & 禁用" },
      { key: "menu-drop", title: "包含下拉框" },
      { key: "menu-column", title: "纵向导航" },
      { key: "menu-theme", title: "定制主题" },
      { key: "menu-vertical-theme", title: "垂直主题" },
      { key: "menu-icon", title: "带图标导航" },
      { key: "menu-scrollToView", title: "滚动到视区" },
      { key: "menu-scrollToView-column", title: "垂直滚动到视区" },
    ],
    example: <MenuExample />,
    demo: (
      <Flex column gap={12} style={{ width: "50%", height: "80%" }}>
        <div className="flex-1 w-full rounded-[8px] bg-bg-secondary"></div>
        <div className="flex-1 w-full rounded-[8px] bg-bg-secondary"></div>
        <div className="flex-1 w-full rounded-[8px] bg-primary-lighter"></div>
        <div className="flex-1 w-full rounded-[8px] bg-bg-secondary"></div>
      </Flex>
    ),
    especial: true,
  },
  {
    id: "pagination",
    en: "Pagination",
    zh: "分页",
    desc: "分页用于展示数据列表的页码，并支持点击跳转。",
    props: [
      { name: "current", type: "number", desc: "当前页码", default: "1" },
      { name: "total", type: "number", desc: "总页数", default: "1" },
      {
        name: "pageSize",
        type: "number",
        desc: "每次加载的页数",
        default: "1",
      },
      {
        name: "showTotal",
        type: "boolean",
        desc: "是否显示总页数",
        default: "false",
      },
      {
        name: "showInput",
        type: "boolean",
        desc: "是否显示输入框",
        default: "false",
      },
      {
        name: "onChange",
        type: "(current:number) => void;",
        desc: "页码切换事件",
      },
    ],
    anchors: [
      { key: "pagination-normal", title: "常规分页" },
      { key: "pagination-short", title: "缩略分页" },
      { key: "pagination-total", title: "显示总页数" },
      { key: "pagination-input", title: "输入框" },
      { key: "pagination-large", title: "大尺寸分页" },
    ],
    example: <PaginationExample />,
    demo: <Pagination total={4} current={1} pageSize={1} />,
    // md: './md/Pagination-README.md'
  },
  {
    id: "step",
    en: "Steps",
    zh: "步骤条",
    desc: "步骤条用于展示任务的进度，并支持点击跳转。",
    anchors: [
      { key: "steps-data-finished", title: "常规步骤条（finished字段）" },
      { key: "steps-global-finished", title: "常规步骤条（全局finished数组）" },
      { key: "steps-vertical", title: "垂直布局步骤条" },
      { key: "steps-custom-style", title: "自定义样式步骤条" },
    ],
    example: <StepsExample />,
    demo: (
      <Steps
        data={[
          { key: 1, title: "步骤1", desc: "描述文字" },
          { key: 2, title: "步骤2", desc: "描述文字" },
        ]}
        current={2}
        finished={[1]}
      />
    ),
  },
  {
    id: "dropdown",
    en: "Dropdown",
    zh: "下拉菜单",
    desc: "下拉菜单用于展示下拉列表，并支持点击跳转。",
    anchors: [
      { key: "dropdown-hover", title: "hover 下拉" },
      { key: "dropdown-click", title: "click 下拉" },
      { key: "dropdown-alignment", title: "对齐方式" },
      { key: "dropdown-placement", title: "位置方向" },
      { key: "dropdown-target-body", title: "全局定位下拉" },
      { key: "dropdown-boundary-test", title: "边界测试" },
      { key: "dropdown-scroll-test", title: "滚动容器测试" },
      { key: "dropdown-custom-content", title: "自定义内容" },
      { key: "dropdown-disabled", title: "禁用状态" },
    ],
    example: <DropdownExample />,
    demo: (
      <Dropdown
        open={true}
        dropContent={
          <div
            className="rounded-[6px]"
            style={{
              width: "100px",
              height: "40px",
              backgroundColor: "var(--color-bg-secondary)",
            }}
          ></div>
        }
      >
        <div
          style={{ width: "80px", height: "32px" }}
          className="p-4 border border-border-primary rounded-[8px]"
        >
          <div
            className="rounded-[4px] w-full h-full bg-bg-secondary"
          ></div>
        </div>
      </Dropdown>
    ),
  },
  {
    id: "backToTop",
    en: "BackToTop",
    zh: "返回顶部",
    desc: "返回页面或容器顶部",
    props: [
      {
        name: "fixed",
        type: "boolean",
        desc: "是否固定在页面底部",
        default: "true",
      },
      { name: "target", type: "Element", desc: "固定元素" },
      {
        name: "visibleHeight",
        type: "number",
        desc: "可见高度",
        default: "600",
      },
      {
        name: "offsetRight",
        type: "number",
        desc: "距离右侧偏移量",
        default: "24",
      },
      {
        name: "offsetBottom",
        type: "number",
        desc: "距离底部偏移量",
        default: "24",
      },
      { name: "style", type: "CSSProperties", desc: "自定义style" },
      { name: "className", type: "string", desc: "自定义className" },
    ],
    anchors: [{ key: "back-to-top-container", title: "容器内定位" }],
    example: <BackToTopExample />,
    demo: (
      <div
        className="relative w-full h-full flex column gap-8"
        style={{ aspectRatio: 1, overflow: "auto" }}
      >
        {Array.from({ length: 8 }).map((_i, index) => (
          <div
            key={index}
            className="w-full h-full bg-bg-secondary radius-4 shrink-0"
          ></div>
        ))}
        <BackToTop visibleHeight={0} fixed={false} style={{ opacity: 1 }} />
      </div>
    ),
  },
];

export const INPUT_COMPONENTS_DATA = [
  {
    id: "input",
    en: "Input",
    zh: "输入框",
    desc: "输入框用于接收用户输入的文本信息。",
    anchors: [
      { key: "input-normal", title: "常规输入框" },
      { key: "input-style", title: "输入框样式类型" },
      { key: "input-disabled", title: "禁用" },
      { key: "input-prefix", title: "输入框结构前缀" },
      { key: "input-suffix", title: "输入框结构后缀" },
      { key: "input-prefix-content", title: "输入框内容前缀" },
      { key: "input-suffix-content", title: "输入框内容后缀" },
      { key: "input-prefix-suffix", title: "输入框内容前缀和后缀" },
      { key: "input-text-align", title: "输入框文字对齐" },
      { key: "input-show-number", title: "输入框字数统计" },
      { key: "input-clear", title: "输入框清除功能" },
      { key: "input-html-type", title: "输入框不同输入类型" },
    ],
    example: <InputExample />,
    demo: <Input value="" width="70%" />,
  },
  {
    id: "tagInput",
    en: "TagInput",
    zh: "标签输入框",
    desc: "标签输入框用于接收用户输入的标签信息。",
    anchors: [
      { key: "tag-input-normal", title: "基础用法" },
      { key: "tag-input-highlight", title: "高亮文字" },
      { key: "tag-input-max-length", title: "字数限制" },
      { key: "tag-input-disabled", title: "禁用状态" },
    ],
    example: <TagInputExample />,
    demo: (
      <TagInput tagData={["标签1"]} placeholder="请输入" showNumber={false} width="70%" />
    ),
  },
  {
    id: "select",
    en: "Select",
    zh: "选择器",
    desc: "选择器用于接收用户选择的信息。",
    types: [
      {
        name: "SelectItemType",
        data: [
          { name: "key", type: "string", desc: "唯一标识" },
          { name: "label", type: "string | Element", desc: "选项值" },
          { name: "tip", type: "Element", desc: "选项提示内容" },
          { name: "iconTip", type: "Element", desc: "选项图标类型提示" },
          {
            name: "disabled",
            type: "boolean",
            desc: "是否禁用该选项",
            default: "false",
          },
        ],
      },
    ],
    anchors: [
      { key: "select-normal", title: "基础用法" },
      { key: "select-multiple", title: "多选框" },
      { key: "select-multiple-custom-display", title: "自定义显示内容" },
      { key: "select-multiple-checkbox", title: "带checkbox的多选框" },
      { key: "select-tip", title: "包含提示内容" },
      { key: "select-item-tip", title: "选项包含提示内容" },
      { key: "select-disabled", title: "选框整体禁用" },
      { key: "select-item-disabled", title: "选项禁用" },
      { key: "select-type", title: "设置不同样式" },
    ],
    example: <SelectExample />,
    demo: (
      <Select
        style={{ transform: "translateY(-100%)" }}
        open={true}
        data={[
          { key: "1", label: "选项1" },
          { key: "2", label: "选项2" },
        ]}
        selected={"1"}
      />
    ),
  },
  {
    id: "selectTree",
    en: "SelectTree",
    zh: "层级选择器",
    desc: "层级选择器用于接收用户选择的信息。",
    anchors: [
      { key: "select-tree-normal", title: "常规单选树形选择器" },
      { key: "select-tree-multiple", title: "多选树形选择器" },
      { key: "select-tree-custom-display", title: "自定义显示内容" },
      { key: "select-tree-tip", title: "包含提示内容" },
      { key: "select-tree-item-tip", title: "选项包含提示内容" },
      { key: "select-tree-disabled", title: "树形选择器整体禁用" },
      { key: "select-tree-item-disabled", title: "选项禁用" },
      { key: "select-tree-type", title: "设置不同样式" },
    ],
    example: <SelectTreeExample />,
    demo: (
      <SelectTree
        open
        style={{ transform: "translateY(-100%)" }}
        data={[
          { key: "all", label: "全部" },
          {
            key: "shenzhen",
            label: "深圳市",
            children: [
              { key: "nanshan", label: "南山区" },
              { key: "futian", label: "福田区" },
              { key: "baoan", label: "宝安区" },
            ],
          },
        ]}
      />
    ),
  },
  {
    id: "radio",
    en: "Radio",
    zh: "单选列表",
    desc: "单选列表用于接收用户选择的信息。",
    anchors: [
      { key: "radio-normal", title: "基础用法" },
      { key: "radio-tip", title: "包含提示" },
      { key: "radio-disabled", title: "禁用状态" },
      { key: "radio-animation", title: "带动画效果" },
      { key: "radio-group", title: "组合使用" },
    ],
    example: <RadioExample />,
    demo: <Radio label="选项1" />,
  },
  {
    id: "checkbox",
    en: "Checkbox",
    zh: "多选框",
    desc: "多选框用于接收用户选择的信息。",
    anchors: [
      { key: "checkbox-normal", title: "基础用法" },
      { key: "checkbox-tip", title: "提示内容" },
      { key: "checkbox-disabled", title: "禁用状态" },
      { key: "checkbox-animation", title: "带动画效果" },
      { key: "checkbox-group", title: "组合使用" },
      { key: "checkbox-indeterminate", title: "半选状态" },
      { key: "checkbox-styles", title: "不同样式" },
    ],
    example: <CheckboxExample />,
    demo: (
      <Checkbox label="选项1" />
    ),
  },
  {
    id: "tabs",
    en: "Tabs",
    zh: "模块切换",
    desc: "模块切换用于接收用户选择的信息。",
    anchors: [
      { key: "tabs-normal", title: "基础用法" },
      { key: "tabs-tip", title: "包含提示" },
      { key: "tabs-disabled", title: "禁用状态" },
      { key: "tabs-divider", title: "使用分割线" },
      { key: "tabs-width", title: "不同宽度" },
      { key: "tabs-styles", title: "不同样式" },
    ],
    example: <TabsExample />,
    demo: (
      <Tabs
        checked="1"
        data={[
          { key: "1", label: "1" },
          { key: "2", label: "2" },
          { key: "3", label: "3" },
        ]}
        width="80%"
      />
    ),
    especial: true,
  },
  {
    id: "numberInput",
    en: "NumberInput",
    zh: "数字输入框",
    desc: "数字输入框用于接收用户输入的数字信息。",
    anchors: [
      { key: "number-input-normal", title: "基础用法" },
      { key: "number-input-type", title: "设置类型" },
      { key: "number-input-prefix", title: "设置内容前缀" },
      { key: "number-input-suffix", title: "设置内容后缀" },
      { key: "number-input-wheel-scroll", title: "鼠标滚轮增减功能" },
      { key: "number-input-disabled", title: "禁用状态" },
      { key: "number-input-range", title: "数值范围限制" },
      { key: "number-input-step", title: "不同步长" },
    ],
    example: <NumberInputExample />,
    demo: <NumberInput value={2} style={{ width: "148px" }} />,
  },
  {
    id: "switch",
    en: "Switch",
    zh: "开关",
    desc: "开关用于接收用户选择的信息。",
    anchors: [
      { key: "switch-normal", title: "基础用法" },
      { key: "switch-label", title: "包含标题" },
      { key: "switch-tip", title: "包含提示内容" },
      { key: "switch-disabled", title: "禁用状态" },
      { key: "switch-icon", title: "包含图标" },
      { key: "switch-dark", title: "暗黑模式" },
      { key: "switch-styles", title: "不同样式" },
    ],
    example: <SwitchExample />,
    demo: <Switch />,
  },
  {
    id: "slider",
    en: "Slider",
    zh: "滑动输入条",
    desc: "滑动输入条用于接收用户选择的信息。",
    props: [
      { name: "value", type: "number", desc: "当前值" },
      { name: "step", type: "number", desc: "步数", default: "1" },
      { name: "min", type: "number", desc: "最小值", default: "0" },
      { name: "max", type: "number", desc: "最大值", default: "100" },
      { name: "height", type: "number", desc: "高度", default: "12" },
      { name: "onChange", type: "(value: number) => void", desc: "滑动事件" },
      { name: "style", type: "CSSProperties", desc: "自定义样式" },
      { name: "className", type: "string", desc: "自定义类名" },
    ],
    example: <SliderExample />,
    demo: <Slider max={100} step={10} value={60} style={{ width: "148px" }} />,
  },
  {
    id: "rate",
    en: "Rate",
    zh: "评分",
    desc: "评分用于接收用户选择的信息。",
    anchors: [
      { key: "rate-normal", title: "基础用法" },
      { key: "rate-custom", title: "自定义图形和评分颜色" },
      { key: "rate-count", title: "不同评分数量" },
      { key: "rate-colors", title: "不同颜色" },
      { key: "rate-readonly", title: "只读模式" },
    ],
    example: <RateExample />,
    demo: <Rate value={4} />,
  },
  {
    id: "upload",
    en: "Upload",
    zh: "上传框",
    desc: "上传框用于接收用户选择的信息。",
    anchors: [
      { key: "uploader-normal", title: "基础用法" },
      { key: "uploader-desc", title: "设置描述信息" },
      { key: "uploader-file-type", title: "文件类型限制" },
      { key: "uploader-size", title: "不同尺寸" },
      { key: "uploader-custom", title: "自定义样式" },
    ],
    example: <UploaderExample />,
    demo: <Uploader width="70%" />,
  },
  {
    id: "colorPicker",
    en: "ColorPicker",
    zh: "颜色选择器",
    desc: "颜色选择器用于选择颜色，支持多种颜色格式（HEX、RGB、HSV、HSL）和透明度调节，提供直观的颜色选择面板和精确的数值输入。支持拖拽交互、键盘输入和实时颜色转换。",
    anchors: [
      { key: "color-picker-basic", title: "基础用法" },
      { key: "color-picker-disabled", title: "禁用状态" },
      { key: "color-picker-custom", title: "自定义样式" },
    ],
    example: <ColorPickerExample />,
    demo: <ColorPicker color="#ff6b6b" />,
  },
  {
    id: "datePicker",
    en: "DatePicker",
    zh: "日期选择器",
    desc: "日期选择器用于接收用户选择的信息。",
    anchors: [
      { key: "date-picker-normal", title: "基础用法" },
      { key: "date-picker-type", title: "不同类型选择器" },
      { key: "date-picker-confirm", title: "需要确定按钮" },
      { key: "date-picker-input", title: "支持直接输入" },
      { key: "date-picker-disabled", title: "禁用状态" },
      { key: "date-picker-clearable", title: "可清除" },
    ],
    example: <DatePickerExample />,
    demo: <DatePicker />,
  },
  {
    id: "textarea",
    en: "Textarea",
    zh: "多行文本输入框",
    desc: "Textarea组件用于展示内容",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
    ],
    example: <TextareaExample />,
    demo: <Textarea>示例内容</Textarea>,
  },,
];

export const DISPLAY_COMPONENTS_DATA = [
  {
    id: "badge",
    en: "Badge",
    zh: "徽标数",
    desc: "徽标数用于展示数据的数量。",
    anchors: [
      { key: "badge-normal", title: "基础用法" },
      { key: "badge-content", title: "自定义徽标内容" },
      { key: "badge-style", title: "自定义徽标样式" },
      { key: "badge-count", title: "不同数值" },
      { key: "badge-dot", title: "圆点样式" },
    ],
    example: <BadgeExample />,
    demo: (
      <Badge count={100} exceedCount={99}>
        <div
          className="radius-8"
          style={{
            width: 72,
            height: 72,
            backgroundColor: "var(--color-bg-secondary)",
          }}
        ></div>
      </Badge>
    ),
  },
  {
    id: "calendar",
    en: "Calendar",
    zh: "日历",
    desc: "日历用于展示日期信息。",
    anchors: [
      { key: "calendar-normal", title: "基础用法" },
      { key: "calendar-view-mode", title: "视图模式" },
      { key: "calendar-language", title: "语言设置" },
      { key: "calendar-date-range", title: "日期范围设置" },
      { key: "calendar-language-en", title: "英文版本示例" },
    ],
    example: <CalendarExample />,
    demo: (
      <div className="width-100 overflow-hidden" style={{ aspectRatio: 1 }}>
        <Calendar style={{ transform: "scale(0.75)" }} />
      </div>
    ),
  },
  {
    id: "collapse",
    en: "Collapse",
    zh: "折叠面板",
    desc: "折叠面板用于展示折叠内容，通过 details 标签实现。",
    anchors: [
      { key: "collapse-normal", title: "基础用法" },
      { key: "collapse-default-open", title: "默认展开" },
      { key: "collapse-hide-icon", title: "隐藏图标" },
    ],
    example: <CollapseExample />,
    demo: (
      <Collapse
        open
        title="折叠标题"
        content="这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容"
        style={{ width: '70%' }}
      />
    ),
  },
  {
    id: "state",
    en: "State",
    zh: "状态",
    desc: "状态用于展示数据的状态。",
    anchors: [
      { key: "state-empty", title: "基础用法" },
      { key: "state-offline", title: "离线状态" },
      { key: "state-subTitle", title: "副标题" },
      { key: "state-button", title: "带按钮" },
      { key: "state-types", title: "不同状态类型" },
      { key: "state-custom", title: "自定义内容" },
      { key: "state-links", title: "带链接" },
      { key: "state-styles", title: "不同样式" },
    ],
    example: <StateExample />,
    demo: <State type="empty" title="暂无内容" />,
  },
  {
    id: "image",
    en: "Image",
    zh: "图片",
    desc: "图片用于展示图片信息。",

    anchors: [
      { key: "image-normal", title: "基础用法" },
      { key: "image-error", title: "加载失败" },
      { key: "image-fallback", title: "兜底图" },
      { key: "image-ratio", title: "不同比例" },
    ],
    example: <ImageExample />,
    demo: (
      <Image
        style={{ width: "100%" }}
        ratio={1}
        url="https://picsum.photos/200/200?random=1"
      />
    ),
  },
  {
    id: "video",
    en: "Video",
    zh: "视频",
    desc: "视频用于展示视频信息。",
    anchors: [
      { key: "video-normal", title: "基础用法" },
      { key: "video-episode", title: "分集视频" },
      { key: "video-use-key-img", title: "实时帧预览" },
      { key: "video-responsive", title: "响应式控件" },
      { key: "video-ratio", title: "不同比例" },
    ],
    example: <VideoExample />,
    demo: (
      <Video
        src="https://picsum.videos/200/300?random=1"
        videoClassName="rounded-[8px]"
        showControls={false}
        style={{ width: '70%' }}
      />
    ),
  },
  {
    id: "audio",
    en: "Audio",
    zh: "音频",
    desc: "音频用于展示音频信息。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "wave-display", title: "波形显示" },
      { key: "wave-type", title: "波形类型" },
      { key: "wave-config", title: "波形配置" },
      { key: "wave-processing", title: "波形处理" },
      { key: "custom-style", title: "自定义样式" },
    ],
    example: <AudioExample />,
    demo: <Audio audioUrl="https://suminhan.cn/land-design/dapxiang.mp3" />,
  },
  {
    id: "popOver",
    en: "PopOver",
    zh: "气泡",
    desc: "气泡用于展示气泡信息。",
    anchors: [
      { key: "popover-trigger", title: "触发方式" },
      { key: "popover-placement", title: "出现位置" },
      { key: "popover-global", title: "全局定位" },
      { key: "popover-theme", title: "不同主题" },
      { key: "popover-controlled", title: "受控模式" },
      { key: "popover-no-arrow", title: "隐藏箭头" },
    ],
    example: <PopExample />,
    demo: (
      <PopOver content="我是气泡" show>
        <Button text="hover" />
      </PopOver>
    ),
  },
  {
    id: "statistic",
    en: "Statistic",
    zh: "数值统计",
    desc: "数值统计用于展示数值信息。",

    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "number-animation", title: "数字动画" },
      { key: "random-animation", title: "随机动画" },
      { key: "visual-animation", title: "视觉动画" },
      { key: "animation-config", title: "动画配置" },
      { key: "statistic-trend", title: "包含变化趋势" },
      { key: "statistic-trend-animation", title: "包含变化趋势的动画" },
      { key: "prefix-suffix", title: "前缀后缀" },
      { key: "statistic-custom", title: "自定义样式" },
      { key: "complex-example", title: "复杂示例" },
    ],
    example: <StatisticExample />,
    demo: <Statistic value={10} unit="亿+" />,
  },
  {
    id: "table",
    en: "Table",
    zh: "表格",
    desc: "表格用于展示数据列表。",
    types: [
      {
        name: "TableDataProps",
        data: [
          { name: "title", type: "string | React.ReactNode", desc: "标题" },
          { name: "value", type: "string", desc: "值" },
          { name: "antiDesc", type: "string", desc: "反向描述" },
        ],
      },
    ],
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "table-striped", title: "隔行背景" },
      { key: "table-cross-highlight", title: "十字高亮" },
      { key: "table-head-fixed", title: "表头固定" },
      { key: "table-fixed-columns", title: "固定列" },
      { key: "table-combined", title: "组合使用" },
      { key: "table-custom", title: "自定义样式" },
    ],
    example: <TableExample />,
    demo: (
      <Table
        className="width-100 mt-16"
        titleData={[
          { title: "", value: "time" },
          { title: "", value: "location" },
          { title: "", value: "cost" },
        ]}
        data={[
          {
            title: (
              <div
                className="radius-4"
                style={{
                  width: "48px",
                  backgroundColor: "var(--color-bg-secondary)",
                  height: 16,
                }}
              ></div>
            ),
            value: (
              <div
                className="radius-4"
                style={{
                  width: "48px",
                  backgroundColor: "var(--color-bg-secondary)",
                  height: 16,
                }}
              ></div>
            ),
            cost: (
              <div
                className="radius-4"
                style={{
                  width: "48px",
                  backgroundColor: "var(--color-bg-secondary)",
                  height: 16,
                }}
              ></div>
            ),
          },
          {
            title: (
              <div
                className="radius-4"
                style={{
                  width: "48px",
                  backgroundColor: "var(--color-bg-secondary)",
                  height: 16,
                }}
              ></div>
            ),
            value: (
              <div
                className="radius-4"
                style={{
                  width: "48px",
                  backgroundColor: "var(--color-bg-secondary)",
                  height: 16,
                }}
              ></div>
            ),
            cost: (
              <div
                className="radius-4"
                style={{
                  width: "48px",
                  backgroundColor: "var(--color-bg-secondary)",
                  height: 16,
                }}
              ></div>
            ),
          },
        ]}
      />
    ),
  },
  {
    id: "tag",
    en: "Tag",
    zh: "标签",
    desc: "标签用于展示数据标签。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "tag-icon", title: "图标标签" },
      { key: "tag-theme", title: "标签主题" },
      { key: "tag-delete", title: "可删除标签" },
      { key: "tag-custom-color", title: "自定义颜色" },
      { key: "tag-custom-border", title: "自定义边框" },
      { key: "tag-sizes", title: "不同尺寸" },
      { key: "tag-complex", title: "复杂示例" },
      { key: "tag-custom-style", title: "自定义样式" },
    ],
    example: <TagExample />,
    demo: <Tag icon={<Icon name="tag" size={20} />}>带图标标签</Tag>,
  },
  {
    id: "timeline",
    en: "Timeline",
    zh: "时间轴",
    desc: "时间轴用于展示时间轴信息。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "timeline-horizontal", title: "水平时间轴" },
      { key: "timeline-custom-node", title: "自定义时间轴节点" },
      { key: "timeline-complex", title: "复杂示例" },
      { key: "timeline-horizontal-complex", title: "水平复杂示例" },
      { key: "timeline-styles", title: "不同样式" },
      { key: "timeline-colors", title: "不同颜色" },
      { key: "timeline-responsive", title: "响应式时间轴" },
    ],
    example: <TimelineExample />,
    demo: (
      <Timeline
        data={[
          { title: "事件一", subTitle: "2024-2-1", desc: "事件一的描述内容" },
          { title: "事件二", subTitle: "2024-3-1", desc: "事件二的描述内容" },
        ]}
      />
    ),
  },
  // {
  //   id: "swiper",
  //   en: "Swiper",
  //   zh: "轮播图",
  //   desc: "Land Design内置常规图标。",
  //   props: [{ name: "name", type: "type", desc: "desc" }],
  // },
];

export const FEEDBACK_COMPONENTS_DATA = [
  {
    id: "alert",
    en: "Alert",
    zh: "警告提示",
    desc: "警告提示用于展示警告信息。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "alert-types", title: "警告类型" },
      { key: "alert-link", title: "链接" },
      { key: "alert-direction", title: "方向" },
      { key: "alert-no-bg", title: "无背景" },
      { key: "alert-complex", title: "复杂示例" },
      { key: "alert-custom", title: "自定义样式" },
    ],
    example: <AlertExample />,
    demo: <Alert type="success" title="审核通过" />,
  },
  {
    id: "message",
    en: "Message",
    zh: "全局提示",
    desc: "全局提示用于展示全局提示信息。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "message-simple", title: "简洁版" },
      { key: "message-function", title: "函数式调用" },
      { key: "message-duration", title: "持续时间" },
      { key: "message-complex", title: "复杂示例" },
      { key: "message-batch", title: "批量消息" },
      { key: "message-custom", title: "自定义样式" },
    ],
    example: <MessageExample />,
    demo: (
      <>
        <Message type="success" text="提交成功" />
      </>
    ),
  },
  {
    id: "dialog",
    en: "Dialog",
    zh: "弹窗",
    desc: "弹窗用于展示弹窗信息。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "dialog-title", title: "弹窗标题" },
      { key: "dialog-custom-header", title: "自定义弹窗头部" },
      { key: "dialog-custom-submit", title: "自定义提交按钮" },
      { key: "dialog-custom-footer", title: "自定义弹窗尾部" },
      { key: "dialog-mask", title: "弹窗遮罩" },
      { key: "dialog-complex", title: "复杂示例" },
    ],
    example: <DialogExample />,
    demo: (
      <div
        className="flex items-center justify-center"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="rounded-[8px] box-shadow bg-bg-secondary"
          style={{ width: "60%", height: "80px" }}
        >
          <div
            style={{ height: "30px" }}
            className="flex items-center justify-between px-8"
          >
            <div></div>
            <Icon
              name="close"
              size={16}
              className="color-text-primary"
              strokeWidth={3}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "drawer",
    en: "Drawer",
    zh: "抽屉",
    desc: "抽屉用于展示抽屉信息。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "drawer-title", title: "抽屉标题" },
      { key: "drawer-custom-header", title: "自定义侧拉窗头部" },
      { key: "drawer-custom-submit", title: "自定义提交按钮" },
      { key: "drawer-custom-footer", title: "自定义侧拉窗尾部" },
      { key: "drawer-position", title: "抽屉位置" },
      { key: "drawer-mask", title: "带遮罩侧拉窗" },
      { key: "drawer-complex", title: "复杂示例" },
    ],
    example: <DrawerExample />,
    demo: (
      <div
        className="flex items-center justify-end p-8 radius-16"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <div
          className="rounded-[8px] box-shadow bg-bg-secondary"
          style={{ width: "60%", height: "100%" }}
        >
          <div
            style={{ height: "30px" }}
            className="flex items-center justify-between px-8"
          >
            <Icon
              name="close"
              size={16}
              className="color-text-primary"
              strokeWidth={3}
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "popConfirm",
    en: "PopConfirm",
    zh: "气泡提示框",
    desc: "气泡提示框用于展示气泡提示信息。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "popconfirm-custom", title: "自定义内容" },
      { key: "popconfirm-icon", title: "自定义图标" },
      { key: "popconfirm-placement", title: "位置设置" },
      { key: "popconfirm-complex", title: "复杂示例" },
      { key: "popconfirm-custom-style", title: "自定义样式" },
    ],
    example: <PopConfirmExample />,
    demo: (
      <div className="relative" style={{ transform: "translateY(150%)" }}>
        <Button text="删除" />
        <PopConfirm show content="确定删除此条内容吗？" />
      </div>
    ),
  },
  {
    id: "progress",
    en: "Progress",
    zh: "进度条",
    desc: "进度条用于展示进度信息。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "progress-circle", title: "圆形进度条" },
      { key: "progress-status", title: "状态进度条" },
      { key: "progress-no-label", title: "隐藏标签进度条" },
      { key: "progress-stroke-width", title: "描边宽度" },
      { key: "progress-animation", title: "动画效果" },
    ],
    example: <ProgressExample />,
    demo: <Progress value={0.8} />,
  },
  {
    id: "skeleton",
    en: "Skeleton",
    zh: "骨架屏",
    desc: "骨架屏用于展示内容加载时骨架屏。",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "skeleton-sizes", title: "不同尺寸" },
      { key: "skeleton-shapes", title: "不同形状" },
      { key: "skeleton-custom", title: "定制骨架屏背景色" },
      { key: "skeleton-content", title: "内容骨架屏" },
    ],
    example: <SkeletonExample />,
    demo: <Skeleton height={40} radius={8} style={{ width: '70%' }} />,
  },
  {
    id: "loading",
    en: "Loading",
    zh: "加载",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "loading-sizes", title: "不同尺寸" },
      { key: "loading-colors", title: "不同颜色" },
      { key: "loading-stroke", title: "描边粗细" },
      { key: "loading-button", title: "按钮加载" },
      { key: "loading-custom", title: "自定义样式" },
    ],
    example: <LoadingExample />,
    demo: <Loading strokeSize={4} size={32} color="var(--color-primary-6)" />,
  },
  {
    id: "watermark",
    en: "Watermark",
    zh: "水印",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
      { key: "watermark-style", title: "自定义样式" },
      { key: "watermark-dynamic", title: "动态内容" },
      { key: "watermark-image", title: "图片水印" },
      { key: "watermark-gap", title: "水印间距" },
      { key: "watermark-rotate", title: "水印旋转" },
      { key: "watermark-font-size", title: "字体大小" },
      { key: "watermark-complex", title: "复杂示例" },
    ],
    example: <WatermarkExample />,
    demo: <Watermark content="Land Design" />,
  },
];

export const TEXT_COMPONENTS_DATA = [
  {
    id: "title",
    en: "Title",
    zh: "标题",
    anchors: [
      { key: "title-levels", title: "标题层级" },
    ],
    example: <TitleExample />,
    demo: (
      <Flex column gap={8} className="mx-auto" style={{ width: "fit-content" }}>
        <Title title="一级标题" />
        <Title title="二级标题" type="h2" />
        <Title title="三级标题" type="h3" />
      </Flex>
    ),
  },
  {
    id: "ellipsis",
    en: "Ellipsis",
    zh: "缩略显示",
    desc: "缩略显示用于展示缩略文字，支持hover显示全部内容。",
    anchors: [
      { key: "ellipsis-single", title: "单行文字省略" },
      { key: "ellipsis-multiple", title: "多行文字省略" },
      { key: "ellipsis-responsive", title: "响应式省略" },
    ],
    example: <EllipsisExample />,
    demo: (
      <Ellipsis
        style={{ width: "100px" }}
        text="这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字"
      ></Ellipsis>
    ),
  },
];

export const OTHER_COMPONENTS_DATA = [
  {
    id: "autoContainer",
    en: "AutoContainer",
    zh: "媒体自适应容器",
    desc: "媒体自适应容器用于展示媒体内容，支持自适应屏幕大小。",
    example: <AutoContainerExample />,
    demo: (
      <div
        className="flex items-center justify-center p-12 border-box rounded-[20px] bg-bg-secondary"
        style={{
          width: "60%",
        }}
      >
        <AutoContainer
          ratio={2 / 3}
          className="flex items-center justify-center"
        >
          <img
            width="100%"
            src="https://picsum.photos/200/300"
            className="rounded-[8px]"
            alt=""
          />
        </AutoContainer>
      </div>
    ),
  },
];

// 组件数据汇总
export const COMPONENTS_DATA = [
  {
    id: "componentsPreview",
    title: "组件概览",
  },
  {
    id: "general",
    title: "通用型",
    data: COMMON_COMPONENTS_DATA,
    titleDeputy: true,
  },
  // {
  //   id: "layout",
  //   title: "布局型",
  //   data: LAYOUT_COMPONENTS_DATA,
  //   titleDeputy: true,
  // },
  {
    id: "nav",
    title: "导航型",
    data: NAV_COMPONENTS_DATA,
    titleDeputy: true,
  },
  {
    id: "number",
    title: "数据输入型",
    data: INPUT_COMPONENTS_DATA,
    titleDeputy: true,
  },
  {
    id: "display",
    title: "数据展示型",
    data: DISPLAY_COMPONENTS_DATA,
    titleDeputy: true,
  },
  {
    id: "feedback",
    title: "反馈型",
    data: FEEDBACK_COMPONENTS_DATA,
    titleDeputy: true,
  },
  {
    id: "text",
    title: "文字型",
    data: TEXT_COMPONENTS_DATA,
    titleDeputy: true,
  },
  {
    id: "more",
    title: "其他",
    data: OTHER_COMPONENTS_DATA,
    titleDeputy: true,
  },
];

export const PRO_INPUT_COMPONENTS_DATA = [
  {
    id: "highlightInput",
    en: "HighlightInput",
    zh: "高亮单行文本输入框",
    desc: "在高亮文本的基础上还原input默认交互行为——输入时自动滚动定位末尾，失焦时滚动查看。",
    example: <HighlightInputExample />,
    demo: <HighlightInput />,
  },
  {
    id: "highlightTextarea",
    en: "HighlightTextarea",
    zh: "高亮富文本输入框",
    desc: "",
    example: <HighlightTextareaExample />,
    demo: <HighlightTextarea />,
  },
  {
    id: "doubleClickInput",
    en: "DoubleClickInput",
    zh: "双击输入",
    desc: "双击激活输入框，自动定位内容末端",
    example: <DoubleClickInputExample />,
    demo: <DoubleClickInput />,
  },
  {
    id: "prefixValueInput",
    en: "PrefixValueInput",
    zh: "前缀输入框",
    desc: "前缀输入框用于展示前缀文本，前缀内容随textarea一起滚动，支持输入高亮文字",
    example: <PrefixValueInputExample />,
  },
  {
    id: "autoWidthHeightTextarea",
    en: "AutoWidthHeightTextarea",
    zh: "宽度高度自适应输入框",
    desc: "宽度高度自适应输入框",
    example: <AutoWidthHeightTextareaExample />,
  },
  {
    id: "mentionTextarea",
    en: "MentionTextarea",
    zh: "@输入框",
    desc: "@唤起列表，一键输入提及信息",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
    ],
    example: <MentionTextareaExample />,
    demo: <MentionTextarea>示例内容</MentionTextarea>,
  },,
];

export const PRO_DISPLAY_COMPONENTS_DATA = [
  {
    id: "swiperMediaPreview",
    en: "SwiperMediaPreview",
    zh: "图片轮播预览",
    desc: "二维数组型数据，支持点击和键盘方向键切换，根据显示情况自动滚动定位",
    example: <SwiperMediaPreviewExample />,
  },
];

export const PRO_LAYOUT_COMPONENTS_DATA = [
  {
    id: "gridTemplate",
    en: "GridTemplate",
    zh: "宫格图模版",
    desc: "",
    example: <GridTemplateExample />,
    demo: <GridTemplate />,
  },
  {
    id: "sortableContainer",
    en: "SortableContainer",
    zh: "拖拽排序容器",
    desc: "SortableContainer组件用于展示内容",
    anchors: [
      { key: "basic-usage", title: "基础用法" },
    ],
    example: <SortableContainerExample />,
    demo: <SortableContainer>示例内容</SortableContainer>,
  },,
];

// 进阶组件数据汇总
export const PRO_COMPONENTS_DATA = [
  {
    id: "proInput",
    title: "输入型",
    data: PRO_INPUT_COMPONENTS_DATA,
    titleDeputy: true,
  },
  {
    id: "proDisplay",
    title: "展示型",
    data: PRO_DISPLAY_COMPONENTS_DATA,
    titleDeputy: true,
  },
  {
    id: "proLayout",
    title: "布局型",
    data: PRO_LAYOUT_COMPONENTS_DATA,
    titleDeputy: true,
  },
];


// 图标示例数据
export const ICON_EXAMPLE_DATA = [
  {
    id: 'nav',
    title: "导航类",
    data: [{ name: "home", }, { name: "home-fill", }, { name: "application", }, { name: "more", }, { name: "more-line", }],
  },
  {
    id: 'arrow',
    title: "箭头类",
    data: [{ name: "arrow-line", }, { name: "arrow-double", }, { name: "arrow", }, { name: "arrow-triangle", }, { name: "arrow-to", }, { name: "arrow-nav", }],
  },
  {
    id: 'interface',
    title: "用户界面类",
    data: [
      { name: "female", },
      { name: "male", },
      { name: "preview-open", },
      { name: "preview-close", },
      { name: "avatar", },
      { name: "tag", },
      { name: "setting", },
      { name: "setting-fill", },
      { name: "config-setting", },
      { name: "collection", },
      { name: "share", },
      { name: "translate", },
      { name: "light", },
      { name: "dark", },
      { name: "light-fill", },
      { name: "dark-fill", },
      { name: "search", },
      { name: "refresh", },
    ],
  },
  {
    id: 'media',
    title: "媒体控制类",
    data: [
      { name: "image", },
      { name: "video-pause", },
      { name: "video-play", },
      { name: "volume", },
      { name: "volume-muted", },
      { name: "video-small-screen", },
      { name: "video-full-width", },
      { name: "loop", },
    ],
  },
  {
    id: 'docs',
    title: "文件和文档类",
    data: [
      { name: "file", },
      { name: "download", },
      { name: "upload", },
      { name: "web-page", },
      { name: "announcement", },
      { name: "audio-file", },
      { name: "book", },
      { name: "clipboard", },
      { name: "document", },
      { name: "email", },
      { name: "email-open", },
      { name: "email-download", },
      { name: "email-push", },
      { name: "email-success", },
      { name: "email-fail", },
      { name: "file-add", },
      { name: "code-file", },
      { name: "star-file", },
      { name: "text-file", },
      { name: "folder", },
      { name: "code-folder", },
      { name: "folder-download", },
      { name: "folder-add", },
      { name: "folder-upload", },
      { name: "formatting-brush", },
      { name: "instruction", },
      { name: "list-view", },
      { name: "link", },
      { name: "log", },
      { name: "note-pad", },
      { name: "schedule", },
      { name: "text-scan", },
      { name: "web-page", },
      { name: "plan", },
      { name: "calendar", },
      { name: "code", },
    ],
  },
  {
    id: 'e-commerce',
    title: "电子商务类",
    data: [
      { name: "coupon", },
      { name: "ticket", },
      { name: "bank-card", },
      { name: "consume", },
      { name: "commodity", },
      { name: "dollar", },
    ],
  },
  {
    id: 'status',
    title: "反馈和状态类",
    data: [
      { name: "check-stroke", },
      { name: "check-fill", },
      { name: "check", },
      { name: "error-stroke", },
      { name: "error-fill", },
      { name: "error", },
      { name: "info-stroke", },
      { name: "info-fill", },
      { name: "info", },
      { name: "attention-stroke", },
      { name: "attention-fill", },
      { name: "attention", },
      { name: "question-stroke", },
      { name: "question-fill", },
      { name: "question", },
      { name: "hourglass-empty", },
      { name: "hourglass-full", },
      { name: "increase", },
    ],
  },
  {
    id: 'operate',
    title: " 操作类",
    data: [
      { name: "switch-gear", },
      { name: "toggle", },
      { name: "reload", },
      { name: "undo", },
      { name: "sort", },
      { name: "sort-descending", },
      { name: "sort-ascending", },
      { name: "back", },
      { name: "ahead", },
      { name: "last-step", },
      { name: "last-step-fill", },
      { name: "next-step", },
      { name: "next-step-fill", },
      { name: "drag", },
      { name: "add", },
      { name: "dec", },
      { name: "square-add", },
      { name: "dash-add", },
      { name: "clear", },
      { name: "delete", },
      { name: "copy", },
      { name: "close", },
      { name: "color-picker", },
      { name: "zoom-in-arrow", },
      { name: "zoom-out-arrow", },
      { name: "zoom-in", },
      { name: "zoom-out", },
      { name: "zoom-in-btn", },
      { name: "zoom-out-btn", },
      { name: "out", },
      { name: "adjustment", },
      { name: "alphabetical-sorting", },
      { name: "alphabetical-sorting-reverse", },
      { name: "brightness", },
      { name: "layer", },
      { name: "layer-front", },
      { name: "layer-back", },
      { name: "clear-formate", },
      { name: "edit", },
      { name: "clip-edit", },
      { name: "filter", },
      { name: "lock", },
      { name: "unlock", },
      { name: "merge-cells", },
      { name: "split-cells", },
      { name: "cursor-move", },
      { name: "cursor-move-fill", },
      { name: "line-break", },
      { name: "quote", },
      { name: "scan", },
      { name: "like", },
      { name: "like-fill", },
      { name: "star", },
      { name: "star-fill", },
      { name: "pen", },
    ],
  },
  {
    id: 'style',
    title: "样式类",
    data: [
      { name: "align-bottom", },
      { name: "align-top", },
      { name: "align-left", },
      { name: "align-right", },
      { name: "align-horizontally", },
      { name: "align-vertically", },
      { name: "text-align-left", },
      { name: "text-align-right", },
      { name: "text-align-center", },
      { name: "text-align-justify", },
      { name: "text-align-middle", },
      { name: "align-bottom-left", },
      { name: "align-bottom-center", },
      { name: "align-bottom-right", },
      { name: "align-horizontal-bottom", },
      { name: "align-horizontal-center", },
      { name: "align-horizontal-top", },
      { name: "align-left-bottom", },
      { name: "align-left-center", },
      { name: "align-left-top", },
      { name: "align-right-bottom", },
      { name: "align-right-center", },
      { name: "align-right-top", },
      { name: "align-top-left", },
      { name: "align-top-center", },
      { name: "align-top-right", },
      { name: "align-vertical-left", },
      { name: "align-vertical-center", },
      { name: "align-vertical-right", },
      { name: "flip-horizontally", },
      { name: "flip-vertically", },
      { name: "font-size", },
      { name: "line-height", },
      { name: "text-bold", },
      { name: "text-italic", },
      { name: "text-underline", },
      { name: "delete-strike", },
      { name: "line-width", },
      { name: "line-break", },
      { name: "title-h1", },
      { name: "title-h2", },
      { name: "title-h3", },
      { name: "indent-left", },
      { name: "indent-right", },
      { name: "drop-shadow-up", },
      { name: "drop-shadow-down", },
      { name: "drop-shadow-left", },
      { name: "drop-shadow-right", },
      { name: "inner-shadow-up", },
      { name: "inner-shadow-down", },
      { name: "inner-shadow-left", },
      { name: "inner-shadow-right", },
      { name: "layer", },
      { name: "check-list", },
      { name: "alphabet-list", },
      { name: "checkbox-list", },
      { name: "radio-list", },
      { name: "number-list", },
      { name: "mask", },
      { name: "tail", },
    ],
  },
  {
    id: 'device',
    title: " 设备工具类",
    data: [{ name: "camera" }],
  },
];

export const ANIMATION_NAV_DATA = [
  ...[
    {
      title: 'Attention Seekers',
      children: ['bounce', 'flash', 'pulse', 'rubberBand', 'shakeX', 'shakeY', 'headShake', 'swing', 'tada', 'wobble', 'jello', 'heartBeat'],
    },
    {
      title: 'Back Entrances',
      children: ['backInDown', 'backInLeft', 'backInRight', 'backInUp'],
    },
    {
      title: 'Back Exits',
      children: ['backOutDown', 'backOutLeft', 'backOutRight', 'backOutUp'],
    },
    {
      title: 'Bouncing Entrances',
      children: ['bounceIn', 'bounceInDown', 'bounceInLeft', 'bounceInRight', 'bounceInUp'],
    },
    {
      title: 'Bouncing Exits',
      children: ['bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp'],
    },
    {
      title: 'Fading Entrances',
      children: ['fadeIn', 'fadeInDown', 'fadeInDownBig', 'fadeInLeft', 'fadeInLeftBig', 'fadeInRight', 'fadeInRightBig', 'fadeInUp', 'fadeInUpBig', 'fadeInTopLeft', 'fadeInTopRight', 'fadeInBottomLeft', 'fadeInBottomRight',],
    },
    {
      title: 'Fading Exits',
      children: ['fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig', 'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig', 'fadeOutTopLeft', 'fadeOutTopRight', 'fadeOutBottomLeft', 'fadeOutBottomRight'],
    },
    {
      title: 'Flippers',
      children: ['flip', 'flipInX', 'flipInY', 'flipOutX', 'flipOutY']
    }
  ].map((item, index) => ({
    key: `${index + 1}`,
    title: item.title,
    open: true,
    dropData: [
      ...item.children.map((i, idx) => ({
        key: `1-${idx + 1}`,
        title: i,
      })),
    ]
  }))
]
