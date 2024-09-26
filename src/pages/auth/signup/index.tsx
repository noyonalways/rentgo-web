import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useSignupMutation } from "@/redux/features/auth/authApi";
import { signUpFormSchema } from "@/schemas";
import { TError } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

interface IProps {}

const SignUp: React.FC<IProps> = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [signUp] = useSignupMutation();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      name: "Noyon Rahman",
      email: "noyonrahman2003@gmail.com",
      phone: "+8801706592962",
      password: "12345678P",
      confirmPassword: "12345678P",
      address: "Kapasia, Gazipur",
      terms: true,
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpFormSchema>) => {
    // Destructure confirmPassword and terms out of data and exclude them
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, terms, profileImage, ...filteredData } = data;
    const toastId = toast.loading("Creating User...", {
      duration: 2000,
      position: "top-right",
    });

    try {
      // Send the filtered data without confirmPassword and terms
      const response = await signUp({
        ...filteredData,
        dateOfBirth: data.dateOfBirth.toISOString().split("T")[0],
      }).unwrap();

      if (response.success) {
        navigate("/signin", { replace: true });
      }

      toast.success("User Signup successful", {
        id: toastId,
        duration: 2000,
        position: "top-right",
      });
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message, {
        id: toastId,
        position: "top-right",
      });
    }

    // Reset the form after submission
    form.reset();
  };

  return (
    <section className="pt-2 pb-20 lg:pt-10">
      <div className="container">
        <div className="text-center space-y-2 mb-16">
          <h3 className="text-primary font-semibold tracking-[.15rem]">
            Sign Up
          </h3>
          <h1 className="font-bold text-3xl">User Sign Up</h1>
        </div>
        <div className="w-full lg:max-w-lg mx-auto">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="profileImage"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      {/* Handle file uploads */}
                      <Input
                        className="block pt-2 pb-8"
                        type="file"
                        accept="image/*"
                        onChange={(e) => field.onChange(e.target.files?.[0])} // Handle file input
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                name="email"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        placeholder="Email"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="phone"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        placeholder="Phone"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        type={isPassword ? "password" : "text"}
                        placeholder="Password"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                    <button
                      className="absolute right-2 top-[1px] size-6 flex items-center justify-center text-muted-foreground"
                      onClick={() => setIsPassword(!isPassword)}
                      type="button"
                    >
                      {isPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                    </button>
                  </FormItem>
                )}
              />

              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        type={isPassword ? "password" : "text"}
                        placeholder="Confirm Password"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="dateOfBirth"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal px-4 py-5",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Date of Birth</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0" align="end">
                        <Calendar
                          mode="single"
                          selected={
                            field.value ? new Date(field.value) : undefined
                          }
                          onSelect={field.onChange}
                          initialFocus
                          // Enable year and month navigation
                          captionLayout="dropdown"
                          fromYear={1900}
                          toYear={new Date().getFullYear()} // Restrict to current year
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="address"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        placeholder="Address"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="terms"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <FormControl>
                        <Checkbox
                          onCheckedChange={(checked) => field.onChange(checked)}
                          checked={field.value ?? false}
                          id="terms"
                        />
                      </FormControl>
                      <label htmlFor="terms" className="text-xs ml-2">
                        Accept terms and conditions
                      </label>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button size={"lg"} type="submit" className="w-full">
                Sign Up
              </Button>
              <div className="flex justify-center space-x-1">
                <span className="text-center text-sm">
                  Already have an account?
                </span>
                <Link to="/signin" className="text-primary text-sm">
                  Sign In
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
