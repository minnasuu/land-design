import figma from '@figma/code-connect';
import Button from '.';

figma.connect(
  Button,
  'https://www.figma.com/design/PisstaAoQkRKPaFMopVgYt/Land-Design-DS?node-id=2-3&m=dev',
  {
    props: {
      type: figma.enum("Type", {
        text: "text",
        fill: "fill",
        background: "background",
        outline: "outline",
        dashed: "dashed",
        transparent: "transparent"
      }),
        status: figma.enum("Status", {
        default: "default",
        primary: "primary",
        warning: "warning",
        danger: "danger",
        success: "success"
      }),
      disabled: figma.boolean("Disabled"),
      capsule: figma.boolean("Capsule"),
    },
    example: (props) => {
      // 提供基本的代码示例
      return (
        <Button type={props.type} status={props.status} disabled={props.disabled} text="按钮" capsule={props.capsule} />
      );
    }
  }
)