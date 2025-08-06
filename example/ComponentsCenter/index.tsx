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
    icon: <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 11L24 4L31 11L24 18L17 11Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /><path d="M30 25L37 18L44 25L37 32L30 25Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /><path d="M17 37L24 30L31 37L24 44L17 37Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /><path d="M4 24L11 17L18 24L11 31L4 24Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>,
    route: '/base-component'
  },
  {
    id: 'pro',
    title: '网页进阶组件',
    description: '集成于业务场景的进阶组件（React+TS+SCSS）',
    count: PRO_COMPONENTS_DATA.reduce((acc, i) => acc + (i.data?.length || 0), 0),
    icon: <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 30H18V42H6V30Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /><path d="M18 18H30V30H18V18Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /><path d="M30 6H42V18H30V6Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>,
    route: '/pro-component'
  },
  // {
  //   id: 'mini',
  //   title: '小程序组件',
  //   description: '适用于微信小程序的常用组件',
  //   count: MINI_COMPONENTS_DATA.reduce((acc, i) => acc + (i.data?.length || 0), 0),
  //   icon: <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /><path d="M29 24C29.9889 24 30.9556 23.7068 31.7779 23.1574C32.6001 22.6079 33.241 21.827 33.6194 20.9134C33.9978 19.9998 34.0969 18.9945 33.9039 18.0246C33.711 17.0546 33.2348 16.1637 32.5355 15.4645C31.8363 14.7652 30.9454 14.289 29.9755 14.0961C29.0055 13.9031 28.0002 14.0022 27.0866 14.3806C26.173 14.759 25.3921 15.3999 24.8427 16.2222C24.2932 17.0444 24 18.0111 24 19V29C24 29.9889 23.7068 30.9556 23.1574 31.7779C22.6079 32.6001 21.8271 33.241 20.9134 33.6194C19.9998 33.9978 18.9945 34.0969 18.0246 33.9039C17.0546 33.711 16.1637 33.2348 15.4645 32.5355C14.7652 31.8363 14.289 30.9454 14.0961 29.9755C13.9031 29.0055 14.0022 28.0002 14.3806 27.0866C14.759 26.173 15.3999 25.3921 16.2222 24.8427C17.0444 24.2932 18.0111 24 19 24" stroke="#FFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" /></svg>,
  //   route: '/mini-component'
  // },
]

export default function ComponentsCenter() {
  const navigate = useNavigate()


  const handleCategoryClick = (route: string) => {
    navigate(route)
  }

  const miniprogramCount = 3

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
                type="background"
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
