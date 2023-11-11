import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
const SkeletonComponent = () => {
  return (
    <div className="container items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group transition animate-pulse">
      <Card className="flex w-90">
        <CardHeader shadow={false} floated={false} className="h-90">
          <div className="w-full h-60 bg-gray-300 rounded sm:w-96"></div>
        </CardHeader>
        <CardBody className="flex mx-auto">
          <div className="items-center justify-center">
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-[100px] mb-2 mt-3 items-center justify-center"></div>
            <div className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 w-[80px] mb-2 mt-3"></div>
            <div className="h-20 bg-gray-200 rounded-md dark:bg-gray-700 w-[380px] mb-2 mt-3"></div>
          </div>
        </CardBody>
      </Card>
      <Card className="w-90">
        <CardHeader shadow={false} floated={false} className="h-90">
          <div className="w-full h-60 bg-gray-300 rounded sm:w-96"></div>
        </CardHeader>
        <CardBody className="flex">
          <div className="items-center justify-center">
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-[100px] mb-2 mt-3 items-center justify-center"></div>
            <div className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 w-[80px] mb-2 mt-3"></div>
            <div className="h-20 bg-gray-200 rounded-md dark:bg-gray-700 w-[380px] mb-2 mt-3"></div>
          </div>
        </CardBody>
      </Card>
      <Card className="w-90">
        <CardHeader shadow={false} floated={false} className="h-90">
          <div className="w-full h-60 bg-gray-300 rounded sm:w-96"></div>
        </CardHeader>
        <CardBody className="flex">
          <div className="items-center justify-center">
            <div className="h-4 bg-gray-200 rounded-md dark:bg-gray-700 w-[100px] mb-2 mt-3 items-center justify-center"></div>
            <div className="h-3 bg-gray-200 rounded-md dark:bg-gray-700 w-[80px] mb-2 mt-3"></div>
            <div className="h-20 bg-gray-200 rounded-md dark:bg-gray-700 w-[380px] mb-2 mt-3"></div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default SkeletonComponent;
