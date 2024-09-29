import BouncingLoader from "@/components/loader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllPaymentsQuery } from "@/redux/features/payment/paymentApi";

interface IProps {}

const PaymentsTable: React.FC<IProps> = () => {
  const { data, isLoading, isError, error } = useGetAllPaymentsQuery(undefined);

  if (isError) {
    return <div>{(error as { message: string })?.message}</div>;
  }

  if (isLoading) {
    return (
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center">
        <BouncingLoader />
        <p>Loading payment history...</p>
      </div>
    );
  }

  // Handle the case where there are no payments
  if (data?.data?.length === 0) {
    return (
      <div className="text-center mt-4">
        <p>No payment history available.</p>
      </div>
    );
  }

  return (
    <>
      {/* Desktop table view */}
      <div className="hidden md:block">
        {data?.data?.length && (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Transaction ID</TableHead>
                <TableHead>UserName</TableHead>
                <TableHead>Car</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Paid At</TableHead>
                <TableHead>Payment Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data?.data?.map((payment) => (
                <TableRow key={payment._id}>
                  <TableCell>{payment.transactionId}</TableCell>
                  <TableCell>{payment.user.name}</TableCell>
                  <TableCell>{payment.booking.car.name}</TableCell>
                  <TableCell>
                    {payment.amount} {payment.currency}
                  </TableCell>
                  <TableCell>{payment.status}</TableCell>
                  <TableCell>
                    {new Date(payment.paidAt).toLocaleString()}
                  </TableCell>
                  <TableCell>{payment.paymentMethod}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {data?.data?.map((payment) => (
          <Card className="mb-4" key={payment._id}>
            <CardHeader>
              <CardTitle>{payment?.user?.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="text-sm font-medium">Car Name:</div>
                <div className="text-sm">{payment.booking.car.name}</div>

                <div className="text-sm font-medium">Transaction ID:</div>
                <div className="text-sm">{payment.transactionId}</div>

                <div className="text-sm font-medium">Amount:</div>
                <div className="text-sm">
                  {payment.amount} {payment.currency}
                </div>

                <div className="text-sm font-medium">Status:</div>
                <div className="text-sm">{payment.status}</div>

                <div className="text-sm font-medium">Paid At</div>
                <div className="text-sm">
                  {new Date(payment.paidAt).toLocaleString()}
                </div>

                <div className="text-sm font-medium">Payment Method:</div>
                <div className="text-sm">{payment.paymentMethod}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default PaymentsTable;
