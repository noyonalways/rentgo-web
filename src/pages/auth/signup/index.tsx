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
import { signUpFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

interface IProps {}

const SignUp: React.FC<IProps> = () => {
  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
  });

  const onSubmit = (data: z.infer<typeof signUpFormSchema>) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);

    // Append the file if it exists
    if (data.picture) {
      formData.append("picture", data.picture);
    }

    console.log("Form data:", data); // Handle the form submission (e.g., send to an API)

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
                name="picture"
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
                name="password"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        type="password"
                        placeholder="Password"
                        {...field}
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="confirmPassword"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="px-4 py-5"
                        type="password"
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
