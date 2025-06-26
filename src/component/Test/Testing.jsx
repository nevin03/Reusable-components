import Button from "../shared/Button";
import { useToast } from "../shared/Toast/useToast";
import { useModal } from "../shared/Modal/useModal"; // import the custom hook

const Testing = () => {
  const toast = useToast();
  const { ModalUI, open, close } = useModal();
  return (
    <div className="p-6">
      <Button onClick={open} color="primary">
        Open Modal
      </Button>

      <ModalUI title="Demo Modal">
        <p className="mb-4 text-gray-700">
          This is a reusable modal. Would you like a toast?
        </p>
        <div className="flex justify-end gap-2">
          <Button onClick={close} variant="soft" color="secondary">
            Close
          </Button>
          <Button
            onClick={() => {
              toast.success("Toast from modal!");
              close();
            }}
            color="success"
          >
            Show Toast
          </Button>
        </div>
      </ModalUI>
    </div>
  );
};

export default Testing;
