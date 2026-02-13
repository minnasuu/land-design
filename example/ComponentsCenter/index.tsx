import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Title from '../../packages/Title'
import Button from '../../packages/Button'
import Statistic from '../../packages/Statistic'
import { COMPONENTS_DATA, PRO_COMPONENTS_DATA } from '../mock'

interface CategoryData {
  id: string
  title: string
  description: string
  count: number
  icon: React.ReactNode;
  route: string
}

const CATEGORIES_DATA: CategoryData[] = [
  {
    id: 'base',
    title: '网页基础组件',
    description: '探索更加全面的界面基础组件（React+TS+SCSS）',
    count: COMPONENTS_DATA.reduce((acc, i) => acc + (i.data?.length || 0), 0),
    icon: <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 11L24 4L31 11L24 18L17 11Z" fill="currentColor" stroke="currentColor" stroke-width="3" strokeLinecap="round" stroke-linejoin="round" /><path d="M30 25L37 18L44 25L37 32L30 25Z" fill="currentColor" stroke="currentColor" stroke-width="3" strokeLinecap="round" stroke-linejoin="round" /><path d="M17 37L24 30L31 37L24 44L17 37Z" fill="currentColor" stroke="currentColor" stroke-width="3" strokeLinecap="round" stroke-linejoin="round" /><path d="M4 24L11 17L18 24L11 31L4 24Z" fill="currentColor" stroke="currentColor" stroke-width="3" strokeLinecap="round" stroke-linejoin="round" /></svg>,
    route: '/base-component'
  },
  {
    id: 'pro',
    title: '网页进阶组件',
    description: '集成于业务场景的进阶组件（React+TS+SCSS）',
    count: PRO_COMPONENTS_DATA.reduce((acc, i) => acc + (i.data?.length || 0), 0),
    icon: <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 30H18V42H6V30Z" fill="currentColor" stroke="currentColor" stroke-width="3" strokeLinecap="round" stroke-linejoin="round" /><path d="M18 18H30V30H18V18Z" fill="currentColor" stroke="currentColor" stroke-width="3" strokeLinecap="round" stroke-linejoin="round" /><path d="M30 6H42V18H30V6Z" fill="currentColor" stroke="currentColor" stroke-width="3" strokeLinecap="round" stroke-linejoin="round" /></svg>,
    route: '/pro-component'
  },
]

export default function ComponentsCenter() {
  const navigate = useNavigate()


  const handleCategoryClick = (route: string) => {
    navigate(route)
  }
    
  return (
    <div className='flex flex-col' style={{ height: '100vh' }}>
      <div className='flex-1 flex flex-col items-center justify-center gap-12 px-24 w-fit-content'>

        {/* Categories Section */}
        <div className='flex flex-wrap gap-[24px]' style={{ maxWidth: '100%' }}>
          {CATEGORIES_DATA.map(category => (
            <StyledCategoryCard className='flex-1 flex flex-col gap-12' style={{ minWidth: '324px' }} key={category.id} onClick={() => handleCategoryClick(category.route)}>
              <div className='flex items-center gap-4'>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '20px'
                }}>
                  {category.icon}
                </div>
                <div className='flex-1 flex items-center justify-between'>
                  <Title
                    title={category.title}
                    type="h3"
                  />
                  <Statistic value={category.count} animation="increase" unit="个" />
                </div>
              </div>
              <div className='text-xs text-gray-9'>{category.description}</div>
              <Button
                text="了解更多"
                variant="background"
                status='primary'
                onClick={() => handleCategoryClick(category.route)}
              />
            </StyledCategoryCard>
          ))}
        </div>

      </div>

      <div className='flex flex-col justify-center items-center gap-2 py-8'>
        <div className='text-sm font-semibold'>Land Design</div>
        <div className='text-xs text-gray-8'>一个 Land：存放那些年实现过的组件。</div>
      </div>
    </div>
  )
}

const StyledCategoryCard = styled.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 32px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 0, 0, 0.08);
  }
`
