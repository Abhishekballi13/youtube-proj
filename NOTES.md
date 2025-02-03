# how we are making hamburger functionality such that on clicking the ham button we are opening and closing the sidebar
- we will not use state here we are thinking our application as large scale application
- which has a redux store
- when you click on hamburger menu an action is dispatched which calls a reducer function which modifies the slice of our redux store
- our sidebar has subscribed to the redux store and it automagically updates

# how routing is working in our app
- wherever we will provide our app router our app will be rendered there
- so we provide app router under head ,such that when we enter slash our body component loads
- now where will the children go,chidlren will go where the oultet is

# url search params

# Debouncing
if we are typing slow
the difference between two keypress is very high suppose 200ms
if we are typing very fast 
the differnce between two keypress is very low lets day 30ms

performance : iphone pro max = 14 letter * 1000 = 14000
with debouncing = 3 API calls * 1000 = 3000

Debouncing with 200 ms
- if difference between 2key strokes is <200ms - DECLINE API CALL
- >200ms make an API CALL

- how we are doing it in our code
  - suppose key - i is pressed then -> render the component -> useEffect() called -> start timer make api call after 200 ms
 -  clearTImeout will work when component unmounts,so when we re render the component this function works before it and clears the timer
 - lets say key - p is pressed then -> destroy the compoent(useEffect return method) -> re render the component -> useEffect() -> start     -- timer => make api call after 200ms
 - so if a keystroke is done before 200 ms the timer will be cleared up and a new timer set up which counts 200 ms

- when you refresh page store automatically refreshen up
# we have done caching of our search results

# we will do pagination
- live chat >>> infinite scroll >>> pagination
- challenges
 - data layer, get data live
 - ui layer, update the ui

- data(live), web sockets ,bi directional,as soon as you start application web socket connection (handshake) is established and you can send data from both sides,there is no regular interval (time critical application are built using stock trading apps,stock market,as it needs to be very real time)
(in live chat applications,web sockets are used)

- api polling, data flows from server to ui and after an interval (exmaple is gmail,as gmail does not need to be very real time)
- (crickbuzz,we need api polling as event outcome will come after bowl is bowled,so api call made after 25 sec ,api polling is best for this)

# demo and demo2 components have notes about useRef,useMemo,useCallback