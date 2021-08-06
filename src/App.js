import React from 'react';
import image1  from "../src/assets/image1.jpeg"
import image2 from "../src/assets/image2.jpeg"
// import {Code} from "react-embed-code"
import { CopyBlock , dracula} from "react-code-blocks";

import './App.css';

function App() {

  const code1 = `
  Scanner scn = new Scanner(System.in);
      int n = scn.nextInt;
      int[] arr = new int[n];
      for(int i = 0; i &lt; n; i++){
         arr[i] = scn.nextInt;
      }
`;
const code2 =`Scanner scn = new Scanner(System.in);
    int n = scn.nextInt;
    int[] arr = new int[n];
    for(int i = 0; i &lt; n; i++){
       arr[i] = scn.nextInt;
    }`;

const code3 = `import java.io.*;
import java.util.*;
public class Main{
public static void main(String[] args) throws Exception {
    Scanner scn = new Scanner(System.in);
    int n = scn.nextInt;
    int[] arr = new int[n];
    for(int i = 0; i &lt; n; i++){
       arr[i] = scn.nextInt;
    }
    for(int i = 0; i &lt; arr.length; i++){
       for(int j = i; j &lt; arr.length; j++){
          for(int k = i; k &lt;= j; k++){
            System.out.print(arr[k] + &quot;\t&quot;);
          }
System.out.println();
       }
    }
 }
}`;


  return (
    <div className="App">

    <div className="main_content">

    <div className="header">
        <h1>Sub-arrays of an array</h1>
    </div>


    <div className="content">
          <p>
    <span style={{fontSize: "2rem",marginTop:"1rem" ,lineHeight:"2rem"}}>D</span>ear readers,
We hope that you are enjoying your coding journey!
Let&#39;s now move to the next problem, that is <b>‘Sub-arrays of an array’</b> of chapter <b>‘Array and
Functions’.</b> This is a bit of a different problem but an easy one. Before moving to the problem,
we ask you, what actually are subarrays of an array.<br></br> <br></br>
You might have studied about a subset of a set in your school. Well, like a subset, a sub-array is
an array of a length smaller or equal to the given array’s length, whose members are all
members of the given array. But unlike a sub-set, in a sub-array, the sequence should be
contiguous.
<br></br> <br></br>
Let’s jump to the problem.
<hr></hr>
<h3>Understanding the Problem:</h3>
In the question as it says, you are given an array of size &#39;n&#39; and n elements of the same array.
We are required to find and print all the subarrays of the given array.
So, the input part is easy. We can take input of an array code1aightforwardly. Then skip to the
crucial part, in which we will think about the solution of the problem.
Before moving to the solution part, make sure you try to solve it on your own. Like, Rob
Siltanen said,“People who are crazy enough to think they can change the world, are the ones
who do.”
You may also take help from the question video, where our team has particularly explained
what exactly is required to be done.
Now, we are ready to move to the solution part.
<h3>Moving on:</h3>
We are given an array of integers. We need to print all the possible subarrays of this array.
Now, a sub-array is a slice from the array which is contiguous (i.e., occupy consecutive
positions) and inherently maintains the order of elements. For example, the sub-arrays of the
array {1, 2, 3} are {1}, {1, 2}, {1, 2, 3}, {2}, {2, 3}, and {3}. We need to print these sub-arrays on
different lines and also there should be a tab space in between the printed sub-array
sequences, like shown</p>


<img  src={image1} style={{width:"60%"}}/>

<p>
These above lines of code help to take required
input that is, number n and corresponding n elements for input array.
I hope that you are with us till here. Just show a bit more patience and we will soon look at the
part where we will finally solve this problem.
So, next comes HOW?
For solving this problem, we make use of three loops; two loops for traversing the array and
one for printing the elements of the array.
</p>




<CopyBlock
      text={code1}
      language={"java"}
      showLineNumbers={3}
      theme={dracula}
      codeBlock
    />

<p>
These above lines of code help to take required
input that is, number n and corresponding n elements for input array.
I hope that you are with us till here. Just show a bit more patience and we will soon look at the
part where we will finally solve this problem.
So, next comes <b>HOW? </b><br></br> <br></br>
For solving this problem, we make use of three loops; two loops for traversing the array and
one for printing the elements of the array.
</p>



<CopyBlock
      text={code2}
      language={"java"}
      showLineNumbers={3}
      theme={dracula}
      codeBlock
    />

<p>
In the diagram below, you can see dry run of this code for an array arr of length 3 and a, b, c as
its element that is for an input of: 3 a b c
Before jumping to the diagram, I advise you to try it on your own and write the desired output
for the code. And then crosscheck it with the below output.
<br></br> <br></br>
Did you get the correct output? Great. If not, don’t feel bad just continue reading.
<br></br> <br></br>
As the value of i is initialized to 0, therefore j and k also get initialized to 0. And on entering the
third loop, arr[0] which is “a” gets printed. K gets incremented with one. K doesn’t satisfy the
condition, so loop breaks.
<br></br> <br></br>
Now j gets incremented with one, k again gets initialized to 0. Inside k loop, which runs two
time that is for k = 0 and k = 1, “a b” gets printed, this time, satisfying the conditions.
<br></br> <br></br>
Control now comes to the j loop, j gets incremented with one. J now becomes 2. K again gets
initialized to 0. Inside the k loop, which runs three times, that is for k = 0, k = 1 and k = 2, “a
b c” gets printed, this time, satisfying the conditions. Control now comes to the i loop.
Give it a try and similarly run for i = 1 and i=2. You are advised to watch [01:38-03:53] portion of
the video for better understanding of the code.

</p>

<img width="80%" src={image2} />

<hr></hr>
<h2>Complete code:</h2>





<CopyBlock
      text={code3}
      language={"java"}
      showLineNumbers={3}
      theme={dracula}
      codeBlock
    />

    <p>

    

    So reader, we hope you understood the solution. Don&#39;t worry if you were not able to solve this problem
by yourself at first, just keep practicing. Opportunities are endless.
However, if you still face any difficulties in the solution for the problem, you may visit the complete
solution video.
<br></br>
<div className="video_container">
<iframe style={{width:"100%"  , height:"100%"}} class="card-content no-padding" src="https://www.youtube.com/embed/TPi2XUXn9TA?rel=0&amp;loop=1&amp;playlist=TPi2XUXn9TA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
</div>

<b>We will see</b> you again in the next problem. Till then, keep learning.
<br></br> <br></br>
Happy coding!
Contributed by: Nikita Aggarwal

    </p>
    </div>

    </div>
    </div>
  );
}

export default App;
