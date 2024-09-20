import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

interface IProps {}

const SignIn: React.FC<IProps> = () => {
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
  });

  const onSubmit = (data: z.infer<typeof signInFormSchema>) => {
    console.log("data", data); // Handle the form submission (e.g., send to an API)

    // Reset the form after submission
    form.reset();
  };

  return (
    <section className="pt-2 pb-20 lg:pt-10">
      <div className="container">
        <div className="text-center space-y-2 mb-16">
          <h3 className="text-primary font-semibold tracking-[.15rem]">
            Sign In
          </h3>
          <h1 className="font-bold text-3xl">User Sign In</h1>
        </div>
        <div className="w-full lg:max-w-lg mx-auto">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
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

              <Button size={"lg"} type="submit" className="w-full">
                Sign In
              </Button>
              <div className="flex justify-center space-x-1">
                <span className="text-center text-sm">
                  Don&apos;t have an account?
                </span>
                <Link to="/signup" className="text-primary text-sm">
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
