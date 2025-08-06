import React, { useMemo } from 'react'
import Table from '../../packages/Table'

export default function ComponentPropsTable({ props }: { props: Array<{ name: string; type: string | React.ReactNode; desc: string | React.ReactNode, default?: string; required?: boolean }> }) {
  const titleData = useMemo(() => [
    { title: "属性", value: "name" },
    { title: "类型", value: "type" },
    { title: "描述", value: "desc" },
  ].concat(
    props.some((i) => i.default !== undefined)
      ? [{ title: "默认值", value: "default" }]
      : []
  ).concat(
    props.some((i) => i.required !== undefined)
      ? [{ title: "必填", value: "required" }]
      : []
  ), [props])

  const data = useMemo(() => props?.map((itm) =>
    Object.assign(
      itm,
      props.some((i) => i.default !== undefined)
        ? { default: itm.default || "-" }
        : {},
      props.some((i) => i.required !== undefined)
        ? { required: itm.required || "-" }
        : {}
    )
  ), [props])
  return (
    <Table
      titleData={titleData}
      data={data}
    />
  )
}
