import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import ComponentPreview from "../BaseComponents/ComponentPreview";
import { motion } from 'motion/react';

// 引入数据
import { COMPONENTS_DATA } from "../mock";
import Menu from "../../packages/Menu";
import { useNavigate } from "react-router-dom";
import Icon from "../../packages/Icon";
import BackToTop from '../../packages/BackToTop'
import Anchor from "../../packages/Anchor";

interface ComponentExplorerProps {
  componentsData: any[];
  hash?: string;
  defaultActive?: string;
  defaultDropActive?: string;
  menuTitleDirection?: "row" | "column";
  customRender?: (curItem: any) => React.ReactNode;
}

const ComponentExplorer: React.FC<ComponentExplorerProps> = ({ componentsData = COMPONENTS_DATA, hash, defaultActive = 'componentsPreview', defaultDropActive = 'componentsPreview', menuTitleDirection = 'row', customRender }) => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string>(defaultActive);
  const [dropActive, setDropActive] = useState<string>(defaultDropActive);

  useEffect(() => {
    const href = window.location.href.split('?name=');
    if (href.length < 2 || (href?.length >= 2 && href[1] === defaultActive)) {
      setActive(defaultActive);
      setDropActive(defaultDropActive);
    } else {
      const targetHref = href[1]?.split('-');
      setDropActive(targetHref[1]);
      setActive(targetHref[0]);
    }
    const scroller = document.getElementById('components-scroller');
    if (scroller) {
      scroller.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [window.location.href, defaultActive, defaultDropActive]);

  const curItem = useMemo(() => {
    let item: any = { id: defaultActive, en: defaultActive, zh: "组件概览" };
    if (active !== 'componentsPreview') {
      const activeGroupItem = componentsData.filter(item => item.id === active)[0];
      item = activeGroupItem?.data?.filter((itm2) => itm2.id === dropActive)[0];
      return item;
    }
  }, [active, dropActive, defaultActive, componentsData, defaultDropActive]);

  const [hideMenu, setHideMenu] = useState(false);
  useEffect(() => {
    setHideMenu(!(window.innerWidth > 1024));
    const handleResize = () => {
      setHideMenu(!(window.innerWidth > 1024));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])
  return (
    <StyledComponentExplorer className="flex w-full h-full">
      <motion.div
        className="relative"
        initial={{
          width: window.innerWidth > 1024 ? "252px" : "0",
        }}
        animate={{
          width: hideMenu ? "0" : "252px",
        }}
        transition={{
          duration: 0.6,
          type: "spring",
        }}
      >
        <div
          className="absolute border border-border-primary bg-bg-primary flex items-center justify-center cursor-pointer hover:bg-bg-secondary transition-all"
          style={{
            marginLeft: "-1px",
            zIndex: 10,
            height: "48px",
            width: "20px",
            borderBottomRightRadius: "8px",
            borderTopRightRadius: "8px",
            left: "100%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
          onClick={() => setHideMenu(!hideMenu)}
        >
          <Icon
            name="arrow"
            strokeWidth={3}
            size={16}
            style={{
              transform: hideMenu ? "rotate(90deg)" : "rotate(-90deg)",
            }}
            className="text-gray-primary"
          />
        </div>
        <Menu
          scrollToView
          items={componentsData.map((item) => ({
            key: item.id,
            label: item.title,
            open: true,
            children: item.data
              ? item.data.map((itm) => ({
                key: itm.id,
                label: itm.en,
                subText: itm.zh,
              }))
              : [],
            titleDeputy: item.titleDeputy,
            disabled: item.disabled,
          }))}
          active={active}
          onChange={(item) => {
            setActive(item.key);
            const target = componentsData?.filter(
              (itm) => itm.id === item.key
            )[0];
            if (target?.data) {
              const targetKey = target?.data[0].id;
              navigate(`/${hash}?name=${item.key}-${targetKey}`);
            } else {
              navigate(`/${hash}?name=${item.key}`);
            }
          }}
          onDropChange={(item, parentItem) => {
            navigate(`/${hash}?name=${parentItem.key}-${item.key}`);
          }}
          dropProps={{
            active: dropActive,
            direction: "column",
            border: false,
          }}
          direction="column"
          titleDirection={menuTitleDirection}
          style={{ width: "252px", height: "100%" }}
          className="components-explorer-menu py-6 overflow-auto scrollbar-none"
        />
      </motion.div>

      <div
        id="components-scroller"
        className="relative flex-1 inline-flex justify-center pb-6 h-full box-border"
        style={{ overflow: "auto", width: '1%' }}
      >
        <>
          {/* 组件索引 */}
          {dropActive === "componentsPreview" && (
            // <div className="w-full flex justify-center">
            <ComponentPreview
              onClick={(dropItem, item) => {
                navigate(`/${hash}?name=${item.id}-${dropItem.id}`);
              }}
            />
            // </div>
          )}
          {active !== "componentsPreview" && curItem && (
            <>
              {customRender ? (
                customRender(curItem)
              ) : (
                <div
                  className="relative flex flex-col items-center w-full"
                  style={{ minHeight: "100%" }}
                >
                  {curItem?.anchors?.length > 0 && (
                    <div
                      className="fixed bg-bg-primary z-[101]"
                      style={{ right: 0, top: 48 }}
                    >
                      <Anchor
                        items={curItem?.anchors}
                        getContainer={() =>
                          document.getElementById(
                            "components-scroller"
                          ) as HTMLElement
                        }
                      />
                    </div>
                  )}
                  <div
                    className="w-full px-24 box-border"
                    style={{ maxWidth: "960px" }}
                  >
                    <div id={"组件预览"}>{curItem.example}</div>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      </div>
      <BackToTop
        target={document.getElementById("components-scroller") || undefined}
      />
    </StyledComponentExplorer>
  );
};

const StyledComponentExplorer = styled.div`
  .components-explorer-menu {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
  }


`;

export default ComponentExplorer; 