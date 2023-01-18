import React from "react"

import { SchemaItem } from "../components/index"
import { generateFriendlyName } from "../utils/index"

import type { JSONSchema7Definition } from "json-schema"

// Creates the edges or "leaves" of a schema tree. Edges can branch into sub-nodes with createDetails().
type EdgeProps = {
  name: string
  schema: JSONSchema7Definition
  required: boolean
}

function createEdges({ name, schema, required }: EdgeProps): JSX.Element {
  const schemaName = generateFriendlyName(schema)

  if (typeof schema === "boolean") {
    return <></>
  }

  return (
    <SchemaItem
      collapsible={false}
      schemaName={schemaName}
      name={name}
      schema={schema}
      required={required}
    />
  )
}

export default createEdges
