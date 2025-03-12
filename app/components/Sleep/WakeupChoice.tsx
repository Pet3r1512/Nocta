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
import AnimatedList from "../ui/animatedList";

const HOURS = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);

const MINUTES = Array.from({ length: 60 }, (_, i) =>
  i.toString().padStart(2, "0")
);

export default function WakeupChoice({ time }: { time: string }) {
  return (
    <Drawer direction="right">
      <DrawerTrigger className="bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg px-1.5 py-0.5">
        Choose
      </DrawerTrigger>
      <DrawerContent className="dark:bg-black bg-white !w-[100vw]">
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
        <section className="flex ">
          <AnimatedList
            items={HOURS}
            onItemSelect={(item, index) =>
              console.log(item.padStart(2, "0"), index)
            }
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={false}
            initialSelectedIndex={parseInt(time.split(":")[0], 10)}
          />
          <AnimatedList
            items={MINUTES}
            onItemSelect={(item, index) =>
              console.log(item.padStart(2, "0"), index)
            }
            showGradients={true}
            enableArrowNavigation={true}
            displayScrollbar={false}
            initialSelectedIndex={parseInt(time.split(":")[1], 10)}
          />
        </section>
        <DrawerFooter>
          <Button>Confirm</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
