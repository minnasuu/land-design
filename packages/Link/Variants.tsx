import React from 'react';
import Link, { LinkStatus } from '.';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';

const status = ['default', 'primary', 'success', 'danger', 'warning'];

export default function LinkVariants() {
  return (
    <div className='flex flex-col gap-24'>
      <ComponentSectionLayout title='默认动态波浪下划线' id='link-wave-style' >
        <CodeOperationContainer>
          {status.map((statusItem, index) => (
            <Link.LinkWave
              key={index}
              status={statusItem as LinkStatus}
              underline="always"
              animation
            >
              波浪线链接
            </Link.LinkWave>
          ))}
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title='Hover 动态波浪下划线' id='link-wave-style-2'>
        <CodeOperationContainer>
          {status.map((statusItem, index) => (
            <Link.LinkWave
              key={index}
              status={statusItem as LinkStatus}
              animation
            >
              波浪线链接
            </Link.LinkWave>
          ))}
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title='默认静态波浪下划线' id='link-wave-style-3'>
        <CodeOperationContainer>
          {status.map((statusItem, index) => (
            <Link.LinkWave
              key={index}
              status={statusItem as LinkStatus}
              animation={false}
              underline="always"
            >
              波浪线链接
            </Link.LinkWave>
          ))}
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title='Hover 静态波浪下划线' id='link-wave-style-4'>
        <CodeOperationContainer>
          {status.map((statusItem, index) => (
            <Link.LinkWave
              key={index}
              status={statusItem as LinkStatus}
              animation={false}
            >
              波浪线链接
            </Link.LinkWave>
          ))}
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title='Hover 静态直线转波浪下划线' id='link-wave-style-5'>
        <CodeOperationContainer>
          {status.map((statusItem, index) => (
            <Link.LinkWave
              key={index}
              status={statusItem as LinkStatus}
              animation={false}
              transform
            >
              波浪线链接
            </Link.LinkWave>
          ))}
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title='Hover 动态直线转波浪下划线' id='link-wave-style-6'>
        <CodeOperationContainer>
          {status.map((statusItem, index) => (
            <Link.LinkWave
              key={index}
              status={statusItem as LinkStatus}
              transform
              animation
            >
              波浪线链接
            </Link.LinkWave>
          ))}
        </CodeOperationContainer>
      </ComponentSectionLayout>
    </div>
  );
}
