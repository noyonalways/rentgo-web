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
import { useApproveBookingMutation } from "@/redux/features/admin/booking/bookingApi";
import { TError } from "@/types";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface IProps {
  id: string;
  status: string;
}

const ApproveBookingModal: React.FC<IProps> = ({ id, status }) => {
  const [approveBooking] = useApproveBookingMutation();

  const handleSubmit = async () => {
    try {
      const res = await approveBooking(id).unwrap();
      if (res.success) {
        toast.success(res?.message, {
          position: "top-right",
          duration: 2000,
        });
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error.data.message || "Something went wrong", {
        position: "top-right",
        duration: 2000,
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          disabled={status === "approved" || status === "completed"}
          title="Approve Booking"
          variant="outline"
          size="icon"
          className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
        >
          <CheckCircle2 size={20} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Your want to approve this booking
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ApproveBookingModal;
