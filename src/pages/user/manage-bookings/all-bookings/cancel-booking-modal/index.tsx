import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { XCircle } from "lucide-react";

interface IProps {
  onCancel: () => void;
  status: string;
}

const CancelBookingModal: React.FC<IProps> = ({ onCancel, status }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          title="Cancel booking"
          disabled={status !== "pending"}
          variant="outline"
          size="icon"
          className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
        >
          <XCircle size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Your booking will be cancel
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onCancel}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelBookingModal;
