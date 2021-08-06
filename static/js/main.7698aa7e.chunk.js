(this.webpackJsonptemplate_article=this.webpackJsonptemplate_article||[]).push([[0],{27:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(13),a=n.n(i),s=(n(27),n.p+"static/media/image1.47a6c968.jpeg"),l=n.p+"static/media/image2.95ccfaf6.jpeg",c=n(5),h=(n(35),n(1));var d=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("div",{className:"main_content",children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("h1",{children:"Sub-arrays of an array"})}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("span",{style:{fontSize:"2rem",marginTop:"1rem",lineHeight:"2rem"},children:"D"}),"ear readers, We hope that you are enjoying your coding journey! Let's now move to the next problem, that is ",Object(h.jsx)("b",{children:"\u2018Sub-arrays of an array\u2019"})," of chapter ",Object(h.jsx)("b",{children:"\u2018Array and Functions\u2019."})," This is a bit of a different problem but an easy one. Before moving to the problem, we ask you, what actually are subarrays of an array.",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"You might have studied about a subset of a set in your school. Well, like a subset, a sub-array is an array of a length smaller or equal to the given array\u2019s length, whose members are all members of the given array. But unlike a sub-set, in a sub-array, the sequence should be contiguous.",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"Let\u2019s jump to the problem.",Object(h.jsx)("hr",{}),Object(h.jsx)("h3",{children:"Understanding the Problem:"}),"In the question as it says, you are given an array of size 'n' and n elements of the same array. We are required to find and print all the subarrays of the given array. So, the input part is easy. We can take input of an array code1aightforwardly. Then skip to the crucial part, in which we will think about the solution of the problem. Before moving to the solution part, make sure you try to solve it on your own. Like, Rob Siltanen said,\u201cPeople who are crazy enough to think they can change the world, are the ones who do.\u201d You may also take help from the question video, where our team has particularly explained what exactly is required to be done. Now, we are ready to move to the solution part.",Object(h.jsx)("h3",{children:"Moving on:"}),"We are given an array of integers. We need to print all the possible subarrays of this array. Now, a sub-array is a slice from the array which is contiguous (i.e., occupy consecutive positions) and inherently maintains the order of elements. For example, the sub-arrays of the array ",3," are ",1,", ",2,", ",3,", ",2,", ",3,", and ",3,". We need to print these sub-arrays on different lines and also there should be a tab space in between the printed sub-array sequences, like shown"]}),Object(h.jsx)("img",{src:s,style:{width:"60%"}}),Object(h.jsx)("p",{children:"These above lines of code help to take required input that is, number n and corresponding n elements for input array. I hope that you are with us till here. Just show a bit more patience and we will soon look at the part where we will finally solve this problem. So, next comes HOW? For solving this problem, we make use of three loops; two loops for traversing the array and one for printing the elements of the array."}),Object(h.jsx)(c.a,{text:"\n  Scanner scn\xa0=\xa0new\xa0Scanner(System.in);\n  \xa0\xa0\xa0\xa0int\xa0n\xa0=\xa0scn.nextInt;\n  \xa0\xa0\xa0\xa0int[]\xa0arr\xa0=\xa0new\xa0int[n];\n  \xa0\xa0\xa0\xa0for(int\xa0i\xa0=\xa00;\xa0i\xa0&lt;\xa0n;\xa0i++){\n  \xa0\xa0\xa0\xa0\xa0\xa0\xa0arr[i]\xa0=\xa0scn.nextInt;\n  \xa0\xa0\xa0\xa0}\n",language:"java",showLineNumbers:3,theme:c.b,codeBlock:!0}),Object(h.jsxs)("p",{children:["These above lines of code help to take required input that is, number n and corresponding n elements for input array. I hope that you are with us till here. Just show a bit more patience and we will soon look at the part where we will finally solve this problem. So, next comes ",Object(h.jsx)("b",{children:"HOW? "}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"For solving this problem, we make use of three loops; two loops for traversing the array and one for printing the elements of the array."]}),Object(h.jsx)(c.a,{text:"Scanner scn\xa0=\xa0new\xa0Scanner(System.in);\n\xa0\xa0\xa0\xa0int\xa0n\xa0=\xa0scn.nextInt;\n\xa0\xa0\xa0\xa0int[]\xa0arr\xa0=\xa0new\xa0int[n];\n\xa0\xa0\xa0\xa0for(int\xa0i\xa0=\xa00;\xa0i\xa0&lt;\xa0n;\xa0i++){\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0arr[i]\xa0=\xa0scn.nextInt;\n\xa0\xa0\xa0\xa0}",language:"java",showLineNumbers:3,theme:c.b,codeBlock:!0}),Object(h.jsxs)("p",{children:["In the diagram below, you can see dry run of this code for an array arr of length 3 and a, b, c as its element that is for an input of: 3 a b c Before jumping to the diagram, I advise you to try it on your own and write the desired output for the code. And then crosscheck it with the below output.",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"Did you get the correct output? Great. If not, don\u2019t feel bad just continue reading.",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"As the value of i is initialized to 0, therefore j and k also get initialized to 0. And on entering the third loop, arr[0] which is \u201ca\u201d gets printed. K gets incremented with one. K doesn\u2019t satisfy the condition, so loop breaks.",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"Now j gets incremented with one, k again gets initialized to 0. Inside k loop, which runs two time that is for k = 0 and k = 1, \u201ca b\u201d gets printed, this time, satisfying the conditions.",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"Control now comes to the j loop, j gets incremented with one. J now becomes 2. K again gets initialized to 0. Inside the k loop, which runs three times, that is for k = 0, k = 1 and k = 2, \u201ca b c\u201d gets printed, this time, satisfying the conditions. Control now comes to the i loop. Give it a try and similarly run for i = 1 and i=2. You are advised to watch [01:38-03:53] portion of the video for better understanding of the code."]}),Object(h.jsx)("img",{width:"80%",src:l}),Object(h.jsx)("hr",{}),Object(h.jsx)("h2",{children:"Complete code:"}),Object(h.jsx)(c.a,{text:"import\xa0java.io.*;\nimport\xa0java.util.*;\npublic\xa0class\xa0Main{\npublic\xa0static\xa0void\xa0main(String[]\xa0args)\xa0throws\xa0Exception\xa0{\n\xa0\xa0\xa0\xa0Scanner scn\xa0=\xa0new\xa0Scanner(System.in);\n\xa0\xa0\xa0\xa0int\xa0n\xa0=\xa0scn.nextInt;\n\xa0\xa0\xa0\xa0int[]\xa0arr\xa0=\xa0new\xa0int[n];\n\xa0\xa0\xa0\xa0for(int\xa0i\xa0=\xa00;\xa0i\xa0&lt;\xa0n;\xa0i++){\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0arr[i]\xa0=\xa0scn.nextInt;\n\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0for(int\xa0i\xa0=\xa00;\xa0i\xa0&lt;\xa0arr.length;\xa0i++){\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0for(int\xa0j\xa0=\xa0i;\xa0j\xa0&lt;\xa0arr.length;\xa0j++){\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0for(int\xa0k\xa0=\xa0i;\xa0k\xa0&lt;=\xa0j;\xa0k++){\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0System.out.print(arr[k]\xa0+\xa0&quot;\t&quot;);\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\nSystem.out.println();\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0}\n\xa0\xa0\xa0\xa0}\n\xa0}\n}",language:"java",showLineNumbers:3,theme:c.b,codeBlock:!0}),Object(h.jsxs)("p",{children:["So reader, we hope you understood the solution. Don't worry if you were not able to solve this problem by yourself at first, just keep practicing. Opportunities are endless. However, if you still face any difficulties in the solution for the problem, you may visit the complete solution video.",Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"video_container",children:Object(h.jsx)("iframe",{style:{width:"100%",height:"100%"},class:"card-content no-padding",src:"https://www.youtube.com/embed/TPi2XUXn9TA?rel=0&loop=1&playlist=TPi2XUXn9TA",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""})}),Object(h.jsx)("b",{children:"We will see"})," you again in the next problem. Till then, keep learning.",Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),"Happy coding! Contributed by: Nikita Aggarwal"]})]})]})})},b=function(e){e&&e instanceof Function&&n.e(155).then(n.bind(null,224)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),o(e),r(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root")),b()}},[[37,152,154]]]);
//# sourceMappingURL=main.7698aa7e.chunk.js.map