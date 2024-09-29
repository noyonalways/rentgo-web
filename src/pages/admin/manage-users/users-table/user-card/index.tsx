import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TUser } from "@/types";

interface IProps extends TUser {}

const UserCard: React.FC<IProps> = ({ name, email, role, status }) => {
  return (
    <Card className="mb-4 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2 text-sm">
          <div className="font-medium">Email:</div>
          <div className="col-span-3">{email}</div>
          <div className="font-medium">Role:</div>
          <div className="col-span-3">{role}</div>
          <div className="font-medium">Status:</div>
          <div className="col-span-3">
            {status === "active" ? (
              <Badge variant="secondary">{status}</Badge>
            ) : (
              <Badge variant="destructive">{status}</Badge>
            )}
          </div>
        </div>

        <div className="flex space-x-2 mt-4 justify-end">
          {status === "blocked" ? (
            <Button size="sm" variant="outline">
              Unblock
            </Button>
          ) : (
            <Button disabled={role === "admin"} size="sm" variant="outline">
              Block
            </Button>
          )}

          <Button
            disabled={role === "admin" || status === "blocked"}
            size="sm"
            variant="default"
            className="ml-2"
          >
            Make Admin
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
