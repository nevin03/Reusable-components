import { useState } from "react";
import Button from "@components/Button";
import Typography from "@components/Typography";
import Input from "@components/Input";
import Select from "@components/Select";
import Checkbox from "@components/Checkbox";
import Radio from "@components/Radio";
import Accordion from "@components/Accordion";
import Tree from "@components/Tree";
import Chip from "@components/Chip";
import { Tabs } from "@components/Tabs";

function App() {
  const [loading, setLoading] = useState(false);

  const treeData = [
    {
      label: "Frontend",
      children: [{ label: "React" }, { label: "Vue" }],
    },
    {
      label: "Backend",
      children: [{ label: "Node.js" }, { label: "Django" }],
    },
  ];

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000));
    setLoading(false);
  };

  const tabItems = [
    {
      label: "Overview",
      content: (
        <div>
          <Typography variant="p">This is the overview section.</Typography>
        </div>
      ),
    },
    {
      label: "Profile",
      content: (
        <div>
          <Typography variant="p">This is the profile section.</Typography>
        </div>
      ),
    },
    {
      label: "Settings",
      content: (
        <div>
          <Typography variant="p">This is the settings section.</Typography>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="p">Welcome back! Here's your overview.</Typography>

      <Button
        onClick={handleSubmit}
        loading={loading}
        variant="solid"
        color="primary"
      >
        Submit
      </Button>

      <Input id="nameInApp" placeholder="please enter your name" />

      <Select
        label="Choose a framework"
        options={[
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
        ]}
      />

      <Checkbox label="I agree to terms" id="terms" />

      <div>
        <Radio name="plan" id="basic" value="basic" label="Basic Plan" />
        <Radio name="plan" id="pro" value="pro" label="Pro Plan" />
      </div>

      <Accordion title="Click to expand">
        This is the hidden content inside the accordion.
      </Accordion>

      <Tree data={treeData} />

      <div className="flex gap-2 flex-wrap">
        <Chip label="React" color="blue" />
        <Chip label="Tailwind" color="green" />
        <Chip label="Open Source" color="red" />
      </div>

      <Tabs tabs={tabItems} defaultIndex={0} />
    </div>
  );
}

export default App;
