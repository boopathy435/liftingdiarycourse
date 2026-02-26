"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const MOCK_WORKOUTS = [
  {
    id: "1",
    name: "Bench Press",
    sets: [
      { reps: 10, weight: 60 },
      { reps: 8, weight: 70 },
      { reps: 6, weight: 80 },
    ],
  },
  {
    id: "2",
    name: "Squat",
    sets: [
      { reps: 10, weight: 80 },
      { reps: 8, weight: 100 },
      { reps: 6, weight: 110 },
    ],
  },
  {
    id: "3",
    name: "Deadlift",
    sets: [
      { reps: 5, weight: 100 },
      { reps: 5, weight: 120 },
      { reps: 3, weight: 140 },
    ],
  },
];

export default function DashboardPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-[240px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {format(date, "do MMM yyyy")}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(day) => day && setDate(day)}
            initialFocus
          />
        </PopoverContent>
      </Popover>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Workouts</h2>

        {MOCK_WORKOUTS.length === 0 ? (
          <p className="text-muted-foreground">
            No workouts logged for this date.
          </p>
        ) : (
          <div className="space-y-4">
            {MOCK_WORKOUTS.map((workout) => (
              <Card key={workout.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Dumbbell className="h-5 w-5" />
                    {workout.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-muted-foreground border-b">
                        <th className="pb-2 text-left font-medium">Set</th>
                        <th className="pb-2 text-left font-medium">Reps</th>
                        <th className="pb-2 text-left font-medium">
                          Weight (kg)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {workout.sets.map((set, i) => (
                        <tr key={i} className="border-b last:border-0">
                          <td className="py-2">{i + 1}</td>
                          <td className="py-2">{set.reps}</td>
                          <td className="py-2">{set.weight}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
