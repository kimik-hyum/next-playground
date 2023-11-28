import * as accordion from "@zag-js/accordion"
import { useMachine, normalizeProps } from "@zag-js/react"


export default function Test() {
   const [state, send] = useMachine(accordion.machine({ id: "1" }))
   const api = accordion.connect(state, send, normalizeProps)

  return (
    <div>
      <button onClick={() => console.log(api.value)}>Test</button>
    </div>
  )
}