import * as tabs from "@zag-js/tabs"
import { useMachine, normalizeProps } from "@zag-js/react"

const data = [
  { value: "item-1", label: "Item one", content: "Item one content" },
  { value: "item-2", label: "Item two", content: "Item two content" },
  { value: "item-3", label: "Item three", content: "Item three content" },
]

export default function ZagTabs() {
  const [state, send] = useMachine(tabs.machine({ id: "1", value: "item-1" }))

  const api = tabs.connect(state, send, normalizeProps)
  console.log(normalizeProps)
  return (
    <div {...api.rootProps}>
      <div {...api.tablistProps}>
        {data.map((item) => {
          return <button
            {...api.getTriggerProps({ value: item.value })}
            key={item.value}
          >
            {item.label}
          </button>
        })}
      </div>
      {data.map((item) => (
        <div {...api.getContentProps({ value: item.value })} key={item.value}>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}