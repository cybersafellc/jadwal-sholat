import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "../material-components";

export default function CardMain() {
  return (
    <>
      <Card className="mt-6 w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105">
        <CardBody>
          <i class="bx bxs-bell-ring text-4xl"></i>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Penting !
          </Typography>
          <Typography>
            Tolong "Allow" permintaan pengaksesan notfication agar fitur-fitur
            terkait berjalan dengan baik
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href="#" className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
    </>
  );
}
