import React from 'react';
import Button from '.';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import Icon from '../Icon';
import Flex from '../Flex';

const buttonVariants = ['text', 'fill', 'background', 'outline', 'dashed', 'transparent'];
const buttonStatuses = ['default', 'primary', 'warning', 'danger', 'success'];

export default function ButtonVariants() {
  return (
    <>
      <ComponentSectionLayout title="带箭头按钮">
        <CodeOperationContainer>
          <Flex gap={12} column justify='center'>
            {buttonVariants.map(v => (
              <Flex key={v} gap={12} justify='center'>
                {buttonStatuses.map(status => (
                  <Button.ButtonArrow key={`${v}-${status}`} text='按钮' variant={v as any} status={status as any} />
                ))}
              </Flex>
            ))}
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title="Hover切换按钮">
        <CodeOperationContainer>
          <Flex gap={12} column justify='center'>
            {buttonVariants.map(v => (
              <Flex key={v} gap={12} justify='center'>
                {buttonStatuses.map(status => (
                  <Button.ButtonChange
                    key={`${v}-${status}`}
                    variant={v as any}
                    status={status as any}
                    defaultSide={<Flex gap={4} align='center'><Icon name='download' size={16} />下载</Flex>}
                    hoverSide="通用版"
                  />
                ))}
              </Flex>
            ))}
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>
    </>
  );
}
