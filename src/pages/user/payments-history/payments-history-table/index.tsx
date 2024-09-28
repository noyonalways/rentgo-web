import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"; // Assuming you have these UI components
import { useLoggedInUserPaymentsQuery } from "@/redux/features/payment/paymentApi";

interface IProps {}

const PaymentsHistoryTable: React.FC<IProps> = () => {
  const { data, isLoading, isError } = useLoggedInUserPaymentsQuery(undefined);

  if (isLoading) {
    return <div>Loading payment history...</div>; // You can use a loading spinner or animation here
  }

  if (isError) {
    return <div>Error loading payment history.</div>; // Handle error appropriately
  }

  return (
    <div>
      {/* Desktop table view */}
      <div className="hidden md:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction ID</TableHead>
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
      </div>

      {/* Mobile card view */}
      <div className="md:hidden space-y-4">
        {data?.data?.map((payment) => (
          <Card className="mb-4">
            <CardHeader>
              <CardTitle>{payment.booking.car.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2 mb-4">
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
    </div>
  );
};

export default PaymentsHistoryTable;
