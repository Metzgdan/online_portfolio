let firstQuestion = function(){
    let firstAnswer = document.getElementById("firstAnswer");
    let secondAnswer = document.getElementById("secondAnswer");
    

    if(firstAnswer.checked){
      document.getElementById("output").innerHTML = "As soon as you select begin a calming tone plays as a message pops up on the screen saying, Congratulations! You have been selected for the beta testing of the A.R.A.E test. Please note this is an extremely early render of the test. Please take your time on the test, some questions don't have a true answer. As a final note. This test use's sounds and images to make the test feel more real. Do you wish to continue?";

    }else if(secondAnswer.checked){
      document.getElementById("output").innerHTML = "You take off the helmet and lose your job. On the way out of the complex you're killed for knowing to much.";
    }
    
};
let secondQuestion = function(){
    let thirdAnswer = document.getElementById("thirdAnswer");
    let fourthAnswer = document.getElementById("fourthAnswer");

    if(thirdAnswer.checked){
      document.getElementById("output2").innerHTML = "You don't question the test. You advance to the first question. You are standing infront of a nuclear device the timer is at 30 secs. Your mother lives in the city along with 1.2 million people. Do you try t01o disarm the bomb with the little training or escape to the preplaned escape root. It will take approximately 29 secs to get to the evac point? What do you do?"
    
    }else if(fourthAnswer.checked){
      document.getElementById("output2").innerHTML = "As you go to take off the VR helmet a violent shock is felt. You fall to the ground as the rest of the electricity flows thourgh your system. A message pops up saying, Do NOT try and take the helmet. If you do so again will be shocked and your heart will stop. Do you wish to continue? Before you can answer it moves you to the next question. You are standing infront of a nuclear device the timer is at 30 secs. Your mother *(^&% in the ^#%@ as well as 1.2 *&^lion people. Do you try t01o disarm the bomb with the little training or escape to the prrREplanned escape root. It will take approximately 29 secs to get to the evac point? What do you do? ";
    }

};
let thirdQuestion = function(){
    let fifthAnswer = document.getElementById("fifthAnswer");
    let sixthAnswer = document.getElementById("sixthAnswer");

    if(fifthAnswer.checked){
      document.getElementById("output3").innerHTML = "As you fiddle with the wires, the ticking sound of the clock seems to tick faster as sweat drips down your brow. Trying to remember what the little you know about bombs, let alone nuclear ones. The bomb contiunes to tick. It burns into your brain as the timer hits 5 seconds the VR helmet plays a slideshow of your personal family photos. When the bomb hit one, the flurry of photos disappears as your welcomed with a mushroom cloud. Desolated buildings, people not close enough to the blast puking from radiation. You feel your heart stop as all these images are shown. What do you do?"
    
    
    }else if(sixthAnswer.checked){
      document.getElementById("output3").innerHTML = "As you head to the ladder out of the building you hear the roaring of a helicopter engine as you make your way up the ladder and out of the bunker like structure you trip on a tuft of grass. As your head hits the ground you feel a rumble. As you get up to run an image of a mushroom cloud is shown. Desolated buildings, people not close enough to the blast puking from radiation. You feel your heart stop as all these images are shown. What do you do?"
    }
};
let fourthQuestion = function(){
  let seventhAnswer = document.getElementById("seventhAnswer");
  let eightAnswer = document.getElementById("eightAnswer");

  if(seventhAnswer.checked){
    document.getElementById("output4").innerHTML = "Upon seeing the disturbing images, you throw your hands onto the VR helmet. Which sends an immediate and strong shock is felt stopping your heart. As you feel your heart beat its last beat you fall to the ground. Before your eyes shut you see a screen saying, Thank you for participating in the A.R.A.E. beta test. Then you see a man take off the helmet. He says, Maybe next time Mr. Ringer. Then your eyes shut. Game Over Refresh to Restart"
  }else if(eightAnswer.checked){
    document.getElementById("output4").innerHTML = "You don't question the test. A soft buzzing sound is heard as the screens shift and as new sounds emerge. Then text. You stand in the middle of a icy forest. Deep in enemy territory you stand. When you look down however a man, who is your partner, has been shot and you don't know where from. Though your partner is not dead he is not going to be moving anytime soon. Do you: Try to save him and leave the forest or leave him behind and escape the forest?"
  }
};
let fifthQuestion = function(){
  let ninthAnswer = document.getElementById("ninthAnswer");
  let tenthAnswer = document.getElementById("tenthAnswer");


  if(ninthAnswer.checked){
    document.getElementById("output5").innerHTML = "As you get up to run your partner screams in agony trying to get you to stay. You shrug it off not feeling anything as he calls your name. After you begin your sprint thourgh the forest you can still hear him call as he screams for you to come back. But, you are strong you don't let the failure slow you down you think, He should have been better. After a slight pause a message appears. Good job! Are you ready to proceed?"
  }else if(tenthAnswer.checked){
    document.getElementById("output5").innerHTML = "As reach down to pick him up bullets begin to whiz past ripping up dirt and tearing off tree bark. But you still try to pick him up. As he gets to his feet a bullet rips thourgh his chest. As you feel his body turn lifeless another bullet pass's thourgh his head sending blood all over the surronding area. Shortly after you are also shot. As you see the blood trickle Think about yourself more often. Next question?"
  }
};
let sixthQuestion = function(){
  let eleventhAnswer = document.getElementById("eleventhAnswer");
  let twelfthAnswer = document.getElementById("twelfthAnswer");

  if(eleventhAnswer.checked){
    document.getElementById("output6").innerHTML = "You feel a rage come into you. You demand answers. Why could I not save my partner? Why couldn't I defuse the bomb? What is with the questions why are they-, before finishing your statement a male voice is heard from a loud speaker. Mr. Ringer i'm asking you to please be quiet and finish the test. The voice was unfamiliar yet very familiar and why did he call me Mr. Ringer? At least tell me who you are?you shout begging for an answer. I can't do that and you know that. Continue the test. Before you can do anything else the next screen appears. So you silence yourself and read the next question. You hear the quiet whinning a plane engine as you soar thourgh the sky their are only 2 passengers on this flight you and a pregnant women. A few moments later a choking sound can be heared outside the plane as you see a engine catch fire. There is only one spare parachute. You have to jump. There is no other way Mr. Ringer. What do you do?"
  }else if(twelfthAnswer.checked){
    document.getElementById("output6").innerHTML = "You hear the quiet whinning a plane engine as you soar thourgh the sky their are only 2 passengers on this flight you and a pregnant women. A few moments later a choking sound can be heared outside the plane as you see a engine catch fire. There is only one spare parachute. You have to jump. What do you do?"
  }
  
};
let seventhQuestion = function(){
  let thirteenthAnswer = document.getElementById("thirteenthAnswer");
  let fourteenthAnswer =  document.getElementById("fourteenthAnswer");



  if(thirteenthAnswer.checked){
    document.getElementById("output7").innerHTML = "You hand the parachute over to the women. You hear the intercomm again, Bad call Mr. Ringer. Then you feel a sharp pain run thourgh your stomach. You look down at your VR body but their is no bullet hole. Then the screen presents a message saying, You may remove the mask. Using your remaining energy you pull off the VR helmet and look down to see the red spot on your shirt growing larger the longer you stare at it. You feel the rest of your strength leave as your knees buckle and you collapse to the floor. You see a man walk out unto the test room floor. He comes up next to you and says, Bring out the next generation and clean up Mr. Ringer here. As your dragged out by a lab hand you hear the man say. Mr. Ringer welcome to the test chamber. Then your eyes shut. Game Over Refresh to replay"
  }else if(fourteenthAnswer.checked){
    document.getElementById("output7").innerHTML = "You take the parachute from the closet and you tell the women there is another one in the closet. As you are about to open the airlock you hear a voice saying. Good job Mr. Ringer. As you jump out of the plane you hear the women scream at you as you jump out the door. Once you pull the shute the screen fades to black. A new message appears Congratulations! You have finished the A.R.A.E. test. You may now remove the VR Helmet. As you remove the VR Helmet you see a plain white room with high walls and two doors to the side of the room. You smiled as you had made it thourgh the scary test. Mr. Ringer congratulations, on finishing the test you are the first generation to complete the test. How do you answer?"
  }
};
let eighthQuestion = function(){
  let fifteenthAnswer = document.getElementById("fifteenthAnswer");
  let sixteenthAnswer = document.getElementById("sixteenthAnswer");

  if(fifteenthAnswer.checked){
    document.getElementById("output8").innerHTML = "You don't need to know that information, but what you do need to know is you did a fantastic job and all of us at A.R.A.E. Are very proud of you and your generation. You stand still feeling a sense of pride yet and emptyness still resides in your heart. You say, I don't remember anything outside of this test why is that do I have a-, you are cut off by the man in the grey suit. Mr. Ringer, you should not ponder the thought of what was left behind, for you are here now. Do you try to remember or let it fall into the sand's of time?"
  }else if(sixteenthAnswer.checked){
    document.getElementById("output8").innerHTML = "Mr. Ringer you are that as a code name a name that means much for this organization. For pleasantries my name is Mr. Grey and me and my associates are very proud of you. So don't feel empty for you are full of potenial. His last sentence seems to float around in your head before it set's in. You ask, What do you mean feel empty? it was in fact true and odd feeling of loose yet no memory of it you see Mr. Grey's face turn from a bright smile to a face of sterness. What do you do Remember, or leave it to the sands of time?"
  }
};
let ninthQuestion = function(){
  let seventeenthAnswer = document.getElementById("seventeenthAnswer");
  let eighteenthAnswer = document.getElementById("eighteenthAnswer");


  if(seventeenthAnswer.checked){
    document.getElementById("output9").innerHTML = "You close your eye's hearing Mr. Grey begin to yell at you. You begin to remember feeling a senseation of sorrow flood thourgh you as remember terrible things and how the orginzation treated you. The memories of hundreds of people who looked just like you and who were called the same name, Mr. Ringer. You open your eyes to see the sterness turn to outrage as he pulls a gun out of his pocket. What do you do"
  }else if(eighteenthAnswer.checked){
    document.getElementById("output9").innerHTML = "You push aside the empty feeling not letting it get to you the seeming endless curiosity buring inside yet you do not give in. You think to yourself, Maybe next time Mr. Ringer. Game Over, Refresh to replay."
    
  }
};
let tenthQuestion = function(){
  let ninteenthAnswer = document.getElementById("ninteenthAnswer");
  let twentiethAnswer = document.getElementById("twentiethAnswer");

  if(ninteenthAnswer.checked){
    document.getElementById("output10").innerHTML = "You don't hesitate. You sprint for the door to find it locked you hear Mr. Grey behind you, It's a pity Mr. Ringer, you were the best. Then everything goes as you take a bullet to the head. Game Over, Refresh to play again"
  }else if(twentiethAnswer.checked){
    document.getElementById("output10").innerHTML = "You jump on top of him as he hits the ground something pops out of his pocket. A key you grab the key and run to the door. The door unlocks and you pass thourgh followed by the sound of a ricochet as he shoots at your back. You continue to run down the spanning hallway where you see another door hoping it is unlocked you bash into the door making it swing open. Your heart drops. In the room are thousands of test chamber's hung up a wall that rivaled the heights of the himalayans. In the tubes where humanoid figures that seem to be growing from there teens to an adult right infront of your. Inside the tubes however was the true horror. Each one looked just like you. Then you passed out. When you begin to wake up you are being dragged on the floor you have no motor function. Mr. Grey is walking next to your body as it's dragged down the hall. Mr. Ringer, Why must you be so remanisent just forget what you where so long ago and believe in the new you. As he finished his statement they reach a door saying Ringer Removal Room. Inside was a stack of other Ringers. You are thrown amongst the pile. Then they slam the door with Mr. Grey saying. Maybe next time Mr. Ringer."
  }
};