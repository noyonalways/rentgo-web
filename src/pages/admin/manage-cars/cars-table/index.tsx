import BouncingLoader from "@/components/loader";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllCarsQuery } from "@/redux/features/car/carApi";
import CarCard from "./car-card";
import CarRow from "./car-row";

interface IProps {}

const CarsTable: React.FC<IProps> = () => {
  const { data, isFetching } = useGetAllCarsQuery(undefined);

  const cars = data?.data;

  return (
    <>
      {cars?.length === 0 ? (
        <p className="text-center">No data found</p>
      ) : (
        <>
          {isFetching ? (
            <div>
              <BouncingLoader />
            </div>
          ) : (
            <>
              <div className="md:hidden">
                {cars?.map((car) => (
                  <CarCard key={car._id} {...car} />
                ))}
              </div>

              <div className="hidden md:block">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Car Name</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Year</TableHead>
                      <TableHead>Price per hour</TableHead>
                      <TableHead>Color</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cars?.map((car) => (
                      <CarRow key={car._id} {...car} />
                    ))}
                  </TableBody>
                </Table>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default CarsTable;
