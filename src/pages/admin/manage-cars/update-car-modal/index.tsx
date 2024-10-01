import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  carBrands,
  carCategories,
  carColors,
  carFeatures,
  carModels,
  carReleaseYears,
  carTypes,
  mileages,
  mileageUnits,
  pricesPerHour,
  seatCapacities,
  transmissions,
} from "@/constants";
import { useUpdateCarMutation } from "@/redux/features/car/carApi";
import { updateCarSchema } from "@/schemas";
import { TError } from "@/types";
import { supabase } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { uid } from "uid";
import { z } from "zod";

interface IProps {
  id: string;
  status: string;
}

const UpdateCarModal: React.FC<IProps> = ({ id, status }) => {
  const [uploadingImage, setUploadingImage] = useState(false);
  const [image, setImage] = useState("");
  const [galleryImages, setGalleryImages] = useState<{ url: string }[]>([]);
  const [updateCar] = useUpdateCarMutation();

  const handleGalleryImages = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const result = await supabase.storage
        .from("profile-images")
        .upload("cars/" + uid(12) + "-" + file.name, file);

      if (result) {
        const res = supabase.storage
          .from("profile-images")
          .getPublicUrl(result!.data!.path);

        setGalleryImages([...galleryImages, { url: res.data.publicUrl }]);
      }
    } catch (error) {
      console.error("Failed to upload image", error);
    } finally {
      setUploadingImage(false);
    }
  };

  const imageImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const result = await supabase.storage
        .from("profile-images")
        .upload("cars/" + uid(12) + "-" + file.name, file);

      if (result) {
        const res = supabase.storage
          .from("profile-images")
          .getPublicUrl(result!.data!.path);

        setImage(res.data.publicUrl);
      }
    } catch (error) {
      console.error("Failed to upload image", error);
    } finally {
      setUploadingImage(false);
    }
  };

  const form = useForm<z.infer<typeof updateCarSchema>>({
    resolver: zodResolver(updateCarSchema),
  });

  const onSubmit = async (data: z.infer<typeof updateCarSchema>) => {
    const tostId = toast.loading("Updating the car...", {
      duration: 2000,
      position: "top-right",
    });

    const newData = {
      ...data,
      image,
      galleryImages,
    };

    // Filter out empty strings, empty arrays, or undefined fields
    const filteredData = Object.fromEntries(
      Object.entries(newData).filter(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_key, value]) =>
          value !== "" &&
          value !== undefined &&
          (!Array.isArray(value) || value.length > 0)
      )
    );

    try {
      const res = await updateCar({
        carId: id,
        payload: filteredData,
      }).unwrap();
      if (res.success) {
        toast.success(res?.message, {
          id: tostId,
          position: "top-right",
          duration: 2000,
        });
      }

      // Reset states after successful submission
      setImage("");
      setGalleryImages([]);
    } catch (err) {
      const error = err as TError;
      toast.error(error.data.message || "Something went wrong", {
        id: tostId,
        position: "top-right",
        duration: 2000,
      });
    }

    // Reset the form after submission
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          disabled={status === "unavailable"}
          variant="outline"
          size="icon"
          className="duration-200 transition-all hover:bg-primary hover:text-white rounded-full"
        >
          <Edit size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-5xl h-auto max-h-[92vh] overflow-y-auto px-8 lg:px-6">
        <DialogHeader>
          <DialogTitle>Update the car</DialogTitle>
          <DialogDescription>
            Make make sure to upload the images file first.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="grid lg:grid-cols-2 gap-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <div className="space-y-4">
              <Label htmlFor="profileImage">Car Image</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={imageImage}
                className="col-span-3"
                disabled={uploadingImage}
                placeholder="Car Image"
              />

              {uploadingImage && <small>Uploading image...</small>}

              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        placeholder="Name"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="description"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        className="px-4 py-5"
                        placeholder="Write description here"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="brand"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car brand" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {carBrands.map((brand) => (
                          <SelectItem key={brand} value={brand}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="model"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car model" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {carModels.map((model) => (
                          <SelectItem key={model} value={model}>
                            {model}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="pricePerHour"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={field.value?.toString() ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select price per hour" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {pricesPerHour.map((price) => (
                          <SelectItem key={price} value={price.toString()}>
                            {price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="type"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {carTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="category"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {carCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="year"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {carReleaseYears.map((year) => (
                          <SelectItem key={year} value={year}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="profileImage">Gallery Images</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleGalleryImages}
                className="col-span-3"
                disabled={uploadingImage}
                placeholder="Car Image"
              />
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleGalleryImages}
                className="col-span-3"
                disabled={uploadingImage}
                placeholder="Car Image"
              />

              {uploadingImage && <small>Uploading image...</small>}

              <FormField
                name="color"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car color" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {carColors.map((color) => (
                          <SelectItem key={color} value={color}>
                            {color}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="seatCapacity"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={field.value?.toString() ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select seat capacity" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {seatCapacities.map((capacity) => (
                          <SelectItem
                            key={capacity}
                            value={capacity.toString()}
                          >
                            {capacity}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="mileage"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => field.onChange(Number(value))}
                      value={field.value?.toString() ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car mileage" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {mileages.map((mileage) => (
                          <SelectItem key={mileage} value={mileage.toString()}>
                            {mileage}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="mileageUnit"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car mileage unit" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {mileageUnits.map((mileageUnit) => (
                          <SelectItem key={mileageUnit} value={mileageUnit}>
                            {mileageUnit}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="transmission"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select car transmission" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {transmissions.map((transmission) => (
                          <SelectItem key={transmission} value={transmission}>
                            {transmission}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="isElectric"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) =>
                        field.onChange(value === "true")
                      }
                      value={field.value?.toString() ?? ""}
                    >
                      <FormControl>
                        <SelectTrigger className="px-4 py-5 text-muted-foreground">
                          <SelectValue placeholder="Select if electric" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="true">Yes</SelectItem>
                        <SelectItem value="false">No</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="features"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="grid grid-cols-2">
                        {carFeatures.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center text-sm space-x-2 space-y-1"
                          >
                            <Checkbox
                              className="cursor-pointer"
                              id={feature}
                              checked={field.value?.includes(feature)}
                              onCheckedChange={(checked) => {
                                const currentFeatures = Array.isArray(
                                  field.value
                                )
                                  ? field.value
                                  : [];
                                if (checked) {
                                  // If checked, add to features array
                                  field.onChange([...currentFeatures, feature]);
                                } else {
                                  // If unchecked, remove from features array
                                  field.onChange(
                                    currentFeatures.filter((f) => f !== feature)
                                  );
                                }
                              }}
                            />
                            <label className="cursor-pointer" htmlFor={feature}>
                              {feature}
                            </label>
                          </div>
                        ))}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>

          <DialogFooter>
            <Button onClick={() => form.handleSubmit(onSubmit)()} type="submit">
              Update Car
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCarModal;
