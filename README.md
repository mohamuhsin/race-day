# Race-Day
React Student's annual race is just around the corner! This year, we have a lot of participants. You have been hired to write a program that will register runners for the race and give them instructions on race day.

Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time-based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.

All others receive a number below 1000.

Start time:

Adult registrants run at 9:30 am or 11:00 am.

Early adults run at 9:30 am.

Late adults run at 11:00 am.

Youth registrants run at 12:30 pm (regardless of registration).

But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.

# Tasks

#1 Race numbers are assigned randomly. We’ve provided the necessary code below:

let raceNumber = Math.floor(Math.random() * 1000);

#2 Create a variable that indicates whether a runner registered early or not.

Set it equal to a Boolean value. You’ll change this later as you test different runner conditions.

#3 Create a variable for the runner’s age and set it equal to a number.

You’ll change this later as you test different runner conditions.

#4 Create a control flow statement that checks whether the runner is an adult AND registered early.

Add 1000 to their raceNumber if this is true.
