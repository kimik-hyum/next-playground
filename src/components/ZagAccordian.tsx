import * as accordion from "@zag-js/accordion"
import { useMachine, normalizeProps } from "@zag-js/react"

const data = [
  { title: "Watercraft", content: "Sample accordion content" },
  { title: "Automobiles", content: "Sample accordion content" },
  { title: "Aircrafts", content: "Sample accordion content" },
]

function ZagAccordion() {
  const [state, send] = useMachine(accordion.machine({ id: "1" }))
  
  const api = accordion.connect(state, send, normalizeProps)
  console.log(api.value)

  return (
    <div {...api.rootProps}>
      {data.map((item) => (
        <div {...api.getItemProps({ value: item.title })} key={item.title}>
          <h3>
            <button {...api.getItemTriggerProps({ value: item.title })}>
              {item.title}
            </button>
          </h3>
          <div {...api.getItemContentProps({ value: item.title })}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ZagAccordion