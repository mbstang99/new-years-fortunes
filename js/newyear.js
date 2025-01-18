//Mieka Stang
//5/12/20
//(c) Public Access

//function get fortune with math.random

function getFortune (str){
var value = Math.floor(Math.random() * 58);;
   if (value == 0){
    return "You will go to India and see my grandmother.";
  }
  else if (value == 1){
    return "You will go to LEGOLAND and ride the rides.";
  }
  else if (value == 2){
    return "You will go to Target and get infinity toys.";
  }
  else if (value == 3){
    return "You will make magic potions with your parents.";
  }
  else if (value == 4){
    return "You will go to Disneyland and play.";
  }
  else if (value == 5){
    return "You will run in the house and put on goggles.";
  }
   else if (value == 6){
      return "You will go to Fairyland and go down the big dragon slide.";
    }
    else if (value == 7){
      return "You will go to Candyland and eat a little bit of candy.";
    }
    else if (value == 8){
      return "You will go skiing and dig for candy in the snow.";
    }
    else if (value == 9){
      return "You will go on a helicopter to the snow.";
    }
    else if (value == 10){
      return "You will jump on a bouncy house until it goes flat.";
    }
    else if (value == 11){
      return "Your parents will put glow in the dark nail polish on you.";
    }
    else if (value == 12){
      return "You will ski down a mountain.";
    }
    else if (value == 13){
      return "You will ride a unicorn up a hill and sing a very beautiful song.";
    }
    else if (value == 14){
      return "You will sled on your tummy with sunglasses on.";
    }
    else if (value == 15){
      return "You will look in a hat and find candy.";
    }
    else if (value == 16){
      return "You will drive a car when you are 5.";
    }
    else if (value == 17){
      return "You will sled on a loop to loop track.";
    }
    else if (value == 18){
      return "You will find dino fossils.";
    }
    else if (value == 19){
      return "You will go in a rocket ship to the moon to get some cheese.";
    }
    else if (value == 20){
      return "You will go to a snowy mountain and use an umbrella to slide down.";
    }
    else if (value == 21){
      return "You will go to Las Vegas with your brother.";
    }
    else if (value == 22){
      return "You will climb up a mountain and find some gold.";
    }
    else if (value == 23){
      return "You will get cute shoes.";
    }
    else if (value == 24){
      return "You will sled down a hill and go back up again.";
    }
    else if (value == 25){
      return "You will take an elevator up to a roof and then sled down.";
    }
    else if (value == 26){
      return "You will go to Reno at a hotel and go to a magic show with your brother.";
    }
    else if (value == 27){
      return "You will climb a mountain and get a pot of gold because a leprechaun lived up there and the leprechaun said “Where’s my gold!?”";
    }
    else if (value == 28){
      return "You will go to Disneyland, eat some food and play on the rides.";
    }
    else if (value == 29){
      return "You will go on a huge roller coaster with my sister.";
    }
    else if (value == 30){
      return "You will find dino fossils underground with prehistoric life.";
    }
    else if (value == 31){
      return "You will dig underground and find some gold.";
    }
    else if (value == 32){
      return "You will rescue escaped animals from the zoo.";
    }
    else if (value == 33){
      return "The faster you close your eyes the faster it will be morning.";
    }
    else if (value == 34){
      return "You will go to Disneyland when you are 7 and ride all the rides.";
    }
    else if (value == 35){
      return "You will eat a little bit of candy before dinner.";
    }
    else if (value == 36){
      return "You will slide down palm tree water slides.";
    }
    else if (value == 37){
      return "You will see your nanny again.";
    }
    else if (value == 38){
      return "You will go to Chuck E. Cheese and play the shooting spider game.";
    }
    else if (value == 39){
      return "You will go to Palm Springs and sit on a water slide and an octopus will grab your arm.";
    }
    else if (value == 40){
      return "You will go to Fairyland, eat candy and play.";
    }
    else if (value == 41){
      return "You will go to the zoo in Canada, see flamingos and pretend to be a flamingo.";
    }
    else if (value == 42){
      return "You will be a parent.";
    }
    else if (value == 43){
      return "You will listen to relaxing music.";
    }
    else if (value == 44){
      return "You will catch a dog.";
    }
    else if (value == 45){
      return "On Valentine’s Day you will get lots of cards.";
    }
    else if (value == 46){
      return "You will go to LEGOLAND and play the video games.";
    }
    else if (value == 47){
      return "You will ride a unicorn to the top of a mountain.";
    }
    else if (value == 48){
      return "You will ride a horse and get on an airplane before it leaves.";
    }
    else if (value == 49){
      return "You will get a thousand cookies by magic.";
    }
    else if (value == 50){
      return "You will have a billion and a trillion thousand pieces of treasure and cookies.";
    }
    else if (value == 51){
      return "You will go into the biggest cave ever and pull out a thousand diamonds.";
    }
    else if (value == 52){
      return "At every school you will have a nice time.";
    }
    else if (value == 53){
      return "You will learn to be a king (or queen).";
    }
    else if (value == 54){
      return "You will drive to Fairyland on go on rides.";
    }
    else if (value == 55){
      return "You will go to Hawaii and play in a waterfall.";
    }
    else if (value == 56){
      return "You will do a wheelie on a motorcycle.";
    }
    else if (value == 57){
      return "You will see a monster truck climb a building.";
    }
    else {
      return "You will learn to speak mouse.";
    }
}

//On button run function
var button = document.getElementById("button");
  button.addEventListener("click",function (){
    var fortune = getFortune();
  button.addEventListener("click", console.log("working"));
//output
  var outputEl = document.getElementById ("output");
    outputEl.innerHTML = fortune
    outputEl.style.fontFamily = "Comic Sans MS,Arial,sans-serif"
    outputEl.style.color = " #dfa727";
  outputEl.style.backgroundImage = "url('banner.png')";
  outputEl.style.backgroundPosition = "center";
  outputEl.style.backgroundRepeat = "no-repeat";
  outputEl.style.backgroundSize = "cover";
  outputEl.style.padding = "20px 160px";
});
