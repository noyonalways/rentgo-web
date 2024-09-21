import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IProps {
  name: string;
  email: string;
  role: string;
  status: "Active" | "Blocked";
}

const UserCard: React.FC<IProps> = ({ name, email, role, status }) => {
  return (
    <Card className="mb-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="font-medium">Email:</div>
          <div>{email}</div>
          <div className="font-medium">Role:</div>
          <div>{role}</div>
          <div className="font-medium">Status:</div>
          <div>
            {status === "Active" ? (
              <Badge variant="secondary">{status}</Badge>
            ) : (
              <Badge variant="destructive">{status}</Badge>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mt-4 justify-end">
          {status === "Blocked" ? (
            <Button size="sm" variant="outline">
              Unblock
            </Button>
          ) : (
            <Button size="sm" variant="outline">
              Block
            </Button>
          )}

          {role === "Admin" ? (
            <Button size="sm" variant="outline" className="ml-2">
              Remove Admin
            </Button>
          ) : (
            <Button
              disabled={status === "Blocked"}
              size="sm"
              variant="default"
              className="ml-2"
            >
              Make Admin
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
