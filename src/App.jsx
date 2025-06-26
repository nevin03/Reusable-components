import Button from "component/shared/Button";
import Typography from "./component/shared/Typography";
import Input from "./component/shared/Input";
import Select from "./component/shared/Select";
import Checkbox from "./component/shared/Checkbox";
import Radio from "./component/shared/Radio";
import Accordion from "./component/shared/Accordion";
import Tabs from "./component/shared/Tabs";
import Tree from "./component/shared/Tree";
import Chip from "./component/shared/Chip";
import { ToastProvider } from "./component/shared/Toast/ToastProvider";
import Testing from "./component/Test/Testing";
import { useState } from "react";
import LoginForm from "./component/shared/Formik/LoginForm";
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

  const tabs = [
    {
      label: "Home",
      content: <p>This is the home tab.</p>,
    },
    {
      label: "Profile",
      content: <p>This is the profile tab.</p>,
    },
  ];
  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((res) => setTimeout(res, 2000)); // demo for api call
    setLoading(false);
  };

  return (
    <div className="p-6 space-y-6 max-w-2xl mx-auto">
      <LoginForm />
      <ToastProvider>
        <Testing />
      </ToastProvider>
      {/* Typography */}
      <Typography variant="h1">Dashboard</Typography>
      <Typography variant="p">Welcome back! Here's your overview.</Typography>

      {/* Button */}
      <Button
        onClick={handleSubmit}
        loading={loading}
        variant="solid"
        color="primary"
      >
        Submit
      </Button>

      {/* Input */}
      <div>
        <Input id="nameInApp" placeholder="please enter your name" />
      </div>

      {/* Select */}
      <Select
        label="Choose a framework"
        options={[
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
        ]}
      />

      {/* Checkbox */}
      <Checkbox label="I agree to terms" id="terms" />

      {/* Radio */}
      <div>
        <Radio name="plan" id="basic" value="basic" label="Basic Plan" />
        <Radio name="plan" id="pro" value="pro" label="Pro Plan" />
      </div>

      {/* Accordion */}
      <Accordion title="Click to expand">
        This is the hidden content inside the accordion.
      </Accordion>

      {/* Tabs */}
      <Tabs tabs={tabs} />

      {/* Tree */}
      <Tree data={treeData} />

      {/* Chips */}
      <div className="flex gap-2 flex-wrap">
        <Chip label="React" color="blue" />
        <Chip label="Tailwind" color="green" />
        <Chip label="Open Source" color="red" />
      </div>
    </div>
  );
}

export default App;
