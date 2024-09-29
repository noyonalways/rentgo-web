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
import { useMakeUserAdminMutation } from "@/redux/features/admin/user/userApi";
import { TError } from "@/types";
import { toast } from "sonner";

interface IProps {
  id: string;
  role: string;
  status: string;
}

const MakeAdminModal: React.FC<IProps> = ({ id, role, status }) => {
  const [makeUserAdmin] = useMakeUserAdminMutation();

  const handleMakeAdmin = async () => {
    const tostId = toast.loading("Blocking User...", {
      duration: 2000,
      position: "top-right",
    });

    try {
      const res = await makeUserAdmin(id).unwrap();
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
          disabled={role === "admin" || status === "blocked"}
          size="sm"
          variant="default"
          className="ml-2"
        >
          Make Admin
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Make this user to Admin?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleMakeAdmin}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default MakeAdminModal;
