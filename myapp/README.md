STEPS TO SETUP PROJECT

1 - install npm using command

npm install

2 - After installing npm run command 

npm start

In terminal it gives you message "Listening on port 3000"

3 - First api is to convert words into vector

http://localhost:3000/convertW2vector

You have to run this api in browser it gives you response link this
"Words are converted into vector"

There is one folder named as files in which words file is "words.txt"
Another file which gives vectors of words is "vecWords.txt"

4 - Second Api is to search keywords

http://localhost:3000/searchWords/water/10

In this water is dynamic, you can pass the word you want to test.
10 is dynamic, instead of 10 you can pass the count value, whatever you want to pass.

You have to run this api in browser it gives you response link this
It will give you response like this

[{"word":"thousand","dist":0.9999873202851901},
{"word":"noble","dist":0.9999871620066376},
{"word":"why","dist":0.9999870808225964},
{"word":"Your","dist":0.9999865515986983},
{"word":"almost","dist":0.9999862540519247},
{"word":"death,","dist":0.9999861922273676},
{"word":"grief","dist":0.9999861775886806},
{"word":"poor","dist":0.9999861232829942},
{"word":"In","dist":0.9999860986729449},
{"word":"Did","dist":0.9999860936771459}]