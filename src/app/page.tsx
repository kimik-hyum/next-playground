'use client'

import MyListbox from "@/components/ListBox";
import RadixAccordion from "@/components/RadixAccordion";
import Test from "@/components/Test";
import ZagAccordion from "@/components/ZagAccordian";
import ZagTabs from "@/components/ZagTabs";
import { TextField } from "@radix-ui/themes";
import Menu from "@/components/ZagMenu";

export default function Home() {
  return (
    <main className="">
      {/* <MyListbox /> */}
      <ZagAccordion />
      <ZagTabs />
      <Test />
      <Menu />
    </main>
  )
}
