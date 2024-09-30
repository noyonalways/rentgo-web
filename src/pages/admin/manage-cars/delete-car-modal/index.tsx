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
import { useDeleteCarMutation } from "@/redux/features/car/carApi";
import { TError } from "@/types";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

interface IProps {
  id: string;
  status: string;
}

const DeleteCarModal: React.FC<IProps> = ({ id, status }) => {
  const [deleteCar] = useDeleteCarMutation();

  const handleDeleteCar = async () => {
    const tostId = toast.loading("Deleting Car...", {
      duration: 2000,
      position: "top-right",
    });

    try {
      const res = await deleteCar(id).unwrap();
      if (res.success) {
        toast.success(res?.message, {
          id: tostId,
          position: "top-right",
          duration: 2000,
        });
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error.data.message || "Something went wrong", {
        id: tostId,
        position: "top-right",
        duration: 2000,
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          title="Delete Car"
          disabled={status === "unavailable"}
          variant="outline"
          size="icon"
          className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
        >
          <Trash2 size={16} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            You want to delete this car
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteCar}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteCarModal;
