import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "@/redux/features/auth/authApi";
import { TError } from "@/types";
import { supabase } from "@/utils";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { uid } from "uid";

interface IProps {}

const UpdateProfileModal: React.FC<IProps> = () => {
  const { data: currentUser, isLoading: isFetching } = useGetMeQuery(
    undefined,
    {
      refetchOnFocus: true,
      refetchOnMountOrArgChange: true,
    }
  );

  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [name, setName] = useState("");
  const [nidOrPassport, setNidOrPassport] = useState("");
  const [drivingLicense, setDrivingLicense] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);

  // UseEffect to set form fields when data is available
  useEffect(() => {
    if (currentUser) {
      setName(currentUser.data?.name || "");
      setNidOrPassport(currentUser.data?.nidOrPassport || "");
      setDrivingLicense(currentUser.data?.drivingLicense || "");
      setAddress(currentUser.data?.address || "");
      setPhone(currentUser.data?.phone || "");
      setProfileImage(currentUser.data?.profileImage || "");
    }
  }, [currentUser]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const result = await supabase.storage
        .from("profile-images")
        .upload("public/" + uid(12) + "-" + file.name, file);

      if (result) {
        const res = supabase.storage
          .from("profile-images")
          .getPublicUrl(result!.data!.path);

        setProfileImage(res.data.publicUrl);
      }
    } catch (error) {
      console.error("Failed to upload image", error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async () => {
    const toastId = toast.loading("Sign in User...", {
      duration: 2000,
      position: "top-right",
    });

    try {
      const updateData: Record<string, unknown> = {};

      if (name) updateData.name = name;
      if (nidOrPassport) updateData.nidOrPassport = nidOrPassport;
      if (drivingLicense) updateData.drivingLicense = drivingLicense;
      if (address) updateData.address = address;
      if (phone) updateData.phone = phone;
      if (profileImage) updateData.profileImage = profileImage;

      const response = await updateProfile(updateData).unwrap();
      if (response.success) {
        toast.success(response?.message, {
          id: toastId,
          duration: 2000,
          position: "top-right",
        });
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, {
        id: toastId,
        position: "top-right",
      });
    }
  };

  if (isFetching) {
    return <p>Loading...</p>; // Loading indicator
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="lg:flex space-x-2 items-center w-full"
          variant="outline"
        >
          <Pencil size={16} />
          <span>Edit Profile</span>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4">
            <Label htmlFor="profileImage">Profile Image</Label>
            <Input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="col-span-3"
              disabled={uploadingImage}
            />
            {uploadingImage && <small>Uploading image...</small>}
          </div>

          <div className="flex flex-col space-y-4">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Label htmlFor="nidOrPassport">NID/Passport</Label>
            <Input
              id="nidOrPassport"
              value={nidOrPassport}
              onChange={(e) => setNidOrPassport(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Label htmlFor="drivingLicense">Driving License</Label>
            <Input
              id="drivingLicense"
              value={drivingLicense}
              onChange={(e) => setDrivingLicense(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleSubmit}
            disabled={isUpdating || uploadingImage}
          >
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProfileModal;
