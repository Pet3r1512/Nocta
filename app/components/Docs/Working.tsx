export default function Working() {
  return (
    <div className="flex flex-col gap-y-2.5">
      <h3 className="text-xl lg:text-2xl font-semibold">
        How Does Nocta Work?
      </h3>
      <p>
        Our calculator takes your desired wake-up time and works backward in
        90-minute increments (the length of a typical sleep cycle), plus an
        additional 15 minutes to account for the average time it takes to fall
        asleep. This helps you plan when to go to bed to wake up feeling
        refreshed at your target time.
      </p>
    </div>
  );
}
