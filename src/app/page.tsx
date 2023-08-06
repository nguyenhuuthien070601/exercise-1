import Button from "@/components/button/Button";
import Avatar from "@/components/avatar/Avatar";
import laptop from "../../public/laptop.png";
export default function Home() {
  return (
    <>
      <Button title="Frontend Development" variant="primary" size="sm"></Button>
      <Button
        title="Frontend Development"
        variant="secondary"
        size="md"
      ></Button>
      <Button title="Frontend Development" variant="danger" size="lg"></Button>
      <Button
        title="Frontend Development"
        variant="pink"
        size="xl"
        icon="heart"
      ></Button>
      <Button
        title="Frontend Development"
        variant="primary"
        isLoading={true}
      ></Button>
      <Avatar src={laptop}></Avatar>
      <Avatar title="thien"></Avatar>
      <Avatar></Avatar>
    </>
  );
}
