import CarCard from "@/components/car-card";
import BouncingLoader from "@/components/loader";
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
import { carBrands, carCategories, seatCapacities } from "@/constants";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useLocation, useNavigate } from "react-router-dom";

interface IProps {}

const searchCarSchema = z.object({
  searchTerm: z.string({
    required_error: "Search field is required",
  }),
});

const Cars: React.FC<IProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("searchTerm");
  const carType = queryParams.get("type");
  const color = queryParams.get("color");
  const isElectric = queryParams.get("isElectric");

  const [electric, setElectric] = useState(isElectric);
  const [searchTerm, setSearchTerm] = useState(search);
  const [type, setType] = useState(carType);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<number[]>([]);
  const [resultLimit, setResultLimit] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("pricePerHour");
  const [currentPage, setCurrentPage] = useState<number>(1);

  // API call
  const { data, isFetching, refetch } = useGetAllCarsQuery({
    searchTerm: searchTerm || undefined,
    category: selectedCategories || undefined,
    brand: selectedBrands || undefined,
    seatCapacity: selectedCapacities || undefined,
    limit: resultLimit,
    sort: sortBy,
    page: currentPage,
    type: type || undefined,
    isElectric: electric || undefined,
    color: color || undefined,
  });
  const cars = data?.data;
  const { totalPages } = data?.meta ?? {};

  const form = useForm<z.infer<typeof searchCarSchema>>({
    resolver: zodResolver(searchCarSchema),
  });

  const onSubmit = (data: z.infer<typeof searchCarSchema>) => {
    if (data) {
      setSearchTerm(data.searchTerm);
    }
  };

  const limits = [2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  const sortOptions = [
    { value: "pricePerHour", label: "Price: Low to High" },
    { value: "-pricePerHour", label: "Price: High to Low" },
    { value: "seatCapacity", label: "Capacity: Low to High" },
    { value: "-seatCapacity", label: "Capacity: High to Low" },
  ];

  // Function to handle checkbox change for categories
  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleCapacityChange = (capacity: number) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity)
        ? prev.filter((cap) => cap !== capacity)
        : [...prev, capacity]
    );
  };

  // Refetch cars data whenever filters change
  useEffect(() => {
    refetch();
  }, [
    selectedCategories,
    selectedBrands,
    selectedCapacities,
    resultLimit,
    sortBy,
    refetch,
  ]);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages!) {
      setCurrentPage(newPage);
    }
  };

  const handleClearFilters = () => {
    form.reset();

    navigate(location.pathname);
    setElectric("");
    setType("");
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectedBrands([]);
    setSelectedCapacities([]);
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
                    name="searchTerm"
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
              {/* <div>
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <Slider
                  value={[minPrice, maxPrice]} // Current value of the slider
                  min={0} // Minimum value  
                  max={1000} // Maximum value
                  step={1} // Step value
                  className="cursor-pointer"
                  onValueChange={(value) => {
                    setMinPrice(value[0]); // Update minimum price
                    setMaxPrice(value[1]); // Update maximum price
                  }}
                  defaultValue={[minPrice, maxPrice]} // Default values (optional, usually you can omit this)
                />
                <div className="flex justify-between mt-2">
                  <span>Min: ${minPrice}</span>
                  <span>Max: ${maxPrice}</span>
                </div>
              </div> */}

              {/* brand */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Brand</h3>
                <div className="space-y-4">
                  {carBrands.map((brand) => (
                    <div key={brand} className="flex items-center ">
                      <Checkbox
                        id={brand}
                        checked={selectedBrands.includes(brand)}
                        onCheckedChange={() => handleBrandChange(brand)}
                      />
                      <Label
                        htmlFor={brand}
                        className="ml-2 text-sm font-medium cursor-pointer"
                      >
                        {brand}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* category */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Category</h3>
                <div className="space-y-4">
                  {carCategories.map((category) => (
                    <div key={category} className="flex items-center">
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label
                        htmlFor={category}
                        className="ml-2 text-sm font-medium cursor-pointer"
                      >
                        {category}
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
                  {seatCapacities.map((capacity) => (
                    <div key={capacity} className="flex items-center ">
                      <Checkbox
                        id={`capacity-${capacity}`}
                        checked={selectedCapacities.includes(capacity)}
                        onCheckedChange={() => handleCapacityChange(capacity)}
                      />
                      <Label
                        htmlFor={`capacity-${capacity}`}
                        className="ml-2 text-sm font-medium cursor-pointer"
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
              {/* result limit */}
              <Select onValueChange={(value) => setResultLimit(Number(value))}>
                <SelectTrigger className="border dark:hover:border-primary border-white bg-transparent hover:bg-background hover:text-primary active:scale-95 duration-200 text-white">
                  <SelectValue placeholder="Result limit" />
                </SelectTrigger>
                <SelectContent>
                  {limits.map((limit) => (
                    <SelectItem key={limit} value={limit.toString()}>
                      Show {limit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* sort by */}
              <Select onValueChange={(value) => setSortBy(value)}>
                <SelectTrigger className="border dark:hover:border-primary border-white bg-transparent hover:bg-background hover:text-primary active:scale-95 duration-200 text-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={handleClearFilters}
                className="border dark:hover:border-primary border-white bg-transparent hover:bg-background hover:text-primary active:scale-95 duration-200"
              >
                Clear Filter
              </Button>
            </div>

            {/* all cars */}
            {isFetching ? (
              <div className="flex h-80 justify-center items-center">
                <BouncingLoader />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6">
                  {cars?.map((car) => (
                    <CarCard key={car._id} {...car} />
                  ))}
                </div>

                <Pagination
                  className="justify-end mt-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <PaginationContent>
                    <PaginationItem className="cursor-pointer">
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                      />
                    </PaginationItem>

                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                      return (
                        <PaginationItem key={page} className="cursor-pointer">
                          <PaginationLink
                            isActive={currentPage === page}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}

                    {totalPages &&
                      totalPages > 5 &&
                      currentPage < totalPages - 2 && (
                        <>
                          <PaginationItem className="cursor-pointer">
                            <PaginationEllipsis />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink
                              onClick={() => handlePageChange(totalPages)}
                            >
                              {totalPages}
                            </PaginationLink>
                          </PaginationItem>
                        </>
                      )}
                    <PaginationItem className="cursor-pointer">
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cars;
