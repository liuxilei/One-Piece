import { Tabs, WhiteSpace, WingBlank, Badge } from "antd-mobile";

const tabs = [
  { title: <Badge text='3'>First Tab</Badge> },
  { title: <Badge text="今日(20)">Second Tab</Badge> },
  { title: <Badge dot>Third Tab</Badge> }
]

const tabs2 = [
  {
    title: "First1 Tab",
    sub: "1",
    test: "你好啊"
  },
  {
    title: "Second2 Tab",
    sub: "2",
    test: "真的吗"
  },
  {
    title: "Second3 Tab",
    sub: "3",
    test: "是的"
  }
];




const TabExample = () => {
  return (
    <div>
      <Tabs
        tabs={tabs}
        initialPage={0}
        onChange={(tab, index) => { console.log("onChange", index, tab) }}
        onTabClick={(tab, index) => { console.log("onTabClick", index, tab) }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px", backgroundColor: "#fff" }}>
          Content of first tab
          </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px", backgroundColor: "#fff" }}>
          Content of second tab
          </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "150px", backgroundColor: "#fff" }}>
          Content of third tab
          </div>
      </Tabs>

      <WhiteSpace />
      <Tabs
        tabs={tabs2}
        initialPage={1}
        tabBarPosition="bottom"
        renderTab={tab => <span>{tab.test}</span>}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of first tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of second tab
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
          Content of third tab
        </div>
      </Tabs>
      <WhiteSpace />
      121
    </div>
  )

}

export default TabExample;