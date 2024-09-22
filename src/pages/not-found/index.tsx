import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {}

const NotFound: React.FC<IProps> = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col h-screen space-y-6 items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter lg:text-4xl">
              404 - Page Not Found
            </h1>
            <p className="mx-auto max-w-md">
              Oops! The page you're looking for seems to have taken a wrong
              turn.
            </p>
          </div>

          <div className="w-full max-w-sm space-y-4 text-center">
            <p className="text-sm">Let's get you back on the road:</p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Link to="/">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  <span>Back to Home</span>
                </Button>
              </Link>

              <Link to="/cars">
                <Button variant="outline">View Cars</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
