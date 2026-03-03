import ResponsiveDialog from "@/components/responsive-dialog";
import MeetingForm from "./meeting-form";
import { MeetingGetOne } from "../../types";

interface UpdateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initailValues: MeetingGetOne;
}

export default function UpdateMeetingDialog({
  open,
  onOpenChange,
  initailValues,
}: UpdateMeetingDialogProps) {
  return (
    <ResponsiveDialog
      title="Edit Meeting"
      description="Edit the meeting details"
      open={open}
      onOpenChange={onOpenChange}
    >
      <MeetingForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
        initialValues={initailValues}
      />
    </ResponsiveDialog>
  );
}
