import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
const SkeletonComponent = ({ index }) => {
  return (
    // <div className="container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 group transition animate-pulse">
    //   {[...Array(6)].map((_, index) => (
    <Card key={index} className="w-90 my-3">
      <CardHeader shadow={false} floated={false} className="h-90">
        <div className="w-full h-60 bg-gray-300 rounded max-sm:w-96"></div>
      </CardHeader>
      <CardBody className="flex mx-auto">
        <div className="items-center justify-center">
          <div className="w-full h-4 bg-gray-200 rounded-md dark:bg-gray-700 mb-2 mt-3 items-center sm:w-72"></div>
          <div className="w-full h-3 bg-gray-200 rounded-md dark:bg-gray-700 mb-2 mt-3 sm:w-36"></div>
          <div className="w-full h-20 bg-gray-200 rounded-md dark:bg-gray-700  mb-2 mt-3 sm:w-72"></div>
        </div>
      </CardBody>
    </Card>
    //   ))}
    //   ;
    // </div>
  );
};
export default SkeletonComponent;
