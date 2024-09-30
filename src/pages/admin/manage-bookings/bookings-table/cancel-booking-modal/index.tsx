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
import { useCancelBookingMutation } from "@/redux/features/admin/booking/bookingApi";

import { TError } from "@/types";
import { XCircle } from "lucide-react";
import { toast } from "sonner";

interface IProps {
  id: string;
  status: string;
}

const CancelBookingModal: React.FC<IProps> = ({ id, status }) => {
  const [cancelTheBooking] = useCancelBookingMutation();

  const handleSubmit = async () => {
    try {
      const res = await cancelTheBooking(id).unwrap();
      if (res.success) {
        toast.success(res?.message, {
          position: "top-right",
          duration: 2000,
        });
      }
      console.log(id);
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
          type="button"
          disabled={
            status === "cancelled" ||
            status === "approved" ||
            status === "completed"
          }
          title="Cancel Booking"
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
            Your want to cancel this booking
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

export default CancelBookingModal;
