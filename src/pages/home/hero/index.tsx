import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { searchCarFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

interface IProps {}

const Hero: React.FC<IProps> = () => {
  const form = useForm<z.infer<typeof searchCarFormSchema>>({
    resolver: zodResolver(searchCarFormSchema),
  });

  const onSubmit = (data: z.infer<typeof searchCarFormSchema>) => {
    console.log("Form Data:", data);

    // Reset the form after submission
    form.reset();
  };

  return (
    <section className="pb-20 lg:pb-36 pt-10 lg:pt-12">
      <div className="container">
        <div className="flex flex-col items-center space-y-6 mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-bold text-center w-full lg:max-w-xl mx-auto !leading-tight lg:!leading-snug">
            Find, book, and rental car in Easy Steps
          </h1>
          <Link to={"/cars"}>
            <Button size={"lg"}>Book Now</Button>
          </Link>
        </div>
      </div>
      <figure>
        <img
          src="https://i.ibb.co/p3R5f6G/banner-car-image-optimized.png"
          alt="rentgo-car-banner-image"
        />
      </figure>
      <div className="lg:absolute lg:-translate-x-1/2 lg:left-[50%] w-full lg:max-w-5xl mx-auto px-4 py-4 lg:py-14 lg:px-8 lg:-mt-20 rounded-md bg-background lg:shadow-md dark:lg:border-b">
        <Form {...form}>
          <form
            className="flex flex-col space-y-4 lg:space-y-0 lg:space-x-4 lg:flex-row justify-between "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {/* Car Name Field */}
            <FormField
              name="carName"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="px-4 py-5"
                      type="text"
                      placeholder="Car Name"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Car Type Field */}
            <FormField
              name="carType"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="px-4 py-5"
                      type="text"
                      placeholder="Car Type"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Seat Capacity Field */}
            <FormField
              name="seatCapacity"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="px-4 py-5"
                      type="text"
                      placeholder="Seat Capacity"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Is Electric Dropdown */}
            <FormField
              name="isElectric"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="text-muted-foreground">
                          <Button
                            className="w-full space-x-1 flex justify-start lg:justify-center px-4"
                            type="button"
                            variant={"outline"}
                            size={"lg"}
                          >
                            <span>Is Electric</span>
                            <ChevronDown size={20} />
                          </Button>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-full" align="start">
                        <DropdownMenuCheckboxItem
                          checked={field.value === true}
                          onSelect={() => field.onChange(true)}
                        >
                          Yes
                        </DropdownMenuCheckboxItem>
                        <DropdownMenuCheckboxItem
                          checked={field.value === false}
                          onSelect={() => field.onChange(false)}
                        >
                          No
                        </DropdownMenuCheckboxItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <FormItem>
              <Button
                size={"icon"}
                type="submit"
                className="size-10 w-full lg:w-10"
              >
                <Search size={20} />{" "}
                <span className="lg:hidden ml-2">Search</span>
              </Button>
            </FormItem>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Hero;
