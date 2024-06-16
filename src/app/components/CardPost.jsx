import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "./material-components";

export default function CardPost({ title, description, img }) {
  return (
    <>
      <Card className="mt-6 w-full">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            UI/UX Review Check
          </Typography>
          <Typography>
            The place is close to Barceloneta Beach and bus stop just 2 min by
            walk and near to &quot;Naviglio&quot; where you can enjoy the main
            night life in Barcelona.
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 flex justify-between">
          <Button className="flex items-center gap-1">
            <i class="bx bx-share-alt"></i>
            <span>Share</span>
          </Button>
          <Button className="flex items-center gap-1">
            <i class="bx bxs-book-open"></i>
            <span>read more</span>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}