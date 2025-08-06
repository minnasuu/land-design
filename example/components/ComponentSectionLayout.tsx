import React from 'react'
import Title from '../../packages/Title';


const ComponentSectionLayout = ({
  title,
  children,
  id,
  description
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
  description?: string;
}) => (
  <div className='flex flex-col gap-12' id={id}>
    <div className='flex flex-col gap-8'>
      <Title title={title} type='h3' />
      {description && (
        <p className='text-gray-600 text-sm leading-6'>{description}</p>
      )}
    </div>
    {children}
  </div>
);

export default ComponentSectionLayout;