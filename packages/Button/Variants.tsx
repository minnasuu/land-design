import React from 'react';
import Button from '.';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import Icon from '../Icon';
import Flex from '../Flex';

const buttonTypes = ['text', 'fill', 'background', 'outline', 'dashed', 'transparent'];
const buttonStatuses = ['default', 'primary', 'warning', 'danger', 'success'];

export default function ButtonVariants() {
  return (
    <>
      <ComponentSectionLayout title="带箭头按钮">
        <CodeOperationContainer>
          <Flex gap={12} column justify='center'>
            {buttonTypes.map(type => (
              <Flex key={type} gap={12} justify='center'>
                {buttonStatuses.map(status => (
                  <Button.ButtonArrow key={`${type}-${status}`} text='按钮' type={type as any} status={status as any} />
                ))}
              </Flex>
            ))}
          </Flex>
        </CodeOperationContainer>
      </ComponentSectionLayout>

      <ComponentSectionLayout title="Hover切换按钮">
        <CodeOperationContainer>
          <Flex gap={12} column justify='center'>
            {buttonTypes.map(type => (
              <Flex key={type} gap={12} justify='center'>
                {buttonStatuses.map(status => (
                  <Button.ButtonChange
                    key={`${type}-${status}`}
                    text='按钮'
                    type={type as any}
                    status={status as any}
                    defaultSide={<Icon name='download' size={16} />}
                    hoverSide="下载"
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
