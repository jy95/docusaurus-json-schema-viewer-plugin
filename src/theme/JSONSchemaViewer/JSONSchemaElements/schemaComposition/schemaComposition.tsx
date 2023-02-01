import React from "react"

import { AllOfSchema, AnyOfSchema, NotSchema, OneOfSchema } from "./index"

import type { JSONSchema } from "../../types"

type Props = {
  schema: JSONSchema
  [x: string]: any
}

// To handle Schema Composition (anyOf, oneOf, not, allOf)
function SchemaComposition(props: Props): JSX.Element {
  const { schema } = props

  if (typeof schema === "boolean") {
    return <></>
  }

  return (
    <>
      {schema?.oneOf !== undefined && <OneOfSchema schema={schema} />}
      {schema?.anyOf !== undefined && <AnyOfSchema schema={schema} />}
      {schema?.allOf !== undefined && <AllOfSchema schema={schema} />}
      {schema?.not !== undefined && <NotSchema schema={schema} />}
    </>
  )
}

export default SchemaComposition