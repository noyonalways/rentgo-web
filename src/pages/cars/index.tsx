import CarCard from "@/components/car-card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Slider } from "@/components/ui/slider";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

interface IProps {}

const searchCarSchema = z.object({
  searchField: z
    .string({
      required_error: "Search field is required",
    })
    .optional(),
  priceRange: z.number().min(0).max(1000).optional(),
  category: z.array(z.string()).optional(),
  brand: z.array(z.string()).optional(),
  capacity: z.array(z.number()).optional(),
  resultLimit: z.string().optional(),
  sortBy: z.string().optional(),
});

const Cars: React.FC<IProps> = () => {
  const { data } = useGetAllCarsQuery(undefined);

  const cars = data?.data;

  const form = useForm<z.infer<typeof searchCarSchema>>({
    resolver: zodResolver(searchCarSchema),
  });

  const onSubmit = (data: z.infer<typeof searchCarSchema>) => {
    const params = new URLSearchParams();

    if (data.searchField) params.append("searchField", data.searchField);
    if (data.priceRange)
      params.append("priceRange", data.priceRange.toString());
    if (data.resultLimit) params.append("resultLimit", data.resultLimit);
    if (data.sortBy) params.append("sortBy", data.sortBy);

    if (data.category) {
      data.category.forEach((cat) => params.append("category", cat));
    }

    if (data.brand) {
      data.brand.forEach((br) => params.append("brand", br));
    }

    if (data.capacity) {
      data.capacity.forEach((cap) => params.append("capacity", cap.toString()));
    }

    console.log("API Query String:", params.toString()); // Use this for your API call

    // form.reset();
  };

  const limits = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const sortOptions = [
    { value: "priceAsc", label: "Price: Low to High" },
    { value: "priceDesc", label: "Price: High to Low" },
    { value: "capacityAsc", label: "Capacity: Low to High" },
    { value: "capacityDesc", label: "Capacity: High to Low" },
  ];

  const handleClearFilters = () => {
    form.reset();
  };

  return (
    <section>
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co.com/mvhyCXw/cars-banner-opt.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="h-[25vh] lg:h-[70vh] flex flex-col justify-center"
      >
        <div className="container">
          <div className="space-y-2 text-center">
            <h3 className="text-primary font-semibold tracking-[.15rem]">
              Rent Now
            </h3>
            <h1 className="font-bold text-4xl lg:text-5xl text-white">
              Select Your Car
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:-mt-[114px] pb-20 lg:space-x-6">
          {/* left side controls */}
          <div className="lg:basis-[35%] my-6 lg:my-0">
            <div className="p-8 bg-primary rounded-t-xl">
              <Form {...form}>
                <form
                  className="relative"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    name="searchField"
                    control={form.control}
                    render={({ field }) => (
                      <FormItem className="relative">
                        <FormControl>
                          <Input
                            className="px-5 py-6 bg-background"
                            placeholder="Search Car"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="absolute right-2 top-2"
                    type="submit"
                    variant="default"
                    size="icon"
                  >
                    <Search size={16} />
                  </Button>
                </form>
              </Form>
            </div>

            <div className="p-6 space-y-6 border border-t-0 rounded-b-xl">
              {/* price range */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <Controller
                  name="priceRange"
                  control={form.control}
                  defaultValue={450}
                  render={({ field }) => (
                    <Slider
                      className="cursor-pointer"
                      value={[field.value ?? 0]}
                      onValueChange={(value) => field.onChange(value[0])}
                      max={1000}
                      step={1}
                    />
                  )}
                />
              </div>

              {/* category */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Category</h3>
                <div className="space-y-4">
                  {["Luxury Cars", "Sports Cars", "Small Cars"].map(
                    (category) => (
                      <div key={category} className="flex items-center">
                        <Controller
                          name="category"
                          control={form.control}
                          render={({ field: { value, onChange } }) => (
                            <Checkbox
                              id={category}
                              checked={value?.includes(category) || false}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...(value || []), category]
                                  : value?.filter((v) => v !== category) || [];
                                onChange(newValue);
                              }}
                            />
                          )}
                        />
                        <Label
                          htmlFor={category}
                          className="ml-2 text-sm font-medium"
                        >
                          {category}
                        </Label>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* brand */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Brand</h3>
                <div className="space-y-4">
                  {["Range Rover", "Marcedez Benz", "Audi"].map((brand) => (
                    <div key={brand} className="flex items-center">
                      <Controller
                        name="brand"
                        control={form.control}
                        render={({ field: { value, onChange } }) => (
                          <Checkbox
                            id={brand}
                            checked={value?.includes(brand) || false}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...(value || []), brand]
                                : value?.filter((v) => v !== brand) || [];
                              onChange(newValue);
                            }}
                          />
                        )}
                      />
                      <Label
                        htmlFor={brand}
                        className="ml-2 text-sm font-medium"
                      >
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* passenger capacity */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Passenger Capacity
                </h3>
                <div className="space-y-4">
                  {[4, 5, 6].map((capacity) => (
                    <div key={capacity} className="flex items-center">
                      <Controller
                        name="capacity"
                        control={form.control}
                        render={({ field: { value, onChange } }) => (
                          <Checkbox
                            id={`capacity-${capacity}`}
                            checked={value?.includes(capacity) || false}
                            onCheckedChange={(checked) => {
                              const newValue = checked
                                ? [...(value || []), capacity]
                                : value?.filter((v) => v !== capacity) || [];
                              onChange(newValue);
                            }}
                          />
                        )}
                      />
                      <Label
                        htmlFor={`capacity-${capacity}`}
                        className="ml-2 text-sm font-medium"
                      >
                        {capacity}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* right side controls and cars */}
          <div className="basis-full lg:flex-1">
            <div className="p-5 lg:p-[39px] bg-primary rounded-xl lg:rounded-b-none lg:rounded-t-xl flex items-center space-x-2 lg:space-x-6">
              <Controller
                name="resultLimit"
                control={form.control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectTrigger className="border dark:hover:border-primary border-white bg-transparent hover:bg-background hover:text-primary active:scale-95 duration-200 text-white">
                      <SelectValue placeholder="Results Limit" />
                    </SelectTrigger>
                    <SelectContent>
                      {limits.map((limit) => (
                        <SelectItem key={limit} value={limit.toString()}>
                          {limit}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              <Controller
                name="sortBy"
                control={form.control}
                render={({ field }) => (
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ""}
                  >
                    <SelectTrigger className="border dark:hover:border-primary border-white bg-transparent hover:bg-background hover:text-primary active:scale-95 duration-200 text-white">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      {sortOptions.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>
                          {label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              <Button
                onClick={handleClearFilters}
                className="border dark:hover:border-primary border-white bg-transparent hover:bg-background hover:text-primary active:scale-95 duration-200"
              >
                Clear Filter
              </Button>
            </div>

            {/* all cars */}
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">
              {cars?.map((car) => (
                <CarCard key={car._id} {...car} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
