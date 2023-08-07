# How Much Water

Look, this is kind of a weird request, but hear me out. I want to make a _very_ thin fish tank to put on my wall (I say somebody on TikTok do it), and I need your help figuring out how large I can possibly make it. See, I've got these two sheets of plexiglass (they're big, don't worry about their size). I also have a bunch of these plastic bars that I could use (with a bunch of glue) to make the sides of my tank. The problem is... I'm really bad at geometry. Can you help me figure out how large of a fish tank I can make? No, of course it won't leak...

You are given a list of integers, where each value represents the height of a vertical bar that can be placed perpendicular to the x-axis and the index of each value represents it's position on the x-axis. Using this list, find the maximum amount of water that can be contained by any two bars together with the x-axis. For example, given the list `[1, 8, 2, 6, 2, 5, 4, 8, 3, 7]`, the maximum amount of water that can be contained is `49`, like so:


```
     [  1,    8,    2,    6,    5,    4,    8,    3,    7]

     |                                                      
 8 - |        #                             #               
     |        #                             #                 ___
 7 - |        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#~~~~~~~~~~~#      |
     |        #~~~~~~~~~~~~~~~~~~~~~~~~~~~~~#~~~~~~~~~~~#      |
 6 - |        #~~~~~#~~~~~~~~~~~~~~~~~~~~~~~#~~~~~~~~~~~#      |
     |        #~~~~~#~~~~~~~~~~~~~~~~~~~~~~~#~~~~~~~~~~~#      |
 5 - |        #~~~~~#~~~~~~~~~~~#~~~~~~~~~~~#~~~~~~~~~~~#      |
     |        #~~~~~#~~~~~~~~~~~#~~~~~~~~~~~#~~~~~~~~~~~#      |
 4 - |        #~~~~~#~~~~~~~~~~~#~~~~~#~~~~~#~~~~~~~~~~~#      7
     |        #~~~~~#~~~~~~~~~~~#~~~~~#~~~~~#~~~~~~~~~~~#      |
 3 - |        #~~~~~#~~~~~~~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#      |
     |        #~~~~~#~~~~~~~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#      |
 2 - |        #~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#      |
     |        #~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#      |
 1 - |  #     #~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#      |
     |  #     #~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#~~~~~#      |
 0 - |------------------------------------------------------  ___
        |     |     |     |     |     |     |     |     |
        0     1     2     3     4     5     6     7     8

              |                                         |
              |-------------------7---------------------|
              |                                         |
```

## Rules

- We're not tilting the fish tank, so only calculate the water value assuming the tank is perfectly level.
- Your input will always be a list containing at least two values.
- Why do the bars need to be placed in the order given? Because that's what they showed in the TikTok, okay?

## Examples

```
maximum_water([1, 8, 2, 6, 5, 4, 8, 3, 7]) -> 49
maximum_water([1, 2, 5, 5, 2, 1])          -> 5
maximum_water([1, 2, 2, 5, 5, 2, 2, 1])    -> 8
```

## Tackling This Challenge
1. Make sure you've got the required software on your machine: npm 7.9.0+ and a text editor.
2. If you haven't already, fork the CodingDojo repository ([INSTRUCTIONS](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo)).
3. Navigate to this directory and run `npm install` to initialize the project.
4. The challenge will be live-coded in our weekly Tuesday meetup in the `solution.js` file.
5. Run the tests to check your solution by navigating to this directory and running `./run-tests`.
6. The results of the live coding demo will be added to the GitHub repository as a mob solution. Please feel free to
tackle this challenge in your own way/language and submit your solution to the repo using [this solutions guide in our wiki](https://github.com/codeconnector/CodingDojo/wiki#solutions).

## Requirements

- npm 7.9.0+
