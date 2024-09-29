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
import { useChangeUserStatusMutation } from "@/redux/features/admin/user/userApi";
import { TError } from "@/types";
import { toast } from "sonner";

interface IProps {
  id: string;
  role: string;
}

const BlockUserModal: React.FC<IProps> = ({ id, role }) => {
  const [changeStatus] = useChangeUserStatusMutation();

  const handleBlock = async () => {
    const tostId = toast.loading("Blocking User...", {
      duration: 2000,
      position: "top-right",
    });

    try {
      const res = await changeStatus({
        userId: id,
        payload: { status: "blocked" },
      }).unwrap();
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
        <Button disabled={role === "admin"} size="sm" variant="outline">
          Block
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>User will be blocked</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleBlock}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BlockUserModal;
