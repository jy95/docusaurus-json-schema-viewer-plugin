import React from "react"

import Translate from "@docusaurus/Translate"

import type { JSX } from "react"

export default function ReadOnly(): JSX.Element {
  const readOnlyLabel = (
    <Translate
      values={{
        id: "json-schema.labels.readOnly",
      }}
    >
      {"read only"}
    </Translate>
  )

  return (
    <div key={"readOnly"}>
      🚨&nbsp;
      {readOnlyLabel}
    </div>
  )
}
