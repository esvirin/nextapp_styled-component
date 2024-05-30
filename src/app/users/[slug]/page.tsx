import { ToDo } from "@/components/ToDo";

const Page = async ({ params }: { params: { slug: number } }) => {
  const todo = await fetch(
    "https://jsonplaceholder.typicode.com/todos/" + params.slug
  ).then((response) => response.json());
  return <ToDo todo={todo} />;
};

export default Page;
