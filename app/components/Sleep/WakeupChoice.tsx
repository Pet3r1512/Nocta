import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "app/components/ui/drawer";
import { Button } from "../ui/button";

export default function WakeupChoice() {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg px-1.5 py-0.5">
        Choose
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerClose className="w-fit">
            <Button variant="link">{">>"}</Button>
          </DrawerClose>
          <DrawerTitle className="text-2xl font-bold text-primary">
            Alarm
          </DrawerTitle>
          <DrawerDescription>
            What time would you prefer to wake up?
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Confirm</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
